import FactsSection from '@/components/pages/home/facts-section';
import HeroSection from '@/components/pages/home/hero-section';
import LiveSection from '@/components/pages/home/live-section';

export default function HomePage() {
	return (
		<div className=' text-background h-[300vh]'>
			<HeroSection />
			<div className='relative z-10 w-full overflow-x-clip'>
				<LiveSection />
				<FactsSection />
			</div>
		</div>
	);
}
