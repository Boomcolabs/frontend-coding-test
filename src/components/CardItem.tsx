import Image, { StaticImageData } from 'next/image';
import styles from '@/styles/cardItem.module.scss';

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
                <Image src={item.image} alt={item.name} fill />
            </div>
            <div className={styles.info}>
                <h3>{item.name}</h3>
                <p>{item.location}</p>
            </div>
        </div>
    );
}
