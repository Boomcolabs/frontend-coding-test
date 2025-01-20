import logo from '../../../public/images/Logo-full-big.png';
import Checkbox from '../Checkbox';
import style from '@/styles/sections/reasonSection.module.scss';
import MyImage from '../MyImage';

export default function ReasonSection() {
    const reasons = [
        'Access global opportunities',
        'Join a supportive and professional team',
        'Get featured in high-profile events and campaigns',
    ];
    return (
        <div className={style.reasonSection}>
            <div className={style.shape}></div>
            <div className={style.content}>
                <h1>Why Choose</h1>
                <MyImage src={logo} alt="logo" width={303.88} height={80} />
                {reasons.map((reason, index) => (
                    <div className={style.reason} key={index}>
                        <div className={style.checkboxContainer}>
                            <Checkbox />
                        </div>
                        <span>{reason}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
