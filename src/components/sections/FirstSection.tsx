import Button from '../Button';
import style from '@/styles/sections/firstSection.module.scss';

export default function FirstSection() {
    return (
        <div className={style.firstSectionContainer}>
            <div className={style.firstSection}>
                <div className={style.content}>
                    <h1>
                        Unlock Your <br /> Modeling Potential
                    </h1>
                    <p>
                        Discover endless opportunities, connect with top
                        agencies, and showcase your talent
                    </p>
                    <Button size="large" content="Apply Now" />
                </div>
            </div>
        </div>
    );
}
