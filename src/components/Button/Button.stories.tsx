import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
// Import to register all components
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Button',
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
        component: 'Button',
        componentProps: {
          children: 'Button',
        },
      },
    };
    return <LayoutRenderer config={config} />;
  },
};

export const Variants: Story = {
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
              variant: 'destructive',
              children: 'Destructive',
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
              variant: 'link',
              children: 'Link',
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
        wrap: true,
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
              size: 'lg',
              children: 'Large',
            },
          },
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
            component: 'Button',
            componentProps: {
              disabled: true,
              children: 'Disabled Default',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Button',
            componentProps: {
              variant: 'secondary',
              disabled: true,
              children: 'Disabled Secondary',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'Button',
            componentProps: {
              variant: 'destructive',
              disabled: true,
              children: 'Disabled Destructive',
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

