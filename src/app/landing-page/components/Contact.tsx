import React from 'react';
import '@/styles/components/_contact.scss';

const Contact = () => {
    return (
        <div className="contact">
            <img src="/images/contact-bg.png" alt="Logo" />
            <div className="contact-content">
                <h1>Looking for Models? </h1>
                <p>Find the Perfect Model for Your Brand</p>
                <button>Contact Our Team</button>
            </div>
        </div>
    );
};

export default Contact;
