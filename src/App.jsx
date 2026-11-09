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
import ContactSection from "./components/ContactSection.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import { initScrollAnimations } from "./animations/gsapAnimations.js";

const pages = {
  "/services": {
    title: "Services",
    eyebrow: "DESIGN · DEVELOPMENT · DIGITAL EXPERIENCES",
    heading: "Websites made",
    emphasis: "to make an impression.",
    description: "From a first idea to a finished website, we bring strategy, design and development together.",
    sections: [WorkflowSection, FeaturesSection],
  },
  "/process": {
    title: "Our process",
    eyebrow: "FROM FIRST HELLO TO LAUNCH",
    heading: "A thoughtful process.",
    emphasis: "A website made for you.",
    description: "See how we shape your ideas into a distinctive, responsive website, together.",
    sections: [WorkflowSection, DashboardSection, HandoffSection],
  },
  "/work": {
    title: "Selected work",
    eyebrow: "IDEAS FROM THE STUDIO",
    heading: "Thoughtful work.",
    emphasis: "Built with purpose.",
    description: "Explore concept projects and the kinds of digital experiences we love to create.",
    sections: [CustomersSection],
  },
  "/pricing": {
    title: "Pricing",
    eyebrow: "A CLEAR STARTING POINT",
    heading: "A good idea deserves",
    emphasis: "a good plan.",
    description: "Explore illustrative starting prices and find the right direction for your project.",
    sections: [PricingSection],
  },
  "/contact": {
    title: "Contact",
    eyebrow: "LET'S MAKE SOMETHING TOGETHER",
    heading: "Your next idea",
    emphasis: "starts here.",
    description: "Tell us about your project or get in touch with the studio.",
    sections: [ContactSection],
  },
};

const notFoundPage = {
  title: "Page not found",
  eyebrow: "PAGE NOT FOUND",
  heading: "This page",
  emphasis: "isn't here.",
  description: "Explore our services or return to the homepage to find your way.",
  sections: [],
};

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const page = path === "/" ? null : pages[path] || notFoundPage;

  useEffect(() => initScrollAnimations(), []);

  useEffect(() => {
    document.title = page
      ? `${page.title} — Muvbyyy Coding Studio`
      : "Muvbyyy Coding Studio — Websites, thoughtfully made";
  }, [page]);

  useEffect(() => {
    if (!window.location.hash) return undefined;
    const frame = requestAnimationFrame(() => {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      <LightTrails />
      <Navbar />
      <main>
        {page ? (
          <>
            <section className="page-intro section-pad">
              <div className="section-glow page-intro-glow" aria-hidden="true" />
              <div className="page-intro-copy">
                <span className="eyebrow"><i /> {page.eyebrow}</span>
                <h1>{page.heading}<br /><em>{page.emphasis}</em></h1>
                <p>{page.description}</p>
                {page === notFoundPage && <a className="button button-lime" href="/">Back to homepage</a>}
              </div>
            </section>
            {page.sections.map((Section) => <Section key={Section.name} />)}
          </>
        ) : (
          <>
            <Hero />
            <WorkflowSection />
            <DashboardSection />
            <HandoffSection />
            <FeaturesSection />
            <CustomersSection />
            <PricingSection />
            <ContactSection />
          </>
        )}
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
