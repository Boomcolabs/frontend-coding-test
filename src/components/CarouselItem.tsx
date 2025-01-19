import Image, { StaticImageData } from 'next/image';
import style from '@/styles/carouselItem.module.scss';

type Props = {
    item: {
        title: string;
        subtitle: string;
        image: StaticImageData;
    };
};

export default function CarouselItem({ item }: Props) {
    return (
        <div className={style.carouselItem}>
            <Image
                src={item.image}
                alt="image"
                style={{
                    mixBlendMode: 'luminosity',
                }}
                fill
            />
            <div className={style.content}>
                <p>{item.title}</p>
                <h1>{item.subtitle}</h1>
            </div>
        </div>
    );
}
