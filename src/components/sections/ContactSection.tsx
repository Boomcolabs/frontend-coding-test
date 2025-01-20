import Button from '../Button';
import style from '@/styles/sections/contactSection.module.scss';

export default function ContactSection() {
    return (
        <div className={style.contactSection}>
            <h1>Looking for Models? </h1>
            <p>Find the Perfect Model for Your Brand</p>
            <Button
                content="Contact Our Team"
                status="white"
                size="large"
                style={{
                    padding: '0 16px',
                }}
            />
        </div>
    );
}
