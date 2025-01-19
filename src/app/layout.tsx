import clsx from 'clsx';
import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';

const DMSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-dm-sans',
});

const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: 'Weltenters Test',
    description: "Let's see what you can do!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={clsx(DMSans.variable, inter.variable)}>
            <body style={{ fontFamily: 'var(--font-dm-sans)' }}>
                {children}
            </body>
        </html>
    );
}
