import style from '@/styles/select.module.scss';
import Image from 'next/image';
import icon from '../../public/icons/20_icon/20px_chevron-down.png';

export default function Dropdown() {
    return (
        <div className={style.select}>
            <span>English</span> <Image src={icon} alt="" />
        </div>
    );
}
