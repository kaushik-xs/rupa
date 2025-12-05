import type { Meta, StoryObj } from '@storybook/react';
import { FreePositionLayout } from './FreePositionLayout';
import { Box } from '../Box/Box';

const meta: Meta<typeof FreePositionLayout> = {
  title: 'Layouts/FreePositionLayout',
  component: FreePositionLayout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FreePositionLayout>;

export const Default: Story = {
  render: () => (
    <FreePositionLayout width={600} height={400} background="muted" border className="relative">
      <FreePositionLayout
        items={[
          {
            id: 'item1',
            x: 50,
            y: 50,
            width: 150,
            height: 100,
            content: (
              <Box padding={4} background="primary" className="text-primary-foreground h-full">
                Item 1
              </Box>
            ),
          },
          {
            id: 'item2',
            x: 250,
            y: 100,
            width: 150,
            height: 100,
            content: (
              <Box padding={4} background="card" border className="h-full">
                Item 2
              </Box>
            ),
          },
          {
            id: 'item3',
            x: 100,
            y: 250,
            width: 200,
            height: 80,
            content: (
              <Box padding={4} background="secondary" className="text-secondary-foreground h-full">
                Item 3
              </Box>
            ),
          },
        ]}
      />
    </FreePositionLayout>
  ),
};

export const WithZIndex: Story = {
  render: () => (
    <FreePositionLayout width={600} height={400} background="muted" border className="relative">
      <FreePositionLayout
        items={[
          {
            id: 'item1',
            x: 100,
            y: 100,
            width: 200,
            height: 150,
            zIndex: 1,
            content: (
              <Box padding={4} background="primary" className="text-primary-foreground h-full opacity-80">
                Behind (z: 1)
              </Box>
            ),
          },
          {
            id: 'item2',
            x: 150,
            y: 150,
            width: 200,
            height: 150,
            zIndex: 2,
            content: (
              <Box padding={4} background="card" border className="h-full">
                Front (z: 2)
              </Box>
            ),
          },
        ]}
      />
    </FreePositionLayout>
  ),
};

