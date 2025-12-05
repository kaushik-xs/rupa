import type { Meta, StoryObj } from '@storybook/react';
import { CardLayout } from './CardLayout';
import { Card, CardHeader, CardTitle, CardContent } from '../../Card/Card';

const meta: Meta<typeof CardLayout> = {
  title: 'Layouts/CardLayout',
  component: CardLayout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardLayout>;

export const Default: Story = {
  render: () => (
    <CardLayout columns={{ default: 1, sm: 2, lg: 3 }} gap={4}>
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i}>
          <CardHeader>
            <CardTitle>Card {i + 1}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Content for card {i + 1}</p>
          </CardContent>
        </div>
      ))}
    </CardLayout>
  ),
};

export const WithoutWrapping: Story = {
  render: () => (
    <CardLayout wrapChildrenInCards={false} columns={{ default: 1, sm: 2, lg: 3 }} gap={4}>
      <Card>
        <CardHeader>
          <CardTitle>Card 1</CardTitle>
        </CardHeader>
        <CardContent>Content 1</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 2</CardTitle>
        </CardHeader>
        <CardContent>Content 2</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Card 3</CardTitle>
        </CardHeader>
        <CardContent>Content 3</CardContent>
      </Card>
    </CardLayout>
  ),
};

