import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] w-full overflow-hidden bg-black text-zinc-100">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6pKJ3lq-3O2h5n9w/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(250,204,21,0.10),rgba(0,0,0,0)_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-medium text-yellow-300"
        >
          Crafted in black & gold
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-semibold leading-tight sm:text-6xl"
        >
          Elevate your presence with a premium portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-4 max-w-2xl text-zinc-300"
        >
          I build sleek, performant interfaces with motion-first design. Let’s turn your ideas into delightful experiences.
        </motion.p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#contact" className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-5 py-3 text-sm font-medium text-yellow-200 shadow-[0_0_40px_rgba(234,179,8,0.08)] transition hover:border-yellow-400/60 hover:text-yellow-100">
            <span className="absolute inset-0 translate-y-[200%] bg-gradient-to-t from-yellow-400/20 to-transparent transition group-hover:translate-y-0" />
            Get in touch
          </a>
          <a href="#work" className="inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 px-5 py-3 text-sm font-medium text-zinc-200 hover:border-zinc-700">
            See my work
          </a>
        </div>
      </div>
    </section>
  );
}
