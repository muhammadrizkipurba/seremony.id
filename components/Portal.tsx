"use client";
import type { FC, ReactNode } from 'react';
import { useId, useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export type Props = {
    children: ReactNode;
};

export const Portal: FC<Props> = ({ children }) => {
    const id = useId();
    const [containerAttached, setContainerAttached] = useState(false);
    useEffect(() => {
        if (!containerAttached) {
            const element = document.createElement('div');
            element.id = id;
            document.body.appendChild(element);
            setContainerAttached(true);
        }
        return () => {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            containerAttached && document.getElementById(id)!.remove();
        };
    }, [id, containerAttached]);

    return (
        containerAttached &&
        createPortal(children, document.getElementById(id)!, id)
    );
};
