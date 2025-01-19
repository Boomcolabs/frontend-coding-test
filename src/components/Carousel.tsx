'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import arrowLeft from '../../public/icons/20_icon/20px_arrow-bold-left.png';
import arrowRight from '../../public/icons/20_icon/20px_arrow-bold-right.png';
import style from '@/styles/carousel.module.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode[];
}

export default function Carousel({ children, ...rest }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? children.length - 1 : prevIndex - 1
        );
    };
    return (
        <div className={style.carousel} {...rest}>
            <div
                className={style.carouselWrapper}
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {children.map((child, index) => (
                    <div className={style.carouselItem} key={index}>
                        {child}
                    </div>
                ))}
            </div>
            <div className={style.indicatorContainer}>
                {children.map((_, index) => (
                    <div
                        onClick={() => {
                            setCurrentIndex(index);
                        }}
                        key={index}
                        className={
                            index === currentIndex
                                ? style.activeIndicator
                                : style.indicator
                        }
                    ></div>
                ))}
            </div>
            <div className={style.buttonContainer}>
                <div className={style.button} onClick={handlePrevious}>
                    <Image src={arrowLeft} alt="arrow left" />
                </div>
                <div className={style.button} onClick={handleNext}>
                    <Image src={arrowRight} alt="arrow left" />
                </div>
            </div>
        </div>
    );
}
