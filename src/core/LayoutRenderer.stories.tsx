import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from './layout-renderer';
import { LayoutNode } from '../types/layout';
import { widgetRegistry } from './registry';
import { Button } from '../components/Button/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/Card/Card';
import { Input } from '../components/Input/Input';
import { Badge } from '../components/Badge/Badge';
import { Alert, AlertTitle, AlertDescription } from '../components/Alert/Alert';
import { Box } from '../components/layouts';
// Import to register all layouts
import './register-layouts';

// Register components in widget registry for JSON-driven rendering
widgetRegistry.register('Button', { component: Button });
widgetRegistry.register('Card', { component: Card });
widgetRegistry.register('CardHeader', { component: CardHeader });
widgetRegistry.register('CardTitle', { component: CardTitle });
widgetRegistry.register('CardDescription', { component: CardDescription });
widgetRegistry.register('CardContent', { component: CardContent });
widgetRegistry.register('CardFooter', { component: CardFooter });
widgetRegistry.register('Input', { component: Input });
widgetRegistry.register('Badge', { component: Badge });
widgetRegistry.register('Alert', { component: Alert });
widgetRegistry.register('AlertTitle', { component: AlertTitle });
widgetRegistry.register('AlertDescription', { component: AlertDescription });
widgetRegistry.register('Box', { component: Box });

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Core/LayoutRenderer',
  component: LayoutRenderer,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LayoutRenderer>;

export const SimpleFlex: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'flex',
      props: {
        gap: 4,
        padding: 4,
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Button',
            componentProps: { children: 'Button 1' },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Button',
            componentProps: { variant: 'secondary', children: 'Button 2' },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Button',
            componentProps: { variant: 'outline', children: 'Button 3' },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

export const NestedLayouts: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'container',
      props: {
        padding: 6,
      },
      children: [
        {
          type: 'flex',
          props: {
            direction: 'column',
            gap: 6,
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Alert',
                componentProps: {
                  children: (
                    <>
                      <AlertTitle>Welcome</AlertTitle>
                      <AlertDescription>This is a nested layout example</AlertDescription>
                    </>
                  ),
                },
              },
            },
            {
              type: 'grid',
              props: {
                columns: { default: 1, md: 2, lg: 3 },
                gap: 4,
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'Card',
                    componentProps: {
                      children: (
                        <>
                          <CardHeader>
                            <CardTitle>Card 1</CardTitle>
                          </CardHeader>
                          <CardContent>Content for card 1</CardContent>
                        </>
                      ),
                    },
                  },
                },
                {
                  type: 'component',
                  props: {
                    component: 'Card',
                    componentProps: {
                      children: (
                        <>
                          <CardHeader>
                            <CardTitle>Card 2</CardTitle>
                          </CardHeader>
                          <CardContent>Content for card 2</CardContent>
                        </>
                      ),
                    },
                  },
                },
                {
                  type: 'component',
                  props: {
                    component: 'Card',
                    componentProps: {
                      children: (
                        <>
                          <CardHeader>
                            <CardTitle>Card 3</CardTitle>
                          </CardHeader>
                          <CardContent>Content for card 3</CardContent>
                        </>
                      ),
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

export const ResponsiveGrid: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'grid',
      props: {
        columns: { default: 1, sm: 2, md: 3, lg: 4 },
        gap: { default: 2, md: 4 },
        padding: 4,
      },
      children: Array.from({ length: 8 }).map((_, i) => ({
        type: 'component',
        props: {
          component: 'Badge',
          componentProps: {
            children: `Item ${i + 1}`,
            variant: i % 2 === 0 ? 'default' : 'secondary',
          },
        },
      })),
    };
    return <LayoutRenderer config={config} />;
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export const ConditionalRendering: Story = {
  render: () => {
    const showAdvanced = true;
    const config: LayoutNode = {
      type: 'flex',
      props: {
        direction: 'column',
        gap: 4,
        padding: 4,
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Input',
            componentProps: {
              placeholder: 'Basic input',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Input',
            componentProps: {
              placeholder: 'Advanced input',
            },
          },
          condition: showAdvanced,
        },
        {
          type: 'component',
          props: {
            component: 'Button',
            componentProps: {
              children: 'Submit',
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};
