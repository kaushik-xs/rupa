/**
 * JSON-compatible layout configs for DataTable examples.
 * Rendered via LayoutRenderer with initialContext (e.g. users_data).
 * All structure is primitive-driven (flex, container, component + componentProps).
 */
import type { LayoutNode } from '../../types/layout';

/** Shared DataTable columns config (JSON-serializable) */
export const dataTableColumnsConfig = [
  { id: 'name', header: 'Name', accessor: 'name', sortable: true },
  { id: 'email', header: 'Email', accessor: 'email', sortable: true },
  {
    id: 'role',
    header: 'Role',
    accessor: 'role',
    sortable: true,
    cellConfig: { type: 'badge', variantMap: { Admin: 'default', Editor: 'info', User: 'secondary' }, defaultVariant: 'outline' },
  },
  {
    id: 'status',
    header: 'Status',
    accessor: 'status',
    sortable: true,
    cellConfig: { type: 'badge', variantMap: { Active: 'success', Inactive: 'secondary' }, defaultVariant: 'outline' },
  },
  { id: 'createdAt', header: 'Created', accessor: 'createdAt', sortable: true, cellConfig: { type: 'date', dateStyle: 'medium' } },
];

/** Dashboard: Breadcrumb + summary cards + Card(DataTable) */
export const dashboardConfig: LayoutNode = {
  type: 'flex',
  id: 'dashboard-root',
  props: { direction: 'column', gap: 6, className: 'min-h-0' },
  children: [
    {
      type: 'component',
      id: 'breadcrumb',
      props: { component: 'Breadcrumb' },
      children: [
        {
          type: 'component',
          props: { component: 'BreadcrumbList' },
          children: [
            { type: 'component', props: { component: 'BreadcrumbItem' }, children: [{ type: 'component', props: { component: 'BreadcrumbLink', componentProps: { href: '#', children: 'Home' } } }] },
            { type: 'component', props: { component: 'BreadcrumbSeparator' } },
            { type: 'component', props: { component: 'BreadcrumbItem' }, children: [{ type: 'component', props: { component: 'BreadcrumbLink', componentProps: { href: '#', children: 'Users' } } }] },
            { type: 'component', props: { component: 'BreadcrumbSeparator' } },
            { type: 'component', props: { component: 'BreadcrumbItem' }, children: [{ type: 'component', props: { component: 'BreadcrumbPage', componentProps: { children: 'Dashboard' } } }] },
          ],
        },
      ],
    },
    {
      type: 'grid',
      props: { columns: { default: 1, md: 3 }, gap: 4 },
      children: [
        {
          type: 'component',
          props: { component: 'Card' },
          children: [
            {
              type: 'component',
              props: { component: 'CardHeader', componentProps: { className: 'flex flex-row items-center justify-between space-y-0 pb-2' } },
              children: [{ type: 'component', props: { component: 'CardTitle', componentProps: { className: 'text-sm font-medium', children: 'Total users' } } }],
            },
            {
              type: 'component',
              props: { component: 'CardContent' },
              children: [{ type: 'component', props: { component: 'Box', componentProps: { children: '{{users_total}}' } } }],
            },
          ],
        },
        {
          type: 'component',
          props: { component: 'Card' },
          children: [
            {
              type: 'component',
              props: { component: 'CardHeader', componentProps: { className: 'flex flex-row items-center justify-between space-y-0 pb-2' } },
              children: [{ type: 'component', props: { component: 'CardTitle', componentProps: { className: 'text-sm font-medium', children: 'Active' } } }],
            },
            {
              type: 'component',
              props: { component: 'CardContent' },
              children: [{ type: 'component', props: { component: 'Box', componentProps: { children: '{{users_active}}' } } }],
            },
          ],
        },
        {
          type: 'component',
          props: { component: 'Card' },
          children: [
            {
              type: 'component',
              props: { component: 'CardHeader', componentProps: { className: 'flex flex-row items-center justify-between space-y-0 pb-2' } },
              children: [{ type: 'component', props: { component: 'CardTitle', componentProps: { className: 'text-sm font-medium', children: 'Inactive' } } }],
            },
            {
              type: 'component',
              props: { component: 'CardContent' },
              children: [{ type: 'component', props: { component: 'Box', componentProps: { children: '{{users_inactive}}' } } }],
            },
          ],
        },
      ],
    },
    {
      type: 'component',
      props: { component: 'Card' },
      children: [
        {
          type: 'component',
          props: { component: 'CardHeader' },
          children: [
            { type: 'component', props: { component: 'CardTitle', componentProps: { children: 'Recent users' } } },
            { type: 'component', props: { component: 'CardDescription', componentProps: { children: 'Manage and view all users.' } } },
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
    },
  ],
};

/** Master-detail: DataTable with rowActions (setContext) + Sheet (open from context, closeContextKeys) */
export const masterDetailConfig: LayoutNode = {
  type: 'flex',
  id: 'master-detail-root',
  props: { direction: 'column', gap: 4 },
  children: [
    {
      type: 'component',
      props: { component: 'Card' },
      children: [
        {
          type: 'component',
          props: { component: 'CardHeader' },
          children: [
            { type: 'component', props: { component: 'CardTitle', componentProps: { children: 'Users' } } },
            { type: 'component', props: { component: 'CardDescription', componentProps: { children: 'Click "View details" to open the side panel.' } } },
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
                  pagination: { pageSize: 5 },
                  emptyMessage: 'No users found',
                  rowActions: [
                    { id: 'view', label: 'View details', setContext: { selectedUser: 'row', sheetOpen: true } },
                  ],
                },
              },
            },
          ],
        },
      ],
    },
    {
      type: 'component',
      id: 'sheet-detail',
      props: {
        component: 'Sheet',
        componentProps: {
          open: '{{sheetOpen}}',
          onOpenChange: undefined,
          closeContextKeys: ['sheetOpen', 'selectedUser'],
        },
      },
      children: [
        {
          type: 'component',
          props: { component: 'SheetContent', componentProps: { side: 'right', className: 'w-full sm:max-w-md' } },
          children: [
            {
              type: 'component',
              props: { component: 'SheetHeader' },
              children: [
                { type: 'component', props: { component: 'SheetTitle', componentProps: { children: '{{selectedUser.name}}' } } },
              ],
            },
            {
              type: 'flex',
              props: { direction: 'column', gap: 4, className: 'mt-6' },
              children: [
                { type: 'component', props: { component: 'Box' }, children: [{ type: 'component', props: { component: 'Label', componentProps: { children: 'Email' } } }] },
                { type: 'component', props: { component: 'Box' }, children: [{ type: 'component', props: { component: 'Box', componentProps: { children: '{{selectedUser.email}}', className: 'font-medium' } } }] },
                { type: 'component', props: { component: 'Separator' } },
                { type: 'component', props: { component: 'Box' }, children: [{ type: 'component', props: { component: 'Label', componentProps: { children: 'Role' } } }] },
                { type: 'component', props: { component: 'Box' }, children: [{ type: 'component', props: { component: 'Box', componentProps: { children: '{{selectedUser.role}}', className: 'font-medium' } } }] },
                { type: 'component', props: { component: 'Separator' } },
                { type: 'component', props: { component: 'Box' }, children: [{ type: 'component', props: { component: 'Label', componentProps: { children: 'Status' } } }] },
                { type: 'component', props: { component: 'Box' }, children: [{ type: 'component', props: { component: 'Box', componentProps: { children: '{{selectedUser.status}}', className: 'font-medium' } } }] },
              ],
            },
          ],
        },
      ],
    },
  ],
};

/** Tabs + DataTable: tabs filter data via context (tab value) */
export const tabsWithTableConfig: LayoutNode = {
  type: 'component',
  props: { component: 'Card' },
  children: [
    {
      type: 'component',
      props: { component: 'CardHeader' },
      children: [
        { type: 'component', props: { component: 'CardTitle', componentProps: { children: 'Users by status' } } },
        { type: 'component', props: { component: 'CardDescription', componentProps: { children: 'Switch tabs to filter the table.' } } },
      ],
    },
    {
      type: 'component',
      props: { component: 'CardContent' },
      children: [
        {
          type: 'component',
          props: { component: 'Tabs', componentProps: { value: '{{tab_value}}', onValueChangeContextKey: 'tab_value' } },
          children: [
            {
              type: 'component',
              props: { component: 'TabsList' },
              children: [
                { type: 'component', props: { component: 'TabsTrigger', componentProps: { value: 'all', children: 'All' } } },
                { type: 'component', props: { component: 'TabsTrigger', componentProps: { value: 'active', children: 'Active' } } },
                { type: 'component', props: { component: 'TabsTrigger', componentProps: { value: 'inactive', children: 'Inactive' } } },
              ],
            },
            {
              type: 'component',
              props: { component: 'TabsContent', componentProps: { value: 'all', className: 'mt-4' } },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'DataTable',
                    componentProps: {
                      data: '{{users_data}}',
                      getRowIdKey: 'id',
                      columns: dataTableColumnsConfig,
                      pagination: { pageSize: 5 },
                      emptyMessage: 'No users',
                    },
                  },
                },
              ],
            },
            {
              type: 'component',
              props: { component: 'TabsContent', componentProps: { value: 'active', className: 'mt-4' } },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'DataTable',
                    componentProps: {
                      data: '{{users_data_active}}',
                      getRowIdKey: 'id',
                      columns: dataTableColumnsConfig,
                      pagination: { pageSize: 5 },
                      emptyMessage: 'No active users',
                    },
                  },
                },
              ],
            },
            {
              type: 'component',
              props: { component: 'TabsContent', componentProps: { value: 'inactive', className: 'mt-4' } },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'DataTable',
                    componentProps: {
                      data: '{{users_data_inactive}}',
                      getRowIdKey: 'id',
                      columns: dataTableColumnsConfig,
                      pagination: { pageSize: 5 },
                      emptyMessage: 'No inactive users',
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
