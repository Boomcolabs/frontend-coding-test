import React from 'react';
import Instagram from './icons/Instagram';
import Youtube from './icons/Youtube';
import Tiktok from './icons/Tiktok';
import '@/styles/components/_footer.scss';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-item footer-logo">
                    <img src={'/images/logo-full.png'} alt="Logo" />
                    <p className="footer-logo-text">WELTENTERS FZ LLC</p>
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                </div>
                <div className="footer-item">
                    <h3 className="footer-item-title">FOR MODELS</h3>
                    <p>Apply Now</p>
                    <p>FAQs for Applicants</p>
                </div>
                <div className="footer-item">
                    <h3 className="footer-item-title">FOR CLIENTS</h3>
                    <p>Hire a Model</p>
                    <p>Success Stories</p>
                </div>
                <div className="footer-item">
                    <h3 className="footer-item-title">SOCIAL</h3>
                    <div className="footer-item-icon">
                        <Instagram />
                        <Youtube />
                        <Tiktok />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="icon">
                    <img src={'/images/logo-icon.png'} alt="Footer Bottom" />
                    <span>Copyright © 2024 - All right reserved</span>
                </div>
                <select>
                    <option>English</option>
                    <option>Vietnamese</option>
                </select>
            </div>
        </div>
    );
};

export default Footer;
