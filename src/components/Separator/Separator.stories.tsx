import type { Meta, StoryObj } from '@storybook/react';
import { Separator } from './Separator';

const meta: Meta<typeof Separator> = {
  title: 'Components/Separator',
  component: Separator,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Separator>;

export const Default: Story = {};

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', height: 48, alignItems: 'center', gap: 16 }}>
      <span>One</span>
      <Separator orientation="vertical" />
      <span>Two</span>
      <Separator orientation="vertical" />
      <span>Three</span>
    </div>
  ),
};
