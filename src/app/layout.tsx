import Header from '@/components/layout/header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={`${inter.className} relative min-h-screen`}>
				<div className='absolute top-0 w-full h-full'>
					<Image
						width={1600}
						height={900}
						src='/bg/2.jpg'
						alt=''
						className='h-full w-full object-center object-cover'
					/>
				</div>
				<div className='relative'>
					<Header />
					{children}
				</div>
			</body>
		</html>
	);
}
