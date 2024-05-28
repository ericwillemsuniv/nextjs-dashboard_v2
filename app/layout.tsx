import '@/app/ui/global.css';
import { inter, lusitana, arima } from '@/app/ui/fonts';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${arima.className} antialiased`}>{children}</body>
        </html>
    );
}