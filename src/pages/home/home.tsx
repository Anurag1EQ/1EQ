import './Home.css';
import { HomeHero } from '../../components/Hero/Hero';
import { TrustedBySection } from '../../components/TrustedBySection/TrustedBySection';
import { ImpactSection } from '../../components/ImpactSection/ImpactSection';
import { ProductsSection } from '../../components/ProductsSection/ProductsSection';
import { BenefitsSection } from '../../components/BenefitsSection/BenefitsSection';
import { ServicesSection } from '../../components/ServicesSection/ServicesSection';
import { TestimonialsSection } from '../../components/TestimonialsSection/TestimonialsSection';
import { CTASection } from '../../components/CTASection/CTASection';

export const HomePage = () => {
    return (
        <>
            <HomeHero />
            {/* <TrustedBySection /> */}
            {/* <ImpactSection /> */}
            <ProductsSection />
            <BenefitsSection />
            <ServicesSection />
            <TestimonialsSection />
            <CTASection />
        </>
    );
};
