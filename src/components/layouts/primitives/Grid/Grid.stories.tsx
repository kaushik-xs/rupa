import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';
import { Box } from '../Box/Box';

const meta: Meta<typeof Grid> = {
  title: 'Layouts/Grid',
  component: Grid,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  render: () => (
    <Grid columns={3} gap={4}>
      {Array.from({ length: 6 }).map((_, i) => (
        <Box key={i} padding={4} background="muted">
          Item {i + 1}
        </Box>
      ))}
    </Grid>
  ),
};

export const Columns: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2 font-semibold">2 Columns</h3>
        <Grid columns={2} gap={4}>
          {Array.from({ length: 4 }).map((_, i) => (
            <Box key={i} padding={4} background="muted">
              Item {i + 1}
            </Box>
          ))}
        </Grid>
      </div>
      <div>
        <h3 className="mb-2 font-semibold">4 Columns</h3>
        <Grid columns={4} gap={4}>
          {Array.from({ length: 8 }).map((_, i) => (
            <Box key={i} padding={4} background="muted">
              Item {i + 1}
            </Box>
          ))}
        </Grid>
      </div>
    </div>
  ),
};

export const Responsive: Story = {
  render: () => (
    <Grid columns={{ default: 1, sm: 2, md: 3, lg: 4 }} gap={4}>
      {Array.from({ length: 12 }).map((_, i) => (
        <Box key={i} padding={4} background="muted">
          Item {i + 1}
        </Box>
      ))}
    </Grid>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

export const Rows: Story = {
  render: () => (
    <Grid columns={3} rows={2} gap={4} className="h-64">
      {Array.from({ length: 6 }).map((_, i) => (
        <Box key={i} padding={4} background="muted">
          Item {i + 1}
        </Box>
      ))}
    </Grid>
  ),
};

export const AutoFit: Story = {
  render: () => (
    <Grid autoFit gap={4} className="min-w-[200px]">
      {Array.from({ length: 8 }).map((_, i) => (
        <Box key={i} padding={4} background="muted" className="min-w-[150px]">
          Item {i + 1}
        </Box>
      ))}
    </Grid>
  ),
};

