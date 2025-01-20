import style from '@/styles/layout/headerDesktop.module.scss';
import logo from '../../../public/images/Logo-full.png';
import Image from 'next/image';
import HeaderLink from './HeaderLink';
import Button from '../Button';

type Props = {
    items: {
        content: string;
        hasIcon?: boolean;
    }[];
};

export default function HeaderDesktop({ items }: Props) {
    return (
        <header className={style.headerDesktop}>
            <Image
                alt="logo"
                src={logo}
                style={{
                    marginTop: '8px',
                }}
            />

            <div className={style.headerContent}>
                {items.map((item, index) => (
                    <HeaderLink key={index} item={item} />
                ))}
            </div>

            <Button content="Start your model career" />
        </header>
    );
}
