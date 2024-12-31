import React from 'react';
import '@/styles/banner.scss';
import { Button } from 'antd';
const Banner = () => {
    return (
        <div className="banner">
            <img
                className="banner-model"
                src="/images/banner1.png"
                alt="Model first banner"
            />
            <div className="banner-title">
                <div className="title-content">
                    <div className="big-title">
                        Unlock your modeling potential
                    </div>
                    <div className="small-title" style={{ marginBottom: 20 }}>
                        Discover endless opportunities, connect with top
                        agencies, and showcase your talent
                    </div>
                    <div className="title-btn">
                        <Button
                            size="large"
                            type="primary"
                            style={{ backgroundColor: '#030712' }}
                        >
                            Apply now
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
