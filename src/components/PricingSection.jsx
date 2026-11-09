import { useMemo, useState } from "react";
import { ArrowUpRight, Check, Minus, Plus } from "lucide-react";

const plans = [
  { name: "Launch page", description: "A focused, polished home for your next big idea.", price: "From $850", detail: "sample starting price", features: ["One custom landing page", "Responsive design", "Contact form setup", "Launch-ready handoff"], action: "Plan a landing page" },
  { name: "Studio website", description: "A complete custom website built around your brand.", price: "From $2,400", detail: "sample starting price", features: ["Custom multi-page design", "Responsive development", "Motion & interactions", "Testing and launch support"], action: "Plan your website", featured: true },
  { name: "Online store", description: "A considered storefront for your products and customers.", price: "Let's talk", detail: "scoped to your needs", features: ["Storefront design", "Product and collection pages", "Shopping journey planning", "Custom build and handoff"], action: "Discuss your store" },
];

export default function PricingSection() {
  const [pageCount, setPageCount] = useState(4);
  const estimate = useMemo(() => 350 + pageCount * 220, [pageCount]);

  return (
    <section className="pricing-section section-pad" id="pricing">
      <div className="section-glow pricing-glow" aria-hidden="true" />
      <div className="pricing-heading section-heading reveal-up"><span className="eyebrow"><i /> CLEAR STARTING POINTS. NO SURPRISES.</span><h2>Good websites<br />start with <em>a good plan.</em></h2><p>Choose a starting point. We’ll shape the details around your goals and budget.</p></div>
      <div className="plans-grid reveal-up">
        {plans.map((plan) => (
          <article className={`plan-card${plan.featured ? " plan-featured" : ""}`} key={plan.name}>
            {plan.featured && <span className="popular-badge"><i /> MOST POPULAR</span>}
            <span className="plan-name">{plan.name}</span><p className="plan-description">{plan.description}</p>
            <div className="plan-price">{plan.price}<small>{plan.detail}</small></div>
            <a className={`button plan-button${plan.featured ? " button-lime" : ""}`} href="#contact">{plan.action}<ArrowUpRight size={15} /></a>
            <div className="plan-divider" /><span className="includes-label">A TYPICAL STARTING SCOPE</span>
            <ul>{plan.features.map((feature) => <li key={feature}><Check size={13} /> {feature}</li>)}</ul>
          </article>
        ))}
      </div>
      <div className="usage-calculator reveal-up">
        <div className="calculator-copy">        <span className="eyebrow"><i /> A ROUGH PROJECT GUIDE</span><h3>How many pages<br />does your idea <em>need?</em></h3><p>Adjust the page count to explore a simple, illustrative starting estimate.</p></div>
        <div className="calculator-control">
          <div className="range-value"><span>WEBSITE PAGES</span><strong>{pageCount} <small>{pageCount === 1 ? "page" : "pages"}</small></strong></div>
          <input type="range" min="1" max="20" step="1" value={pageCount} aria-label="Number of website pages" style={{ "--range-progress": `${((pageCount - 1) / 19) * 100}%` }} onChange={(event) => setPageCount(Number(event.target.value))} />
          <div className="range-markers"><span>1 page</span><span>10 pages</span><span>20 pages</span></div>
          <div className="estimate"><span>ILLUSTRATIVE STARTING ESTIMATE</span><strong>From ${estimate.toLocaleString()}<small> / project</small></strong><span className="estimate-note">A rough guide only; final scope and price are confirmed together.</span></div>
          <div className="calculator-foot"><button aria-label="Decrease website page count" onClick={() => setPageCount((pages) => Math.max(1, pages - 1))}><Minus size={13} /></button><span>Adjust your page count</span><button aria-label="Increase website page count" onClick={() => setPageCount((pages) => Math.min(20, pages + 1))}><Plus size={13} /></button></div>
        </div>
      </div>
    </section>
  );
}
