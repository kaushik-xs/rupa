import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button/Button';
import { ModalWrapper } from './ModalWrapper';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => (
    <ModalWrapper triggerText="Open Modal" modalProps={{ title: 'Modal Title' }}>
      <p>Modal content goes here.</p>
    </ModalWrapper>
  ),
};
