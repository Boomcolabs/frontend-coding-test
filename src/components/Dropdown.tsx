import style from '@/styles/dropdown.module.scss';
import Image from 'next/image';
import icon from '../../public/icons/20_icon/20px_chevron-down.png';
import clsx from 'clsx';

type Props = {
    hasBorder?: boolean;
};

export default function Dropdown({ hasBorder }: Props) {
    return (
        <div className={clsx(style.select, hasBorder && style.border)}>
            <span>English</span> <Image src={icon} alt="" />
        </div>
    );
}
