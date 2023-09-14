import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import React from 'react';

const Cart = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button
					size='icon'
					variant='ghost'
				>
					<HamburgerMenuIcon className='h-5 w-5' />
				</Button>
			</SheetTrigger>
			<SheetContent side='right'>
				<SheetHeader>
					<SheetTitle>Cart</SheetTitle>
					<SheetDescription>{`Your cart is currently empty`}</SheetDescription>
				</SheetHeader>
				<div className='grid gap-4 py-4'></div>
				<SheetFooter>
					<SheetClose asChild>
						<Button>Close</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default Cart;
