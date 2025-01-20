import style from '@/styles/layout/headerLink.module.scss';
import downIcon from '../../../public/icons/20_icon/20px_chevron-down.png';
import MyImage from '../MyImage';

type Props = {
    item: {
        content: string;
        hasIcon?: boolean;
    };
};

export default function HeaderLink({ item }: Props) {
    return (
        <div className={style.headerLink}>
            <span>{item.content}</span>
            {item.hasIcon && (
                <MyImage width={16} height={16} src={downIcon} alt="icon" />
            )}
        </div>
    );
}
