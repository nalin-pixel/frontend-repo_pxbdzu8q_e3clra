import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
        >
          Building delightful products at the intersection of
          <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"> design</span>
          ,
          <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"> code</span>
          , and
          <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-clip-text text-transparent"> motion</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-6 max-w-2xl text-neutral-200"
        >
          I’m a full‑stack engineer crafting immersive experiences and scalable systems.
        </motion.p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-700 px-6 py-3 font-semibold text-black shadow-lg shadow-yellow-500/20 hover:scale-[1.02] active:scale-[0.98] transition"
          >
            Let’s work together
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full border border-yellow-400/60 bg-black/40 px-6 py-3 font-semibold text-yellow-200 hover:bg-black/60 transition"
          >
            View projects
          </motion.a>
        </div>
      </div>
    </section>
  )
}
