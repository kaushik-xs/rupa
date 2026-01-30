import * as React from 'react';
import { ChevronDown, ChevronUp, MoreHorizontal } from 'lucide-react';
import { cn } from '../../utils/cn';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../Table/Table';
import { Button } from '../Button/Button';
import { Checkbox } from '../Checkbox/Checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../DropdownMenu/DropdownMenu';
import { Input } from '../Input/Input';
import { Select } from '../Select/Select';
import { renderCellFormat } from './cellFormats';
import { getCellRenderers } from './cellRendererRegistry';
import type {
  DataTableColumn,
  DataTableFilterConfig,
  DataTableRowAction,
  DataTableSortState,
  DataTableProps,
} from './types';

function getValue<T>(row: T, accessor: keyof T | ((row: T) => unknown) | undefined): unknown {
  if (accessor === undefined) return undefined;
  if (typeof accessor === 'function') return accessor(row);
  return (row as Record<string, unknown>)[accessor as string];
}

function compare(a: unknown, b: unknown, direction: 'asc' | 'desc'): number {
  const mul = direction === 'asc' ? 1 : -1;
  if (a == null && b == null) return 0;
  if (a == null) return mul;
  if (b == null) return -mul;
  if (typeof a === 'number' && typeof b === 'number') return mul * (a - b);
  if (typeof a === 'string' && typeof b === 'string') return mul * a.localeCompare(b);
  if (a instanceof Date && b instanceof Date) return mul * (a.getTime() - b.getTime());
  return mul * String(a).localeCompare(String(b));
}

function useDataTableState<T>(props: DataTableProps<T>) {
  const {
    filterValues: controlledFilters,
    onFilterChange,
    sorting: controlledSorting,
    onSortingChange,
    defaultSorting,
    selectedRowIds: controlledSelection,
    onSelectionChange,
    page: controlledPage,
    onPageChange,
    pageSize: controlledPageSize,
    onPageSizeChange,
    pagination,
    mode = 'client',
  } = props;

  const [internalFilters, setInternalFilters] = React.useState<Record<string, string | number | undefined>>({});
  const [internalSorting, setInternalSorting] = React.useState<DataTableSortState>(
    defaultSorting ?? { columnId: null, direction: 'asc' }
  );
  const [internalSelection, setInternalSelection] = React.useState<(string | number)[]>([]);
  const [internalPage, setInternalPage] = React.useState(1);
  const defaultPageSize = pagination?.pageSize ?? 10;
  const [internalPageSize, setInternalPageSize] = React.useState(defaultPageSize);

  const filterValues = controlledFilters ?? internalFilters;
  const setFilterValues = React.useCallback(
    (next: Record<string, string | number | undefined> | ((prev: Record<string, string | number | undefined>) => Record<string, string | number | undefined>)) => {
      if (onFilterChange) {
        const nextVal = typeof next === 'function' ? next(controlledFilters ?? internalFilters) : next;
        onFilterChange(nextVal);
      } else setInternalFilters(typeof next === 'function' ? next(internalFilters) : next);
    },
    [onFilterChange, controlledFilters, internalFilters]
  );

  const sorting = controlledSorting ?? internalSorting;
  const setSorting = React.useCallback(
    (next: DataTableSortState) => {
      onSortingChange?.(next);
      if (!controlledSorting) setInternalSorting(next);
    },
    [onSortingChange, controlledSorting]
  );

  const selectedRowIds = controlledSelection ?? internalSelection;
  const setSelectedRowIds = React.useCallback(
    (next: (string | number)[] | ((prev: (string | number)[]) => (string | number)[])) => {
      const resolved = typeof next === 'function' ? next(controlledSelection ?? internalSelection) : next;
      onSelectionChange?.(resolved);
      if (!controlledSelection) setInternalSelection(resolved);
    },
    [onSelectionChange, controlledSelection, internalSelection]
  );

  const page = controlledPage ?? internalPage;
  const setPage = React.useCallback(
    (p: number) => {
      onPageChange?.(p);
      if (controlledPage === undefined) setInternalPage(p);
    },
    [onPageChange, controlledPage]
  );

  const pageSize = controlledPageSize ?? internalPageSize;
  const setPageSize = React.useCallback(
    (s: number) => {
      onPageSizeChange?.(s);
      if (controlledPageSize === undefined) setInternalPageSize(s);
      setPage(1);
    },
    [onPageSizeChange, controlledPageSize, setPage]
  );

  return {
    filterValues,
    setFilterValues,
    sorting,
    setSorting,
    selectedRowIds,
    setSelectedRowIds,
    page,
    setPage,
    pageSize,
    setPageSize,
    mode,
  };
}

function resolveFilters<T>(props: DataTableProps<T>): DataTableFilterConfig[] {
  if (props.filters && props.filters.length > 0) return props.filters;
  return props.columns
    .filter((c) => c.filterable)
    .map((c) => ({
      columnId: c.id,
      type: c.filterType ?? 'text',
      label: typeof c.header === 'string' ? c.header : c.id,
      placeholder: c.filterPlaceholder,
      options: c.filterOptions,
    }));
}

export function DataTable<T>(props: DataTableProps<T>) {
  const {
    data,
    columns,
    getRowId: getRowIdProp,
    getRowIdKey = 'id',
    cellRenderers: customCellRenderers,
    enableSelection,
    bulkActions,
    rowActions,
    pagination,
    mode = 'client',
    isLoading,
    emptyMessage = 'No data',
    className,
    caption,
  } = props;

  const getRowId = React.useMemo(
    () =>
      getRowIdProp ??
      ((row: T) => (row as Record<string, unknown>)[getRowIdKey as string] as string | number),
    [getRowIdProp, getRowIdKey]
  );

  const safeData = Array.isArray(data) ? data : [];

  const cellRenderers = React.useMemo(
    () => getCellRenderers(customCellRenderers),
    [customCellRenderers]
  );

  const state = useDataTableState(props);
  const { filterValues, setFilterValues, sorting, setSorting, selectedRowIds, setSelectedRowIds, page, setPage, pageSize, setPageSize } = state;

  const filterConfigs = resolveFilters(props);
  const pageSizeOptions = pagination?.pageSizeOptions ?? [10, 20, 50, 100];

  const processedData = React.useMemo(() => {
    let list = [...safeData];

    if (mode === 'client') {
      list = list.filter((row) => {
        for (const fc of filterConfigs) {
          const val = filterValues[fc.columnId];
          if (val === undefined || val === '') continue;
          const cellVal = getValue(row, columns.find((c) => c.id === fc.columnId)?.accessor as keyof T | ((row: T) => unknown));
          const str = String(cellVal ?? '').toLowerCase();
          const filterStr = String(val).toLowerCase();
          if (fc.type === 'text' && !str.includes(filterStr)) return false;
          if (fc.type === 'select' && String(cellVal) !== String(val)) return false;
          if (fc.type === 'number' && Number(cellVal) !== Number(val)) return false;
        }
        return true;
      });

      if (sorting.columnId) {
        const col = columns.find((c) => c.id === sorting.columnId);
        const acc = col?.accessor;
        if (acc) {
          list.sort((a, b) => compare(getValue(a, acc), getValue(b, acc), sorting.direction));
        }
      }
    }

    return list;
  }, [safeData, mode, filterConfigs, filterValues, columns, sorting]);

  const totalFiltered = processedData.length;
  const paginatedData = React.useMemo(() => {
    if (!pagination || mode === 'server') return processedData;
    const start = (page - 1) * pageSize;
    return processedData.slice(start, start + pageSize);
  }, [processedData, pagination, mode, page, pageSize]);

  const totalCount = mode === 'client' ? totalFiltered : (pagination?.totalCount ?? safeData.length);
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));
  const displayData = pagination && mode === 'server' ? safeData : paginatedData;

  const toggleSort = (columnId: string) => {
    setSorting({
      columnId,
      direction: sorting.columnId === columnId && sorting.direction === 'asc' ? 'desc' : 'asc',
    });
  };

  const toggleSelectAll = () => {
    if (selectedRowIds.length === displayData.length) {
      setSelectedRowIds([]);
    } else {
      setSelectedRowIds(displayData.map((row) => getRowId(row)));
    }
  };

  const toggleSelectRow = (id: string | number) => {
    setSelectedRowIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleFilterChange = (columnId: string, value: string | number | undefined) => {
    setFilterValues((prev) => ({ ...prev, [columnId]: value }));
    if (pagination) setPage(1);
  };

  const selectedRows = React.useMemo(
    () => safeData.filter((row) => selectedRowIds.includes(getRowId(row))),
    [safeData, selectedRowIds, getRowId]
  );

  const getRowActions = (row: T) =>
    !rowActions ? [] : Array.isArray(rowActions) ? rowActions : rowActions(row);

  return (
    <div className={cn('space-y-3', className)}>
      {/* Filters */}
      {filterConfigs.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          {filterConfigs.map((fc) => {
            const col = columns.find((c) => c.id === fc.columnId);
            const value = filterValues[fc.columnId];
            if (fc.type === 'select') {
              return (
                <div key={fc.columnId} className="flex items-center gap-1">
                  {fc.label && <span className="text-sm text-muted-foreground">{fc.label}:</span>}
                  <Select
                    key={fc.columnId}
                    placeholder={fc.placeholder ?? `All`}
                    value={value !== undefined && value !== '' ? { value: String(value), label: fc.options?.find((o) => o.value === String(value))?.label ?? String(value) } : null}
                    onChange={(opt: unknown) => {
                      const o = opt as { value: string; label: string } | null;
                      handleFilterChange(fc.columnId, o?.value === '' ? undefined : (o?.value ?? undefined));
                    }}
                    options={[{ value: '', label: 'All' }, ...(fc.options ?? [])] as { value: string; label: string }[]}
                    isClearable
                    className="w-[160px]"
                  />
                </div>
              );
            }
            return (
              <div key={fc.columnId} className="flex items-center gap-1">
                {fc.label && <span className="text-sm text-muted-foreground">{fc.label}:</span>}
                <Input
                  type={fc.type === 'number' ? 'number' : fc.type === 'date' ? 'date' : 'text'}
                  placeholder={fc.placeholder}
                  value={value ?? ''}
                  onChange={(e) => handleFilterChange(fc.columnId, fc.type === 'number' ? e.target.valueAsNumber : e.target.value)}
                  className="w-[160px]"
                />
              </div>
            );
          })}
        </div>
      )}

      {/* Bulk actions bar */}
      {enableSelection && bulkActions && bulkActions.length > 0 && selectedRowIds.length > 0 && (
        <div className="flex items-center gap-2 rounded-md border bg-muted/30 px-3 py-2">
          <span className="text-sm text-muted-foreground">
            {selectedRowIds.length} selected
          </span>
          {bulkActions
            .filter((a) => !a.hideWhenEmpty)
            .map((action) => (
              <Button
                key={action.id}
                variant={action.variant ?? 'outline'}
                size="sm"
                onClick={() => action.onClick(selectedRows)}
              >
                {action.icon}
                {action.label}
              </Button>
            ))}
        </div>
      )}

      <div className="relative w-full overflow-auto rounded-md border">
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center rounded-md bg-background/80">
            <span className="text-sm text-muted-foreground">Loading...</span>
          </div>
        )}
        <Table>
          {caption && <TableCaption>{caption}</TableCaption>}
          <TableHeader>
            <TableRow>
              {enableSelection && (
                <TableHead className="w-12 pr-0">
                  <Checkbox
                    checked={displayData.length > 0 && selectedRowIds.length === displayData.length}
                    onCheckedChange={toggleSelectAll}
                    aria-label="Select all"
                  />
                </TableHead>
              )}
              {columns.map((col) => (
                <TableHead
                  key={col.id}
                  className={cn(
                    col.sortable && 'cursor-pointer select-none hover:text-foreground',
                    col.align === 'center' && 'text-center',
                    col.align === 'right' && 'text-right'
                  )}
                  style={col.width ? { width: typeof col.width === 'number' ? `${col.width}px` : col.width } : undefined}
                  onClick={() => col.sortable && toggleSort(col.id)}
                >
                  <div className="flex items-center gap-1">
                    {col.header}
                    {col.sortable && (
                      <span className="inline-flex flex-col">
                        {sorting.columnId === col.id ? (
                          sorting.direction === 'asc' ? (
                            <ChevronUp className="h-4 w-4" />
                          ) : (
                            <ChevronDown className="h-4 w-4" />
                          )
                        ) : (
                          <span className="flex flex-col leading-none opacity-50">
                            <ChevronUp className="h-3 w-3" />
                            <ChevronDown className="-mt-1 h-3 w-3" />
                          </span>
                        )}
                      </span>
                    )}
                  </div>
                </TableHead>
              ))}
              {rowActions && (Array.isArray(rowActions) ? rowActions.length > 0 : true) && (
                <TableHead className="w-12 text-right">Actions</TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {displayData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={columns.length + (enableSelection ? 1 : 0) + (rowActions ? 1 : 0)} className="h-24 text-center text-muted-foreground">
                  {emptyMessage}
                </TableCell>
              </TableRow>
            ) : (
              displayData.map((row) => {
                const rowId = getRowId(row);
                const actions = getRowActions(row);
                const visibleActions: DataTableRowAction<T>[] = (Array.isArray(actions) ? actions : []).filter(
                  (a) => !a.when || a.when(row)
                );
                return (
                  <TableRow
                    key={String(rowId)}
                    data-state={selectedRowIds.includes(rowId) ? 'selected' : undefined}
                  >
                    {enableSelection && (
                      <TableCell className="pr-0">
                        <Checkbox
                          checked={selectedRowIds.includes(rowId)}
                          onCheckedChange={() => toggleSelectRow(rowId)}
                          aria-label={`Select row ${rowId}`}
                        />
                      </TableCell>
                    )}
                    {columns.map((col) => {
                      const value = getValue(row, col.accessor);
                      let content: React.ReactNode;
                      if (col.cell) {
                        content = col.cell(row, value);
                      } else if (col.cellConfig) {
                        const { type, ...options } = col.cellConfig;
                        const renderer = cellRenderers[type];
                        content =
                          renderer != null
                            ? renderer(row, value, options)
                            : (value as React.ReactNode);
                      } else if (col.format) {
                        content = renderCellFormat(value, col.format, col.formatOptions);
                      } else {
                        content = value as React.ReactNode;
                      }
                      return (
                        <TableCell
                          key={col.id}
                          className={cn(
                            col.align === 'center' && 'text-center',
                            col.align === 'right' && 'text-right'
                          )}
                        >
                          {content}
                        </TableCell>
                      );
                    })}
                    {rowActions && (
                      <TableCell className="text-right">
                        {visibleActions.length > 0 ? (
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              {visibleActions.map((action) => (
                                <DropdownMenuItem
                                  key={action.id}
                                  onClick={() => action.onClick(row)}
                                  className={action.variant === 'destructive' ? 'text-destructive focus:text-destructive' : ''}
                                >
                                  {action.icon}
                                  {action.label}
                                </DropdownMenuItem>
                              ))}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        ) : null}
                      </TableCell>
                    )}
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {pagination && totalPages > 1 && (
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {pagination.showPageSizeSelector !== false && (
              <>
                <span>Rows per page</span>
                <Select
                  value={{ value: String(pageSize), label: String(pageSize) }}
                  onChange={(opt: unknown) => {
                    const o = opt as { value: string; label: string } | null;
                    if (o) setPageSize(Number(o.value));
                  }}
                  options={pageSizeOptions.map((n) => ({ value: String(n), label: String(n) }))}
                  className="w-[70px]"
                />
              </>
            )}
            <span>
              {mode === 'client'
                ? `${(page - 1) * pageSize + 1}-${Math.min(page * pageSize, totalFiltered)} of ${totalFiltered}`
                : `Page ${page} of ${totalPages}`}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(page - 1)}
              disabled={page <= 1}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(page + 1)}
              disabled={page >= totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

DataTable.displayName = 'DataTable';
