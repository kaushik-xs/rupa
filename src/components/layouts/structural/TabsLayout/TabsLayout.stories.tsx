import type { Meta, StoryObj } from '@storybook/react';
import { TabsLayout } from './TabsLayout';
import { Box } from '../../primitives/Box/Box';

const meta: Meta<typeof TabsLayout> = {
  title: 'Layouts/TabsLayout',
  component: TabsLayout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TabsLayout>;

export const Default: Story = {
  render: () => (
    <TabsLayout
      defaultValue="tab1"
      tabs={[
        {
          value: 'tab1',
          label: 'Tab 1',
          content: (
            <Box padding={4} background="muted">
              <p>Content for Tab 1</p>
            </Box>
          ),
        },
        {
          value: 'tab2',
          label: 'Tab 2',
          content: (
            <Box padding={4} background="muted">
              <p>Content for Tab 2</p>
            </Box>
          ),
        },
        {
          value: 'tab3',
          label: 'Tab 3',
          content: (
            <Box padding={4} background="muted">
              <p>Content for Tab 3</p>
            </Box>
          ),
        },
      ]}
    />
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2 font-semibold">Default</h3>
        <TabsLayout
          defaultValue="tab1"
          tabs={[
            { value: 'tab1', label: 'Tab 1', content: <Box padding={4} background="muted">Content 1</Box> },
            { value: 'tab2', label: 'Tab 2', content: <Box padding={4} background="muted">Content 2</Box> },
          ]}
        />
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Pills</h3>
        <TabsLayout
          variant="pills"
          defaultValue="tab1"
          tabs={[
            { value: 'tab1', label: 'Tab 1', content: <Box padding={4} background="muted">Content 1</Box> },
            { value: 'tab2', label: 'Tab 2', content: <Box padding={4} background="muted">Content 2</Box> },
          ]}
        />
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Underline</h3>
        <TabsLayout
          variant="underline"
          defaultValue="tab1"
          tabs={[
            { value: 'tab1', label: 'Tab 1', content: <Box padding={4} background="muted">Content 1</Box> },
            { value: 'tab2', label: 'Tab 2', content: <Box padding={4} background="muted">Content 2</Box> },
          ]}
        />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <TabsLayout
      defaultValue="tab1"
      tabs={[
        {
          value: 'tab1',
          label: 'Tab 1',
          content: <Box padding={4} background="muted">Content 1</Box>,
        },
        {
          value: 'tab2',
          label: 'Tab 2 (Disabled)',
          disabled: true,
          content: <Box padding={4} background="muted">Content 2</Box>,
        },
        {
          value: 'tab3',
          label: 'Tab 3',
          content: <Box padding={4} background="muted">Content 3</Box>,
        },
      ]}
    />
  ),
};

