import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import { Info, AlertTriangle } from 'lucide-react';
// Import to register all components
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Alert',
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
        component: 'Alert',
        componentProps: {
          className: 'w-96',
        },
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Box',
            componentProps: {
              children: <Info className="h-4 w-4" />,
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'AlertTitle',
            componentProps: {
              children: 'Default Alert',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'AlertDescription',
            componentProps: {
              children: 'This is a default alert message.',
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

export const Destructive: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'Alert',
        componentProps: {
          variant: 'destructive',
          className: 'w-96',
        },
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Box',
            componentProps: {
              children: <AlertTriangle className="h-4 w-4" />,
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'AlertTitle',
            componentProps: {
              children: 'Error',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'AlertDescription',
            componentProps: {
              children: 'Something went wrong. Please try again.',
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

export const WithoutIcon: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'Alert',
        componentProps: {
          className: 'w-96',
        },
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'AlertTitle',
            componentProps: {
              children: 'Alert Without Icon',
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'AlertDescription',
            componentProps: {
              children: "This alert doesn't have an icon.",
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

export const WithoutTitle: Story = {
  render: () => {
    const config: LayoutNode = {
      type: 'component',
      props: {
        component: 'Alert',
        componentProps: {
          className: 'w-96',
        },
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'Box',
            componentProps: {
              children: <Info className="h-4 w-4" />,
            },
          },
        },
        {
          type: 'component',
          props: {
            component: 'AlertDescription',
            componentProps: {
              children: 'This alert only has a description without a title.',
            },
          },
        },
      ],
    };
    return <LayoutRenderer config={config} />;
  },
};

