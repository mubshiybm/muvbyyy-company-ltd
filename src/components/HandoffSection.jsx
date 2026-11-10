import { ArrowDown, ArrowRight, ArrowUpRight, Check, CircleDashed, GitBranch, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import RelayMark from "./RelayMark.jsx";

const handoffs = [
  ["shopify", "Project brief", "Goals & audience · 10:42:08"],
  ["stripe", "Visual direction", "Moodboard · 10:42:09"],
  ["relay", "Website design", "Custom UI · 10:42:09"],
  ["slack", "Development handoff", "Responsive build · 10:42:10"],
];

export default function HandoffSection() {
  return (
    <section className="handoff-section section-pad">
      <div className="section-glow handoff-glow" aria-hidden="true" />
      <div className="handoff-heading section-heading reveal-up">
        <span className="eyebrow"><i /> ONE STUDIO, FROM FIRST BRIEF TO LAUNCH</span>
        <h2>From first hello<br /><em>to live on the web.</em></h2>
        <p>Work directly with the people designing and building your website. Clear steps, thoughtful details, and no mystery handoffs.</p>
      </div>
      <div className="handoff-stage reveal-up">
        <div className="handoff-ribbon ribbon-one" aria-hidden="true" />
        <div className="handoff-ribbon ribbon-two" aria-hidden="true" />
        <div className="handoff-orb"><RelayMark className="orb-mark" /></div>
        <div className="handoff-window product-window">
          <div className="window-topbar"><div className="window-brand"><span className="live-dot" /> Website project <span className="window-tag">IN PROGRESS</span></div><div className="window-top-actions"><span className="window-muted">Updated · 10:42 AM</span><ArrowUpRight size={14} /></div></div>
          <div className="handoff-body">
            <div className="handoff-flow">
              <div className="handoff-flow-title"><span><GitBranch size={13} /> YOUR WEBSITE</span><span className="flow-running"><i /> IN PROGRESS</span></div>
              <div className="handoff-step-list">
                {handoffs.map(([app, title, detail], index) => (
                  <div className="handoff-step" key={title}>
                    <span className={`handoff-app app-${app}`}>{app === "relay" ? <RelayMark /> : app.slice(0, 1).toUpperCase()}</span>
                    <span className="handoff-step-copy"><b>{title}</b><small>{detail}</small></span>
                    <span className={`handoff-check${index === 3 ? " check-current" : ""}`}>{index === 3 ? <CircleDashed size={13} /> : <Check size={12} />}</span>
                    {index < handoffs.length - 1 && <span className="handoff-connector" />}
                  </div>
                ))}
              </div>
              <div className="handoff-branch"><GitBranch size={13} /><span>DESIGNED FOR</span><i /> <b>Every screen</b></div>
            </div>
            <div className="handoff-log">
              <div className="log-head"><span>PROJECT CHECKLIST</span><span>Today <ArrowDown size={11} /></span></div>
              <div className="log-total"><strong>04</strong><span>steps from idea to launch</span></div>
              {handoffs.slice(1).map(([, title, detail]) => <div className="log-line" key={title}><span><Check size={10} /></span><b>{title}</b><small>{detail.split("·")[1]}</small></div>)}
              <Link to="/services">Explore our services <ArrowRight size={12} /></Link>
            </div>
          </div>
          <div className="handoff-footer"><span><Zap size={12} /> Design meets development</span><span>Made to fit your goals</span><span><Sparkles size={12} /> Built by Muvbyyy Studio</span></div>
        </div>
        <div className="handoff-float-card"><span><Check size={12} /></span><b>Your idea, brought to life.</b><small>with care in every detail.</small></div>
      </div>
    </section>
  );
}
