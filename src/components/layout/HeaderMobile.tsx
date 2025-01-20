import style from '@/styles/layout/headerMobile.module.scss';
import logo from '../../../public/images/Logo-full.png';
import Image from 'next/image';
import iconLeft from '../../../public/icons/20_icon/20px_chevron-left.png';
import menu from '../../../public/icons/20_icon/20px_menu.png';
import Button from '../Button';

export default function HeaderMobile() {
    return (
        <header className={style.headerMobile}>
            <Button
                status="transparent"
                icon={<Image src={iconLeft} alt="icon" />}
            />
            <Image src={logo} alt="logo" style={{ marginTop: '8px' }} />
            <Button
                status="transparent"
                icon={<Image src={menu} alt="menu" />}
            />
        </header>
    );
}
