import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';
import style from '@/styles/layout/footer.module.scss';

export default function Footer() {
    return (
        <div className={style.footerContainer}>
            <FooterDesktop />
            <FooterMobile />
        </div>
    );
}
