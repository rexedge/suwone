'use client';
import Container from '@/components/utilities/container';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Navbar from '@/components/layout/header/navbar';

export default function HeroSection() {
	return (
		<motion.div className='relative h-[300vh] w-full overflow-x-clip'>
			<Navbar />
			<div className='relative h-screen'>
				<motion.div
					initial={{
						opacity: 0,
						top: '66%',
						translateX: '50%',
						left: '-15%',
						translateY: '-50%',
						rotate: '-90deg',
					}}
					animate={{
						opacity: 1,
						top: '66%',
						translateX: '50%',
						left: '-15%',
						translateY: '-50%',
						rotate: '-135deg',
					}}
					style={{ position: 'absolute' }}
					transition={{
						duration: 1,
						type: 'spring',
					}}
				>
					<div className='h-[100px] z-0'>
						<Image
							src='/fruits/lime.png'
							height={600}
							width={200}
							className='h-full w-full object-contain'
							alt=''
						/>
					</div>
				</motion.div>
				<Container className='relative '>
					<div className='grid grid-cols-1 xl:grid-cols-2'>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 1,
								type: 'spring',
							}}
						>
							<div className=' flex flex-col justify-center min-h-[600px] z-10'>
								<div className='xl:text-8xl font-light'>
									ENERGY TO
								</div>
								<div className='bg-gradient-to-r text-transparent from-blue-600 via-purple-500 to-red-500 bg-clip-text xl:text-9xl font-bold mb-3'>
									EXTREME
								</div>
								<div className='text-xl font-bold'>
									This product is going to rock
								</div>
								<div className='text-xl mb-6'>
									Lorem ipsum, dolor sit amet
									consectetur adipisicing elit.
									Impedit sit explicabo commodi
									quidem maiores, at obcaecati.
								</div>
								<Link
									href='/'
									className='flex gap-2 font-semibold xl:text-xl'
								>
									VIEW PRODUCTS{' '}
									<span className=' bg-gradient-to-r text-transparent from-blue-600 via-purple-500 to-red-500 bg-clip-text'>
										&rarr;
									</span>
								</Link>
							</div>
						</motion.div>
						<div className='flex relative'>
							<motion.div
								initial={{
									opacity: 0,
									top: '-50%',
									translateX: '50%',
									right: '30%',
									translateY: '-50%',
								}}
								animate={{
									opacity: 1,
									y: 0,
									top: '50%',
									translateX: '50%',
									right: '30%',
									translateY: '-50%',
								}}
								style={{ position: 'absolute' }}
								transition={{
									duration: 1,
									type: 'spring',
								}}
							>
								<div className='xl:h-[550px] rotate-12'>
									<Image
										src='/can/gold.png'
										height={600}
										width={200}
										className='h-full w-full object-contain'
										alt=''
									/>
								</div>
							</motion.div>
							<motion.div
								initial={{
									opacity: 0,
									top: '150%',
									translateX: '50%',
									left: 0,
									translateY: '-50%',
								}}
								animate={{
									opacity: 1,
									y: 0,
									top: '40%',
									translateX: '50%',
									left: 0,
									translateY: '-50%',
								}}
								style={{ position: 'absolute' }}
								transition={{
									duration: 1,
									type: 'spring',
								}}
							>
								<div className='xl:h-[550px] -rotate-12'>
									<Image
										src='/can/silver.png'
										height={600}
										width={200}
										className='h-full w-full object-contain'
										alt=''
									/>
								</div>
							</motion.div>
						</div>
					</div>
				</Container>
			</div>
		</motion.div>
	);
}
