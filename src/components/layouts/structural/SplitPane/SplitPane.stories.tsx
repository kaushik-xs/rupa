import type { Meta, StoryObj } from '@storybook/react';
import { SplitPane } from './SplitPane';
import { Box } from '../../primitives/Box/Box';

const meta: Meta<typeof SplitPane> = {
  title: 'Layouts/SplitPane',
  component: SplitPane,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SplitPane>;

export const Default: Story = {
  render: () => (
    <div className="h-96">
      <SplitPane>
        <Box padding={8} background="muted" className="h-full">
          <h3 className="font-semibold mb-4">Left Panel</h3>
          <p>This is the left panel. Drag the handle to resize.</p>
        </Box>
        <Box padding={8} background="card" className="h-full">
          <h3 className="font-semibold mb-4">Right Panel</h3>
          <p>This is the right panel.</p>
        </Box>
      </SplitPane>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div className="h-96">
      <SplitPane direction="vertical">
        <Box padding={8} background="muted" className="h-full">
          <h3 className="font-semibold mb-4">Top Panel</h3>
          <p>This is the top panel.</p>
        </Box>
        <Box padding={8} background="card" className="h-full">
          <h3 className="font-semibold mb-4">Bottom Panel</h3>
          <p>This is the bottom panel.</p>
        </Box>
      </SplitPane>
    </div>
  ),
};

export const ThreePanels: Story = {
  render: () => (
    <div className="h-96">
      <SplitPane>
        <Box padding={8} background="muted" className="h-full">
          Panel 1
        </Box>
        <Box padding={8} background="card" className="h-full">
          Panel 2
        </Box>
        <Box padding={8} background="muted" className="h-full">
          Panel 3
        </Box>
      </SplitPane>
    </div>
  ),
};

export const DefaultSizes: Story = {
  render: () => (
    <div className="h-96">
      <SplitPane defaultSizes={[25, 75]}>
        <Box padding={8} background="muted" className="h-full">
          <p>25% width</p>
        </Box>
        <Box padding={8} background="card" className="h-full">
          <p>75% width</p>
        </Box>
      </SplitPane>
    </div>
  ),
};

