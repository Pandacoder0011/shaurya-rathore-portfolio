import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowDown, ArrowDownRight, ArrowUpRight, Award, BookOpen, Layers,
  BriefcaseBusiness, Check, ChevronRight, Code2, ExternalLink, Github,
  Globe2, Mail, Menu, MoveUpRight, Sparkles, Terminal,
  Trophy, X, Zap, Heart, Music2, Brain, Activity,
} from 'lucide-react'
import OrbitScene from './components/OrbitScene'
import ProjectCard from './components/ProjectCard'
import Reveal from './components/Reveal'
import SectionHeading from './components/SectionHeading'
import { credentials, experience, principles, profile, projects, skills } from './data/portfolio'

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Tech stack', href: '#stack' },
  { label: 'Coding & life', href: '#coding-life' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

const filters = ['All', 'AI / Web', 'Frontend', 'Interactive'] as const

type Filter = typeof filters[number]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <header className="site-header">
      <a href="#top" className="brand-mark" aria-label="Shaurya Rathore home"><span className="brand-symbol">S<span>R</span></span><span className="brand-name">SH<span>R</span> / DEV</span></a>
      <nav className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
        <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let's talk <ArrowUpRight size={14} /></a>
      </nav>
      <button className="mobile-menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
    </header>
  )
}

function Hero() {
  const reduceMotion = useReducedMotion()
  return (
    <section className="hero section-shell" id="top">
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-copy">
        <motion.div className="availability-pill" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="availability-pulse" /> OPEN TO OPPORTUNITIES <span className="pill-divider">/</span> {profile.location.toUpperCase()}
        </motion.div>
        <motion.p className="hero-overline" initial={reduceMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}>THE DEVELOPER PORTFOLIO — 2026</motion.p>
        <motion.h1 initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16, duration: 0.75 }}>
          I make digital<br />things <span className="hero-outline">make sense.</span>
        </motion.h1>
        <motion.p className="hero-description" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.7 }}>
          Hey, I'm <strong>{profile.firstName}</strong> — a developer who likes turning ambitious ideas into useful, thoughtful web experiences, with a little extra energy in the details.
        </motion.p>
        <motion.div className="hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.36, duration: 0.7 }}>
          <a href="#work" className="button button-primary">Explore my work <ArrowDownRight size={17} /></a>
          <a href="#contact" className="button button-ghost">Get in touch <ArrowUpRight size={16} /></a>
        </motion.div>
        <div className="hero-socials"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={12} /></a><span /><a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12} /></a><span /><a href={profile.resumePath} download>Resume <ArrowDown size={12} /></a></div>
      </div>
      <div className="hero-visual">
        <div className="visual-topline"><span>FIG. 001 — CREATIVE SYSTEMS</span><span>◉ LIVE RENDER</span></div>
        <div className="visual-aura" />
        <OrbitScene />
        <div className="visual-caption caption-top"><span className="caption-dot cyan" /> RENDER / 3D OBJECT <span>001</span></div>
        <div className="visual-caption caption-bottom"><span className="caption-line" /> INTERACTION IS A FEATURE.</div>
        <div className="visual-coordinate">26° 50' N<br />75° 49' E</div>
      </div>
      <div className="hero-footer"><span>SCROLL TO EXPLORE</span><div className="scroll-line"><span /></div><span className="hero-footer-right">CODE WITH CURIOSITY <Sparkles size={13} /></span></div>
    </section>
  )
}

function Ticker() {
  const items = ['BUILD THOUGHTFULLY', 'STAY CURIOUS', 'MAKE IT USEFUL', 'KEEP ITERATING']
  return <div className="ticker" aria-label="Build thoughtfully, stay curious, make it useful, keep iterating"><div className="ticker-track">{[...items, ...items].map((item, index) => <span key={`${item}-${index}`}>{item}<i>✳</i></span>)}</div></div>
}

function WorkSection() {
  const [filter, setFilter] = useState<Filter>('All')
  const visibleProjects = filter === 'All' ? projects : projects.filter((project) => project.category === filter)
  return (
    <section className="section-shell section-block" id="work">
      <Reveal><SectionHeading eyebrow="SELECTED WORK / 2024—26" title="Built to be" highlight="explored." description="A few things I've made while learning, experimenting, and trying to solve real problems." number="01" /></Reveal>
      <Reveal delay={0.08}>
        <div className="work-toolbar"><div className="filter-list" aria-label="Filter projects">{filters.map((item) => <button key={item} className={filter === item ? 'filter-chip active' : 'filter-chip'} onClick={() => setFilter(item)}>{item}</button>)}</div><span className="work-count">SHOWING <strong>{String(visibleProjects.length).padStart(2, '0')}</strong> / {String(projects.length).padStart(2, '0')}</span></div>
      </Reveal>
      <motion.div className="project-grid" layout>
        {visibleProjects.map((project, index) => <Reveal key={project.number} delay={index * 0.07}><ProjectCard project={project} /></Reveal>)}
      </motion.div>
      <Reveal delay={0.1}><div className="more-work-line"><span>MORE EXPERIMENTS IN PROGRESS</span><a href={profile.github} target="_blank" rel="noreferrer">See all repositories <ArrowUpRight size={15} /></a></div></Reveal>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="section-shell section-block about-section" id="about">
      <Reveal><SectionHeading eyebrow="A LITTLE ABOUT ME" title="Curiosity is my" highlight="default setting." description="I enjoy the space between engineering and experience — where a product works well and feels good to use." number="02" /></Reveal>
      <div className="about-layout">
        <Reveal className="about-note-wrap"><div className="about-note"><span className="note-mark">“</span><p>I’m interested in the whole journey: the first sketch, the tricky implementation, the tiny interaction that makes everything click, and the polish that brings it together.</p><div className="note-signature"><span className="signature-line" /> SHAURYA RATHORE <span className="note-star">✳</span></div><div className="note-decoration">MAKE<br />IT<br /><em>MATTER.</em></div></div></Reveal>
        <div className="about-right"><Reveal delay={0.08}><div className="principles-grid">{principles.map((principle) => <div className="principle" key={principle.number}><span>{principle.number}</span><h4>{principle.title}</h4><p>{principle.text}</p></div>)}</div></Reveal>
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="section-shell section-block experience-section" id="experience">
      <Reveal><SectionHeading eyebrow="WHERE I'VE BEEN LEARNING" title="Experience &" highlight="momentum." description="Real-world practice, small wins, and a willingness to learn by doing." number="05" /></Reveal>
      <div className="experience-layout">
        <Reveal className="experience-intro"><div className="experience-stamp"><BriefcaseBusiness size={26} /><span>FIELD<br />NOTES</span><span className="stamp-orbit" /></div><p>Every assignment is a chance to turn theory into something someone can actually use.</p><a href="#contact" className="text-link">Let's build something <ArrowUpRight size={15} /></a></Reveal>
        <div className="experience-timeline">{experience.map((item, index) => <Reveal key={item.company} delay={index * 0.12}><article className="experience-card"><div className="timeline-rail"><span className="timeline-dot" /><span className="timeline-line" /></div><div className="experience-card-main"><div className="experience-meta"><span>{item.period}</span><span>01 / 01</span></div><h3>{item.role}</h3><p className="experience-company">{item.company}</p><p className="experience-description">{item.description}</p><div className="tag-list">{item.tags.map((tag) => <span className="tech-tag" key={tag}>{tag}</span>)}</div></div><div className="experience-card-icon"><ArrowUpRight size={18} /></div></article></Reveal>)}</div>
      </div>
    </section>
  )
}

function TechStackSection() {
  const groups = ['All', ...new Set(skills.map((skill) => skill.group))]
  const [activeGroup, setActiveGroup] = useState('All')
  const visibleSkills = activeGroup === 'All' ? skills : skills.filter((skill) => skill.group === activeGroup)
  return <section className="section-shell section-block tech-stack-section" id="stack">
    <Reveal><SectionHeading eyebrow="TOOLS I BUILD WITH" title="My tech" highlight="stack." description="A flexible toolkit across frontend, backend, data, and machine learning—growing with every project." number="03" /></Reveal>
    <Reveal delay={0.08}><div className="stack-console">
      <div className="stack-console-heading"><div><span className="stack-kicker"><Layers size={14} /> TECH STACK / LIVE VIEW</span><h3>{activeGroup === 'All' ? 'Curious across the stack.' : `${activeGroup}, in focus.`}</h3><p>{String(visibleSkills.length).padStart(2, '0')} technologies in this view</p></div><div className="stack-orbit" aria-hidden="true"><span className="stack-orbit-core"><Code2 size={24} /></span><i /><b /></div></div>
      <div className="stack-controls" role="group" aria-label="Filter technologies by category">{groups.map((group) => <button key={group} className={`stack-filter ${activeGroup === group ? 'active' : ''}`} onClick={() => setActiveGroup(group)}>{group}<span>{group === 'All' ? skills.length : skills.filter((skill) => skill.group === group).length}</span></button>)}</div>
      <motion.div className="stack-grid" layout>{visibleSkills.map((skill, index) => <motion.div key={skill.name} className="stack-item" layout initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: Math.min(index * 0.025, 0.2) }} whileHover={{ y: -4 }}><span className="stack-item-index">{String(index + 1).padStart(2, '0')}</span><span className="stack-item-name">{skill.name}</span><span className="stack-item-group">{skill.group}</span><ArrowUpRight size={14} /></motion.div>)}</motion.div>
    </div></Reveal>
  </section>
}

function AchievementsSection() {
  const [tab, setTab] = useState<'All' | 'Hackathon' | 'Learning' | 'Research'>('All')
  const list = tab === 'All' ? credentials : credentials.filter((entry) => entry.type === tab)
  const icons = { certificate: Award, trophy: Trophy, book: BookOpen }
  return (
    <section className="section-shell section-block achievements-section" id="achievements">
      <Reveal><SectionHeading eyebrow="PROGRESS, NOT JUST OUTPUT" title="Proof of" highlight="progress." description="Hackathons, courses, research milestones, and the problem solving that keep me moving forward." number="06" /></Reveal>
      <Reveal delay={0.06}><div className="credential-toolbar"><div className="filter-list">{(['All', 'Hackathon', 'Learning', 'Research'] as const).map((item) => <button key={item} className={tab === item ? 'filter-chip active' : 'filter-chip'} onClick={() => setTab(item)}>{item}</button>)}</div><span className="work-count">A LIVING LOG <Sparkles size={12} /></span></div></Reveal>
      <motion.div className="credential-grid" layout>{list.map((entry, index) => { const Icon = icons[entry.icon as keyof typeof icons] || Award; return <Reveal delay={index * 0.06} key={entry.title}><article className="credential-card"><div className="credential-icon"><Icon size={21} strokeWidth={1.5} /></div><div className="credential-type">{entry.type}</div><h3>{entry.title}</h3><p className="credential-issuer">{entry.issuer}</p><p className="credential-detail">{entry.detail}</p>{entry.link && <div className="credential-actions"><a className="credential-link" href={entry.link} target="_blank" rel="noreferrer">View certificate <ArrowUpRight size={14} /></a></div>}<span className="credential-index">0{index + 1}</span></article></Reveal> })}</motion.div>
      <Reveal delay={0.1}><div className="credential-hint"><span className="hint-icon"><Zap size={16} /></span><div><strong>Always learning, always building.</strong><p>New courses, solved problems, and research milestones will keep joining this learning log.</p></div><ArrowDownRight size={18} /></div></Reveal>
    </section>
  )
}

function CodingLifeSection() {
  return <section className="section-shell section-block coding-life-section" id="coding-life">
    <Reveal><SectionHeading eyebrow="BEYOND THE SCREEN" title="Love to code." highlight="Built to explore." description="I love turning ideas into useful things, then making time for the games, people, and playlists that keep me inspired." number="04" /></Reveal>
    <div className="coding-life-layout">
      <Reveal className="coding-scene-wrap"><figure className="coding-scene">
        <img className="coding-photo" src="/coding-cat.png" alt="A curious black cat beside a laptop displaying code" />
        <span className="coding-photo-tint" aria-hidden="true" />
        <figcaption className="coding-photo-caption">LOVE TO CODE <i>✳</i> ALWAYS BUILDING</figcaption>
      </figure></Reveal>
      <Reveal delay={0.1}><div className="coding-life-copy"><p className="eyebrow"><Heart size={14} /> WHAT KEEPS ME INSPIRED</p><h3>Curious by nature,<br /><span className="gradient-text">builder by choice.</span></h3><p>Most days you'll find me learning something new, solving a coding problem, or sketching the next idea. Away from the keyboard, I enjoy strategy, teamwork, and a good soundtrack.</p>
        <div className="hobby-list"><span><Brain size={16} /> Chess</span><span><Activity size={16} /> Volleyball</span><span><Music2 size={16} /> Music lover</span></div>
      </div></Reveal>
    </div>
  </section>
}

function CodingProfiles() {
  return (
    <section className="section-shell profiles-section">
      <Reveal><div className="profiles-panel"><div className="profiles-copy"><p className="eyebrow"><Terminal size={14} /> AROUND THE WEB</p><h2>Code in public.<br /><span className="gradient-text">Learn out loud.</span></h2><p>Repositories, experiments, and the work-in-progress side of building software.</p><a href={profile.github} target="_blank" rel="noreferrer" className="button button-primary">Explore GitHub <ArrowUpRight size={16} /></a></div><div className="profile-terminal"><div className="terminal-top"><div className="terminal-dots"><i /><i /><i /></div><span>~/sha​urya/links</span><span className="terminal-live"><span /> ONLINE</span></div><div className="terminal-body"><p><span className="terminal-prompt">$</span> whoami</p><h3>Shaurya Rathore</h3><p className="terminal-muted">Frontend / Full-stack developer</p><div className="terminal-separator" /><p><span className="terminal-prompt">$</span> cat profiles.json</p><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /><span>GitHub <small>github.com/Pandacoder0011</small></span><MoveUpRight size={14} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Globe2 size={16} /><span>LinkedIn <small>linkedin.com/in/shaurya-rathore</small></span><MoveUpRight size={14} /></a><p className="terminal-success"><Check size={13} /> Links verified in portfolio config</p></div></div></div></Reveal>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-grid-lines" aria-hidden="true" />
      <div className="section-shell contact-inner"><Reveal><p className="eyebrow"><span className="eyebrow-dot" /> HAVE A GOOD ONE IN MIND?</p><h2>Let's make<br />something <span className="gradient-text">matter.</span></h2><p className="contact-copy">Have a role, a project idea, or just want to talk about building things? My inbox is open.</p><div className="contact-actions"><a className="button button-primary contact-email-button" href={`mailto:${profile.email}`}><Mail size={16} /><span><strong>Email me</strong><small>{profile.email}</small></span><ArrowUpRight size={16} /></a><a className="button button-ghost" href={profile.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ExternalLink size={15} /></a></div></Reveal><div className="contact-graphic" aria-hidden="true"><div className="contact-orbit orbit-a" /><div className="contact-orbit orbit-b" /><div className="contact-center"><Sparkles size={28} /></div><span className="contact-glyph glyph-a">✳</span><span className="contact-glyph glyph-b">+</span><span className="contact-glyph glyph-c">⌁</span><span className="contact-code">OPEN<br />CHANNEL</span></div></div>
      <footer className="site-footer section-shell"><a href="#top" className="footer-brand"><span className="brand-symbol">S<span>R</span></span><span>BUILT WITH CURIOSITY<span className="footer-heart"> ♥ </span>AND COFFEE</span></a><span>© {new Date().getFullYear()} SHAURYA RATHORE</span><a href="#top" className="back-to-top">BACK TO TOP <ArrowDown size={13} /></a></footer>
    </section>
  )
}

function CustomCursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const updatePosition = (event: PointerEvent) => {
      const element = glowRef.current
      if (!element) return
      element.style.setProperty('--cursor-x', `${event.clientX}px`)
      element.style.setProperty('--cursor-y', `${event.clientY}px`)
      element.style.opacity = '1'
    }
    window.addEventListener('pointermove', updatePosition, { passive: true })
    return () => window.removeEventListener('pointermove', updatePosition)
  }, [])
  // Subtle spotlight only; the native pointer remains visible and usable.
  return <div ref={glowRef} className="cursor-glow" aria-hidden="true" />
}

function ScrollProgress() {
  const progressRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0
      progressRef.current?.style.setProperty('transform', `scaleX(${progress})`)
    }
    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])
  return <div className="scroll-progress" aria-hidden="true"><span ref={progressRef} /></div>
}

export default function App() {
  const reduceMotion = useReducedMotion()
  return (
    <div className={`portfolio-app ${reduceMotion ? 'reduce-motion' : ''}`}>
      <div className="ambient-background" aria-hidden="true"><div className="ambient-blob blob-purple" /><div className="ambient-blob blob-cyan" /><div className="ambient-grain" /></div>
      <CustomCursorGlow />
      <ScrollProgress />
      <Header />
      <main><Hero /><Ticker /><WorkSection /><AboutSection /><TechStackSection /><CodingLifeSection /><ExperienceSection /><AchievementsSection /><CodingProfiles /><ContactSection /></main>
      <a className="floating-scroll-top" href="#top" aria-label="Back to top"><ChevronRight size={17} /></a>
    </div>
  )
}
