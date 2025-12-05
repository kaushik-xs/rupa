import type { Meta, StoryObj } from '@storybook/react';
import { LayoutRenderer } from '../../core/layout-renderer';
import { LayoutNode } from '../../types/layout';
import '../../core/register-components';

const meta: Meta<typeof LayoutRenderer> = {
  title: 'Components/Accordion',
  component: LayoutRenderer,
  parameters: {
    layout: 'padded',
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
        component: 'Accordion',
        componentProps: {
          type: 'single',
          collapsible: true,
        },
      },
      children: [
        {
          type: 'component',
          props: {
            component: 'AccordionItem',
            componentProps: {
              value: 'item-1',
            },
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'AccordionTrigger',
                componentProps: {
                  children: 'Is it accessible?',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'AccordionContent',
                componentProps: {
                  children: 'Yes. It adheres to the WAI-ARIA design pattern.',
                },
              },
            },
          ],
        },
        {
          type: 'component',
          props: {
            component: 'AccordionItem',
            componentProps: {
              value: 'item-2',
            },
          },
          children: [
            {
              type: 'component',
              props: {
                component: 'AccordionTrigger',
                componentProps: {
                  children: 'Is it styled?',
                },
              },
            },
            {
              type: 'component',
              props: {
                component: 'AccordionContent',
                componentProps: {
                  children: 'Yes. It comes with default styles that matches the other components aesthetic.',
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

