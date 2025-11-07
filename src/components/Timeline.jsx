import { motion } from 'framer-motion'

export default function Timeline({ id, title, items }) {
  return (
    <section id={id} className="relative bg-black text-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white">{title}</h2>
        <div className="mt-10 relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-yellow-500/50 via-yellow-500/20 to-transparent" />
          <ul className="space-y-8">
            {items.map((item, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="relative pl-12"
              >
                <span className="absolute left-0 top-2 h-3 w-3 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 shadow-[0_0_20px_rgba(212,175,55,0.6)]" />
                <div className="rounded-xl border border-yellow-500/20 bg-black/40 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-white">{item.role}</h3>
                    <span className="text-xs text-yellow-300">{item.period}</span>
                  </div>
                  {item.org && (
                    <p className="mt-1 text-sm text-neutral-300">{item.org}</p>
                  )}
                  {item.desc && (
                    <p className="mt-3 text-sm text-neutral-300">{item.desc}</p>
                  )}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
