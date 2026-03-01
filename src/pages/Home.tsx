import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Categories from "../components/Categories";
import ProducerBenefits from "../components/ProducerBenefits";
import ShopkeeperBenefits from "../components/ShopkeeperBenefits";
import SocialProof from "../components/SocialProof";
import FinalCTA from "../components/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Categories />
      <ProducerBenefits />
      <ShopkeeperBenefits />
      <SocialProof />
      <FinalCTA />
    </main>
  );
}
