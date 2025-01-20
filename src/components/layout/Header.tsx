import HeaderDesktop from './HeaderDesktop';
import HeaderMobile from './HeaderMobile';

export default function Header() {
    const items = [
        {
            content: 'Home',
        },
        {
            content: 'For Models',
            hasIcon: true,
        },
        {
            content: 'For Client',
            hasIcon: true,
        },
    ];
    return (
        <>
            <HeaderDesktop items={items} />
            <HeaderMobile />
        </>
    );
}
