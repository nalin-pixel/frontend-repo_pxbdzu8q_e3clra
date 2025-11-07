import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Motion-first Dashboard',
    desc: 'Analytics experience with buttery transitions and real-time graphs.',
    tag: 'React • Framer Motion • Tailwind',
    link: '#',
  },
  {
    title: '3D Marketing Site',
    desc: 'Immersive brand story with Spline scenes and parallax layers.',
    tag: 'Spline • React • Vite',
    link: '#',
  },
  {
    title: 'Design System',
    desc: 'Composable, accessible components with tokens and theming.',
    tag: 'TypeScript • Radix • shadcn/ui',
    link: '#',
  },
];

export default function Work() {
  return (
    <section id="work" className="relative bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-zinc-100"
        >
          Selected work
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 p-5 hover:border-yellow-500/30"
            >
              <div className="absolute -inset-px opacity-0 transition group-hover:opacity-100">
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-yellow-500/15 to-transparent" />
              </div>
              <div className="flex min-h-[170px] flex-col">
                <div className="text-lg font-medium text-zinc-100">{p.title}</div>
                <p className="mt-2 text-sm text-zinc-400">{p.desc}</p>
                <div className="mt-auto flex items-center justify-between pt-4 text-xs text-zinc-400">
                  <span>{p.tag}</span>
                  <ExternalLink className="h-4 w-4 text-zinc-500 transition group-hover:text-yellow-400" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
