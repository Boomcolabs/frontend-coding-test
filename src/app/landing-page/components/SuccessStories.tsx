import React from 'react';
import ItemDots from './icons/ItemDots';
import ArrowBack from './icons/ArrowBack';
import ArrowNext from './icons/ArrowNext';
import '@/styles/components/_success-stories.scss';

const SuccessStories = () => {
    return (
        <div className="success-stories">
            <div className="left-side">
                <h1>Our Success Stories</h1>
                <div className="action">
                    <button>Apply Now</button>
                    <span>to Start Your Journey!</span>
                </div>
            </div>
            <div className="right-side">
                <img src="/images/bg-story.png" alt="Success Stories" />
                <div className="content">
                    <div className="story-title">
                        <p>{"Uliana's Story"}</p>
                        <h1>From Local to International</h1>
                    </div>
                    <ItemDots />
                    <div className="action">
                        <button>
                            <ArrowBack />
                        </button>
                        <button>
                            <ArrowNext />
                        </button>
                    </div>
                </div>
            </div>
            <h1 className="success-stories-title">Our Success Stories</h1>
        </div>
    );
};

export default SuccessStories;
