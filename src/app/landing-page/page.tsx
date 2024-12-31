import '@/styles/landingPage.scss';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Slider from '@/components/slider/page';
import Header from '@/components/header/page';
import Banner from '@/components/banner/page';
import Card from '@/components/card/page';
import Footer from '@/components/footer/page';
export default function LandingPage() {
    return (
        <div className="main">
            <Header />
            <Banner />
            <div className="slider">
                <div className="slider-content">
                    <div className="slider-top">
                        <div className="big-title">Meet your models</div>
                        <div className="slider-back">
                            <Button
                                size="large"
                                iconPosition="end"
                                icon={<ArrowRightOutlined />}
                                style={{ backgroundColor: '#F3F4F6' }}
                            >
                                View all
                            </Button>
                        </div>
                    </div>
                    <div className="slider-bot">
                        <Slider />
                    </div>
                </div>
            </div>
            <div className="second-banner">
                <div className="second-content">
                    <div className="left-content">
                        <div className="big-title">Our Success Stories</div>
                        <div>
                            <Button
                                size="large"
                                type="primary"
                                style={{
                                    backgroundColor: '#030712',
                                    marginRight: 10,
                                }}
                            >
                                Apply now
                            </Button>
                            <span>to Start Your Journey!</span>
                        </div>
                    </div>
                    <div className="res-content">
                        <div
                            className="medium-title"
                            style={{ fontWeight: 700 }}
                        >
                            Our Success Stories
                        </div>
                    </div>
                    <div className="right-content">
                        <div className="right-image">
                            <img
                                className="right-banner"
                                src="/images/banner2.png"
                                alt="Model second banner"
                            />
                        </div>
                        <div className="right-item">
                            <div>
                                <div
                                    className="small-title"
                                    style={{ fontWeight: 400 }}
                                >
                                    Ulina's Story
                                </div>
                                <div
                                    className="medium-title"
                                    style={{ fontWeight: 700 }}
                                >
                                    From Local to International
                                </div>
                            </div>
                            <div style={{ marginTop: 70, marginBottom: 70 }}>
                                <img
                                    className="item-nav"
                                    src="/images/nav-dot.png"
                                    alt="Dot navbar"
                                />
                            </div>
                            <div className="second-nav">
                                <img
                                    className="item-nav"
                                    src="/images/nav-btn .png"
                                    alt="Button navbar"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="res-content">
                        <div style={{ textAlign: 'center' }}>
                            <Button
                                size="large"
                                type="primary"
                                style={{
                                    backgroundColor: '#030712',
                                    marginRight: 10,
                                }}
                            >
                                Apply now
                            </Button>
                            <span>to Start Your Journey!</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="third-banner">
                <img
                    className="third-model"
                    src="/images/banner3.png"
                    alt="Model first banner"
                />
                <div className="third-title">
                    <div className="third-content">
                        <div
                            className="medium-title"
                            style={{
                                fontWeight: 700,
                            }}
                        >
                            Why Choose
                        </div>

                        <img
                            className="third-logo"
                            src="/images/Logo-full.png"
                            alt="Logo of the page"
                        />

                        <div className="third-item">
                            <div className="third-options">
                                <img
                                    className="tick"
                                    src="/images/tick.png"
                                    alt="Checkbox"
                                />
                                <p>Access global opportunities</p>
                            </div>
                            <div className="third-options">
                                <img
                                    className="tick"
                                    src="/images/tick.png"
                                    alt="Checkbox"
                                />
                                <p>Join a supportive and professional team</p>
                            </div>
                            <div className="third-options">
                                <img
                                    className="tick"
                                    src="/images/tick.png"
                                    alt="Checkbox"
                                />
                                <p>
                                    Get featured in high-profile events and
                                    campaigns
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Card />
            <Footer />
            <div className="footer-end">
                <div className="end-div">
                    <div className="footer-left">
                        <img
                            className="small-logo"
                            src="/images/Logo-icon.png"
                            alt="Logo icon of the page"
                        />
                        <div>Copyright © 2024 - All right reserved</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
