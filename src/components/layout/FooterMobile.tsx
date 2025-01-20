import style from '@/styles/layout/footerMobile.module.scss';
import Image from 'next/image';
import logoIcon from '../../../public/images/Logo-icon-big.png';
import Button from '../Button';
import Dropdown from '../Dropdown';
import tikTok from '../../../public/icons/socials/TikTok.png';
import youTube from '../../../public/icons/socials/YouTube.png';
import instagram from '../../../public/icons/socials/Instagram.png';

export default function FooterMobile() {
    return (
        <footer className={style.footerContent}>
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
            <div className={style.firstSection}>
                <div>
                    <Image width={52} height={52} alt="logo" src={logoIcon} />
                    <h6>WELTENTERS FZ LLC</h6>
                </div>
                <div>
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                </div>
                <Button
                    content="Sign in"
                    status="transparent"
                    hasBorder
                    style={{
                        padding: '0 31px',
                    }}
                />
            </div>
            <div className={style.socialsSection}>
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
                <Dropdown />
            </div>
        </footer>
    );
}
