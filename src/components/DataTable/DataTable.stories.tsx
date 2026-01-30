import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Trash2, Pencil, Download } from 'lucide-react';
import { DataTable } from './DataTable';
import type { DataTableColumn, DataTableBulkAction, DataTableRowAction } from './types';
import { LayoutRenderer } from '../../core/layout-renderer';
import type { LayoutNode } from '../../types/layout';
import {
  dashboardConfig,
  masterDetailConfig,
  tabsWithTableConfig,
  dataTableColumnsConfig,
} from './example-configs';

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  createdAt: string;
};

const sampleData: User[] = [
  { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', status: 'Active', createdAt: '2024-01-15' },
  { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'User', status: 'Active', createdAt: '2024-02-20' },
  { id: '3', name: 'Carol White', email: 'carol@example.com', role: 'Editor', status: 'Inactive', createdAt: '2024-03-10' },
  { id: '4', name: 'David Brown', email: 'david@example.com', role: 'User', status: 'Active', createdAt: '2024-01-05' },
  { id: '5', name: 'Eve Davis', email: 'eve@example.com', role: 'Admin', status: 'Active', createdAt: '2024-04-01' },
  { id: '6', name: 'Frank Miller', email: 'frank@example.com', role: 'User', status: 'Inactive', createdAt: '2024-02-14' },
  { id: '7', name: 'Grace Lee', email: 'grace@example.com', role: 'Editor', status: 'Active', createdAt: '2024-03-22' },
  { id: '8', name: 'Henry Wilson', email: 'henry@example.com', role: 'User', status: 'Active', createdAt: '2024-01-30' },
  { id: '9', name: 'Ivy Clark', email: 'ivy@example.com', role: 'Admin', status: 'Inactive', createdAt: '2024-04-15' },
  { id: '10', name: 'Jack Taylor', email: 'jack@example.com', role: 'Editor', status: 'Active', createdAt: '2024-02-28' },
];

const baseColumns: DataTableColumn<User>[] = [
  { id: 'name', header: 'Name', accessor: 'name', sortable: true, filterable: true, filterType: 'text', filterPlaceholder: 'Search name...' },
  { id: 'email', header: 'Email', accessor: 'email', sortable: true, filterable: true, filterType: 'text', filterPlaceholder: 'Search email...' },
  { id: 'role', header: 'Role', accessor: 'role', sortable: true, filterable: true, filterType: 'select', filterOptions: [{ value: 'Admin', label: 'Admin' }, { value: 'Editor', label: 'Editor' }, { value: 'User', label: 'User' }] },
  { id: 'status', header: 'Status', accessor: 'status', sortable: true, filterable: true, filterType: 'select', filterOptions: [{ value: 'Active', label: 'Active' }, { value: 'Inactive', label: 'Inactive' }] },
  { id: 'createdAt', header: 'Created', accessor: 'createdAt', sortable: true },
];

/** Columns with built-in formats: badge for status/role, date for createdAt */
const columnsWithFormats: DataTableColumn<User>[] = [
  { id: 'name', header: 'Name', accessor: 'name', sortable: true },
  { id: 'email', header: 'Email', accessor: 'email', sortable: true },
  {
    id: 'role',
    header: 'Role',
    accessor: 'role',
    sortable: true,
    format: 'badge',
    formatOptions: {
      variantMap: { Admin: 'default', Editor: 'secondary', User: 'outline' },
      defaultVariant: 'outline',
    },
  },
  {
    id: 'status',
    header: 'Status',
    accessor: 'status',
    sortable: true,
    format: 'badge',
    formatOptions: {
      variantMap: { Active: 'default', Inactive: 'secondary' },
      defaultVariant: 'secondary',
    },
  },
  {
    id: 'createdAt',
    header: 'Created',
    accessor: 'createdAt',
    sortable: true,
    format: 'date',
    formatOptions: { dateStyle: 'medium' },
  },
];

/** Full-featured columns: filters + badge/date formats */
const fullFeaturedColumns: DataTableColumn<User>[] = [
  { id: 'name', header: 'Name', accessor: 'name', sortable: true, filterable: true, filterType: 'text', filterPlaceholder: 'Search name...' },
  { id: 'email', header: 'Email', accessor: 'email', sortable: true, filterable: true, filterType: 'text', filterPlaceholder: 'Search email...' },
  { id: 'role', header: 'Role', accessor: 'role', sortable: true, filterable: true, filterType: 'select', filterOptions: [{ value: 'Admin', label: 'Admin' }, { value: 'Editor', label: 'Editor' }, { value: 'User', label: 'User' }], format: 'badge', formatOptions: { variantMap: { Admin: 'default', Editor: 'secondary', User: 'outline' }, defaultVariant: 'outline' } },
  { id: 'status', header: 'Status', accessor: 'status', sortable: true, filterable: true, filterType: 'select', filterOptions: [{ value: 'Active', label: 'Active' }, { value: 'Inactive', label: 'Inactive' }], format: 'badge', formatOptions: { variantMap: { Active: 'default', Inactive: 'secondary' }, defaultVariant: 'secondary' } },
  { id: 'createdAt', header: 'Created', accessor: 'createdAt', sortable: true, format: 'date', formatOptions: { dateStyle: 'medium' } },
];

const meta: Meta<typeof DataTable<User>> = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
DataTable is a full-featured table with pagination, filters, sorting, multi-select, bulk actions, and row actions.

**Rendering options (in precedence order):**
1. **\`cell\`** – Custom render function \`(row, value) => ReactNode\`
2. **\`cellConfig\`** – JSON-serializable config: \`{ type: "badge" | "link" | "date" | ... , ...options }\` (from API/CMS)
3. **\`format\`** + **\`formatOptions\`** – Built-in formats: badge, number, currency, date, datetime, percent
4. Raw value

**Built-in cellConfig types:** \`text\`, \`badge\`, \`number\`, \`currency\`, \`date\`, \`datetime\`, \`percent\`, \`link\`.
Extend via \`cellRenderers\` prop.
        `.trim(),
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    data: { control: false, description: 'Row data array' },
    columns: { control: false, description: 'Column definitions (accessor, cell, cellConfig, format, filters, etc.)' },
    getRowId: { control: false, description: 'Function to get unique row id for selection and keys' },
    cellRenderers: { control: false, description: 'Registry of named renderers for cellConfig (merged with built-ins)' },
    filters: { control: false },
    filterValues: { control: false },
    onFilterChange: { control: false },
    sorting: { control: false },
    onSortingChange: { control: false },
    selectedRowIds: { control: false },
    onSelectionChange: { control: false },
    bulkActions: { control: false },
    rowActions: { control: false },
    pagination: { control: false },
    page: { control: false },
    onPageChange: { control: false },
    pageSize: { control: false },
    onPageSizeChange: { control: false },
    mode: { control: 'select', options: ['client', 'server'], description: 'Client-side vs server-side filter/sort/paginate' },
    isLoading: { control: 'boolean' },
    emptyMessage: { control: 'text' },
    caption: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {
  parameters: {
    docs: { description: { story: 'Basic table with pagination and page size selector.' } },
  },
  args: {
    data: sampleData,
    columns: baseColumns.map(({ filterable, filterType, filterOptions, filterPlaceholder, ...c }) => c),
    getRowId: (row) => row.id,
    pagination: { pageSize: 5, pageSizeOptions: [5, 10, 20], showPageSizeSelector: true },
    emptyMessage: 'No users found',
  },
};

export const WithFilters: Story = {
  parameters: {
    docs: { description: { story: 'Filter bar above the table: text filters for name/email, select filters for role/status.' } },
  },
  args: {
    data: sampleData,
    columns: baseColumns,
    getRowId: (row) => row.id,
    pagination: { pageSize: 10, pageSizeOptions: [5, 10, 20] },
    emptyMessage: 'No users found',
  },
};

export const WithSorting: Story = {
  parameters: {
    docs: { description: { story: 'Sortable columns: click header to sort asc/desc. Default sort by name.' } },
  },
  args: {
    data: sampleData,
    columns: baseColumns.map(({ filterable, filterType, filterOptions, filterPlaceholder, ...c }) => c),
    getRowId: (row) => row.id,
    defaultSorting: { columnId: 'name', direction: 'asc' },
    pagination: { pageSize: 5 },
    emptyMessage: 'No users found',
  },
};

export const WithCellFormats: Story = {
  parameters: {
    docs: { description: { story: 'Built-in formats via \`format\` + \`formatOptions\`: status and role as badges, createdAt as formatted date.' } },
  },
  args: {
    data: sampleData,
    columns: columnsWithFormats,
    getRowId: (row) => row.id,
    pagination: { pageSize: 5 },
    emptyMessage: 'No users found',
  },
};

/** Badge preset colors: success (green), warning (amber), info (blue) */
const columnsWithBadgePresetColors: DataTableColumn<User>[] = [
  { id: 'name', header: 'Name', accessor: 'name', sortable: true },
  { id: 'email', header: 'Email', accessor: 'email', sortable: true },
  {
    id: 'role',
    header: 'Role',
    accessor: 'role',
    sortable: true,
    format: 'badge',
    formatOptions: {
      variantMap: { Admin: 'default', Editor: 'info', User: 'secondary' },
      defaultVariant: 'outline',
    },
  },
  {
    id: 'status',
    header: 'Status',
    accessor: 'status',
    sortable: true,
    format: 'badge',
    formatOptions: {
      variantMap: { Active: 'success', Inactive: 'secondary', Pending: 'warning' },
      defaultVariant: 'outline',
    },
  },
  { id: 'createdAt', header: 'Created', accessor: 'createdAt', sortable: true, format: 'date', formatOptions: { dateStyle: 'medium' } },
];

const sampleDataWithPending = [
  ...sampleData.slice(0, 2),
  { ...sampleData[2], status: 'Pending' as const },
  ...sampleData.slice(3),
];

export const BadgePresetColors: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Badge preset colors: \`success\` (green), \`warning\` (amber), \`info\` (blue). Use in \`variantMap\` or \`cellConfig\`. Status: Active → success, Inactive → secondary, Pending → warning; Role: Admin → default, Editor → info, User → secondary.',
      },
    },
  },
  args: {
    data: sampleDataWithPending,
    columns: columnsWithBadgePresetColors,
    getRowId: (row) => row.id,
    pagination: { pageSize: 5 },
    emptyMessage: 'No users found',
  },
};

/** Custom cell renderers: email as link, status as dot + label */
const columnsWithCustomCell: DataTableColumn<User>[] = [
  { id: 'name', header: 'Name', accessor: 'name', sortable: true },
  {
    id: 'email',
    header: 'Email',
    accessor: 'email',
    sortable: true,
    cell: (_row, value) => (
      <a href={`mailto:${value}`} className="text-primary hover:underline">
        {String(value)}
      </a>
    ),
  },
  { id: 'role', header: 'Role', accessor: 'role', sortable: true },
  {
    id: 'status',
    header: 'Status',
    accessor: 'status',
    sortable: true,
    cell: (_row, value) => {
      const v = String(value);
      const isActive = v === 'Active';
      return (
        <span className="inline-flex items-center gap-1.5">
          <span
            className="h-2 w-2 shrink-0 rounded-full"
            style={{ backgroundColor: isActive ? 'hsl(var(--chart-1))' : 'hsl(var(--muted-foreground))' }}
            aria-hidden
          />
          {v}
        </span>
      );
    },
  },
  {
    id: 'createdAt',
    header: 'Created',
    accessor: 'createdAt',
    sortable: true,
    cell: (_row, value) => (value ? new Date(String(value)).toLocaleDateString('en-US', { dateStyle: 'medium' }) : '—'),
  },
];

export const WithCustomCellRenderer: Story = {
  parameters: {
    docs: { description: { story: 'Custom \`cell\` render function: email as mailto link, status as colored dot + label, createdAt formatted in code.' } },
  },
  args: {
    data: sampleData,
    columns: columnsWithCustomCell,
    getRowId: (row) => row.id,
    pagination: { pageSize: 5 },
    emptyMessage: 'No users found',
  },
};

/** Columns defined via JSON-serializable cellConfig (e.g. from API/CMS). No code renderers needed. */
const columnsFromJsonConfig: DataTableColumn<User>[] = [
  { id: 'name', header: 'Name', accessor: 'name', sortable: true },
  {
    id: 'email',
    header: 'Email',
    accessor: 'email',
    sortable: true,
    cellConfig: { type: 'link' },
  },
  {
    id: 'role',
    header: 'Role',
    accessor: 'role',
    sortable: true,
    cellConfig: {
      type: 'badge',
      variantMap: { Admin: 'default', Editor: 'secondary', User: 'outline' },
      defaultVariant: 'outline',
    },
  },
  {
    id: 'status',
    header: 'Status',
    accessor: 'status',
    sortable: true,
    cellConfig: {
      type: 'badge',
      variantMap: { Active: 'default', Inactive: 'secondary' },
      defaultVariant: 'secondary',
    },
  },
  {
    id: 'createdAt',
    header: 'Created',
    accessor: 'createdAt',
    sortable: true,
    cellConfig: { type: 'date', dateStyle: 'medium' },
  },
];

export const WithJsonCellConfig: Story = {
  parameters: {
    docs: { description: { story: 'Rendering via JSON-serializable \`cellConfig\`: type + options (e.g. \`{ type: "badge", variantMap: {...} }\`). No code renderers needed; uses built-in registry.' } },
  },
  args: {
    data: sampleData,
    columns: columnsFromJsonConfig,
    getRowId: (row) => row.id,
    pagination: { pageSize: 5 },
    emptyMessage: 'No users found',
  },
};

/** Example: columns loaded from a JSON config (e.g. API). Fully serializable. */
const jsonTableConfig = {
  columns: [
    { id: 'name', header: 'Name', accessor: 'name', sortable: true },
    { id: 'email', header: 'Email', accessor: 'email', cellConfig: { type: 'link' } },
    { id: 'role', header: 'Role', accessor: 'role', cellConfig: { type: 'badge', variantMap: { Admin: 'default', User: 'outline' }, defaultVariant: 'outline' } },
    { id: 'status', header: 'Status', accessor: 'status', cellConfig: { type: 'badge', variantMap: { Active: 'default', Inactive: 'secondary' } } },
    { id: 'createdAt', header: 'Created', accessor: 'createdAt', cellConfig: { type: 'date', dateStyle: 'short' } },
  ],
};

export const FromJsonConfig: Story = {
  parameters: {
    docs: { description: { story: 'Columns come from a plain object (e.g. API response). Same as WithJsonCellConfig but shows a fully JSON-driven config object.' } },
  },
  args: {
    data: sampleData,
    columns: jsonTableConfig.columns as DataTableColumn<User>[],
    getRowId: (row) => row.id,
    pagination: { pageSize: 5 },
    emptyMessage: 'No users found',
  },
};

/** Columns that use a custom renderer registered via cellRenderers (e.g. "statusDot"). */
const columnsWithCustomRegistry: DataTableColumn<User>[] = [
  { id: 'name', header: 'Name', accessor: 'name', sortable: true },
  { id: 'email', header: 'Email', accessor: 'email', cellConfig: { type: 'link' } },
  { id: 'role', header: 'Role', accessor: 'role', cellConfig: { type: 'badge', variantMap: { Admin: 'default', Editor: 'secondary', User: 'outline' }, defaultVariant: 'outline' } },
  {
    id: 'status',
    header: 'Status',
    accessor: 'status',
    sortable: true,
    cellConfig: { type: 'statusDot' },
  },
  { id: 'createdAt', header: 'Created', accessor: 'createdAt', cellConfig: { type: 'date', dateStyle: 'medium' } },
];

const customCellRenderers = {
  statusDot: (_row: unknown, value: unknown, _options?: Record<string, unknown>) => {
    const v = String(value);
    const isActive = v === 'Active';
    return (
      <span className="inline-flex items-center gap-1.5">
        <span
          className="h-2 w-2 shrink-0 rounded-full"
          style={{ backgroundColor: isActive ? 'hsl(var(--chart-1))' : 'hsl(var(--muted-foreground))' }}
          aria-hidden
        />
        {v}
      </span>
    );
  },
};

export const WithCustomCellRenderers: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Extend the registry via \`cellRenderers\`: Status column uses a custom \`statusDot\` renderer registered at runtime. Other columns use built-in types (link, badge, date).',
      },
    },
  },
  args: {
    data: sampleData,
    columns: columnsWithCustomRegistry,
    getRowId: (row) => row.id,
    cellRenderers: customCellRenderers,
    pagination: { pageSize: 5 },
    emptyMessage: 'No users found',
  },
};

/** Number rounding, currency, percent, and custom cell renderer */
type Product = { id: string; name: string; price: number; score: number; progress: number; status: string };
const productData: Product[] = [
  { id: '1', name: 'Widget A', price: 1299.5, score: 0.92, progress: 0.75, status: 'Active' },
  { id: '2', name: 'Widget B', price: 899.99, score: 0.88, progress: 0.5, status: 'Draft' },
  { id: '3', name: 'Widget C', price: 2499, score: 0.95, progress: 1, status: 'Active' },
];
const productColumns: DataTableColumn<Product>[] = [
  { id: 'name', header: 'Product', accessor: 'name', sortable: true },
  {
    id: 'price',
    header: 'Price',
    accessor: 'price',
    sortable: true,
    format: 'currency',
    formatOptions: { currency: 'USD', decimals: 2 },
  },
  {
    id: 'score',
    header: 'Score',
    accessor: 'score',
    sortable: true,
    format: 'number',
    formatOptions: { decimals: 2 },
  },
  {
    id: 'progress',
    header: 'Progress',
    accessor: 'progress',
    sortable: true,
    format: 'percent',
    formatOptions: { decimals: 0 },
  },
  {
    id: 'status',
    header: 'Status',
    accessor: 'status',
    format: 'badge',
    formatOptions: { variantMap: { Active: 'default', Draft: 'secondary' }, defaultVariant: 'outline' },
  },
];

export const WithNumberAndCurrencyFormats: Story = {
  parameters: {
    docs: { description: { story: 'Number formats: currency (USD), number (decimals), percent. Status as badge.' } },
  },
  args: {
    data: productData,
    columns: productColumns,
    getRowId: (row: Product) => row.id,
    emptyMessage: 'No products',
  } as unknown as Story['args'],
};

export const WithSelectionAndBulkActions: Story = {
  parameters: {
    docs: { description: { story: 'Multi-select with checkboxes; bulk actions bar when rows are selected (Delete selected, Export).' } },
  },
  args: {
    data: sampleData,
    columns: baseColumns.map(({ filterable, filterType, filterOptions, filterPlaceholder, ...c }) => c),
    getRowId: (row) => row.id,
    enableSelection: true,
    bulkActions: [
      {
        id: 'delete',
        label: 'Delete selected',
        icon: <Trash2 className="mr-2 h-4 w-4" />,
        variant: 'destructive',
        onClick: fn(),
      },
      {
        id: 'export',
        label: 'Export selected',
        icon: <Download className="mr-2 h-4 w-4" />,
        variant: 'outline',
        onClick: fn(),
      },
    ] as DataTableBulkAction<User>[],
    pagination: { pageSize: 5 },
    emptyMessage: 'No users found',
  },
};

export const WithRowActions: Story = {
  parameters: {
    docs: { description: { story: 'Per-row actions dropdown (Edit, Delete) in the Actions column.' } },
  },
  args: {
    data: sampleData,
    columns: baseColumns.map(({ filterable, filterType, filterOptions, filterPlaceholder, ...c }) => c),
    getRowId: (row) => row.id,
    rowActions: [
      {
        id: 'edit',
        label: 'Edit',
        icon: <Pencil className="mr-2 h-4 w-4" />,
        onClick: fn(),
      },
      {
        id: 'delete',
        label: 'Delete',
        icon: <Trash2 className="mr-2 h-4 w-4" />,
        variant: 'destructive',
        onClick: fn(),
      },
    ] as DataTableRowAction<User>[],
    pagination: { pageSize: 5 },
    emptyMessage: 'No users found',
  },
};

export const WithConditionalRowActions: Story = {
  parameters: {
    docs: { description: { story: 'Row actions as a function: "Admin action" only for Admin role; Delete only when status is Active.' } },
  },
  args: {
    data: sampleData,
    columns: baseColumns.map(({ filterable, filterType, filterOptions, filterPlaceholder, ...c }) => c),
    getRowId: (row) => row.id,
    rowActions: (row): DataTableRowAction<User>[] => [
      {
        id: 'edit',
        label: 'Edit',
        icon: <Pencil className="mr-2 h-4 w-4" />,
        onClick: fn(),
      },
      ...(row.role === 'Admin'
        ? [{ id: 'admin-only', label: 'Admin action', onClick: fn() } as DataTableRowAction<User>]
        : []),
      {
        id: 'delete',
        label: 'Delete',
        icon: <Trash2 className="mr-2 h-4 w-4" />,
        variant: 'destructive',
        when: (r) => r.status === 'Active',
        onClick: fn(),
      },
    ],
    pagination: { pageSize: 5 },
    emptyMessage: 'No users found',
  },
};

export const FullFeatured: Story = {
  parameters: {
    docs: { description: { story: 'All features: filters, sorting, badge/date formats, selection, bulk actions, row actions, pagination, caption.' } },
  },
  args: {
    data: sampleData,
    columns: fullFeaturedColumns,
    getRowId: (row) => row.id,
    enableSelection: true,
    bulkActions: [
      { id: 'delete', label: 'Delete selected', icon: <Trash2 className="mr-2 h-4 w-4" />, variant: 'destructive', onClick: fn() },
      { id: 'export', label: 'Export', icon: <Download className="mr-2 h-4 w-4" />, variant: 'outline', onClick: fn() },
    ] as DataTableBulkAction<User>[],
    rowActions: [
      { id: 'edit', label: 'Edit', icon: <Pencil className="mr-2 h-4 w-4" />, onClick: fn() },
      { id: 'delete', label: 'Delete', icon: <Trash2 className="mr-2 h-4 w-4" />, variant: 'destructive', onClick: fn() },
    ] as DataTableRowAction<User>[],
    pagination: { pageSize: 5, pageSizeOptions: [5, 10, 20], showPageSizeSelector: true },
    defaultSorting: { columnId: 'name', direction: 'asc' },
    emptyMessage: 'No users found',
    caption: 'User management',
  },
};

export const Empty: Story = {
  parameters: {
    docs: { description: { story: 'Empty state: custom emptyMessage when there is no data.' } },
  },
  args: {
    data: [],
    columns: baseColumns.map(({ filterable, filterType, filterOptions, filterPlaceholder, ...c }) => c),
    getRowId: (row) => row.id,
    pagination: { pageSize: 5 },
    emptyMessage: 'No users yet. Add your first user to get started.',
  },
};

export const Loading: Story = {
  parameters: {
    docs: { description: { story: 'Loading overlay when \`isLoading\` is true.' } },
  },
  args: {
    data: sampleData.slice(0, 3),
    columns: baseColumns.map(({ filterable, filterType, filterOptions, filterPlaceholder, ...c }) => c),
    getRowId: (row) => row.id,
    pagination: { pageSize: 5 },
    isLoading: true,
    emptyMessage: 'No users found',
  },
};

// ——— Examples: JSON config + LayoutRenderer (same chunk to avoid dynamic import failure) ———

/** Dashboard: Breadcrumb + summary cards (from context) + Card(DataTable). Config in example-configs.ts. */
export const ExampleDashboardWithTable: Story = {
  render: function ExampleDashboardWithTableRender() {
    const activeCount = sampleData.filter((u) => u.status === 'Active').length;
    const inactiveCount = sampleData.filter((u) => u.status === 'Inactive').length;
    const initialContext = {
      users_data: sampleData,
      users_total: sampleData.length,
      users_active: activeCount,
      users_inactive: inactiveCount,
    };
    return <LayoutRenderer config={dashboardConfig} initialContext={initialContext} />;
  },
  parameters: {
    docs: {
      description: {
        story:
          'JSON config: flex → Breadcrumb, grid of Cards (summary), Card(DataTable). Data and counts from initialContext (users_data, users_total, users_active, users_inactive).',
      },
    },
  },
};

/** Master-detail: DataTable rowActions set context (selectedUser, sheetOpen); Sheet open from context, closeContextKeys clear on close. */
export const ExampleMasterDetailWithSheet: Story = {
  render: function ExampleMasterDetailWithSheetRender() {
    const initialContext = {
      users_data: sampleData,
      sheetOpen: false,
      selectedUser: null,
    };
    return <LayoutRenderer config={masterDetailConfig} initialContext={initialContext} />;
  },
  parameters: {
    docs: {
      description: {
        story:
          'JSON config: Card(DataTable with rowActions setContext: { selectedUser: "row", sheetOpen: true }) + Sheet (open: {{sheetOpen}}, closeContextKeys). LayoutRenderer injects rowActions onClick and Sheet onOpenChange.',
      },
    },
  },
};

/** Tabs + DataTable: tab value and filtered data from context; onValueChangeContextKey updates context. */
export const ExampleTabsWithDataTable: Story = {
  render: function ExampleTabsWithDataTableRender() {
    const activeData = sampleData.filter((u) => u.status === 'Active');
    const inactiveData = sampleData.filter((u) => u.status === 'Inactive');
    const initialContext = {
      tab_value: 'all',
      users_data: sampleData,
      users_data_active: activeData,
      users_data_inactive: inactiveData,
    };
    return <LayoutRenderer config={tabsWithTableConfig} initialContext={initialContext} />;
  },
  parameters: {
    docs: {
      description: {
        story:
          'JSON config: Card → Tabs (value: {{tab_value}}, onValueChangeContextKey: tab_value) + TabsContent per tab, each with DataTable (data from context).',
      },
    },
  },
};

/** Minimal: single DataTable from JSON (columns + getRowIdKey + data from context). */
export const ExampleDataTableFromJsonOnly: Story = {
  render: function ExampleDataTableFromJsonOnlyRender() {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'Card',
      },
      children: [
        {
          type: 'component',
          props: { component: 'CardHeader' },
          children: [
            { type: 'component', props: { component: 'CardTitle', componentProps: { children: 'Users' } } },
            { type: 'component', props: { component: 'CardDescription', componentProps: { children: 'DataTable driven by JSON config + context.' } } },
          ],
        },
        {
          type: 'component',
          props: { component: 'CardContent' },
          children: [
            {
              type: 'component',
              props: {
                component: 'DataTable',
                componentProps: {
                  data: '{{users_data}}',
                  getRowIdKey: 'id',
                  columns: dataTableColumnsConfig,
                  pagination: { pageSize: 5, pageSizeOptions: [5, 10], showPageSizeSelector: true },
                  emptyMessage: 'No users found',
                },
              },
            },
          ],
        },
      ],
    };
    return <LayoutRenderer config={config} initialContext={{ users_data: sampleData }} />;
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal example: Card(DataTable) with data from context, columns and getRowIdKey from JSON. No row actions.',
      },
    },
  },
};
