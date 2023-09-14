import { cn } from '@/lib/utils';
import React from 'react';

const Container = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div>
			<div
				className={cn(
					' w-full p-3 md:p-5 max-w-7xl mx-auto',
					className
				)}
			>
				{children}
			</div>
		</div>
	);
};
export default Container;
