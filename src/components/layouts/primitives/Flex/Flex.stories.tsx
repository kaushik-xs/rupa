import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import { Box } from '../Box/Box';

const meta: Meta<typeof Flex> = {
  title: 'Layouts/Flex',
  component: Flex,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  render: () => (
    <Flex gap={4}>
      <Box padding={4} background="primary" className="text-primary-foreground">
        Item 1
      </Box>
      <Box padding={4} background="primary" className="text-primary-foreground">
        Item 2
      </Box>
      <Box padding={4} background="primary" className="text-primary-foreground">
        Item 3
      </Box>
    </Flex>
  ),
};

export const Directions: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2 font-semibold">Row (default)</h3>
        <Flex direction="row" gap={4}>
          <Box padding={4} background="muted">1</Box>
          <Box padding={4} background="muted">2</Box>
          <Box padding={4} background="muted">3</Box>
        </Flex>
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Column</h3>
        <Flex direction="column" gap={4}>
          <Box padding={4} background="muted">1</Box>
          <Box padding={4} background="muted">2</Box>
          <Box padding={4} background="muted">3</Box>
        </Flex>
      </div>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2 font-semibold">Justify: Start</h3>
        <Flex justify="start" gap={4} className="border p-4">
          <Box padding={2} background="primary" className="text-primary-foreground">Item</Box>
        </Flex>
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Justify: Center</h3>
        <Flex justify="center" gap={4} className="border p-4">
          <Box padding={2} background="primary" className="text-primary-foreground">Item</Box>
        </Flex>
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Justify: Between</h3>
        <Flex justify="between" gap={4} className="border p-4">
          <Box padding={2} background="primary" className="text-primary-foreground">Item 1</Box>
          <Box padding={2} background="primary" className="text-primary-foreground">Item 2</Box>
        </Flex>
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Align: Center</h3>
        <Flex align="center" gap={4} className="border p-4 h-24">
          <Box padding={2} background="primary" className="text-primary-foreground">Short</Box>
          <Box padding={4} background="primary" className="text-primary-foreground">Taller Item</Box>
        </Flex>
      </div>
    </div>
  ),
};

export const Wrap: Story = {
  render: () => (
    <Flex wrap gap={4} className="max-w-md border p-4">
      {Array.from({ length: 10 }).map((_, i) => (
        <Box key={i} padding={4} background="muted" className="min-w-[100px]">
          Item {i + 1}
        </Box>
      ))}
    </Flex>
  ),
};

export const ResponsiveGap: Story = {
  render: () => (
    <Flex gap={{ default: 2, md: 4, lg: 8 }} className="border p-4">
      <Box padding={4} background="muted">Item 1</Box>
      <Box padding={4} background="muted">Item 2</Box>
      <Box padding={4} background="muted">Item 3</Box>
    </Flex>
  ),
  parameters: {
    layout: 'fullscreen',
  },
};

