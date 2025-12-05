import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import { ModalWrapper } from './ModalWrapper';
// Import to register all components
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Modal',
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
    const triggerConfig: LayoutNode = {
      type: 'component',
      props: {
        component: 'Button',
        componentProps: {
          children: 'Open Modal',
        },
      },
    };

    const contentConfig: LayoutNode = {
      type: 'component',
      props: {
        component: 'Box',
        componentProps: {
          className: 'space-y-4',
        },
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Box',
            componentProps: {
              children: <p className="text-sm text-muted-foreground">This is an example modal dialog. You can place any content here.</p>,
            },
          },
        },
        {
          type: 'flex',
          props: {
            justify: 'end',
            gap: 2,
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  variant: 'outline',
                  children: 'Cancel',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  children: 'Confirm',
                },
              },
            },
          ],
        },
      ],
    };

    return (
      <ModalWrapper
        triggerConfig={triggerConfig}
        contentConfig={contentConfig}
        modalProps={{
          title: 'Example Modal',
          size: 'md',
        }}
      />
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const sizes: Array<'sm' | 'md' | 'lg' | 'xl'> = ['sm', 'md', 'lg', 'xl'];
    
    const contentConfig: LayoutNode = {
      type: 'component',
      props: {
        component: 'Box',
        componentProps: {
          children: <p className="text-sm text-muted-foreground">This is an example modal dialog.</p>,
        },
      },
    };

    return (
      <div className="flex flex-col gap-4">
        {sizes.map((size) => (
          <ModalWrapper
            key={size}
            triggerText={`Open ${size.toUpperCase()} Modal`}
            contentConfig={contentConfig}
            modalProps={{
              title: `Example Modal (${size.toUpperCase()})`,
              size,
            }}
          />
        ))}
      </div>
    );
  },
};

export const DialogComponents: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'Dialog',
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'DialogTrigger',
            componentProps: {
              asChild: true,
            },
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  children: 'Open Dialog',
                },
              },
            },
          ],
        },
        {
          type: 'component',
          props: {
            component: 'DialogContent',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'DialogHeader',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'DialogTitle',
                    componentProps: {
                      children: 'Dialog Example',
                    },
                  },
                },
                {
                  type: 'component',
                  props: {
                    component: 'DialogDescription',
                    componentProps: {
                      children: 'This is an example using the Dialog components directly.',
                    },
                  },
                },
              ],
            },
            {
              type: 'component',
              props: {
                component: 'Box',
                componentProps: {
                  className: 'space-y-4 py-4',
                },
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'Box',
                    componentProps: {
                      children: <p className="text-sm text-muted-foreground">You can use Dialog components for more control over the modal structure.</p>,
                    },
                  },
                },
              ],
            },
            {
              type: 'component',
              props: {
                component: 'DialogFooter',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'DialogTrigger',
                    componentProps: {
                      asChild: true,
                    },
                  },
                  children: [
                    {
                      type: 'component',
                      props: {
                        component: 'Button',
                        componentProps: {
                          variant: 'outline',
                          children: 'Cancel',
                        },
                      },
                    },
                  ],
                },
                {
                  type: 'component',
                  props: {
                    component: 'DialogTrigger',
                    componentProps: {
                      asChild: true,
                    },
                  },
                  children: [
                    {
                      type: 'component',
                      props: {
                        component: 'Button',
                        componentProps: {
                          children: 'Confirm',
                        },
                      },
                    },
                  ],
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

