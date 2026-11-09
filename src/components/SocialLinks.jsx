import { ArrowUpRight, Ghost, Instagram, MessageCircle, Music2 } from "lucide-react";

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/mv__coding/", icon: Instagram },
  { label: "Snapchat", href: "https://www.snapchat.com/add/https_mubiii", icon: Ghost },
  { label: "TikTok", href: "https://www.tiktok.com/@muvbyyyy__", icon: Music2 },
  { label: "WhatsApp 09068501939", href: "https://wa.me/2349068501939", icon: MessageCircle },
  { label: "WhatsApp 07041962771", href: "https://wa.me/2347041962771", icon: MessageCircle },
];

export default function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social media">
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <a key={label} href={href} target="_blank" rel="noopener noreferrer">
          <Icon size={16} aria-hidden="true" />
          <span>{label}</span>
          <ArrowUpRight className="social-arrow" size={13} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
