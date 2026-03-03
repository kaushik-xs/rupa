/**
 * Example column configs for DataTable.
 * Use with DataTable directly or with @json-render/react (catalog + registry) in your app.
 */

/** Shared DataTable columns config (JSON-serializable) */
export const dataTableColumnsConfig = [
  { id: 'name', header: 'Name', accessor: 'name', sortable: true },
  { id: 'email', header: 'Email', accessor: 'email', sortable: true },
  {
    id: 'role',
    header: 'Role',
    accessor: 'role',
    sortable: true,
    cellConfig: {
      type: 'badge',
      variantMap: { Admin: 'default', Editor: 'info', User: 'secondary' },
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
      variantMap: { Active: 'success', Inactive: 'secondary' },
      defaultVariant: 'outline',
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
