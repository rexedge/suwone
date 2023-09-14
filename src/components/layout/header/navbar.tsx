import Container from '@/components/utilities/container';
import React from 'react';
import Hamburger from './hamburger-menu';
import Logo from './logo';
import Cart from './shopping-cart';

export default function Navbar() {
	return (
		<div>
			<Container className='flex justify-between items-center'>
				<Hamburger />
				<Logo />
				<Cart />
			</Container>
		</div>
	);
}
