import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from './Stack';
import { Box } from '../Box/Box';

const meta: Meta<typeof Stack> = {
  title: 'Layouts/Stack',
  component: Stack,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  render: () => (
    <Stack spacing={4}>
      <Box padding={4} background="muted">Item 1</Box>
      <Box padding={4} background="muted">Item 2</Box>
      <Box padding={4} background="muted">Item 3</Box>
    </Stack>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Stack direction="column" spacing={4}>
      <Box padding={4} background="muted">Item 1</Box>
      <Box padding={4} background="muted">Item 2</Box>
      <Box padding={4} background="muted">Item 3</Box>
    </Stack>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Stack direction="row" spacing={4}>
      <Box padding={4} background="muted">Item 1</Box>
      <Box padding={4} background="muted">Item 2</Box>
      <Box padding={4} background="muted">Item 3</Box>
    </Stack>
  ),
};

export const Spacing: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2 font-semibold">Spacing: 2</h3>
        <Stack spacing={2}>
          <Box padding={2} background="muted">Item 1</Box>
          <Box padding={2} background="muted">Item 2</Box>
          <Box padding={2} background="muted">Item 3</Box>
        </Stack>
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Spacing: 8</h3>
        <Stack spacing={8}>
          <Box padding={2} background="muted">Item 1</Box>
          <Box padding={2} background="muted">Item 2</Box>
          <Box padding={2} background="muted">Item 3</Box>
        </Stack>
      </div>
    </div>
  ),
};

