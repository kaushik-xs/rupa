import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { WizardLayout } from './WizardLayout';
import { Box } from '../Box/Box';

const meta: Meta<typeof WizardLayout> = {
  title: 'Layouts/WizardLayout',
  component: WizardLayout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof WizardLayout>;

export const Default: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    return (
      <WizardLayout
        currentStep={currentStep}
        onStepChange={setCurrentStep}
        steps={[
          {
            id: 'step1',
            label: 'Step 1',
            description: 'First step',
            component: () => <Box padding={4} background="muted">Step 1 content</Box>,
          },
          {
            id: 'step2',
            label: 'Step 2',
            description: 'Second step',
            component: () => <Box padding={4} background="muted">Step 2 content</Box>,
          },
          {
            id: 'step3',
            label: 'Step 3',
            description: 'Final step',
            component: () => <Box padding={4} background="muted">Step 3 content</Box>,
          },
        ]}
      />
    );
  },
};

export const WithoutProgress: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);
    return (
      <WizardLayout
        currentStep={currentStep}
        onStepChange={setCurrentStep}
        showProgress={false}
        steps={[
          {
            id: 'step1',
            label: 'Step 1',
            component: () => <Box padding={4} background="muted">Step 1</Box>,
          },
          {
            id: 'step2',
            label: 'Step 2',
            component: () => <Box padding={4} background="muted">Step 2</Box>,
          },
        ]}
      />
    );
  },
};

export const WithoutNavigation: Story = {
  render: () => (
    <WizardLayout
      currentStep={0}
      showNavigation={false}
      steps={[
        {
          id: 'step1',
          label: 'Step 1',
          component: () => <Box padding={4} background="muted">Step 1 content</Box>,
        },
        {
          id: 'step2',
          label: 'Step 2',
          component: () => <Box padding={4} background="muted">Step 2 content</Box>,
        },
      ]}
    />
  ),
};

