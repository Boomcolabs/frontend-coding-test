import React from 'react';
import {
    InstagramOutlined,
    YoutubeOutlined,
    TikTokOutlined,
} from '@ant-design/icons';

import '@/styles/footer.scss';
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-item">
                    <img
                        className="footer-logo"
                        src="/images/Logo-full.png"
                        alt="Logo of the page"
                    />
                    <div style={{ fontSize: 14, fontWeight: 700 }}>
                        WELTENTERS FZ LLC
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 400 }}>
                        Contact Us
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 400 }}>
                        Privacy Policy
                    </div>
                </div>
                <div className="footer-info">
                    <div
                        style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: '#111827',
                        }}
                    >
                        For Models
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 400 }}>
                        Apply Now
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 400 }}>
                        FAQs for Applicants
                    </div>
                </div>
                <div className="footer-info">
                    <div
                        style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: '#111827',
                        }}
                    >
                        For Clients
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 400 }}>
                        Hire a Model
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 400 }}>
                        Success Stories
                    </div>
                </div>
                <div className="footer-info">
                    <div
                        style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color: '#111827',
                        }}
                    >
                        Social
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 400 }}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                gap: 20,
                            }}
                        >
                            <InstagramOutlined />
                            <YoutubeOutlined />
                            <TikTokOutlined />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
