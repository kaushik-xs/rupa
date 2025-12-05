import type { Meta, StoryObj } from '@storybook/react';
import { FlowLayout } from './FlowLayout';
import { Box } from '../Box/Box';

const meta: Meta<typeof FlowLayout> = {
  title: 'Layouts/FlowLayout',
  component: FlowLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FlowLayout>;

export const Default: Story = {
  render: () => (
    <FlowLayout
      width={800}
      height={600}
      nodes={[
        { id: 'node1', x: 200, y: 150, label: 'Node 1', content: <Box padding={2}>Start</Box> },
        { id: 'node2', x: 400, y: 150, label: 'Node 2', content: <Box padding={2}>Process</Box> },
        { id: 'node3', x: 600, y: 150, label: 'Node 3', content: <Box padding={2}>End</Box> },
      ]}
      edges={[
        { id: 'edge1', from: 'node1', to: 'node2', label: 'Step 1' },
        { id: 'edge2', from: 'node2', to: 'node3', label: 'Step 2' },
      ]}
    />
  ),
};

export const ComplexFlow: Story = {
  render: () => (
    <FlowLayout
      width={1000}
      height={700}
      nodes={[
        { id: 'start', x: 100, y: 350, label: 'Start', content: <Box padding={2}>Start</Box> },
        { id: 'decision', x: 300, y: 350, label: 'Decision', content: <Box padding={2}>Decision</Box> },
        { id: 'process1', x: 500, y: 250, label: 'Process A', content: <Box padding={2}>Process A</Box> },
        { id: 'process2', x: 500, y: 450, label: 'Process B', content: <Box padding={2}>Process B</Box> },
        { id: 'end', x: 700, y: 350, label: 'End', content: <Box padding={2}>End</Box> },
      ]}
      edges={[
        { id: 'e1', from: 'start', to: 'decision', label: 'Begin' },
        { id: 'e2', from: 'decision', to: 'process1', label: 'Yes' },
        { id: 'e3', from: 'decision', to: 'process2', label: 'No' },
        { id: 'e4', from: 'process1', to: 'end', label: 'Complete' },
        { id: 'e5', from: 'process2', to: 'end', label: 'Complete' },
      ]}
    />
  ),
};

export const WithoutEdges: Story = {
  render: () => (
    <FlowLayout
      width={800}
      height={600}
      showEdges={false}
      nodes={[
        { id: 'node1', x: 200, y: 150, label: 'Node 1', content: <Box padding={2}>Node 1</Box> },
        { id: 'node2', x: 400, y: 250, label: 'Node 2', content: <Box padding={2}>Node 2</Box> },
        { id: 'node3', x: 600, y: 350, label: 'Node 3', content: <Box padding={2}>Node 3</Box> },
      ]}
    />
  ),
};

