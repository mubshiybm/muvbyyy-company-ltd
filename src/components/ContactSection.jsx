import { ArrowUpRight, CalendarDays, Mail, Phone } from "lucide-react";
import SocialLinks from "./SocialLinks.jsx";

const contactEmail = "mubshiybm@gmail.com";
const contactPhone = "09068501939";

export default function ContactSection() {
  const sendBookingRequest = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const details = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Project type: ${formData.get("projectType")}`,
      `Ideal start: ${formData.get("timeline")}`,
      "",
      "Project details:",
      formData.get("details"),
    ].join("\n");
    const subject = `Project booking enquiry — ${formData.get("projectType")}`;

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(details)}`;
  };

  return (
    <section className="contact-section section-pad" id="contact">
      <div className="section-glow contact-glow" aria-hidden="true" />
      <div className="contact-layout">
        <div className="contact-copy">
          <span className="eyebrow"><i /> LET’S MAKE YOUR NEXT IDEA REAL</span>
          <h2>Have a project?<br /><em>Let’s talk.</em></h2>
          <p>
            Tell us what you’re planning. Whether you need a brand-new website,
            a redesign, or help shaping an idea, we’d love to hear from you.
            Share a few details to request a project booking and we’ll be in touch.
          </p>
          <div className="contact-methods">
            <a href={`mailto:${contactEmail}`}>
              <span className="contact-method-icon"><Mail size={18} /></span>
              <span><small>EMAIL US</small><strong>{contactEmail}</strong></span>
              <ArrowUpRight size={16} />
            </a>
            <a href={`tel:${contactPhone}`}>
              <span className="contact-method-icon"><Phone size={18} /></span>
              <span><small>CALL US</small><strong>{contactPhone}</strong></span>
              <ArrowUpRight size={16} />
            </a>
          </div>
          <div className="contact-social">
            <h3>Find us online</h3>
            <SocialLinks />
          </div>
          <p className="contact-response-note">
            The form prepares an email in your mail app. Your booking is confirmed personally by our studio.
          </p>
        </div>

        <form className="booking-form" onSubmit={sendBookingRequest}>
          <div className="booking-form-heading">
            <span className="booking-icon"><CalendarDays size={18} /></span>
            <span><strong>Book a project</strong><small>Tell us a little about what you need.</small></span>
          </div>
          <div className="booking-fields">
            <label>
              Your name
              <input autoComplete="name" name="name" placeholder="e.g. Alex Morgan" required />
            </label>
            <label>
              Email address
              <input autoComplete="email" name="email" type="email" placeholder="you@example.com" required />
            </label>
            <label>
              What do you need?
              <select name="projectType" defaultValue="" required>
                <option value="" disabled>Select a project type</option>
                <option>New website</option>
                <option>Website redesign</option>
                <option>Online store</option>
                <option>UI/UX design</option>
                <option>Something else</option>
              </select>
            </label>
            <label>
              When would you like to start?
              <select name="timeline" defaultValue="Flexible">
                <option>As soon as possible</option>
                <option>Within a month</option>
                <option>In 1–3 months</option>
                <option>Flexible</option>
              </select>
            </label>
            <label className="booking-message">
              Tell us about your project
              <textarea name="details" placeholder="What are you building, and what would make it a success?" rows="4" required />
            </label>
          </div>
          <button className="button button-lime booking-submit" type="submit">
            Request a project booking <ArrowUpRight size={16} />
          </button>
          <small className="booking-footnote">Submitting opens a pre-filled email for you to review and send.</small>
        </form>
      </div>
    </section>
  );
}
