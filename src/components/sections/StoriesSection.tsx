import Button from '../Button';
import carousel from '../../../public/images/carousel.png';
import Carousel from '../Carousel';
import React from 'react';
import style from '@/styles/sections/storiesSection.module.scss';

export default function StoriesSection() {
    const slides = [
        {
            title: "Uliana's Story",
            subtitle: (
                <>
                    From Local to <br /> International
                </>
            ),
            image: carousel,
        },
        {
            title: "Uliana's Story",
            subtitle: (
                <>
                    From Local to <br /> International
                </>
            ),
            image: carousel,
        },
        {
            title: "Uliana's Story",
            subtitle: (
                <>
                    From Local to <br /> International
                </>
            ),
            image: carousel,
        },
    ];
    return (
        <div className={style.storiesSection}>
            <div className={style.content}>
                <h1>Our Success Stories</h1>
                <div className={style.contact}>
                    <Button content="Apply Now" size="large" />
                    <span>to Start Your Journey!</span>
                </div>
            </div>
            <div className={style.carousel}>
                <Carousel>
                    {slides.map((item, index) => (
                        <div
                            className={style.carouselItem}
                            key={index}
                            style={{
                                backgroundImage: `url(${item.image.src})`,
                                mixBlendMode: 'luminosity',
                            }}
                        >
                            <div className={style.carouselContent}>
                                <p>{item.title}</p>
                                <h1>{item.subtitle}</h1>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className={style.contactMobile}>
                <Button
                    content="Apply Now"
                    style={{
                        padding: '0 32px',
                    }}
                />
                <span>to Start Your Journey!</span>
            </div>
        </div>
    );
}
