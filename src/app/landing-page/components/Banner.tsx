import React from 'react';
import '@/styles/components/_banner.scss';

const Banner = () => {
    return (
        <div className="banner">
            <img
                src={'/images/banner.png'}
                alt="Banner"
                className="banner-image"
            />
            <div className="banner-container">
                <div className="banner-overlay"></div>
                <div className="banner-content">
                    <h1 className="banner-title">
                        Unlock Your Modeling Potential
                    </h1>
                    <p className="banner-description">
                        Discover endless opportunities, connect with top
                        agencies, and showcase your talent
                    </p>
                    <button className="banner-button">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
