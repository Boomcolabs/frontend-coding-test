import style from '@/styles/button.module.scss';
import clsx from 'clsx';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    content?: string;
    status?: 'primary' | 'secondary' | 'white';
    size?: 'small' | 'medium' | 'large';
    icon?: React.ReactNode;
}

export default function Button({
    content,
    status = 'primary',
    size = 'medium',
    icon,
    ...rest
}: Props) {
    return (
        <button className={clsx(style[status], style[size])} {...rest}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>{content}</span> {icon}
            </div>
        </button>
    );
}
