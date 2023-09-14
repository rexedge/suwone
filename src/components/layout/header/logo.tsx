import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Logo() {
	return (
		<Link
			href='/'
			className='h-16'
		>
			<Image
				src='/logo/black.webp'
				alt='Suwone Logo'
				height={100}
				width={200}
				className='w-full h-full object-contain object-center'
			/>
		</Link>
	);
}
