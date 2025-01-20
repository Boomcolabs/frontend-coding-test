import style from '@/styles/button.module.scss';
import clsx from 'clsx';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    content?: string;
    status?: 'primary' | 'secondary' | 'transparent';
    size?: 'small' | 'medium' | 'large';
    hasBorder?: boolean;
    icon?: React.ReactNode;
}

export default function Button({
    content,
    status = 'primary',
    size = 'medium',
    hasBorder,
    icon,
    ...rest
}: Props) {
    return (
        <button
            className={clsx(
                style[status],
                style[size],
                hasBorder && style.border
            )}
            {...rest}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: icon && content ? '8px' : '0',
                }}
            >
                <span>{content}</span> {icon}
            </div>
        </button>
    );
}
