import { LeftOutlined, MenuOutlined, DownOutlined } from '@ant-design/icons';
import { Dropdown, Button, Space, MenuProps } from 'antd';
import '@/styles/header.scss';
const items: MenuProps['items'] = [
    {
        label: 'Home',
        key: '1',
    },
    {
        label: 'For Models',
        key: '2',
    },
    {
        label: 'For Clients',
        key: '3',
    },
    {
        label: 'Language',
        key: '4',
    },
];

const menuProps = {
    items,
    //onClick: handleMenuClick,
};
const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <div className="mobile-arrow">
                    <LeftOutlined />
                </div>
                <div className="header-item">
                    <img
                        className="header-logo"
                        src="/images/Logo-full.png"
                        alt="Logo of the page"
                    />
                </div>
                <div className="navbar-mobile">
                    <Dropdown menu={{ items }} trigger={['click', 'hover']}>
                        <Button type="text" icon={<MenuOutlined />} />
                    </Dropdown>
                </div>
                <div className="header-nav">
                    <div className="nav-item">Home</div>
                    <div className="nav-dropdown">
                        <div className="nav-title">For Models</div>
                        <img
                            className="nav-icon"
                            src="/images/navbar-dropdown.svg"
                            alt="dropdown"
                        />
                    </div>
                    <div className="nav-dropdown">
                        <div className="nav-title">For Clients</div>
                        <img
                            className="nav-icon"
                            src="/images/navbar-dropdown.svg"
                            alt="dropdown"
                        />
                    </div>
                </div>
                <div className="header-end">
                    <div className="header-btn">
                        <div className="language">
                            <Dropdown menu={menuProps}>
                                <Button>
                                    <Space>
                                        English
                                        <DownOutlined />
                                    </Space>
                                </Button>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
