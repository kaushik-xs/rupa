import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import { Label } from '../Label/Label';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const WithLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Switch id="sw1" />
      <Label htmlFor="sw1">Enable notifications</Label>
    </div>
  ),
};

export const Checked: Story = { args: { defaultChecked: true } };
