'use client';
import Container from '@/components/utilities/container';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export default function FactsSection() {
	return (
		<div className='relative'>
			<Container className='relative grid grid-cols-1 md:grid-cols-2 min-h-screen z-10'>
				<div className='md:flex items-center justify-center hidden'>
					<motion.div className='md:h-[500px] rotate-12 scale-125'>
						<Image
							src='/can/gold.png'
							height={600}
							width={200}
							className='h-full w-full object-contain'
							alt=''
						/>
					</motion.div>
				</div>
				<div className='flex flex-col items-start justify-center'>
					<div className='md:text-4xl font-light'>NUTRITION</div>
					<div className='bg-gradient-to-r text-transparent from-blue-600 via-purple-500 to-red-500 bg-clip-text md:text-9xl font-bold mb-3'>
						FACTS
					</div>
				</div>
			</Container>
			<motion.div className='absolute top-2/3 -left-1/3 h-[200px] rotate-[-90deg]'>
				<Image
					src='/fruits/pineapple.png'
					height={600}
					width={200}
					className='h-full w-full object-contain'
					alt=''
				/>
			</motion.div>
		</div>
	);
}
