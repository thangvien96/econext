'use client';

import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Props {
  imageUrl: string;
  from: DOMRect;
  to: DOMRect;
  onComplete: () => void;
}

export default function FlyToCartAnimation({ imageUrl, from, to, onComplete }: Props) {

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
        const timer = setTimeout(() => {
        setShow(false);
        onComplete();
        }, 800); // thời gian animation

        return () => clearTimeout(timer);
    }, [onComplete]);

    if (!show) return null;

    const deltaX = to.left - from.left;
    const deltaY = to.top - from.top;

    return createPortal(
        <motion.img
        src={imageUrl}
        initial={{ x: 0, y: 0, width: from.width, height: from.height, position: 'fixed', left: from.left, top: from.top, zIndex: 9999 }}
        animate={{ x: deltaX, y: deltaY, width: 40, height: 40, opacity: 0.6 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{ pointerEvents: 'none', borderRadius: '8px' }}
        />,
        document.body
    );
}
