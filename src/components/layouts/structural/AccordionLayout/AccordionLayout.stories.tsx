import type { Meta, StoryObj } from '@storybook/react';
import { AccordionLayout } from './AccordionLayout';
import { Box } from '../../primitives/Box/Box';

const meta: Meta<typeof AccordionLayout> = {
  title: 'Layouts/AccordionLayout',
  component: AccordionLayout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AccordionLayout>;

export const Default: Story = {
  render: () => (
    <AccordionLayout
      type="single"
      items={[
        {
          value: 'item1',
          title: 'Item 1',
          content: (
            <Box padding={4} background="muted">
              <p>Content for item 1</p>
            </Box>
          ),
        },
        {
          value: 'item2',
          title: 'Item 2',
          content: (
            <Box padding={4} background="muted">
              <p>Content for item 2</p>
            </Box>
          ),
        },
        {
          value: 'item3',
          title: 'Item 3',
          content: (
            <Box padding={4} background="muted">
              <p>Content for item 3</p>
            </Box>
          ),
        },
      ]}
    />
  ),
};

export const Multiple: Story = {
  render: () => (
    <AccordionLayout
      type="multiple"
      items={[
        {
          value: 'item1',
          title: 'Item 1',
          content: (
            <Box padding={4} background="muted">
              <p>Content for item 1</p>
            </Box>
          ),
        },
        {
          value: 'item2',
          title: 'Item 2',
          content: (
            <Box padding={4} background="muted">
              <p>Content for item 2</p>
            </Box>
          ),
        },
        {
          value: 'item3',
          title: 'Item 3',
          content: (
            <Box padding={4} background="muted">
              <p>Content for item 3</p>
            </Box>
          ),
        },
      ]}
    />
  ),
};

export const DefaultOpen: Story = {
  render: () => (
    <AccordionLayout
      type="single"
      defaultValue="item2"
      items={[
        {
          value: 'item1',
          title: 'Item 1',
          content: (
            <Box padding={4} background="muted">
              <p>Content for item 1</p>
            </Box>
          ),
        },
        {
          value: 'item2',
          title: 'Item 2 (Open by default)',
          content: (
            <Box padding={4} background="muted">
              <p>This item is open by default</p>
            </Box>
          ),
        },
        {
          value: 'item3',
          title: 'Item 3',
          content: (
            <Box padding={4} background="muted">
              <p>Content for item 3</p>
            </Box>
          ),
        },
      ]}
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <AccordionLayout
      type="single"
      items={[
        {
          value: 'item1',
          title: 'Item 1',
          content: (
            <Box padding={4} background="muted">
              <p>Content for item 1</p>
            </Box>
          ),
        },
        {
          value: 'item2',
          title: 'Item 2 (Disabled)',
          disabled: true,
          content: (
            <Box padding={4} background="muted">
              <p>This item is disabled</p>
            </Box>
          ),
        },
        {
          value: 'item3',
          title: 'Item 3',
          content: (
            <Box padding={4} background="muted">
              <p>Content for item 3</p>
            </Box>
          ),
        },
      ]}
    />
  ),
};

