import Image from 'next/image';
import carousel from '../../../public/images/carousel.png';
import christine from '../../../public/images/models/christine.png';
import daron from '../../../public/images/models/daron.png';
import Carousel from '@/components/Carousel';
import React from 'react';
import FirstSection from '@/components/sections/FirstSection';

export default function LandingPage() {
    const slides = [
        {
            title: 'From Local to International',
            subtitle: "Uliana's Story",
            image: carousel,
        },
        {
            title: 'Discovering New Horizons',
            subtitle: 'John’s Journey',
            image: carousel,
        },
        {
            title: 'Breaking Barriers',
            subtitle: 'Anna’s Experience',
            image: carousel,
        },
    ];
    return (
        <div className="main">
            <FirstSection />
            {/* <div
                style={{
                    width: '712px',
                    height: '425px',
                }}
            >
                <Carousel>
                    {slides.map((item, index) => (
                        <React.Fragment key={index}>
                            <Image
                                src={item.image}
                                alt="image"
                                style={{
                                    mixBlendMode: 'luminosity',
                                }}
                                fill
                            />
                            <div
                                style={{
                                    position: 'relative',
                                }}
                            >
                                <p>{item.title}</p>
                                <h1>{item.subtitle}</h1>
                            </div>
                        </React.Fragment>
                    ))}
                </Carousel>
            </div> */}
        </div>
    );
}
