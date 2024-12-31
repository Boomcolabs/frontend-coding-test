'use client';
import '@/styles/slider.scss';
import React, { useRef, useState } from 'react';

const Slider = () => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const nameArr = [
        { name: 'Simon D.', place: 'Dubai' },
        { name: 'Christine V.', place: 'Burj Khalifa' },
        { name: 'Daron M.', place: 'Dubai' },
        { name: 'Veronica Br.', place: 'Dubai' },
        { name: 'Maihun D.', place: 'Dubai' },
    ];
    const handleMouseDown = (e: React.MouseEvent) => {
        const slider = sliderRef.current;
        if (!slider) return;

        setIsDragging(true);
        setStartX(e.pageX);
        setScrollLeft(slider.scrollLeft);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;

        const slider = sliderRef.current;
        if (!slider) return;

        const x = e.pageX;
        const walk = x - startX;
        slider.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUpOrLeave = () => {
        setIsDragging(false);
    };

    return (
        <div
            ref={sliderRef}
            className="slider-item"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
        >
            {[
                '/images/model2.png',
                '/images/model3.png',
                '/images/model4.png',
                '/images/model1.png',
                '/images/model5.png',
            ].map((src, index) => (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <img
                        key={index}
                        src={src}
                        alt={`Slide ${index + 1}`}
                        className="slide"
                    />
                    <div style={{ marginTop: 10 }}>
                        <div
                            style={{
                                fontSize: 20,
                                fontWeight: 600,
                                marginBottom: 10,
                            }}
                        >
                            {nameArr[index].name}
                        </div>
                        <div style={{ fontSize: 14, fontWeight: 400 }}>
                            {nameArr[index].place}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Slider;
