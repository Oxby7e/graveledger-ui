import HeroSectionDemo from "@/components/hero-section-demo";
import { HowItWorks } from "@/components/how-it-works";
import { USPPoles } from "@/components/usp-poles";
import { ProblemStatement } from "@/components/problem-statement";
import { Audience } from "@/components/audience";
import { FeaturesGrid } from "@/components/features-grid";
import { RealUseCase } from "@/components/real-use-case";
import { Compliance } from "@/components/compliance";
import { Pricing } from "@/components/pricing";
import { FAQ } from "@/components/faq";
// import { FinalCTA } from "@/components/final-cta";

import { MinimalFooter } from "@/components/ui/minimal-footer";

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSectionDemo />
      <HowItWorks />
      <USPPoles />
      <ProblemStatement />
      <FeaturesGrid />
      <Audience />
      <RealUseCase />
      <Compliance />
      <Pricing />
      <FAQ />
      {/* <FinalCTA /> */}
      
      <MinimalFooter />
    </main>
  );
}

