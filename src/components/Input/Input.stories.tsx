import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { placeholder: 'Enter text...' },
};

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 256 }}>
      <label htmlFor="input-demo">Name</label>
      <Input id="input-demo" placeholder="Your name" />
    </div>
  ),
};

export const Disabled: Story = {
  args: { placeholder: 'Disabled', disabled: true },
};
