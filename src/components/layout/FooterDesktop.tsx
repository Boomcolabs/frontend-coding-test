import Image from 'next/image';
import logo from '../../../public/images/Logo-full-big.png';
import instagram from '../../../public/icons/socials/Instagram.png';
import tikTok from '../../../public/icons/socials/TikTok.png';
import youTube from '../../../public/icons/socials/YouTube.png';
import logoIcon from '../../../public/images/Logo-icon.png';
import Dropdown from '../Dropdown';
import style from '@/styles/layout/footerDesktop.module.scss';

export default function FooterDesktop() {
    return (
        <footer style={{ marginTop: '200px' }}>
            <div className={style.footerContent}>
                <div className={style.firstSection}>
                    <Image width={248} height={52} alt="logo" src={logo} />
                    <h6>WELTENTERS FZ LLC</h6>
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                </div>
                <div className={style.contactSection}>
                    <h6>FOR MODELS</h6>
                    <p>Apply Now</p>
                    <p>FAQs for Applicants</p>
                </div>
                <div className={style.contactSection}>
                    <h6>FOR CLIENTS</h6>
                    <p>Hire a Model</p>
                    <p>Success Stories</p>
                </div>
                <div className={style.contactSection}>
                    <h6>SOCIAL</h6>
                    <div>
                        <Image src={instagram} alt="instagram" />
                        <Image
                            src={tikTok}
                            alt="tikTok"
                            style={{
                                margin: '0 16px',
                            }}
                        />
                        <Image src={youTube} alt="youTube" />
                    </div>
                </div>
            </div>

            <div className={style.copyRight}>
                <div className={style.logo}>
                    <Image src={logoIcon} alt="logoIcon" />
                    <span>Copyright © 2024 - All right reserved</span>
                </div>
                <Dropdown hasBorder />
            </div>
        </footer>
    );
}
