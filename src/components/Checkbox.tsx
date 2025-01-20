import React from 'react';
import style from '@/styles/checkbox.module.scss';
import icon from '../../public/icons/16_icon/16_chekbox-check.png';
import MyImage from './MyImage';

export default function Checkbox() {
    return (
        <div className={style.checkbox}>
            <MyImage src={icon} alt="icon" />
        </div>
    );
}
