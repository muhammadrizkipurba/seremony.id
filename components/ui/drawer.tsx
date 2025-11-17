"use client";

import { FC, ReactNode, useCallback } from 'react';
import { Transition, TransitionChild } from '@headlessui/react';
import classNames from 'classnames';
import { Portal } from '../Portal';

export type Props = {
  // Control Drawer visibility
  isOpen?: boolean;
  children?: ReactNode;
  // Provide an external class name
  className?: string;
  // Callback to trigger when modal needs to be closed
  onDismiss?: () => void;
};

export const Drawer: FC<Props> = ({
  isOpen,
  children,
  className,
  onDismiss,
}) => {
  const handleBackdropClick = useCallback(() => {
    onDismiss?.();
  }, [onDismiss]);
  return (
    <Portal>
      <Transition show={isOpen} appear={true}>
        <TransitionChild>
          <div
            onClick={handleBackdropClick}
            className="fixed inset-0 bg-gray-300/30 backdrop-blur-none"
          />
        </TransitionChild>
        <TransitionChild>
          <div
            className={classNames(
              // Tailwind classes to stick Drawer to the left side
              'fixed bottom-0 left-0 h-dvh',
              // Set transition between states.  `data-[closed]:` selector
              'transition duration-300 ease-in data-closed:-translate-x-full',
              className
            )}
          >
            {children}
          </div>
        </TransitionChild>
      </Transition>
    </Portal>
  );
};
