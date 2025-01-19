import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';

const DMSans = DM_Sans({
    subsets: ['latin'],
    weight: ['400', '500', '600'],
    variable: '--font-dm-sans',
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
        <html lang="en" className={DMSans.className}>
            <body>{children}</body>
        </html>
    );
}
