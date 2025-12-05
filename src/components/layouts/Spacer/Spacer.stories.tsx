import type { Meta, StoryObj } from '@storybook/react';
import { Spacer } from './Spacer';
import { Flex } from '../Flex/Flex';
import { Box } from '../Box/Box';

const meta: Meta<typeof Spacer> = {
  title: 'Layouts/Spacer',
  component: Spacer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Default: Story = {
  render: () => (
    <Flex direction="row" className="h-32 border">
      <Box padding={4} background="primary" className="text-primary-foreground">
        Start
      </Box>
      <Spacer />
      <Box padding={4} background="primary" className="text-primary-foreground">
        End
      </Box>
    </Flex>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Flex direction="column" className="h-64 border">
      <Box padding={4} background="primary" className="text-primary-foreground">
        Top
      </Box>
      <Spacer />
      <Box padding={4} background="primary" className="text-primary-foreground">
        Bottom
      </Box>
    </Flex>
  ),
};

export const FixedSize: Story = {
  render: () => (
    <Flex direction="row" className="h-32 border">
      <Box padding={4} background="muted">Item 1</Box>
      <Spacer width={32} height={8} background="muted" border className="border-dashed" />
      <Box padding={4} background="muted">Item 2</Box>
    </Flex>
  ),
};

export const FlexValue: Story = {
  render: () => (
    <Flex direction="row" className="h-32 border">
      <Box padding={4} background="muted">Item 1</Box>
      <Spacer flex={2} background="muted" className="opacity-50" />
      <Box padding={4} background="muted">Item 2</Box>
      <Spacer flex={1} background="muted" className="opacity-50" />
      <Box padding={4} background="muted">Item 3</Box>
    </Flex>
  ),
};

