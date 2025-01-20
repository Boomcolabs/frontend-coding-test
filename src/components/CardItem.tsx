import { StaticImageData } from 'next/image';
import styles from '@/styles/cardItem.module.scss';
import MyImage from './MyImage';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    item: {
        name: string;
        location: string;
        image: StaticImageData;
    };
}

export default function CardItem({ item }: Props) {
    return (
        <div className={styles.cardItem}>
            <div className={styles.image}>
                <MyImage src={item.image} alt={item.name} fill sizes="100vw" />
            </div>
            <div className={styles.info}>
                <h3>{item.name}</h3>
                <p>{item.location}</p>
            </div>
        </div>
    );
}
