'use client';
import Container from '@/components/utilities/container';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
	return (
		<div className='relative min-h-[500px] '>
			<Container className='relative'>
				<div className='grid grid-cols-1 md:grid-cols-2'>
					<div className=' flex flex-col justify-center min-h-[600px]'>
						<div className='md:text-8xl font-light'>
							ENERGY TO
						</div>
						<div className='bg-gradient-to-r text-transparent from-blue-600 via-purple-500 to-red-500 bg-clip-text md:text-9xl font-bold mb-3'>
							EXTREME
						</div>
						<div className='text-xl font-bold'>
							This product is going to rock
						</div>
						<div className='text-xl mb-6'>
							Lorem ipsum, dolor sit amet consectetur
							adipisicing elit. Impedit sit explicabo
							commodi quidem maiores, at obcaecati.
						</div>
						<Link
							href='/'
							className='flex gap-2 font-semibold md:text-xl'
						>
							VIEW PRODUCTS{' '}
							<span className=' bg-gradient-to-r text-transparent from-blue-600 via-purple-500 to-red-500 bg-clip-text'>
								&rarr;
							</span>
						</Link>
					</div>
					<div className='flex relative'>
						<motion.div className='absolute top-2/3 right-1/2 translate-x-1/2 -translate-y-1/2 md:h-[500px] rotate-12'>
							<Image
								src='/can/gold.png'
								height={600}
								width={200}
								className='h-full w-full object-contain'
								alt=''
							/>
						</motion.div>
						<motion.div className='absolute top-1/2 left-1/5 translate-x-1/2 -translate-y-1/2 md:h-[500px] -rotate-12'>
							<Image
								src='/can/silver.png'
								height={600}
								width={200}
								className='h-full w-full object-contain'
								alt=''
							/>
						</motion.div>
					</div>
				</div>
			</Container>
			<motion.div className='absolute top-2/3 left-[-5%] h-[100px] rotate-[-90deg]'>
				<Image
					src='/fruits/lime.png'
					height={600}
					width={200}
					className='h-full w-full object-contain'
					alt=''
				/>
			</motion.div>
		</div>
	);
}
