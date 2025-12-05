import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Avatar',
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
        component: 'Avatar',
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'AvatarImage',
            componentProps: {
              src: 'https://github.com/shadcn.png',
              alt: '@shadcn',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'AvatarFallback',
            componentProps: {
              children: 'CN',
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

export const Sizes: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'flex',
      props: {
        gap: 4,
        align: 'center',
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Avatar',
            componentProps: {
              size: 'sm',
            },
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'AvatarFallback',
                componentProps: {
                  children: 'SM',
                },
              },
            },
          ],
        },
        {
          type: 'component',
          props: {
            component: 'Avatar',
            componentProps: {
              size: 'default',
            },
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'AvatarFallback',
                componentProps: {
                  children: 'MD',
                },
              },
            },
          ],
        },
        {
          type: 'component',
          props: {
            component: 'Avatar',
            componentProps: {
              size: 'lg',
            },
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'AvatarFallback',
                componentProps: {
                  children: 'LG',
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

export const WithFallback: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'Avatar',
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'AvatarImage',
            componentProps: {
              src: 'invalid-url',
              alt: 'User',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'AvatarFallback',
            componentProps: {
              children: 'JD',
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

