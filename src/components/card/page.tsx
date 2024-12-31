import React from 'react';
import { Button } from 'antd';
import '@/styles/card.scss';
const Card = () => {
    return (
        <div className="card">
            <div className="card-banner">
                <img
                    className="card-model"
                    src="/images/mask.png"
                    alt="Model mask banner"
                />
                <div className="card-content">
                    <div
                        className="medium-title"
                        style={{
                            fontWeight: 700,
                            marginBottom: 20,
                        }}
                    >
                        Looking for Models
                    </div>
                    <div
                        className="small-title"
                        style={{
                            fontWeight: 400,
                            marginBottom: 24,
                        }}
                    >
                        Find the perfect Model for Your Brand
                    </div>
                    <div>
                        <Button
                            size="large"
                            style={{
                                backgroundColor: '#F3F4F6',
                            }}
                        >
                            Contact our Team
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Card;
