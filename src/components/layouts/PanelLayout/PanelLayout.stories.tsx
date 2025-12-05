import type { Meta, StoryObj } from '@storybook/react';
import { PanelLayout } from './PanelLayout';
import { Box } from '../Box/Box';

const meta: Meta<typeof PanelLayout> = {
  title: 'Layouts/PanelLayout',
  component: PanelLayout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PanelLayout>;

export const Default: Story = {
  render: () => (
    <PanelLayout
      panels={[
        {
          id: 'panel1',
          title: 'Panel 1',
          content: (
            <Box padding={4} background="muted">
              <p>Content for panel 1</p>
            </Box>
          ),
        },
        {
          id: 'panel2',
          title: 'Panel 2',
          content: (
            <Box padding={4} background="muted">
              <p>Content for panel 2</p>
            </Box>
          ),
        },
        {
          id: 'panel3',
          title: 'Panel 3',
          content: (
            <Box padding={4} background="muted">
              <p>Content for panel 3</p>
            </Box>
          ),
        },
      ]}
    />
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <PanelLayout
      panels={[
        {
          id: 'panel1',
          title: 'Panel 1 (Open by default)',
          defaultOpen: true,
          content: (
            <Box padding={4} background="muted">
              <p>This panel is open by default</p>
            </Box>
          ),
        },
        {
          id: 'panel2',
          title: 'Panel 2',
          content: (
            <Box padding={4} background="muted">
              <p>Content for panel 2</p>
            </Box>
          ),
        },
      ]}
    />
  ),
};

export const SingleOpen: Story = {
  render: () => (
    <PanelLayout
      allowMultipleOpen={false}
      panels={[
        {
          id: 'panel1',
          title: 'Panel 1',
          content: (
            <Box padding={4} background="muted">
              <p>Only one panel can be open at a time</p>
            </Box>
          ),
        },
        {
          id: 'panel2',
          title: 'Panel 2',
          content: (
            <Box padding={4} background="muted">
              <p>Opening this will close panel 1</p>
            </Box>
          ),
        },
        {
          id: 'panel3',
          title: 'Panel 3',
          content: (
            <Box padding={4} background="muted">
              <p>Content for panel 3</p>
            </Box>
          ),
        },
      ]}
    />
  ),
};

export const NonCollapsible: Story = {
  render: () => (
    <PanelLayout
      panels={[
        {
          id: 'panel1',
          title: 'Panel 1 (Always Open)',
          collapsible: false,
          content: (
            <Box padding={4} background="muted">
              <p>This panel cannot be collapsed</p>
            </Box>
          ),
        },
        {
          id: 'panel2',
          title: 'Panel 2',
          content: (
            <Box padding={4} background="muted">
              <p>This panel can be collapsed</p>
            </Box>
          ),
        },
      ]}
    />
  ),
};

