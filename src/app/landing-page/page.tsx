'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link'; // Import Next.js Link component
import '../../styles/landingPage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faYoutube,
    faTiktok,
} from '@fortawesome/free-brands-svg-icons';

export default function LandingPage() {
    const [isClientsDropdownOpen, setIsClientsDropdownOpen] = useState(false);
    const [isModelsDropdownOpen, setIsModelsDropdownOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [isLoaded, setIsLoaded] = useState(false);
    const stories = [
        {
            title: "Uliana's Story",
            subtitle: 'From Local to \nInternational',
            image: '/images/success-story.svg',
        },
        {
            title: "Sarah's Journey",
            subtitle: 'Breaking Into Fashion',
            image: '/images/veronica.svg', // You'll need this image
        },
        {
            title: "David's Path",
            subtitle: 'Rising Star in Dubai',
            image: '/images/simon.svg', // You'll need this image
        },
        {
            title: "Maria's Success",
            subtitle: 'Global Recognition',
            image: '/images/christine.svg', // You'll need this image
        },
    ];

    // Add this useEffect in your LandingPage component
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % stories.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        // Wait for next tick to ensure DOM is fully loaded
        const timer = setTimeout(() => {
            setIsLoaded(true);
            document.documentElement.style.scrollBehavior = 'smooth';
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    // Then modify ju
    return (
        <div className={`landingPage ${isLoaded ? 'loaded' : ''}`}>
            {/* Navbar */}
            <nav className="navbar">
                <div className="container navbarContent">
                    {/* Logo (navigates to home) */}
                    <Link href="/">
                        <img
                            src="/images/Logo-full.svg"
                            alt="WELTEnters Logo"
                            className="logo"
                        />
                    </Link>

                    {/* Navigation Links */}
                    <div className="navLinks">
                        <Link href="/" className="navLink">
                            Home
                        </Link>

                        <div className="dropdown">
                            <button
                                className="dropdownButton"
                                onClick={() =>
                                    setIsModelsDropdownOpen(
                                        !isModelsDropdownOpen
                                    )
                                }
                            >
                                For Models
                                <span
                                    className={`arrow ${isModelsDropdownOpen ? 'open' : ''}`}
                                ></span>
                            </button>
                            {isModelsDropdownOpen && (
                                <ul className="dropdownMenu">
                                    <li>
                                        <a href="#">Apply Now</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQs</a>
                                    </li>
                                </ul>
                            )}
                        </div>

                        <div className="dropdown">
                            <button
                                className="dropdownButton"
                                onClick={() =>
                                    setIsClientsDropdownOpen(
                                        !isClientsDropdownOpen
                                    )
                                }
                            >
                                For Client
                                <span
                                    className={`arrow ${isClientsDropdownOpen ? 'open' : ''}`}
                                ></span>
                            </button>
                            {isClientsDropdownOpen && (
                                <ul className="dropdownMenu">
                                    <li>
                                        <a href="#">Hire a Model</a>
                                    </li>
                                    <li>
                                        <a href="#">Success Stories</a>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* Call-to-Action Button */}
                    <button className="startButton">
                        Start your model career
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="heroSection">
                <div className="container heroContent">
                    <h1 className="heroTitle">
                        Unlock Your <br /> Modeling Potential
                    </h1>
                    <p className="heroDescription">
                        Discover endless opportunities, connect with top
                        agencies, and showcase your talent
                    </p>
                    <button className="applyButton">Apply Now</button>
                </div>
            </header>

            {/* Models Section */}
            <section className="modelsSection">
                <div className="container">
                    <h2 className="sectionTitle">Meet our models</h2>
                    <div className="modelsGrid">
                        {[
                            {
                                name: 'SIMON D.',
                                location: 'Dubai',
                                details:
                                    'Height: 6\'0", Experience: 5 years, Agency: XYZ',
                                image: '/images/simon.svg',
                            },
                            {
                                name: 'CHRISTINE V.',
                                location: 'Burj Khalifa',
                                details:
                                    'Height: 5\'8", Experience: 3 years, Agency: ABC',
                                image: '/images/christine.svg',
                            },
                            {
                                name: 'DARON M.',
                                location: 'Dubai',
                                details:
                                    'Height: 6\'2", Experience: 4 years, Agency: LMN',
                                image: '/images/daron.svg',
                            },
                            {
                                name: 'VERONICA BR.',
                                location: 'Dubai',
                                details:
                                    'Height: 5\'9", Experience: 2 years, Agency: OPQ',
                                image: '/images/veronica.svg',
                            },
                            {
                                name: 'MAIHUN D.',
                                location: 'Dubai',
                                details:
                                    'Height: 5\'10", Experience: 6 years, Agency: DEF',
                                image: '/images/maihun.svg',
                            },
                        ].map((model, index) => (
                            <div key={index} className="modelCard">
                                <img
                                    src={model.image}
                                    alt={model.name}
                                    className="modelImage"
                                />
                                <div className="modelInfo">
                                    <h3 className="modelName">{model.name}</h3>
                                    <p className="modelDetails">
                                        {model.details}
                                    </p>
                                </div>
                            </div>
                        ))}
                        <a href="#" className="viewAllLink">
                            <img
                                src="/images/button-view-all.svg"
                                alt="View All"
                            />
                        </a>
                    </div>
                </div>
            </section>
            {/* Our Success Stories Section */}
            <section className="successStories">
                <div className="container">
                    <div className="successContent">
                        <div className="textContent">
                            <h2 className="sectionTitle">
                                Our Success <br /> Stories
                            </h2>
                            <div className="actionContainer">
                                <button className="applyButton">
                                    Apply Now
                                </button>
                                <p className="subText">
                                    to Start Your Journey!
                                </p>
                            </div>
                        </div>
                        <div className="imageContent">
                            <div className="storyImageWrapper">
                                <img
                                    src={stories[currentSlide].image}
                                    alt="Success Story"
                                    className="storyImage"
                                />
                                <div className="storyText">
                                    <h3>{stories[currentSlide].title}</h3>
                                    <p>{stories[currentSlide].subtitle}</p>
                                </div>
                                <div className="storyDots">
                                    {stories.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`dot ${currentSlide === index ? 'active' : ''}`}
                                            onClick={() =>
                                                setCurrentSlide(index)
                                            }
                                        />
                                    ))}
                                </div>
                                <div className="storyNavigation">
                                    <button
                                        className="prevButton"
                                        onClick={() =>
                                            setCurrentSlide(
                                                (prev) =>
                                                    (prev -
                                                        1 +
                                                        stories.length) %
                                                    stories.length
                                            )
                                        }
                                    >
                                        ←
                                    </button>
                                    <button
                                        className="nextButton"
                                        onClick={() =>
                                            setCurrentSlide(
                                                (prev) =>
                                                    (prev + 1) % stories.length
                                            )
                                        }
                                    >
                                        →
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose WELT Section */}
            <section className="whyChoose">
                <div className="whyContent">
                    <h2>Why Choose</h2>
                    <img
                        src="/images/Logo-full.svg"
                        alt="WELTEnters"
                        className="logo"
                    />
                    <ul className="benefitsList">
                        <li>Access global opportunities</li>
                        <li>Join a supportive and professional team</li>
                        <li>
                            Get featured in high-profile events and campaigns
                        </li>
                    </ul>
                </div>
                <img
                    src="/images/why-choose.svg"
                    alt="Why Choose WELT"
                    className="whyImage"
                />
            </section>

            {/* Contact Section */}
            <section className="contactTeam">
                <div className="contactContent">
                    <h2>Looking for Models?</h2>
                    <p>Find the Perfect Model for Your Brand</p>
                    <button className="contactButton">Contact Our Team</button>
                </div>
                <img
                    src="/images/contact-team.svg"
                    alt="Background Pattern"
                    className="backgroundPattern"
                />
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footerContent">
                    <div className="footerLeft">
                        <img
                            src="/images/Logo-full.svg"
                            alt="WELT Enters"
                            className="footerLogo"
                        />
                        <p className="companyName">WELTENTERS FZ LLC</p>
                        <div className="footerLinks">
                            <a href="/contact">Contact Us</a>
                            <a href="/privacy">Privacy Policy</a>
                        </div>
                    </div>

                    <div className="footerCenter">
                        <div className="footerColumn">
                            <h3>FOR MODELS</h3>
                            <a href="/apply">Apply Now</a>
                            <a href="/faqs">FAQs for Applicants</a>
                        </div>
                        <div className="footerColumn">
                            <h3>FOR CLIENTS</h3>
                            <a href="/hire">Hire a Model</a>
                            <a href="/success-stories">Success Stories</a>
                        </div>
                    </div>

                    <div className="footerRight">
                        <h3>SOCIAL</h3>
                        <div className="socialLinks">
                            <a href="https://instagram.com">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://youtube.com">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a href="https://tiktok.com">
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footerBottom">
                    <div className="copyright">
                        <img
                            src="/images/footer-logo.svg"
                            alt="Icon"
                            className="footerIcon"
                        />
                        <span>Copyright © 2024 - All right reserved</span>
                    </div>
                    <div className="language">
                        <button
                            onClick={() =>
                                setIsLanguageDropdownOpen(
                                    !isLanguageDropdownOpen
                                )
                            }
                            className="languageButton"
                        >
                            {selectedLanguage}
                        </button>
                        {isLanguageDropdownOpen && (
                            <div className="languageDropdown">
                                <button
                                    onClick={() => {
                                        setSelectedLanguage('English');
                                        setIsLanguageDropdownOpen(false);
                                    }}
                                    className={
                                        selectedLanguage === 'English'
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    English
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedLanguage('Tiếng Việt');
                                        setIsLanguageDropdownOpen(false);
                                    }}
                                    className={
                                        selectedLanguage === 'Tiếng Việt'
                                            ? 'active'
                                            : ''
                                    }
                                >
                                    Tiếng Việt
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </footer>
        </div>
    );
}
