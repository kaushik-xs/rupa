import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';
import { Box } from '../Box/Box';

const meta: Meta<typeof Container> = {
  title: 'Layouts/Container',
  component: Container,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  render: () => (
    <Container>
      <Box padding={8} background="muted" border>
        <h2 className="text-2xl font-bold mb-4">Container Content</h2>
        <p>This is a container with default max-width (xl). It centers content and provides responsive padding.</p>
      </Box>
    </Container>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2 font-semibold">Max Width: sm</h3>
        <Container maxWidth="sm">
          <Box padding={4} background="muted" border>
            Small container
          </Box>
        </Container>
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Max Width: md</h3>
        <Container maxWidth="md">
          <Box padding={4} background="muted" border>
            Medium container
          </Box>
        </Container>
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Max Width: lg</h3>
        <Container maxWidth="lg">
          <Box padding={4} background="muted" border>
            Large container
          </Box>
        </Container>
      </div>
      <div>
        <h3 className="mb-2 font-semibold">Max Width: xl</h3>
        <Container maxWidth="xl">
          <Box padding={4} background="muted" border>
            Extra large container
          </Box>
        </Container>
      </div>
    </div>
  ),
};

export const CustomWidth: Story = {
  render: () => (
    <Container maxWidth={800}>
      <Box padding={8} background="muted" border>
        <p>Container with custom max-width of 800px</p>
      </Box>
    </Container>
  ),
};

