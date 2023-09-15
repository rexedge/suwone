import Container from '@/components/utilities/container';
import React from 'react';
import Hamburger from './hamburger-menu';
import Logo from './logo';
import Cart from './shopping-cart';
import { AnimatePresence, motion } from 'framer-motion';

export default function Navbar() {
	return (
		<AnimatePresence>
			<motion.div
				initial={{ scale: 0, y: -300 }}
				animate={{ scale: 1, y: 0 }}
				transition={{
					duration: 1,
					type: 'spring',
				}}
			>
				<Container className='flex justify-between text-white'>
					<Hamburger />
					<Logo />
					<Cart />
				</Container>
			</motion.div>
		</AnimatePresence>
	);
}
