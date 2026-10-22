export type Project = {
  number: string
  name: string
  category: 'AI / Web' | 'Frontend' | 'Interactive'
  description: string
  stack: string[]
  github?: string
  demo?: string
  accent: 'purple' | 'cyan' | 'pink' | 'lime'
  visual: 'smartops' | 'chess' | 'tracking' | 'fitness'
  status?: string
}

export type Credential = {
  type: 'Certification' | 'Hackathon' | 'Learning' | 'Research'
  title: string
  issuer: string
  detail: string
  link?: string
  icon: 'certificate' | 'trophy' | 'book'
}

export const profile = {
  name: 'Shaurya Rathore',
  firstName: 'Shaurya',
  role: 'Frontend & Full-stack Developer',
  location: 'India',
  email: 'ssr030305@gmail.com',
  github: 'https://github.com/Pandacoder0011',
  linkedin: 'https://www.linkedin.com/in/shaurya-rathore/',
  resumePath: '/Shaurya-Rathore-Resume.pdf',
}

export const projects: Project[] = [
  {
    number: '01',
    name: 'SmartOps AI',
    category: 'AI / Web',
    description:
      'Architected a full-stack AI operations platform with protected authentication and dashboard, plus a REST API connecting the React client to Node.js services and AI-driven insights.',
    stack: ['React', 'Node.js', 'Gemini API'],
    github: 'https://github.com/Pandacoder0011/smartops-ai',
    demo: 'https://smartops-ai-seven.vercel.app/',
    accent: 'purple',
    visual: 'smartops',
    status: 'Featured project',
  },
  {
    number: '02',
    name: 'Real-Time Multiplayer Chess',
    category: 'Interactive',
    description:
      'A real-time two-player chess app with Socket.io move synchronization, move validation, and a React/Tailwind interface, deployed on Render.',
    stack: ['React', 'Tailwind CSS', 'Node.js', 'Socket.io'],
    github: 'https://github.com/Pandacoder0011/Chess_game',
    accent: 'cyan',
    visual: 'chess',
  },
  {
    number: '03',
    name: 'Real-Time Device Tracking',
    category: 'Interactive',
    description:
      'A live location-tracking app that streams browser device coordinates onto an interactive map and syncs updates over WebSockets.',
    stack: ['Node.js', 'Express', 'Socket.io', 'Leaflet'],
    github: 'https://github.com/Pandacoder0011',
    accent: 'pink',
    visual: 'tracking',
  },
  {
    number: '04',
    name: 'Gym Flex – Gym Management',
    category: 'Frontend',
    description:
      'A responsive, mobile-first gym management web app with clean UI components and smooth navigation.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://gymflexx.netlify.app/',
    accent: 'lime',
    visual: 'fitness',
  },
]

export const skills = [
  { name: 'Python', group: 'Languages' },
  { name: 'React', group: 'Frontend' },
  { name: 'Redux', group: 'Frontend' },
  { name: 'TypeScript', group: 'Frontend' },
  { name: 'JavaScript', group: 'Frontend' },
  { name: 'HTML & CSS', group: 'Frontend' },
  { name: 'Tailwind CSS', group: 'Frontend' },
  { name: 'Node.js', group: 'Backend' },
  { name: 'Express', group: 'Backend' },
  { name: 'MongoDB', group: 'Backend' },
  { name: 'Socket.io', group: 'Backend' },
  { name: 'SQL', group: 'Databases' },
  { name: 'NLP & Transformers', group: 'AI / ML' },
  { name: 'scikit-learn & XGBoost', group: 'AI / ML' },
  { name: 'REST APIs', group: 'Backend' },
  { name: 'Git & GitHub', group: 'Tools' },
  { name: 'Vite', group: 'Tools' },
  { name: 'Figma basics', group: 'Tools' },
]

export const experience = [
  {
    period: 'Internship',
    role: 'Web Development Intern',
    company: 'Happie Loop Technologies · Pune',
    description:
      'Worked through JavaScript fundamentals and small web tasks, then contributed to a SmartOps AI project using React, Node.js, and the Gemini API.',
    tags: ['JavaScript', 'React', 'Node.js', 'Gemini API'],
  },
]

export const credentials: Credential[] = [
  {
    type: 'Hackathon', title: 'Adobe India Hackathon', issuer: 'Team Tren · Manipal University Jaipur',
    detail: 'Round 1 online MCQ assessment and coding · Certificate of participation.', link: '/certificates/adobe-india-hackathon.pdf', icon: 'trophy',
  },
  {
    type: 'Hackathon', title: 'Turing Hacks 2.0', issuer: 'Turing Sapiens',
    detail: 'Certificate of active participation.', link: '/certificates/turing-hacks-2.pdf', icon: 'trophy',
  },
  {
    type: 'Hackathon', title: 'Tata Elxsi TELIPORT Season 3', issuer: 'Tata Elxsi · Team Tren · Manipal University Jaipur',
    detail: 'Certificate of participation · June 15, 2026.', link: '/certificates/tata-elxsi-teliport-season-3.pdf', icon: 'trophy',
  },
  {
    type: 'Hackathon', title: 'Government of India Cybersecurity Cell Hackathon', issuer: 'Participant',
    detail: 'Participation listed in resume.', icon: 'trophy',
  },
  {
    type: 'Learning', title: 'Problem solving · 100+ coding challenges', issuer: 'LeetCode & HackerRank',
    detail: '100+ problems solved across algorithms, data structures, and implementation.', icon: 'book',
  },
  {
    type: 'Research', title: 'Comparative Analysis of NLP Models for Sentiment Analysis', issuer: 'Sole author · IEEE conference-format paper · 2025',
    detail: 'Benchmarked six NLP pipelines on 1.6M Sentiment140 samples. Fine-tuned BERT reached 73.9% accuracy and 0.831 ROC-AUC.', icon: 'certificate',
  },
]

export const hobbies = ['Chess', 'Volleyball', 'Music'];

export const principles = [
  { number: '01', title: 'Build with intent', text: 'Make interfaces useful first, then make them memorable.' },
  { number: '02', title: 'Keep learning', text: 'Treat every project as a chance to level up the toolkit.' },
  { number: '03', title: 'Sweat the details', text: 'Responsive layouts, thoughtful motion, and clean interactions matter.' },
]
