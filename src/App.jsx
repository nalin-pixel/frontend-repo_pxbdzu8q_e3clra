import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Footer from './components/Footer'

const experience = [
  {
    role: 'Senior Frontend Engineer',
    org: 'Acme Inc.',
    period: '2022 — Present',
    desc: 'Leading the web platform; shipping design systems and high‑fidelity interactions.'
  },
  {
    role: 'Full‑stack Engineer',
    org: 'Startup XYZ',
    period: '2020 — 2022',
    desc: 'Built multi‑tenant SaaS from 0→1 with Next.js, Node, and PostgreSQL.'
  },
  {
    role: 'Frontend Engineer',
    org: 'Studio',
    period: '2018 — 2020',
    desc: 'Shipped marketing sites and product surfaces with performance budgets.'
  },
]

const education = [
  {
    role: 'B.S. in Computer Science',
    org: 'University of Somewhere',
    period: '2014 — 2018',
    desc: 'Focus on software engineering, HCI, and distributed systems.'
  },
  {
    role: 'Design Minor',
    org: 'School of Design',
    period: '2016 — 2018',
    desc: 'Interaction design, typography, and visual systems.'
  },
]

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Timeline id="experience" title="Experience" items={experience} />
      <Timeline id="education" title="Education" items={education} />
      <Footer />
    </div>
  )
}
