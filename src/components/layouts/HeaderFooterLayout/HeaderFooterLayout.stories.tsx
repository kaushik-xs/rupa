import type { Meta, StoryObj } from '@storybook/react';
import { HeaderFooterLayout } from './HeaderFooterLayout';
import { Box } from '../Box/Box';

const meta: Meta<typeof HeaderFooterLayout> = {
  title: 'Layouts/HeaderFooterLayout',
  component: HeaderFooterLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HeaderFooterLayout>;

export const Default: Story = {
  render: () => (
    <HeaderFooterLayout
      header={
        <Box padding={4} background="muted" border className="border-b">
          <h1 className="text-xl font-bold">Header</h1>
        </Box>
      }
      footer={
        <Box padding={4} background="muted" border className="border-t">
          <p className="text-sm text-muted-foreground">Footer</p>
        </Box>
      }
      body={
        <Box padding={8} background="card">
          <h2 className="text-2xl font-bold mb-4">Body Content</h2>
          <p>This is the main body content area that takes up the remaining space.</p>
        </Box>
      }
    />
  ),
};

export const HeaderOnly: Story = {
  render: () => (
    <HeaderFooterLayout
      header={
        <Box padding={4} background="muted" border className="border-b">
          <h1 className="text-xl font-bold">Header Only</h1>
        </Box>
      }
      body={
        <Box padding={8} background="card">
          <p>Content without footer</p>
        </Box>
      }
    />
  ),
};

export const FooterOnly: Story = {
  render: () => (
    <HeaderFooterLayout
      footer={
        <Box padding={4} background="muted" border className="border-t">
          <p className="text-sm text-muted-foreground">Footer Only</p>
        </Box>
      }
      body={
        <Box padding={8} background="card">
          <p>Content without header</p>
        </Box>
      }
    />
  ),
};

