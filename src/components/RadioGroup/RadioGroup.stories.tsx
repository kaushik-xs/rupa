import type { Meta, StoryObj } from '@storybook/react';
import { RadioGroup, RadioGroupItem } from './RadioGroup';
import { Label } from '../Label/Label';

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="a" className="flex flex-col gap-2">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="a" id="a" />
        <Label htmlFor="a">Option A</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="b" id="b" />
        <Label htmlFor="b">Option B</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="c" id="c" />
        <Label htmlFor="c">Option C</Label>
      </div>
    </RadioGroup>
  ),
};
