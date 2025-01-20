import React from 'react';
import style from '@/styles/checkbox.module.scss';
import Image from 'next/image';
import icon from '../../public/icons/16_icon/16_chekbox-check.png';

export default function Checkbox() {
    return (
        <div className={style.checkbox}>
            <Image src={icon} alt="icon" />
        </div>
    );
}
