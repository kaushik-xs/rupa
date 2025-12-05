import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
// Import to register all components
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Card',
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
        component: 'Card',
        componentProps: {
          className: 'w-96',
        },
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'CardHeader',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'CardTitle',
                componentProps: {
                  children: 'Card Title',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'CardDescription',
                componentProps: {
                  children: 'Card description goes here',
                },
              },
            },
          ],
        },
        {
          type: 'component',
          props: {
            component: 'CardContent',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Box',
                componentProps: {
                  children: <p>This is the card content area where you can place any content.</p>,
                },
              },
            },
          ],
        },
        {
          type: 'component',
          props: {
            component: 'CardFooter',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Button',
                componentProps: {
                  children: 'Action',
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

export const Simple: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'Card',
        componentProps: {
          className: 'w-96',
        },
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'CardContent',
            componentProps: {
              className: 'pt-6',
            },
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Box',
                componentProps: {
                  children: <p>Simple card with just content.</p>,
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

export const WithoutFooter: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'Card',
        componentProps: {
          className: 'w-96',
        },
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'CardHeader',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'CardTitle',
                componentProps: {
                  children: 'Card Without Footer',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'CardDescription',
                componentProps: {
                  children: "This card doesn't have a footer",
                },
              },
            },
          ],
        },
        {
          type: 'component',
          props: {
            component: 'CardContent',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'Box',
                componentProps: {
                  children: <p>Content goes here without any footer actions.</p>,
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

export const MultipleCards: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'grid',
      props: {
        columns: { default: 1, md: 3 },
        gap: 4,
        className: 'w-full max-w-4xl',
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Card',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'CardHeader',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'CardTitle',
                    componentProps: {
                      children: 'Card 1',
                    },
                  },
                },
                {
                  type: 'component',
                  props: {
                    component: 'CardDescription',
                    componentProps: {
                      children: 'First card',
                    },
                  },
                },
              ],
            },
            {
              type: 'component',
              props: {
                component: 'CardContent',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'Box',
                    componentProps: {
                      children: <p>Content for card 1</p>,
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'component',
          props: {
            component: 'Card',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'CardHeader',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'CardTitle',
                    componentProps: {
                      children: 'Card 2',
                    },
                  },
                },
                {
                  type: 'component',
                  props: {
                    component: 'CardDescription',
                    componentProps: {
                      children: 'Second card',
                    },
                  },
                },
              ],
            },
            {
              type: 'component',
              props: {
                component: 'CardContent',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'Box',
                    componentProps: {
                      children: <p>Content for card 2</p>,
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          type: 'component',
          props: {
            component: 'Card',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'CardHeader',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'CardTitle',
                    componentProps: {
                      children: 'Card 3',
                    },
                  },
                },
                {
                  type: 'component',
                  props: {
                    component: 'CardDescription',
                    componentProps: {
                      children: 'Third card',
                    },
                  },
                },
              ],
            },
            {
              type: 'component',
              props: {
                component: 'CardContent',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'Box',
                    componentProps: {
                      children: <p>Content for card 3</p>,
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
  parameters: {
    layout: 'padded',
  },
};

