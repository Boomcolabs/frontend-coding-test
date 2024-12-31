import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import '@/styles/global.scss';

const dmSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '700'],
    variable: '--font-dm-sans',
    display: 'swap',
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
        <html lang="en" className={dmSans.variable}>
            <body>{children}</body>
        </html>
    );
}
