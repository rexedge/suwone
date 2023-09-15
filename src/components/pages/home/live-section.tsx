'use client';
import Container from '@/components/utilities/container';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function LiveSection() {
	// const targetRef = useRef<HTMLDivElement>(null);
	// const { scrollYProgress } = useScroll({
	// 	target: targetRef,
	// 	offset: ['start', 'end'],
	// });
	// const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
	return (
		<motion.div className='w-screen overflow-x-clip'>
			<Container className='relative'>
				<motion.div className='absolute right-0 bottom-0 xl:h-[500px] rotate-12'>
					<Image
						src='/can/gold.png'
						height={600}
						width={200}
						className='h-full w-full object-contain'
						alt=''
					/>
				</motion.div>
				<motion.div className='absolute top-1/3 left-[-15%] translate-x-1/2 -translate-y-1/2 xl:h-[500px] scale-150 -rotate-[45deg]'>
					<Image
						src='/can/silver.png'
						height={600}
						width={200}
						className='h-full w-full object-contain'
						alt=''
					/>
				</motion.div>
				<div className='grid place-items-center h-full w-full min-h-screen relative z-10'>
					<div className='flex flex-col items-center justify-center'>
						<div className='xl:text-8xl font-light'>
							LIVE THE
						</div>
						<div className='bg-gradient-to-r text-transparent from-blue-600 via-purple-500 to-red-500 bg-clip-text xl:text-9xl font-bold mb-3'>
							EXPERIENCE
						</div>
					</div>
				</div>
			</Container>
		</motion.div>
	);
}
