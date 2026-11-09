import { ArrowUpRight, CirclePlay, Sparkles } from "lucide-react";
import RelayMark from "./RelayMark.jsx";

export default function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="final-light light-one" aria-hidden="true" /><div className="final-light light-two" aria-hidden="true" />
      <div className="final-star star-a"><Sparkles size={15} /></div><div className="final-star star-b"><Sparkles size={11} /></div>
      <div className="final-mark-wrap"><span className="final-mark-halo" /><RelayMark className="final-mark" /></div>
      <span className="eyebrow"><i /> YOUR NEXT IDEA STARTS HERE</span>
      <h2>Let’s make<br /><em>something matter.</em></h2>
      <p>Tell us what you’re dreaming up. We’ll help you bring it to the web.</p>
      <div className="final-actions"><a className="button button-lime" href="/contact">Book a project <ArrowUpRight size={16} /></a><a className="text-button" href="/work"><CirclePlay size={17} /> See concept work</a></div>
      <span className="final-footnote">WEB DESIGN · UI/UX · DEVELOPMENT · YOUR NEXT BIG IDEA</span>
    </section>
  );
}
