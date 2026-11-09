import { useState } from "react";
import { ArrowDown, ArrowUpRight, Check, GitBranch, Plus, Sparkles } from "lucide-react";

const projects = {
  landing: {
    title: "A standout landing page",
    brief: "We learn what makes you different",
    design: "Design a clear, bold story",
    build: "Build and launch your page",
  },
  studio: {
    title: "A new studio website",
    brief: "We map your goals and audience",
    design: "Create a custom visual system",
    build: "Develop a site that feels like you",
  },
  shop: {
    title: "A better online store",
    brief: "We explore your products and customers",
    design: "Design a simple shopping journey",
    build: "Build a store ready to grow",
  },
};

export default function WorkflowSection() {
  const [activeProject, setActiveProject] = useState("landing");
  const [projectItems, setProjectItems] = useState(
    Object.entries(projects).map(([id, project]) => ({ id, ...project })),
  );
  const project = projectItems.find((item) => item.id === activeProject) ?? {
    title: "A new website idea",
    brief: "We understand your goals",
    design: "Design a custom experience",
    build: "Build and launch your website",
  };

  const addProject = () => {
    const id = `draft-${Date.now()}`;
    setProjectItems((items) => [
      ...items,
      {
        id,
        title: "A new website idea",
        brief: "We understand your goals",
        design: "Design a custom experience",
        build: "Build and launch your website",
      },
    ]);
    setActiveProject(id);
  };

  return (
    <section className="workflow-section section-pad" id="product">
      <div className="section-glow workflow-glow" aria-hidden="true" />
      <div className="section-heading reveal-up">
        <span className="eyebrow"><i /> A GOOD IDEA, MADE INTO A GREAT WEBSITE</span>
        <h2>From first sketch<br /><em>to your next big thing.</em></h2>
        <p>Pick a project to see how we turn your goals into thoughtful design and a website that works beautifully.</p>
      </div>
      <div className="workflow-demo-panel">
        <div className="demo-sidebar">
          <span className="sidebar-label">PROJECT TYPES <span>{String(projectItems.length).padStart(2, "0")}</span></span>
          {projectItems.map((item, index) => (
            <button className={`workflow-choice${activeProject === item.id ? " is-selected" : ""}`} key={item.id} onClick={() => setActiveProject(item.id)}>
              <span className={`choice-icon choice-${index}`}><GitBranch size={15} /></span><span>{item.title}<small>Design · development · launch</small></span><ArrowUpRight size={13} />
            </button>
          ))}
          <button className="new-workflow" onClick={addProject}><Plus size={14} /> New project idea</button>
          <div className="sidebar-tip"><Sparkles size={14} /><span><b>Have an idea?</b><small>Let’s turn it into a website.</small></span></div>
        </div>
        <div className="demo-canvas">
          <div className="demo-canvas-head"><span><span className="breadcrumb">Our process</span><span className="crumb-slash">/</span>{project.title}</span><span className="active-badge"><i /> PROJECT FLOW</span></div>
          <div className="demo-canvas-inner">
            <svg className="workflow-lines demo-lines" viewBox="0 0 760 250" preserveAspectRatio="none" aria-hidden="true">
              <path className="light-arc" d="M134 125 H280 C316 125 306 56 353 56 H478" />
              <path className="light-arc secondary-path" d="M134 125 H280 C316 125 306 194 353 194 H478" />
            </svg>
            <div className="demo-node workflow-node"><span className="app-icon trigger-mini">✳</span><span><small>FIRST, THE BRIEF</small><strong>{project.brief}</strong><em>Strategy · direction · goals</em></span><i><Check size={10} /></i></div>
            <div className="demo-node workflow-node demo-action"><span className="app-icon action-mini"><Check size={13} /></span><span><small>THEN, THE DESIGN</small><strong>{project.design}</strong><em>Custom UI · made for you</em></span><i><Check size={10} /></i></div>
            <div className="demo-node workflow-node demo-result"><span className="app-icon result-mini">⌁</span><span><small>FINALLY, THE BUILD</small><strong>{project.build}</strong><em>Responsive · ready to launch</em></span><i><Check size={10} /></i></div>
            <div className="branch-condition"><GitBranch size={12} /><span>Designed for every screen</span></div>
            <div className="canvas-add-node"><Plus size={15} /></div>
            <div className="canvas-spark"><Sparkles size={14} /> Every detail, made to fit</div>
          </div>
          <div className="demo-canvas-footer"><span><i /> A real person, every step</span><span>Made for your goals <ArrowDown size={11} /></span></div>
        </div>
      </div>
      <div className="workflow-footnote"><span><i /> STRATEGY · UI/UX · DEVELOPMENT</span><span>PROJECT FLOW · EVERY SITE IS BUILT TO FIT</span></div>
    </section>
  );
}
