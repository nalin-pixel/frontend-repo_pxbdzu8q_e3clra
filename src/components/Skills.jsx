import { motion } from 'framer-motion'

const groups = [
  {
    name: 'Frontend',
    tagline: 'Interfaces & Motion',
    gradient: 'from-yellow-400 via-amber-400 to-yellow-600',
    items: [
      { label: 'React / Next.js', level: 92 },
      { label: 'TypeScript', level: 88 },
      { label: 'Tailwind / CSS', level: 94 },
      { label: 'Framer Motion', level: 84 },
    ],
  },
  {
    name: 'Backend',
    tagline: 'APIs & Data',
    gradient: 'from-yellow-500 via-amber-500 to-amber-700',
    items: [
      { label: 'Node.js / Express', level: 82 },
      { label: 'FastAPI / Python', level: 78 },
      { label: 'PostgreSQL / MongoDB', level: 80 },
      { label: 'Prisma / ORMs', level: 72 },
    ],
  },
  {
    name: 'DevOps',
    tagline: 'Shipping & Reliability',
    gradient: 'from-amber-400 via-yellow-500 to-amber-700',
    items: [
      { label: 'Docker', level: 76 },
      { label: 'CI/CD (GitHub Actions)', level: 72 },
      { label: 'Cloud (Vercel/AWS)', level: 74 },
      { label: 'Monitoring', level: 68 },
    ],
  },
]

function Meter({ value }) {
  return (
    <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/10">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
      />
      {/* subtle sheen */}
      <motion.span
        initial={{ x: '-100%' }}
        whileInView={{ x: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/20 via-white/5 to-transparent"
      />
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-black text-neutral-200">
      {/* soft gold glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-40 max-w-5xl rounded-full bg-yellow-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-extrabold text-white"
          >
            Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-neutral-400"
          >
            A refined toolkit for building fast, beautiful, and reliable products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: gi * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-black/40 p-6"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-black/50 px-4 py-1 text-sm font-semibold text-yellow-200">
                {g.name}
              </div>
              <p className="text-sm text-neutral-400">{g.tagline}</p>

              <ul className="mt-6 space-y-5">
                {g.items.map((item) => (
                  <li key={item.label} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-100">{item.label}</span>
                      <span className="text-yellow-300">{item.level}%</span>
                    </div>
                    <Meter value={item.level} />
                  </li>
                ))}
              </ul>

              {/* bottom gradient accent */}
              <div className={`pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${g.gradient}`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
