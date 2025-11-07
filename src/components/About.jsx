import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative w-full bg-black text-neutral-200">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start"
        >
          <div className="md:col-span-5">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">About Me</h2>
            <p className="mt-4 text-neutral-300">
              I design and build modern web products with an emphasis on performance,
              accessibility, and motion. My work blends engineering discipline with
              product intuition.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {["Performance", "Accessibility", "DX", "3D/Motion"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-yellow-400/40 bg-black/40 px-4 py-2 text-sm text-yellow-200"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-7">
            <div className="relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-gradient-to-br from-yellow-500/10 via-yellow-400/5 to-transparent p-8">
              <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-yellow-500/10 blur-3xl" />
              <motion.ul className="space-y-4">
                {[
                  {
                    title: 'Product-led mindset',
                    desc: 'I partner with design and product to ship meaningful outcomes, not just features.'
                  },
                  {
                    title: 'Engineering craft',
                    desc: 'I care about clean abstractions, pragmatic architecture, and elegant interactions.'
                  },
                  {
                    title: 'Systems thinking',
                    desc: 'From components to CI, I optimize for maintainability and speed.'
                  }
                ].map((item, i) => (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="rounded-xl border border-yellow-500/20 bg-black/40 p-5"
                  >
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm text-neutral-300">{item.desc}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
