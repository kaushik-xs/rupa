import * as React from 'react';
import { Modal, ModalProps } from './Modal';
import { Button } from '../Button/Button';

export interface ModalWrapperProps {
  triggerText?: string;
  trigger?: React.ReactNode;
  children?: React.ReactNode;
  modalProps?: Omit<ModalProps, 'isOpen' | 'onClose' | 'children'>;
  defaultOpen?: boolean;
}

export const ModalWrapper: React.FC<ModalWrapperProps> = ({
  triggerText = 'Open Modal',
  trigger,
  children,
  modalProps,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const triggerEl = trigger ?? (
    <Button onClick={handleOpen}>{triggerText}</Button>
  );

  return (
    <>
      {triggerEl}
      <Modal isOpen={isOpen} onClose={handleClose} {...modalProps}>
        {children}
      </Modal>
    </>
  );
};
