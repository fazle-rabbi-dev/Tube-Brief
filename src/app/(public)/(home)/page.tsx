import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import HowItWorksSection from "./_components/HowItWorksSection";
import CTASection from "./_components/CTASection";
import FAQSection from "./_components/FAQSection";

export default function HomePage() {
	return (
		<main>
			<HeroSection />
			<FeaturesSection />
			<HowItWorksSection />
			<CTASection />
			<FAQSection />
		</main>
	);
}
