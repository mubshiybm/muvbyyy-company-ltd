import { ArrowUpRight } from "lucide-react";
import RelayMark from "./RelayMark.jsx";

const footerLinks = [
  { heading: "SERVICES", links: [["Web design", "#features"], ["UI/UX design", "#features"], ["Web development", "#features"], ["Pricing", "#pricing"]] },
  { heading: "STUDIO", links: [["Our process", "#how-it-works"], ["Selected work", "#customers"], ["Start a project", "#pricing"], ["Contact", "mailto:hello@muvbyyy.studio"]] },
  { heading: "LET'S TALK", links: [["Website projects", "mailto:hello@muvbyyy.studio"], ["Design enquiries", "mailto:hello@muvbyyy.studio"], ["hello@muvbyyy.studio", "mailto:hello@muvbyyy.studio"], ["Back to top", "#home"]] },
];

export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-main">
        <div className="footer-brand-column"><a className="wordmark" href="#home" aria-label="Muvbyyy Coding Studio home"><RelayMark className="relay-mark" /><span>muvbyyy</span></a><p>Muvbyyy Coding Studio<br />Websites, thoughtfully made.</p><a className="footer-status" href="mailto:hello@muvbyyy.studio"><i /> Open for projects <ArrowUpRight size={12} /></a></div>
        {footerLinks.map((column) => <div className="footer-column" key={column.heading}><span>{column.heading}</span>{column.links.map(([label, href]) => <a href={href} key={label}>{label}</a>)}</div>)}
        <div className="footer-newsletter"><span>HAVE A GOOD IDEA?</span><p>Let’s turn it into a thoughtful, hard-working website.</p><a href="mailto:hello@muvbyyy.studio">Tell us about it <ArrowUpRight size={13} /></a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Muvbyyy Coding Studio.</span><div><a href="mailto:hello@muvbyyy.studio?subject=Privacy%20enquiry">Privacy</a><a href="mailto:hello@muvbyyy.studio?subject=Terms%20enquiry">Terms</a><span>Design · code · a little more flow <i>✳</i></span></div></div>
    </footer>
  );
}
