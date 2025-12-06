import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
// Import to register all components
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Breadcrumb',
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
        component: 'Breadcrumb',
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'BreadcrumbList',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'BreadcrumbItem',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'BreadcrumbLink',
                    componentProps: {
                      href: '/',
                      children: 'Home',
                    },
                  },
                },
              ],
            },
            {
              type: 'component',
              props: {
                component: 'BreadcrumbSeparator',
              },
            },
            {
              type: 'component',
              props: {
                component: 'BreadcrumbItem',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'BreadcrumbPage',
                    componentProps: {
                      children: 'Breadcrumb',
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

export const WithMultipleItems: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'Breadcrumb',
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'BreadcrumbList',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'BreadcrumbItem',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'BreadcrumbLink',
                    componentProps: {
                      href: '/',
                      children: 'Home',
                    },
                  },
                },
              ],
            },
            {
              type: 'component',
              props: {
                component: 'BreadcrumbSeparator',
              },
            },
            {
              type: 'component',
              props: {
                component: 'BreadcrumbItem',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'BreadcrumbLink',
                    componentProps: {
                      href: '/components',
                      children: 'Components',
                    },
                  },
                },
              ],
            },
            {
              type: 'component',
              props: {
                component: 'BreadcrumbSeparator',
              },
            },
            {
              type: 'component',
              props: {
                component: 'BreadcrumbItem',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'BreadcrumbPage',
                    componentProps: {
                      children: 'Breadcrumb',
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

export const CustomSeparator: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'Breadcrumb',
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'BreadcrumbList',
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'BreadcrumbItem',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'BreadcrumbLink',
                    componentProps: {
                      href: '/',
                      children: 'Home',
                    },
                  },
                },
              ],
            },
            {
              type: 'component',
              props: {
                component: 'BreadcrumbSeparator',
                componentProps: {
                  children: '/',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'BreadcrumbItem',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'BreadcrumbLink',
                    componentProps: {
                      href: '/docs',
                      children: 'Documentation',
                    },
                  },
                },
              ],
            },
            {
              type: 'component',
              props: {
                component: 'BreadcrumbSeparator',
                componentProps: {
                  children: '/',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'BreadcrumbItem',
              },
              children: [
                {
                  type: 'component',
                  props: {
                    component: 'BreadcrumbPage',
                    componentProps: {
                      children: 'Getting Started',
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
