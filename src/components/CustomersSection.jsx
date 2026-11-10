import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, MoveUpRight } from "lucide-react";

const customers = [
  {
    quote: "An expressive landing page concept with a clear story, confident typography, and a path from first impression to first conversation.",
    name: "Northstar",
    role: "SaaS website · concept project",
    initials: "N",
    metric: "UI/UX",
    metricLabel: "strategy & visual design",
  },
  {
    quote: "A warm, editorial storefront concept where product photography and a simple shopping journey do the talking.",
    name: "Sable & Stem",
    role: "Online store · concept project",
    initials: "S",
    metric: "E-commerce",
    metricLabel: "storefront design & build",
  },
  {
    quote: "A bold portfolio concept for a creative studio, pairing a distinctive visual identity with a responsive, easy-to-explore site.",
    name: "Common Ground",
    role: "Creative studio · concept project",
    initials: "C",
    metric: "Responsive",
    metricLabel: "design across every screen",
  },
];

export default function CustomersSection() {
  const [active, setActive] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const customer = customers[active];
  const change = (direction) => setActive((index) => (index + direction + customers.length) % customers.length);

  return (
    <section className="customers-section section-pad" id="customers">
      <div className="section-glow customers-glow" aria-hidden="true" />
      <div className="customer-top section-heading reveal-up"><span className="eyebrow"><i /> A FEW IDEAS FROM THE STUDIO</span><h2>Digital work<br />with <em>a point of view.</em></h2></div>
      <div className="customer-logos reveal-up" aria-label="Website project types">
        <span className="customer-logo common-logo"><i>◒</i> SaaS & tech</span>
        <span className="customer-logo goodfolk-logo"><i>✳</i> Creative studios</span>
        <span className="customer-logo tandem-logo"><i>◉</i> E-commerce</span>
        <span className="customer-logo loom-logo">◌ Personal brands</span>
        <span className="customer-logo northstar-logo"><i>✣</i> Local business</span>
      </div>
      <div className="testimonial-wrap reveal-up">
        <div className="testimonial-accent"><span>CONCEPT WORK · NOT CLIENT CLAIMS</span><MoveUpRight size={16} /></div>
        <AnimatePresence mode="wait">
          <motion.div
            className="testimonial-content"
            key={active}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.26 }}
          >
            <blockquote>“{customer.quote}”</blockquote>
            <div className="testimonial-person"><span className="person-avatar">{customer.initials}</span><span><b>{customer.name}</b><small>{customer.role}</small></span><span className="customer-metric"><strong>{customer.metric}</strong><small>{customer.metricLabel}</small></span></div>
          </motion.div>
        </AnimatePresence>
        <div className="testimonial-controls"><span>{String(active + 1).padStart(2, "0")} <i>/</i> {String(customers.length).padStart(2, "0")}</span><div><button aria-label="Previous testimonial" onClick={() => change(-1)}><ArrowLeft size={15} /></button><button aria-label="Next testimonial" onClick={() => change(1)}><ArrowRight size={15} /></button></div></div>
      </div>
      <div className="customer-stat-row"><span><strong>01</strong> one studio from design to code</span><span><strong>∞</strong> thoughtful details on every screen</span><Link to="/contact">Tell us what you have in mind <ArrowUpRight size={14} /></Link></div>
    </section>
  );
}
