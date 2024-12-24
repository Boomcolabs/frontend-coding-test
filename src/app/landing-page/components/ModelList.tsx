import React from 'react';
import ArrowRight from './icons/ArrowRight';
import '@/styles/components/_modelList.scss';

type Model = {
    name: string;
    city: string;
    image: string;
};

const modelList: Model[] = [
    {
        name: 'SIMON D.',
        city: 'Dubai',
        image: '/images/model1.png',
    },
    {
        name: 'CHRISTINE V.',
        city: 'Burj Khalifa',
        image: '/images/model2.png',
    },
    {
        name: 'DARON M.',
        city: 'Dubai',
        image: '/images/model3.png',
    },
    {
        name: 'VERONICA BR.',
        city: 'Dubai',
        image: '/images/model4.png',
    },
    {
        name: 'MAIHUN D.',
        city: 'Dubai',
        image: '/images/model5.png',
    },
];

const ModelList = () => {
    return (
        <div className="model-list">
            <div className="header">
                <h1>Meet our models</h1>
                <button className="view-all-button">
                    <span>View all</span>
                    <ArrowRight />
                </button>
            </div>

            <div className="model-grid">
                {modelList.map((model, index) => (
                    <div className="model-card" key={index}>
                        <img src={model.image} alt={model.name} />
                        <h2>{model.name}</h2>
                        <p>{model.city}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ModelList;
