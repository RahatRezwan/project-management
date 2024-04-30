import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider } from 'antd';
import { theme } from 'Theme/theme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'Project Manager',
   description: 'A Project Manager Application to mange your project easily',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang='en'>
         <body className={inter.className}>
            <AntdRegistry>
               <ConfigProvider theme={theme}>{children}</ConfigProvider>
            </AntdRegistry>
         </body>
      </html>
   );
}
