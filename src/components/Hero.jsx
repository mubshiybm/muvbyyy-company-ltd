import { ArrowDown, ArrowRight, ArrowUpRight, Check, CirclePlay, MoreHorizontal } from "lucide-react";
import RelayMark from "./RelayMark.jsx";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-ambient section-glow" aria-hidden="true" />
      <div className="hero-content">
        <div className="hero-copy">
          <span className="eyebrow"><i /> MUVBYYY CODING STUDIO · DESIGN TO DEVELOPMENT</span>
          <h1>Digital ideas<br /><em>made real.</em></h1>
          <p>
            We design and build distinctive websites for ambitious businesses—
            from the first sketch to the final, responsive detail.
          </p>
          <div className="hero-actions">
            <a className="button button-lime" href="/pricing">Start a project <ArrowUpRight size={16} /></a>
            <a className="text-button" href="/work"><CirclePlay size={18} /> Explore our work</a>
          </div>
          <div className="hero-proof"><span className="proof-avatars"><i>U</i><i>I</i><i>✳</i><i>+</i></span><span>Thoughtful design. Clean code. Built for your next step.</span></div>
        </div>

        <div className="hero-product-wrap">
          <div className="hero-product-glow" aria-hidden="true" />
          <div className="product-window hero-window">
            <div className="window-topbar">
              <div className="window-brand"><RelayMark className="mini-relay-mark" /> <span>Muvbyyy · project canvas</span></div>
              <div className="window-top-actions"><span className="saved-dot"><Check size={10} /> Saved</span><MoreHorizontal size={17} /></div>
            </div>
            <div className="canvas-toolbar"><span>Website projects <b>/</b> Launch plan</span><span className="trigger-label"><i /> DESIGN & DEVELOPMENT</span></div>
            <div className="workflow-canvas hero-workflow-canvas">
              <div className="canvas-grid" aria-hidden="true" />
              <svg className="workflow-lines hero-lines" viewBox="0 0 580 330" preserveAspectRatio="none" aria-hidden="true">
                <path d="M115 82 C175 82 176 163 237 163 S304 163 347 163" />
                <path d="M400 163 C445 163 443 104 492 104" />
                <path d="M400 163 C444 163 445 228 492 228" className="line-dim" />
              </svg>
              <div className="workflow-trigger"><span className="trigger-glyph">✳</span><span><small>PROJECT KICKOFF</small><strong>Brand & brief</strong><em>Goals, audience, direction</em></span><i className="node-status"><Check size={10} /></i></div>
              <div className="workflow-node node-verify"><span className="app-icon stripe-mark">D</span><span><small>DESIGN</small><strong>Shape the experience</strong><em>Wireframes to visual UI</em></span><i className="node-status"><Check size={10} /></i></div>
              <div className="workflow-branch branch-check"><span className="branch-glyph">◇</span><span><small>RESPONSIVE</small><strong>Every screen?</strong></span></div>
              <div className="workflow-node node-slack"><span className="app-icon slack-mark">C</span><span><small>CODE</small><strong>Build the website</strong><em>Clean, responsive code</em></span><i className="node-status"><Check size={10} /></i></div>
              <div className="workflow-node node-end"><span className="end-glyph"><Check size={13} /></span><span><small>LAUNCH</small><strong>Ready for the world</strong></span></div>
              <span className="branch-label">DESKTOP</span>
              <span className="branch-label branch-no">MOBILE</span>
              <div className="canvas-zoom"><span>+</span><span>100%</span><span>−</span></div>
            </div>
            <div className="window-footer"><span><i /> Design system in progress</span><span>Preview updated just now <ArrowUpRight size={12} /></span></div>
          </div>
          <div className="floating-run-card"><span className="run-check"><Check size={13} /></span><span><small>DESIGN APPROVED</small><strong>Homepage concept <b>·</b> ready</strong></span></div>
          <div className="floating-stat-card"><span className="stat-icon"><ArrowDown size={15} /></span><span><small>PROJECT PROGRESS</small><strong>72 <i>%</i></strong></span><span className="spark-bars"><i/><i/><i/><i/><i/><i/><i/></span></div>
          <div className="hero-cursor"><ArrowRight size={14} /><span>Studio is building</span></div>
        </div>
      </div>
      <div className="hero-bottom"><span>DESIGN · DEVELOPMENT · DIGITAL EXPERIENCES</span><a href="#product">SCROLL TO EXPLORE <span>↓</span></a><span>01 — 08</span></div>
    </section>
  );
}
