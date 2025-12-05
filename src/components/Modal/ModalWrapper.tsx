import * as React from 'react';
import { LayoutNode } from '../../types/layout';
import { LayoutRenderer } from '../../core/layout-renderer';
import { Modal, ModalProps } from './Modal';
import { Button } from '../Button/Button';

export interface ModalWrapperProps {
  /**
   * JSON config for the trigger button
   */
  triggerConfig?: LayoutNode;
  /**
   * Default trigger button text if no triggerConfig provided
   */
  triggerText?: string;
  /**
   * JSON config for the modal content
   */
  contentConfig?: LayoutNode;
  /**
   * Modal props (title, size, etc.)
   */
  modalProps?: Omit<ModalProps, 'isOpen' | 'onClose' | 'children'>;
  /**
   * Initial open state
   */
  defaultOpen?: boolean;
}

/**
 * Wrapper component for Modal that manages state and accepts JSON config
 */
export const ModalWrapper: React.FC<ModalWrapperProps> = ({
  triggerConfig,
  triggerText = 'Open Modal',
  contentConfig,
  modalProps,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // Render trigger button
  const trigger = triggerConfig ? (
    <LayoutRenderer config={triggerConfig} />
  ) : (
    <Button onClick={handleOpen}>{triggerText}</Button>
  );

  // Wrap trigger with onClick if it's a simple button
  const triggerWithHandler = triggerConfig ? (
    <div onClick={handleOpen} style={{ display: 'inline-block', cursor: 'pointer' }}>
      {trigger}
    </div>
  ) : (
    trigger
  );

  return (
    <>
      {triggerWithHandler}
      <Modal isOpen={isOpen} onClose={handleClose} {...modalProps}>
        {contentConfig ? <LayoutRenderer config={contentConfig} /> : null}
      </Modal>
    </>
  );
};

