import { ArrowUpRight } from "lucide-react";
import RelayMark from "./RelayMark.jsx";
import SocialLinks from "./SocialLinks.jsx";

const footerLinks = [
  { heading: "SERVICES", links: [["Web design", "/services#features"], ["UI/UX design", "/services#features"], ["Web development", "/services#features"], ["Pricing", "/pricing"]] },
  { heading: "STUDIO", links: [["Our process", "/process"], ["Selected work", "/work"], ["Pricing", "/pricing"], ["Contact", "/contact"]] },
  { heading: "LET'S TALK", links: [["Book a project", "/contact"], ["Call 09068501939", "tel:09068501939"], ["mubshiybm@gmail.com", "mailto:mubshiybm@gmail.com"], ["Back to top", "#top"]] },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-main">
        <div className="footer-brand-column"><a className="wordmark" href="/" aria-label="Muvbyyy Coding Studio home"><RelayMark className="relay-mark" /><span>muvbyyy</span></a><p>Muvbyyy Coding Studio<br />Websites, thoughtfully made.</p><a className="footer-status" href="/contact"><i /> Open for projects <ArrowUpRight size={12} /></a></div>
        {footerLinks.map((column) => <div className="footer-column" key={column.heading}><span>{column.heading}</span>{column.links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>)}
        <div className="footer-newsletter"><span>HAVE A GOOD IDEA?</span><p>Let’s turn it into a thoughtful, hard-working website.</p><a href="/contact">Tell us about it <ArrowUpRight size={13} /></a></div>
      </div>
      <div className="footer-social">
        <span>FOLLOW & CHAT</span>
        <SocialLinks />
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Muvbyyy Coding Studio.</span><div><a href="mailto:mubshiybm@gmail.com?subject=Privacy%20enquiry">Privacy</a><a href="mailto:mubshiybm@gmail.com?subject=Terms%20enquiry">Terms</a><span>Design · code · a little more flow <i>✳</i></span></div></div>
    </footer>
  );
}
