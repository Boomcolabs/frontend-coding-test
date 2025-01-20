import style from '@/styles/layout/headerDesktop.module.scss';
import logo from '../../../public/images/Logo-full.png';
import HeaderLink from './HeaderLink';
import Button from '../Button';
import MyImage from '../MyImage';

type Props = {
    items: {
        content: string;
        hasIcon?: boolean;
    }[];
};

export default function HeaderDesktop({ items }: Props) {
    return (
        <header className={style.headerDesktop}>
            <MyImage
                alt="logo"
                src={logo}
                style={{
                    marginTop: '8px',
                }}
                priority
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
