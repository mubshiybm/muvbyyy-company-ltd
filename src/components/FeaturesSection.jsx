import { ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, Command, Layers3, Zap } from "lucide-react";

const features = [
  {
    number: "01",
    label: "STRATEGY BEFORE SCREENS",
    title: "Start with what makes you different.",
    body: "We get to know your goals, audience, and point of view, then turn them into a clear plan for a website with purpose.",
    icon: <BrainCircuit size={17} />,
    className: "feature-ai",
  },
  {
    number: "02",
    label: "A DISTINCTIVE VISUAL SYSTEM",
    title: "A look and feel that's yours.",
    body: "From type and color to interaction details, every part of your site works together and feels true to your brand.",
    icon: <Layers3 size={17} />,
    className: "feature-connect",
  },
  {
    number: "03",
    label: "THOUGHTFUL, RESPONSIVE CODE",
    title: "Beautiful on every screen.",
    body: "We bring the approved design to life with responsive development, careful testing, and a clean handoff when it's ready.",
    icon: <Command size={17} />,
    className: "feature-control",
  },
];

function FeaturePreview({ type }) {
  if (type === "feature-ai") {
    return (
      <div className="feature-visual ai-visual">
        <div className="ai-prompt"><span><BrainCircuit size={13} /></span><span>We want a website that feels calm and confident, explains our work clearly, and makes it easy to get in touch.</span><ArrowUpRight size={13} /></div>
        <div className="ai-divider"><i /> STRATEGY TAKES SHAPE <i /></div>
        <div className="ai-created"><span><Zap size={14} /></span><span><b>A clear creative direction</b><small>Goals · audience · visual approach</small></span><span className="ai-created-check">✓</span></div>
        <div className="ai-step-chips"><i>✳ Discover</i><ArrowRight size={12} /><i>◈ Design</i><ArrowRight size={12} /><i>⌘ Build</i></div>
      </div>
    );
  }
  if (type === "feature-connect") {
    return (
      <div className="feature-visual integrations-visual">
        <div className="integration-orbit orbit-outer" /><div className="integration-orbit orbit-inner" />
        <div className="integration-center"><Zap size={23} fill="currentColor" /></div>
        <span className="integration-logo logo-slack">U</span><span className="integration-logo logo-stripe">I</span>
        <span className="integration-logo logo-gmail">A</span><span className="integration-logo logo-notion">M</span>
        <span className="integration-logo logo-shopify">D</span><span className="integration-logo logo-linear">↗</span>
        <span className="integration-caption">One cohesive design, made just for you</span>
      </div>
    );
  }
  return (
    <div className="feature-visual control-visual">
      <div className="control-top"><span><i /> Website · final review</span><span className="control-needs-review">READY TO REVIEW</span></div>
      <div className="control-row"><span className="control-emoji">↻</span><span><b>Responsive layouts</b><small>Desktop · tablet · mobile</small></span><i className="mini-check">✓</i></div>
      <div className="control-row"><span className="control-emoji green">◈</span><span><b>Details carefully checked</b><small>Links · spacing · page states</small></span><i className="mini-check">✓</i></div>
      <div className="approval-callout"><span><BrainCircuit size={13} /> Take a look at the latest website preview.</span><button>Preview <ArrowUpRight size={11} /></button></div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="features-section section-pad" id="features">
      <div className="features-intro section-heading reveal-up"><span className="eyebrow"><i /> GOOD WEBSITES START WITH GOOD THINKING</span><h2>Every detail,<br />with <em>intention.</em></h2></div>
      <div className="features-grid">
        {features.map((feature) => (
          <article className={`feature-panel reveal-up ${feature.className}`} key={feature.number}>
            <div className="feature-panel-copy"><span className="feature-icon">{feature.icon}</span><span className="feature-number">{feature.number}</span></div>
            <span className="feature-label">{feature.label}</span>
            <h3>{feature.title}</h3>
            <p>{feature.body}</p>
            <FeaturePreview type={feature.className} />
            <a className="feature-link" href="#pricing">Explore this service <ArrowDownRight size={14} /></a>
          </article>
        ))}
      </div>
    </section>
  );
}
