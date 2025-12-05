import type { Meta, StoryObj } from '@storybook/react';
import { SectionLayout } from './SectionLayout';
import { Box } from '../Box/Box';

const meta: Meta<typeof SectionLayout> = {
  title: 'Layouts/SectionLayout',
  component: SectionLayout,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SectionLayout>;

export const Default: Story = {
  render: () => (
    <SectionLayout
      sections={[
        {
          title: 'Section 1',
          content: (
            <Box padding={4} background="muted">
              <p>Content for section 1</p>
            </Box>
          ),
        },
        {
          title: 'Section 2',
          content: (
            <Box padding={4} background="muted">
              <p>Content for section 2</p>
            </Box>
          ),
        },
        {
          title: 'Section 3',
          content: (
            <Box padding={4} background="muted">
              <p>Content for section 3</p>
            </Box>
          ),
        },
      ]}
    />
  ),
};

export const WithoutDividers: Story = {
  render: () => (
    <SectionLayout
      showDividers={false}
      sections={[
        {
          title: 'Section 1',
          content: (
            <Box padding={4} background="muted">
              <p>Content for section 1</p>
            </Box>
          ),
        },
        {
          title: 'Section 2',
          content: (
            <Box padding={4} background="muted">
              <p>Content for section 2</p>
            </Box>
          ),
        },
      ]}
    />
  ),
};

export const CustomSpacing: Story = {
  render: () => (
    <SectionLayout
      sectionSpacing={12}
      sections={[
        {
          title: 'Section 1',
          content: (
            <Box padding={4} background="muted">
              <p>Content with custom spacing</p>
            </Box>
          ),
        },
        {
          title: 'Section 2',
          content: (
            <Box padding={4} background="muted">
              <p>More content</p>
            </Box>
          ),
        },
      ]}
    />
  ),
};

