import { useCallback } from "react";

import { HeroSection } from "@/features/landing/HeroSection";
import { BenefitsSection } from "@/features/benefits/BenefitsSection";
import { ProductSection } from "@/features/product/ProductSection";

export function HomePage() {
  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <main>
      <HeroSection
        onScrollToBenefits={() => scrollTo("avantaje")}
        onScrollToProduct={() => scrollTo("produs")}
      />
      <ProductSection />
      <BenefitsSection />
    </main>
  );
}
