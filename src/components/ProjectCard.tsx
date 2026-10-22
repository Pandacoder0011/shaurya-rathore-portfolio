import { ArrowDownRight, ArrowUpRight, Github, Globe2, MapPin } from 'lucide-react'
import { motion } from 'motion/react'
import type { Project } from '../data/portfolio'

function ProjectArtwork({ project }: { project: Project }) {
  if (project.visual === 'smartops') {
    return (
      <div className="artwork smartops-art" aria-hidden="true">
        <div className="simple-dash-top"><span><i /> SMARTOPS <small>BUSINESS INTELLIGENCE</small></span><b>OVERVIEW <em>LIVE</em></b></div>
        <div className="simple-dash-main"><div className="simple-dash-summary"><small>MONTHLY BUDGET</small><strong>$31,640 <i>/ $44,000</i></strong><span><b /></span><label>72% used <em>$12.4k remaining</em></label></div>
          <div className="simple-dash-chart"><div><small>REVENUE TREND</small><strong>$48.2k <i>+12.8%</i></strong></div><svg viewBox="0 0 300 100" preserveAspectRatio="none"><path className="simple-chart-fill" d="M0 82 C30 74 37 52 72 61 S111 70 140 46 S188 57 214 31 S258 44 300 8 L300 100 L0 100Z"/><path className="simple-chart-line" d="M0 82 C30 74 37 52 72 61 S111 70 140 46 S188 57 214 31 S258 44 300 8"/></svg><div className="simple-chart-days"><span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span></div></div>
        </div>
        <div className="simple-dash-bottom"><span><i /> Revenue</span><b>$48,290</b><span><i /> Operating costs</span><b>$31,640</b><span><i /> Orders</span><b>1,284</b></div>
      </div>
    )
  }
  if (project.visual === 'chess') {
    return (
      <div className="artwork chess-art" aria-hidden="true">
        <div className="chess-board">
          {Array.from({ length: 64 }, (_, index) => <span key={index} className={(Math.floor(index / 8) + index % 8) % 2 === 0 ? 'light-square' : 'dark-square'} />)}
        </div>
        <div className="chess-piece piece-king">♔</div><div className="chess-piece piece-queen">♛</div>
      </div>
    )
  }
  if (project.visual === 'tracking') {
    return (
      <div className="artwork tracking-art" aria-hidden="true">
        <div className="map-roads"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        <div className="map-river" />
        <svg className="map-route" viewBox="0 0 520 280" preserveAspectRatio="none"><path className="route-shadow" d="M92 216 C120 190 122 156 171 160 S228 198 263 151 S301 109 350 124 S397 92 427 48"/><path className="route-line" d="M92 216 C120 190 122 156 171 160 S228 198 263 151 S301 109 350 124 S397 92 427 48"/><circle cx="92" cy="216" r="5"/><circle cx="427" cy="48" r="5"/></svg>
        <div className="map-pin pin-start"><span>1</span></div><div className="map-pin pin-end"><span><MapPin size={14} /></span></div><div className="map-location-card"><span className="location-live" /><div><b>Device #04</b><small>Live location · just now</small></div><strong>4.2 km/h</strong></div><div className="map-coordinates">26.9124° N<br />75.7873° E</div>
      </div>
    )
  }
  if (project.visual === 'fitness') {
    return <div className="artwork fitness-art" aria-hidden="true"><div className="fitness-orbit" /><div className="fitness-label">MOVE<br />BETTER</div><div className="fitness-barbell"><i /><b /><i /></div><div className="fitness-grid" /></div>
  }
  return <div className="artwork ai-art" aria-hidden="true"><div className="ai-halo halo-one" /><div className="ai-halo halo-two" /><div className="ai-core"><span>✳</span></div><div className="ai-node node-one">AI</div><div className="ai-node node-two">OPS</div><div className="ai-node node-three">01</div><div className="ai-beam beam-one" /><div className="ai-beam beam-two" /></div>
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article className={`project-card accent-${project.accent}`} whileHover={{ y: -7 }} transition={{ type: 'spring', stiffness: 280, damping: 22 }}>
      <div className="project-art-wrap">
        <ProjectArtwork project={project} />
        <span className="project-number">/{project.number}</span>
        {project.status && <span className="project-status"><span />{project.status}</span>}
        {project.demo && <a className="artwork-open" href={project.demo} target="_blank" rel="noreferrer" aria-label={`Open live ${project.name} website`} title="Open live website"><ArrowDownRight size={18} /></a>}
      </div>
      <div className="project-content">
        <div className="project-title-row"><div><p className="project-category">{project.category}</p><h3>{project.name}</h3></div><ArrowUpRight className="project-title-arrow" size={20} /></div>
        <p className="project-description">{project.description}</p>
        <div className="tag-list">{project.stack.map((item) => <span key={item} className="tech-tag">{item}</span>)}</div>
        <div className="project-links">
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><Globe2 size={15} /> Live website</a>}
          {project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={15} /> Source code</a>}
        </div>
      </div>
    </motion.article>
  )
}
