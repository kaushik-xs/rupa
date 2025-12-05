import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ModalLayout } from './ModalLayout';
import { Box } from '../Box/Box';
import { Button } from '../../Button/Button';

const meta: Meta<typeof ModalLayout> = {
  title: 'Layouts/ModalLayout',
  component: ModalLayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ModalLayout>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <ModalLayout
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Modal Title"
        >
          <Box padding={4}>
            <p>This is modal content</p>
          </Box>
        </ModalLayout>
      </>
    );
  },
};

export const MultipleModals: Story = {
  render: () => {
    const [modals, setModals] = useState({
      modal1: false,
      modal2: false,
    });
    return (
      <>
        <div className="flex gap-4">
          <Button onClick={() => setModals({ ...modals, modal1: true })}>
            Open Modal 1
          </Button>
          <Button onClick={() => setModals({ ...modals, modal2: true })}>
            Open Modal 2
          </Button>
        </div>
        <ModalLayout
          modals={[
            {
              id: 'modal1',
              isOpen: modals.modal1,
              onClose: () => setModals({ ...modals, modal1: false }),
              title: 'Modal 1',
              content: <Box padding={4}>Content for modal 1</Box>,
            },
            {
              id: 'modal2',
              isOpen: modals.modal2,
              onClose: () => setModals({ ...modals, modal2: false }),
              title: 'Modal 2',
              content: <Box padding={4}>Content for modal 2</Box>,
            },
          ]}
          isOpen={false}
          onClose={() => {}}
        />
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <div className="flex gap-4 mb-4">
          <Button onClick={() => { setSize('sm'); setIsOpen(true); }}>Small</Button>
          <Button onClick={() => { setSize('md'); setIsOpen(true); }}>Medium</Button>
          <Button onClick={() => { setSize('lg'); setIsOpen(true); }}>Large</Button>
          <Button onClick={() => { setSize('xl'); setIsOpen(true); }}>Extra Large</Button>
        </div>
        <ModalLayout
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title={`Modal (${size})`}
          size={size}
        >
          <Box padding={4}>
            <p>Modal with {size} size</p>
          </Box>
        </ModalLayout>
      </>
    );
  },
};

