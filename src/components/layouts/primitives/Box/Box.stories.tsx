import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';

const meta: Meta<typeof Box> = {
  title: 'Layouts/Box',
  component: Box,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
  render: () => (
    <Box padding={4} background="muted" border borderRadius="md">
      <p>This is a Box component with padding, background, border, and border radius.</p>
    </Box>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div className="space-y-4">
      <Box padding={2} background="muted">
        Padding: 2
      </Box>
      <Box padding={4} background="muted">
        Padding: 4
      </Box>
      <Box padding={6} background="muted">
        Padding: 6
      </Box>
      <Box paddingX={8} paddingY={2} background="muted">
        Padding X: 8, Y: 2
      </Box>
    </div>
  ),
};

export const Margins: Story = {
  render: () => (
    <Box margin={4} padding={4} background="muted" border>
      <p>Box with margin and padding</p>
    </Box>
  ),
};

export const Shadows: Story = {
  render: () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <Box padding={4} shadow="sm">
        Shadow: sm
      </Box>
      <Box padding={4} shadow="md">
        Shadow: md
      </Box>
      <Box padding={4} shadow="lg">
        Shadow: lg
      </Box>
      <Box padding={4} shadow="xl">
        Shadow: xl
      </Box>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Box width="100%" height={100} padding={4} background="muted" border>
        Width: 100%, Height: 100px
      </Box>
      <Box maxWidth="md" padding={4} background="muted" border>
        Max Width: md
      </Box>
    </div>
  ),
};

