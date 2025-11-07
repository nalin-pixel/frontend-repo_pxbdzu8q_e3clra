import { motion } from 'framer-motion';

const aboutPoints = [
  'Front-end engineer focused on delightful UX',
  '5+ years building React products at scale',
  'Obsessed with micro-interactions & performance',
  'Love design systems, accessibility, and craft',
];

export default function About() {
  return (
    <section id="about" className="relative bg-black py-24 text-zinc-200">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-semibold text-zinc-100"
            >
              About me
            </motion.h2>
            <p className="mt-4 text-zinc-400">
              I craft interfaces that feel alive, blending solid engineering with impeccable taste. My toolkit spans React, TypeScript, Tailwind, and motion design.
            </p>

            <ul className="mt-8 space-y-3">
              {aboutPoints.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-tr from-yellow-400 to-amber-300 shadow-[0_0_12px_rgba(234,179,8,0.7)]" />
                  <span className="text-zinc-300">{p}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-yellow-500/20 to-amber-300/10 blur-xl" />
            <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[{ k: 'Projects', v: '30+' }, { k: 'Years', v: '5' }, { k: 'Clients', v: '14' }].map((s) => (
                  <div key={s.k} className="rounded-xl border border-zinc-800/60 bg-zinc-900/60 p-4">
                    <div className="text-2xl font-semibold text-yellow-300">{s.v}</div>
                    <div className="text-xs text-zinc-400">{s.k}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-zinc-800/60 bg-zinc-900/60 p-4 text-sm text-zinc-300">
                Available for freelance and full-time roles. Based in UTC±0, open to remote work.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
