import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Select',
  component: LayoutRenderer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LayoutRenderer>;

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

export const Default: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'Select',
        componentProps: {
          options,
          placeholder: 'Select an option...',
        },
      },
    };
    return <LayoutRenderer config={config} />;
  },
};

export const WithLabel: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'flex',
      props: {
        direction: 'column',
        gap: 2,
        className: 'w-64',
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Label',
            componentProps: {
              children: 'Choose an option',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Select',
            componentProps: {
              options,
              placeholder: 'Select...',
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

export const MultiSelect: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'Select',
        componentProps: {
          options,
          isMulti: true,
          placeholder: 'Select multiple options...',
        },
      },
    };
    return <LayoutRenderer config={config} />;
  },
};

