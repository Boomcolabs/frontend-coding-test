import React from 'react';
import '@/styles/components/_reasons.scss';
import Check from './icons/Check';

const Reasons = () => {
    return (
        <div className="reasons">
            <img
                className="reasons-img"
                src={'/images/reasons-bg.png'}
                alt="Reasons"
            />
            <div className="reasons-content">
                <h1>Why Choose</h1>
                <img src={'/images/logo-full.png'} alt="Logo" />
                <div className="reasons-item-list">
                    <div className="reasons-item">
                        <div className="check">
                            <Check />
                        </div>
                        <span>Access global opportunities</span>
                    </div>
                    <div className="reasons-item">
                        <div className="check">
                            <Check />
                        </div>
                        <span>Join a supportive and professional team</span>
                    </div>
                    <div className="reasons-item">
                        <div className="check">
                            <Check />
                        </div>
                        <span>
                            Get featured in high-profile events and campaigns
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reasons;
