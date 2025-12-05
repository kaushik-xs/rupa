import type { Meta, StoryObj } from '@storybook/react';
import { StepperLayout } from './StepperLayout';
import { Box } from '../../primitives/Box/Box';

const meta: Meta<typeof StepperLayout> = {
  title: 'Layouts/StepperLayout',
  component: StepperLayout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StepperLayout>;

export const Default: Story = {
  render: () => (
    <StepperLayout
      currentStep={1}
      steps={[
        { id: 'step1', label: 'Step 1', description: 'First step' },
        { id: 'step2', label: 'Step 2', description: 'Second step' },
        { id: 'step3', label: 'Step 3', description: 'Third step' },
      ]}
    />
  ),
};

export const WithContent: Story = {
  render: () => (
    <StepperLayout
      currentStep={1}
      steps={[
        {
          id: 'step1',
          label: 'Step 1',
          description: 'First step',
          content: <Box padding={4} background="muted">Step 1 content</Box>,
        },
        {
          id: 'step2',
          label: 'Step 2',
          description: 'Second step',
          content: <Box padding={4} background="muted">Step 2 content</Box>,
        },
        {
          id: 'step3',
          label: 'Step 3',
          description: 'Third step',
          content: <Box padding={4} background="muted">Step 3 content</Box>,
        },
      ]}
    />
  ),
};

export const Completed: Story = {
  render: () => (
    <StepperLayout
      currentStep={2}
      steps={[
        { id: 'step1', label: 'Step 1', completed: true },
        { id: 'step2', label: 'Step 2', completed: true },
        { id: 'step3', label: 'Step 3' },
      ]}
    />
  ),
};

export const Vertical: Story = {
  render: () => (
    <StepperLayout
      orientation="vertical"
      currentStep={1}
      steps={[
        { id: 'step1', label: 'Step 1', description: 'First step' },
        { id: 'step2', label: 'Step 2', description: 'Second step' },
        { id: 'step3', label: 'Step 3', description: 'Third step' },
      ]}
    />
  ),
};

