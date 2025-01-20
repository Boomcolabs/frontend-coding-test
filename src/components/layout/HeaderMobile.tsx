import style from '@/styles/layout/headerMobile.module.scss';
import logo from '../../../public/images/Logo-full.png';
import iconLeft from '../../../public/icons/20_icon/20px_chevron-left.png';
import menu from '../../../public/icons/20_icon/20px_menu.png';
import Button from '../Button';
import MyImage from '../MyImage';

export default function HeaderMobile() {
    return (
        <header className={style.headerMobile}>
            <Button
                status="transparent"
                icon={<MyImage src={iconLeft} alt="icon" />}
            />
            <MyImage
                src={logo}
                alt="logo"
                style={{ marginTop: '8px' }}
                priority
            />
            <Button
                status="transparent"
                icon={<MyImage src={menu} alt="menu" />}
            />
        </header>
    );
}
