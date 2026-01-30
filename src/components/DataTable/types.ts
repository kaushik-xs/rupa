import * as React from 'react';

/** Badge variant for badge format (includes preset colors) */
export type DataTableBadgeVariant =
  | 'default'
  | 'secondary'
  | 'destructive'
  | 'outline'
  | 'success'
  | 'warning'
  | 'info';

/** Built-in cell format types */
export type DataTableCellFormat =
  | 'text'
  | 'badge'
  | 'number'
  | 'currency'
  | 'date'
  | 'datetime'
  | 'percent';

/** Options for badge format: map raw value to Badge variant (supports preset colors) */
export interface DataTableFormatBadgeOptions {
  /** Map value → badge variant (e.g. { Active: 'success', Inactive: 'secondary', Pending: 'warning' }) */
  variantMap?: Record<string, DataTableBadgeVariant>;
  /** Variant when value is not in variantMap */
  defaultVariant?: DataTableBadgeVariant;
}

/** Options for number/currency/percent formats */
export interface DataTableFormatNumberOptions {
  /** Decimal places */
  decimals?: number;
  /** Locale for number formatting (e.g. 'en-US') */
  locale?: string;
}

/** Options for currency format (extends number options) */
export interface DataTableFormatCurrencyOptions extends DataTableFormatNumberOptions {
  /** ISO currency code (e.g. 'USD', 'EUR') */
  currency?: string;
}

/** Options for date/datetime formats */
export interface DataTableFormatDateOptions {
  locale?: string;
  dateStyle?: 'short' | 'medium' | 'long' | 'full';
  timeStyle?: 'short' | 'medium' | 'long' | 'full';
}

/** Union of all format options */
export type DataTableFormatOptions =
  | DataTableFormatBadgeOptions
  | DataTableFormatNumberOptions
  | DataTableFormatCurrencyOptions
  | DataTableFormatDateOptions;

/**
 * Custom cell rendering function. Use this for full control over how a cell is rendered
 * (e.g. badges, links, composite UI, conditional styling). When provided, it takes
 * precedence over the column's `format` / `formatOptions`.
 * @param row - The row data
 * @param value - The resolved value from the column's accessor
 */
export type DataTableCellRenderer<T> = (row: T, value: unknown) => React.ReactNode;

/**
 * JSON-serializable cell renderer config. Use when columns come from JSON/config (e.g. API, CMS).
 * The `type` names a renderer from the registry; all other keys are passed as options.
 * Example: { "type": "badge", "variantMap": { "Active": "default" } }
 */
export interface DataTableCellRendererConfig {
  type: string;
  [key: string]: unknown;
}

/**
 * Configurable cell renderer used by the registry. Receives (row, value, options from config).
 * Used when rendering via cellConfig (JSON config).
 */
export type DataTableConfigurableRenderer = (
  row: unknown,
  value: unknown,
  options: Record<string, unknown>
) => React.ReactNode;

/** Column definition for the data table */
export interface DataTableColumn<T> {
  id: string;
  header: string | React.ReactNode;
  /** Key path or accessor function to get cell value */
  accessor?: keyof T | ((row: T) => unknown);
  /**
   * Custom rendering function for this column. Receives (row, value) and returns ReactNode.
   * When set, overrides cellConfig / format / formatOptions. Use for badges, links, composite UI, etc.
   */
  cell?: DataTableCellRenderer<T>;
  /**
   * JSON-serializable renderer config (type + options). Use when columns are defined in JSON.
   * Ignored when cell is provided. Requires a matching entry in cellRenderers (or default registry).
   */
  cellConfig?: DataTableCellRendererConfig;
  /**
   * Built-in format for rendering (badge, number, currency, date, etc.).
   * Ignored when cell or cellConfig is provided.
   */
  format?: DataTableCellFormat;
  /** Options for the chosen format (variantMap for badge, decimals for number, etc.) */
  formatOptions?: DataTableFormatOptions;
  /** Whether this column is sortable */
  sortable?: boolean;
  /** Whether this column has a filter (and which filters to show) */
  filterable?: boolean;
  /** Filter input type when filterable is true */
  filterType?: 'text' | 'select' | 'number' | 'date';
  /** Options for select filter type */
  filterOptions?: { value: string; label: string }[];
  /** Placeholder for filter input */
  filterPlaceholder?: string;
  /** Min width or column width hint */
  width?: string | number;
  /** Alignment */
  align?: 'left' | 'center' | 'right';
}

/** Filter configuration - which filters appear in the toolbar */
export interface DataTableFilterConfig {
  columnId: string;
  type: 'text' | 'select' | 'number' | 'date';
  label?: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

/** Sort state */
export interface DataTableSortState {
  columnId: string | null;
  direction: 'asc' | 'desc';
}

/** Bulk action (e.g. Delete selected, Export) */
export interface DataTableBulkAction<T> {
  id: string;
  label: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  onClick: (selectedRows: T[]) => void | Promise<void>;
  /** Hide when no selection (default: false) */
  hideWhenEmpty?: boolean;
}

/** Row action (e.g. Edit, Delete per row) */
export interface DataTableRowAction<T> {
  id: string;
  label: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  onClick: (row: T) => void | Promise<void>;
  /** Conditionally hide this action for a row */
  when?: (row: T) => boolean;
}

/** Pagination config */
export interface DataTablePaginationConfig {
  pageSize?: number;
  pageSizeOptions?: number[];
  /** Total count for server-side (if not provided, uses data.length in client mode) */
  totalCount?: number;
  showPageSizeSelector?: boolean;
}

/** DataTable props */
export interface DataTableProps<T> {
  /** Row data */
  data: T[];
  /** Column definitions */
  columns: DataTableColumn<T>[];
  /** Get unique row id (for selection and keys). Omit if using getRowIdKey (e.g. from JSON config). */
  getRowId?: (row: T) => string | number;
  /** Row property key for id (e.g. 'id'). Used when getRowId is not provided (JSON/config). */
  getRowIdKey?: keyof T | string;

  /**
   * Registry of named cell renderers for cellConfig (JSON config).
   * Merged with built-in renderers (badge, number, currency, date, datetime, percent, text, link).
   * Use to add custom renderers or override built-ins.
   */
  cellRenderers?: Record<string, DataTableConfigurableRenderer>;

  /** Which filters to show. If omitted but columns have filterable, uses column config. */
  filters?: DataTableFilterConfig[];
  /** Current filter values (controlled). Keys are columnIds. */
  filterValues?: Record<string, string | number | undefined>;
  /** Called when user changes a filter */
  onFilterChange?: (values: Record<string, string | number | undefined>) => void;

  /** Current sort (controlled) */
  sorting?: DataTableSortState;
  /** Called when user changes sort */
  onSortingChange?: (sorting: DataTableSortState) => void;
  /** Initial sort when uncontrolled */
  defaultSorting?: DataTableSortState;

  /** Enable row selection (checkboxes) */
  enableSelection?: boolean;
  /** Selected row ids (controlled) */
  selectedRowIds?: (string | number)[];
  /** Called when selection changes */
  onSelectionChange?: (ids: (string | number)[]) => void;

  /** Actions shown when rows are selected (e.g. Bulk delete, Export) */
  bulkActions?: DataTableBulkAction<T>[];

  /** Per-row actions (e.g. Edit, Delete). Rendered as dropdown or buttons. */
  rowActions?: DataTableRowAction<T>[] | ((row: T) => DataTableRowAction<T>[]);

  /** Pagination config. If provided, pagination UI is shown. */
  pagination?: DataTablePaginationConfig;
  /** Current page (1-based, controlled) */
  page?: number;
  /** Called when page changes */
  onPageChange?: (page: number) => void;
  /** Current page size (controlled) */
  pageSize?: number;
  /** Called when page size changes */
  onPageSizeChange?: (pageSize: number) => void;

  /**
   * 'client' = filter, sort, paginate in memory from `data`.
   * 'server' = assume data is already filtered/sorted for current page; use onFilterChange, onSortingChange, onPageChange.
   */
  mode?: 'client' | 'server';

  /** Show loading overlay/skeleton */
  isLoading?: boolean;

  /** Empty state when no data */
  emptyMessage?: React.ReactNode;

  /** Optional class name for the table container */
  className?: string;

  /** Optional table caption */
  caption?: string;
}
