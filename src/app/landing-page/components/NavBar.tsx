import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ArrowDown from './icons/ArrowDown';
import '@/styles/components/_navBar.scss';
import ArrowLeft from './icons/ArrowLeft';
import MenuIcon from './icons/MenuIcon';

const NavBar = () => {
    return (
        <div className="nav-bar">
            {/* Mobile-only ArrowLeft */}
            <div className="nav-left">
                <ArrowLeft />
            </div>

            {/* Logo */}
            <div className="nav-logo">
                <Image
                    width={100}
                    height={100}
                    src={'/images/logo-full.png'}
                    alt="Logo"
                    className="logo"
                />
            </div>

            {/* Mobile-only MenuIcon */}
            <div className="nav-right">
                <MenuIcon />
            </div>

            {/* Full Navigation (Desktop only) */}
            <nav className="nav-links">
                <Link href="/landing-page">Home</Link>
                <Link href="/todo-list">
                    For Models <ArrowDown />
                </Link>
                <Link href="/about">
                    For Client <ArrowDown />
                </Link>
            </nav>

            {/* Button (Desktop only) */}
            <button className="nav-button">Start your model career</button>
        </div>
    );
};

export default NavBar;
