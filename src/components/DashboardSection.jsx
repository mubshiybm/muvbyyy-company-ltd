import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, ChevronDown, Clock3, MoreHorizontal, Play, Search, SlidersHorizontal, Zap } from "lucide-react";

const activity = [
  ["UI", "Homepage direction approved", "Design → Client review", "Just now", "Completed"],
  ["WEB", "Mobile layouts in progress", "Responsive design → Development", "4m ago", "Completed"],
  ["SEO", "Content waiting on approval", "Copywriting → Client review", "12m ago", "Waiting"],
  ["DEV", "Portfolio page built", "UI design → Development", "28m ago", "Completed"],
  ["BR", "Brand direction selected", "Discovery → Visual identity", "1h ago", "Completed"],
  ["QA", "Launch checklist reviewed", "Testing → Final handoff", "2h ago", "Completed"],
];

export default function DashboardSection() {
  const [query, setQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [onlyWaiting, setOnlyWaiting] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [period, setPeriod] = useState("This week");
  const filteredActivity = activity
    .filter(([, title, source]) => `${title} ${source}`.toLowerCase().includes(query.toLowerCase()))
    .filter(([, , , , status]) => !onlyWaiting || status === "Waiting");
  const visibleActivity = showAll ? filteredActivity : filteredActivity.slice(0, 4);

  return (
    <section className="dashboard-section section-pad" id="how-it-works">
      <div className="section-glow dashboard-glow" aria-hidden="true" />
      <div className="dashboard-heading section-heading reveal-up">
        <div><span className="eyebrow"><i /> A LITTLE STUDIO SNAPSHOT</span><h2>A Tuesday,<br /><em>at Muvbyyy.</em></h2></div>
        <p>A look inside a sample website project—from its first visual direction to the final responsive details.</p>
      </div>
      <div className="dashboard-shell reveal-up">
        <div className="app-sidebar">
          <div className="app-side-brand"><span className="side-logo"><Zap size={14} fill="currentColor" /></span> Muvbyyy <span className="workspace-switch">Studio projects <ChevronDown size={11} /></span></div>
          <div className="side-nav-label">STUDIO</div>
          <Link className="side-nav-item selected" to="/process#how-it-works"><span>◫</span> Overview</Link>
          <Link className="side-nav-item" to="/services"><span>⌘</span> Services <b>04</b></Link>
          <Link className="side-nav-item" to="/work"><span>◷</span> Portfolio</Link>
          <Link className="side-nav-item" to="/services#features"><span>▤</span> Capabilities</Link>
          <div className="side-nav-label side-space">PROJECTS <Link to="/services" aria-label="Explore services">+</Link></div>
          <Link className="side-flow" to="/services"><i className="flow-dot dot-purple" /> Brand website</Link>
          <Link className="side-flow" to="/services"><i className="flow-dot dot-orange" /> Studio landing page</Link>
          <Link className="side-flow" to="/services"><i className="flow-dot dot-blue" /> Online storefront</Link>
          <div className="side-profile"><span className="profile-avatar">M</span><span>Muvbyyy Studio<small>Design & development</small></span><MoreHorizontal size={14} /></div>
        </div>
        <div className="dashboard-main">
          <div className="dash-topbar"><div className="dash-crumb">Studio overview <span>/</span> Tuesday, October 24</div>{searchOpen && <input className="activity-search" aria-label="Search project activity" placeholder="Find a project update…" value={query} onChange={(event) => setQuery(event.target.value)} />}<div className="dash-top-actions"><button aria-label="Search project activity" aria-pressed={searchOpen} onClick={() => setSearchOpen((open) => !open)}><Search size={13} /></button><button aria-label="Filter project activity" aria-expanded={filterOpen} onClick={() => setFilterOpen((open) => !open)}><SlidersHorizontal size={13} /></button><span className="profile-avatar tiny-avatar">M</span></div></div>
          {filterOpen && <div className="activity-filter"><span>Show only projects waiting on review</span><button role="switch" aria-checked={onlyWaiting} aria-label="Filter projects waiting for review" onClick={() => setOnlyWaiting((waiting) => !waiting)}><i className={onlyWaiting ? "filter-on" : ""} /></button></div>}
          <div className="dash-welcome"><div><span className="dashboard-date">TUESDAY, OCTOBER 24</span><h3>Good morning, Muvbyyy <span>✳</span></h3><p>Thoughtful websites, moving from idea to launch.</p></div><button className="dash-date-button" onClick={() => setPeriod((current) => current === "This week" ? "Last 30 days" : "This week")}>{period} <ChevronDown size={12} /></button></div>
          <div className="stat-grid">
            <div className="stat-tile"><span className="tile-label">DESIGN APPROVALS <span className="tile-icon"><Check size={12} /></span></span><strong>08</strong><span className="tile-delta"><ArrowUpRight size={11} /> Design <i>projects reviewed</i></span><div className="tiny-chart green-chart"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></div>
            <div className="stat-tile"><span className="tile-label">SITES IN PROGRESS <span className="tile-icon clock-tile"><Clock3 size={12} /></span></span><strong>04 <small>projects</small></strong><span className="tile-delta"><ArrowUpRight size={11} /> Build <i>to launch</i></span><div className="tiny-chart purple-chart"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></div>
            <div className="stat-tile progress-tile"><span className="tile-label">FEATURED PROJECT <span className="tile-icon active-tile"><Zap size={12} /></span></span><strong>72 <small>% ready</small></strong><div className="progress-ring"><svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="19"/><circle className="progress-value" cx="24" cy="24" r="19"/></svg><span>72%</span></div><span className="progress-note">sample project progress</span></div>
          </div>
          <div className="activity-panel">
            <div className="activity-heading"><div><h4>Project updates</h4><p>A sample view of the design-to-launch process.</p></div><button aria-expanded={showAll} onClick={() => setShowAll((expanded) => !expanded)}>{showAll ? "Show less" : "View all"} <ArrowUpRight size={12} /></button></div>
            <div className="activity-table"><div className="activity-row table-head"><span>PROJECT</span><span>STAGE</span><span>UPDATED</span><span>STATUS</span></div>
              {visibleActivity.map(([initials, title, source, time, status], index) => (
                <div className="activity-row" key={`${title}-${time}`}>
                  <span className="activity-name"><i className={`activity-app activity-app-${index}`}>{initials}</i><b>{title}</b></span><span className="activity-source">{source}</span><span className="activity-time">{time}</span><span className={`activity-status ${status === "Waiting" ? "waiting" : ""}`}><i />{status}</span>
                </div>
              ))}
              {visibleActivity.length === 0 && <div className="activity-empty">No activity matches those filters.</div>}
            </div>
            {filteredActivity.length > 4 && <button className="mobile-activity-more" onClick={() => setShowAll((expanded) => !expanded)}>{showAll ? "Show less" : "See all activity"} <ArrowUpRight size={12} /></button>}
          </div>
          <div className="dash-bottom"><span><i /> Design and build, in sync</span><span>Project preview <Play size={10} /></span></div>
        </div>
      </div>
      <div className="dashboard-caption"><span><b>01</b> / GOOD DESIGN, MADE TO WORK</span><span>ILLUSTRATIVE STUDIO DASHBOARD</span></div>
    </section>
  );
}
