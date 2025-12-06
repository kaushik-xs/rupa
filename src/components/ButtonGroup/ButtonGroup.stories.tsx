import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
// Import to register all components
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/ButtonGroup',
  component: LayoutRenderer,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LayoutRenderer>;

export const Default: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'ButtonGroup',
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Button',
            componentProps: {
              children: 'Button 1',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Button',
            componentProps: {
              children: 'Button 2',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Button',
            componentProps: {
              children: 'Button 3',
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};


export const WithVariants: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'flex',
      props: {
        gap: 4,
        direction: 'column',
        wrap: true,
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'ButtonGroup',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  variant: 'default',
                  children: 'Default',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  variant: 'default',
                  children: 'Default',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  variant: 'default',
                  children: 'Default',
                },
              },
            },
          ],
        },
        {
          type: 'component',
          props: {
            component: 'ButtonGroup',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  variant: 'outline',
                  children: 'Outline',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  variant: 'outline',
                  children: 'Outline',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  variant: 'outline',
                  children: 'Outline',
                },
              },
            },
          ],
        },
        {
          type: 'component',
          props: {
            component: 'ButtonGroup',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  variant: 'secondary',
                  children: 'Secondary',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  variant: 'secondary',
                  children: 'Secondary',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  variant: 'secondary',
                  children: 'Secondary',
                },
              },
            },
          ],
        },
        {
          type: 'component',
          props: {
            component: 'ButtonGroup',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  variant: 'ghost',
                  children: 'Ghost',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  variant: 'ghost',
                  children: 'Ghost',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  variant: 'ghost',
                  children: 'Ghost',
                },
              },
            },
          ],
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

export const WithSizes: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'flex',
      props: {
        gap: 4,
        direction: 'column',
        wrap: true,
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'ButtonGroup',
            componentProps: {
              size: 'sm',
            },
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  size: 'sm',
                  children: 'Small',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  size: 'sm',
                  children: 'Small',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  size: 'sm',
                  children: 'Small',
                },
              },
            },
          ],
        },
        {
          type: 'component',
          props: {
            component: 'ButtonGroup',
            componentProps: {
              size: 'default',
            },
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  size: 'default',
                  children: 'Default',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  size: 'default',
                  children: 'Default',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  size: 'default',
                  children: 'Default',
                },
              },
            },
          ],
        },
        {
          type: 'component',
          props: {
            component: 'ButtonGroup',
            componentProps: {
              size: 'lg',
            },
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  size: 'lg',
                  children: 'Large',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  size: 'lg',
                  children: 'Large',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  size: 'lg',
                  children: 'Large',
                },
              },
            },
          ],
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

export const Disabled: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'flex',
      props: {
        gap: 4,
        wrap: true,
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'ButtonGroup',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  disabled: true,
                  children: 'Disabled',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  disabled: true,
                  children: 'Disabled',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  disabled: true,
                  children: 'Disabled',
                },
              },
            },
          ],
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

