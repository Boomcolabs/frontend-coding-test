'use client';

import React, { useRef, useEffect } from 'react';
import styles from '@/styles/cardSlider.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export default function CardSlider({ children }: Props) {
    const slider = useRef<HTMLDivElement | null>(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollStart = useRef(0);

    useEffect(() => {
        const sliderRef = slider.current;
        if (!sliderRef) return;

        // Mouse events
        const handleMouseDown = (e: MouseEvent) => startDragging(e.pageX);
        const handleMouseLeave = () => stopDragging();
        const handleMouseUp = () => stopDragging();
        const handleMouseMove = (e: MouseEvent) => dragCarousel(e.pageX);

        // Touch events
        const handleTouchStart = (e: TouchEvent) =>
            startDragging(e.touches[0].pageX);
        const handleTouchEnd = () => stopDragging();
        const handleTouchMove = (e: TouchEvent) =>
            dragCarousel(e.touches[0].pageX);

        sliderRef.addEventListener('mousedown', handleMouseDown);
        sliderRef.addEventListener('mouseleave', handleMouseLeave);
        sliderRef.addEventListener('mouseup', handleMouseUp);
        sliderRef.addEventListener('mousemove', handleMouseMove);

        sliderRef.addEventListener('touchstart', handleTouchStart);
        sliderRef.addEventListener('touchend', handleTouchEnd);
        sliderRef.addEventListener('touchmove', handleTouchMove);

        return () => {
            sliderRef.removeEventListener('mousedown', handleMouseDown);
            sliderRef.removeEventListener('mouseleave', handleMouseLeave);
            sliderRef.removeEventListener('mouseup', handleMouseUp);
            sliderRef.removeEventListener('mousemove', handleMouseMove);

            sliderRef.removeEventListener('touchstart', handleTouchStart);
            sliderRef.removeEventListener('touchend', handleTouchEnd);
            sliderRef.removeEventListener('touchmove', handleTouchMove);
        };
    }, []);

    const startDragging = (startPosition: number) => {
        if (!slider.current) return;
        isDragging.current = true;
        startX.current = startPosition - slider.current.offsetLeft;
        scrollStart.current = slider.current.scrollLeft;
    };

    const stopDragging = () => {
        isDragging.current = false;
    };

    const dragCarousel = (currentPosition: number) => {
        if (!isDragging.current || !slider.current) return;
        const distanceDragged = currentPosition - startX.current;
        slider.current.scrollLeft = scrollStart.current - distanceDragged;
    };

    return (
        <div className={styles.cardSlider} ref={slider}>
            <div className={styles.cardSliderTrack}>{children}</div>
        </div>
    );
}
