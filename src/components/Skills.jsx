import { motion } from 'framer-motion'

const groups = [
  {
    name: 'Frontend',
    color: 'from-yellow-400 to-yellow-600',
    items: [
      { label: 'React / Next.js', level: 90 },
      { label: 'TypeScript', level: 85 },
      { label: 'Tailwind / CSS', level: 90 },
      { label: 'Framer Motion', level: 80 },
    ],
  },
  {
    name: 'Backend',
    color: 'from-yellow-500 to-amber-700',
    items: [
      { label: 'Node.js / Express', level: 80 },
      { label: 'FastAPI / Python', level: 75 },
      { label: 'PostgreSQL / MongoDB', level: 80 },
      { label: 'Prisma / ORMs', level: 70 },
    ],
  },
  {
    name: 'DevOps',
    color: 'from-amber-400 to-yellow-700',
    items: [
      { label: 'Docker', level: 75 },
      { label: 'CI/CD (GitHub Actions)', level: 70 },
      { label: 'Cloud (Vercel/AWS)', level: 70 },
      { label: 'Monitoring', level: 65 },
    ],
  },
]

function Meter({ value }: { value: number }) {
  return (
    <div className="h-2 w-full rounded-full bg-white/10">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
      />
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="relative bg-black text-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Skills</h2>
          <p className="text-sm text-neutral-400">A snapshot of my toolbox</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {groups.map((g) => (
            <motion.div
              key={g.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 via-yellow-500/0 to-transparent p-6"
            >
              <div className={`inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-black/40 px-4 py-1 text-sm font-semibold text-yellow-200`}>{g.name}</div>
              <ul className="mt-6 space-y-4">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
