'use client';
import Container from '@/components/utilities/container';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

export default function FactsSection() {
	return (
		<div className='relative'>
			<Container className='flex flex-col xl:flex-row gap-3 h-screen z-10 items-center justify-center'>
				<div className='xl:flex w-full xl:w-1/2 items-center justify-center hidden'>
					<motion.div className='xl:h-[500px] rotate-12 scale-125'>
						<Image
							src='/can/gold.png'
							height={600}
							width={200}
							className='h-full w-full object-contain'
							alt=''
						/>
					</motion.div>
				</div>
				<div className='flex flex-col items-start justify-center w-full xl:w-1/2'>
					<div className='xl:text-4xl font-light'>NUTRITION</div>
					<div className='bg-gradient-to-r text-transparent from-blue-600 via-purple-500 to-red-500 bg-clip-text xl:text-9xl font-bold mb-3'>
						FACTS
					</div>
					<div className='text-xl font-bold'>
						This product is going to rock
					</div>
					<div className='text-xl mb-6'>
						Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Aut optio architecto eum molestias ab
						voluptates aliquam quibusdam quis eaque
						praesentium? Tempora odio ipsum quis temporibus
						voluptas deserunt, earum illo debitis.
					</div>
				</div>
			</Container>
			<motion.div className='absolute top-2/3 left-[-12%] h-[300px] rotate-[-90deg]'>
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
