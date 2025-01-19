'use client';

import React, { useRef, useEffect } from 'react';
import styles from '@/styles/carousel.module.scss';

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

        const handleMouseDown = (e: MouseEvent) => startDragging(e);
        const handleMouseLeave = () => stopDragging();
        const handleMouseUp = () => stopDragging();
        const handleMouseMove = (e: MouseEvent) => dragCarousel(e);

        sliderRef.addEventListener('mousedown', handleMouseDown);
        sliderRef.addEventListener('mouseleave', handleMouseLeave);
        sliderRef.addEventListener('mouseup', handleMouseUp);
        sliderRef.addEventListener('mousemove', handleMouseMove);

        return () => {
            sliderRef.removeEventListener('mousedown', handleMouseDown);
            sliderRef.removeEventListener('mouseleave', handleMouseLeave);
            sliderRef.removeEventListener('mouseup', handleMouseUp);
            sliderRef.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const startDragging = (e: MouseEvent) => {
        if (!slider.current) return;
        isDragging.current = true;
        startX.current = e.pageX - slider.current.offsetLeft;
        scrollStart.current = slider.current.scrollLeft;
    };

    const stopDragging = () => {
        isDragging.current = false;
    };

    const dragCarousel = (e: MouseEvent) => {
        if (!isDragging.current || !slider.current) return;
        e.preventDefault();
        const x = e.pageX - slider.current.offsetLeft;
        const distanceDragged = x - startX.current;
        slider.current.scrollLeft = scrollStart.current - distanceDragged;
    };

    return (
        <div className={styles.carousel} ref={slider}>
            <div className={styles.carouselTrack}>{children}</div>
        </div>
    );
}
