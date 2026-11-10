import { Component, lazy, Suspense, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import LightTrails from "./components/LightTrails.jsx";
import FinalCTA from "./components/FinalCTA.jsx";
import Footer from "./components/Footer.jsx";
import { initScrollAnimations } from "./animations/gsapAnimations.js";

const Hero = lazy(() => import("./components/Hero.jsx"));
const WorkflowSection = lazy(() => import("./components/WorkflowSection.jsx"));
const DashboardSection = lazy(() => import("./components/DashboardSection.jsx"));
const HandoffSection = lazy(() => import("./components/HandoffSection.jsx"));
const FeaturesSection = lazy(() => import("./components/FeaturesSection.jsx"));
const CustomersSection = lazy(() => import("./components/CustomersSection.jsx"));
const PricingSection = lazy(() => import("./components/PricingSection.jsx"));
const ContactSection = lazy(() => import("./components/ContactSection.jsx"));

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

function PageLoader() {
  return (
    <div className="page-loader" role="status" aria-label="Loading page">
      <span /><span /><span />
      <span className="loader-label">Loading page</span>
    </div>
  );
}

class PageErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch(error, info) {
    console.error("Unable to load the page:", error, info);
  }

  render() {
    if (this.state.failed) {
      return (
        <div className="page-error" role="alert">
          <h1>We couldn’t load this page.</h1>
          <p>Please reload to try again.</p>
          <button className="button button-lime" onClick={() => window.location.reload()}>Reload page</button>
        </div>
      );
    }
    return this.props.children;
  }
}

function PageContent({ page, location }) {
  useEffect(() => {
    document.title = page
      ? `${page.title} — Muvbyyy Coding Studio`
      : "Muvbyyy Coding Studio — Websites, thoughtfully made";
  }, [page]);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.getElementById(location.hash.slice(1));
        if (target) target.scrollIntoView();
        else if (location.hash === "#top") window.scrollTo({ top: 0, behavior: "instant" });
      } else {
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [location.key, location.hash]);

  useEffect(() => initScrollAnimations(), [page]);

  return (
    <>
        {page ? (
          <>
            <section className="page-intro section-pad">
              <div className="section-glow page-intro-glow" aria-hidden="true" />
              <div className="page-intro-copy">
                <span className="eyebrow"><i /> {page.eyebrow}</span>
                <h1>{page.heading}<br /><em>{page.emphasis}</em></h1>
                <p>{page.description}</p>
                {page === notFoundPage && <Link className="button button-lime" to="/">Back to homepage</Link>}
              </div>
            </section>
            {page.sections.map((Section, index) => <Section key={index} />)}
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
    </>
  );
}

export default function App() {
  const location = useLocation();
  const path = location.pathname.replace(/\/+$/, "") || "/";
  const page = path === "/" ? null : pages[path] || notFoundPage;

  return (
    <>
      <LightTrails />
      <Navbar />
      <main>
        <PageErrorBoundary key={path}>
          <Suspense fallback={<PageLoader />}>
            <PageContent page={page} location={location} />
          </Suspense>
        </PageErrorBoundary>
      </main>
      <Footer />
    </>
  );
}
