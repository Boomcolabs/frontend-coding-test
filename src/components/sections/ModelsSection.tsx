import Button from '../Button';
import icon from '../../../public/icons/20_icon/20px_arrow-right.png';
import CardSlider from '../CardSlider';
import simon from '../../../public/images/models/simon.png';
import christine from '../../../public/images/models/christine.png';
import daron from '../../../public/images/models/daron.png';
import veronica from '../../../public/images/models/veronica.png';
import maihun from '../../../public/images/models/maihun.png';
import CardItem from '../CardItem';
import style from '@/styles/sections/modelsSection.module.scss';
import MyImage from '../MyImage';

export default function ModelsSection() {
    const items = [
        {
            name: 'SIMON D.',
            location: 'Dubai',
            image: simon,
        },
        {
            name: 'CHRISTINE V.',
            location: 'Burj Khalifa',
            image: christine,
        },
        {
            name: 'DARON M.',
            location: 'Dubai',
            image: daron,
        },
        {
            name: 'VERONICA BR.',
            location: 'Dubai',
            image: veronica,
        },
        {
            name: 'MAIHUN D.',
            location: 'Dubai',
            image: maihun,
        },
    ];
    return (
        <div className={style.modelsSection}>
            <div className={style.title}>
                <h1>Meet our models</h1>
                <Button
                    size="large"
                    content="View all"
                    status="secondary"
                    icon={<MyImage src={icon} alt="icon" />}
                />

                <Button
                    icon={<MyImage src={icon} alt="icon" />}
                    status="transparent"
                    size="small"
                    style={{
                        width: '24px',
                        padding: 0,
                    }}
                />
            </div>

            <CardSlider>
                {items.map((item, index) => (
                    <CardItem item={item} key={index} />
                ))}
            </CardSlider>
        </div>
    );
}
