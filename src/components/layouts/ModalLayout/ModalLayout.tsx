import * as React from 'react';
import { cn } from '../../../utils/cn';
import { LayoutProps } from '../../../types/layout';
import { Modal, ModalProps } from '../../Modal/Modal';

export interface ModalLayoutProps extends Omit<ModalProps, 'children'>, LayoutProps {
  children?: React.ReactNode;
  modals?: Array<{
    id: string;
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    content?: React.ReactNode;
    size?: 'sm' | 'md' | 'lg' | 'xl';
  }>;
}

export const ModalLayout: React.FC<ModalLayoutProps> = ({
  modals,
  children,
  className,
  ...props
}) => {
  if (modals) {
    return (
      <>
        {modals.map((modal) => (
          <Modal
            key={modal.id}
            isOpen={modal.isOpen}
            onClose={modal.onClose}
            title={modal.title}
            size={modal.size}
            className={className}
          >
            {modal.content}
          </Modal>
        ))}
        {children}
      </>
    );
  }

  return <Modal {...props} className={className}>{children}</Modal>;
};

ModalLayout.displayName = 'ModalLayout';

