import { useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import LightTrails from "./components/LightTrails.jsx";
import Hero from "./components/Hero.jsx";
import WorkflowSection from "./components/WorkflowSection.jsx";
import DashboardSection from "./components/DashboardSection.jsx";
import HandoffSection from "./components/HandoffSection.jsx";
import FeaturesSection from "./components/FeaturesSection.jsx";
import CustomersSection from "./components/CustomersSection.jsx";
import PricingSection from "./components/PricingSection.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import { initScrollAnimations } from "./animations/gsapAnimations.js";

export default function App() {
  useEffect(() => initScrollAnimations(), []);

  return (
    <>
      <LightTrails />
      <Navbar />
      <main>
        <Hero />
        <WorkflowSection />
        <DashboardSection />
        <HandoffSection />
        <FeaturesSection />
        <CustomersSection />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
