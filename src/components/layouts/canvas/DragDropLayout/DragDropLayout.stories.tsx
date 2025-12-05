import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { DragDropLayout } from './DragDropLayout';
import { Box } from '../../primitives/Box/Box';

const meta: Meta<typeof DragDropLayout> = {
  title: 'Layouts/DragDropLayout',
  component: DragDropLayout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DragDropLayout>;

export const Default: Story = {
  render: () => (
    <DragDropLayout
      items={[
        { id: 'item1', content: <Box className="p-4 bg-muted">Item 1 - Drag me</Box> },
        { id: 'item2', content: <Box className="p-4 bg-muted">Item 2 - Drag me</Box> },
        { id: 'item3', content: <Box className="p-4 bg-muted">Item 3 - Drag me</Box> },
        { id: 'item4', content: <Box className="p-4 bg-muted">Item 4 - Drag me</Box> },
      ]}
    />
  ),
};

export const Horizontal: Story = {
  render: () => (
    <DragDropLayout
      direction="horizontal"
      items={[
        { id: 'item1', content: <Box className="p-4 bg-muted">Item 1</Box> },
        { id: 'item2', content: <Box className="p-4 bg-muted">Item 2</Box> },
        { id: 'item3', content: <Box className="p-4 bg-muted">Item 3</Box> },
      ]}
    />
  ),
};

export const WithoutHandle: Story = {
  render: () => (
    <DragDropLayout
      handle={false}
      items={[
        { id: 'item1', content: <Box className="p-4 bg-muted">Drag anywhere</Box> },
        { id: 'item2', content: <Box className="p-4 bg-muted">Drag anywhere</Box> },
        { id: 'item3', content: <Box className="p-4 bg-muted">Drag anywhere</Box> },
      ]}
    />
  ),
};

export const WithReorder: Story = {
  render: () => {
    const [items, setItems] = useState([
      { id: 'item1', content: <Box className="p-4 bg-muted">Item 1</Box> },
      { id: 'item2', content: <Box className="p-4 bg-muted">Item 2</Box> },
      { id: 'item3', content: <Box className="p-4 bg-muted">Item 3</Box> },
    ]);
    return (
      <div>
        <p className="mb-4 text-sm text-muted-foreground">
          Reordered: {items.map((item) => item.id).join(', ')}
        </p>
        <DragDropLayout
          items={items}
          onReorder={(newOrder: string[]) => {
            setItems(newOrder.map((id: string) => items.find((item) => item.id === id)!));
          }}
        />
      </div>
    );
  },
};

