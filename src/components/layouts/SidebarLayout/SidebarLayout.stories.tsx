import type { Meta, StoryObj } from '@storybook/react';
import { SidebarLayout } from './SidebarLayout';
import { Box } from '../Box/Box';

const meta: Meta<typeof SidebarLayout> = {
  title: 'Layouts/SidebarLayout',
  component: SidebarLayout,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SidebarLayout>;

export const Default: Story = {
  render: () => (
    <SidebarLayout
      sidebar={
        <Box padding={4} background="muted" className="h-full">
          <h3 className="font-semibold mb-4">Sidebar</h3>
          <ul className="space-y-2">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </Box>
      }
      content={
        <Box padding={8} background="card">
          <h2 className="text-2xl font-bold mb-4">Main Content</h2>
          <p>This is the main content area. The sidebar is on the left by default.</p>
        </Box>
      }
    />
  ),
};

export const RightSidebar: Story = {
  render: () => (
    <SidebarLayout
      sidebarPosition="right"
      sidebarWidth={300}
      sidebar={
        <Box padding={4} background="muted" className="h-full">
          <h3 className="font-semibold mb-4">Right Sidebar</h3>
          <p>This sidebar is on the right side.</p>
        </Box>
      }
      content={
        <Box padding={8} background="card">
          <h2 className="text-2xl font-bold mb-4">Main Content</h2>
          <p>Content with sidebar on the right.</p>
        </Box>
      }
    />
  ),
};

export const CustomWidth: Story = {
  render: () => (
    <SidebarLayout
      sidebarWidth={200}
      sidebar={
        <Box padding={4} background="muted" className="h-full">
          <h3 className="font-semibold">Narrow Sidebar</h3>
        </Box>
      }
      content={
        <Box padding={8} background="card">
          <h2 className="text-2xl font-bold mb-4">Main Content</h2>
          <p>Sidebar with custom width of 200px.</p>
        </Box>
      }
    />
  ),
};

