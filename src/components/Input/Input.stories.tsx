import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const Types: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-64">
      <div>
        <label className="block text-sm font-medium mb-2">Text Input</label>
        <Input type="text" placeholder="Enter text..." />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Email Input</label>
        <Input type="email" placeholder="email@example.com" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Password Input</label>
        <Input type="password" placeholder="Enter password" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Number Input</label>
        <Input type="number" placeholder="Enter number" />
      </div>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'Pre-filled value',
  },
};

