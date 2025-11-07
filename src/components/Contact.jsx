import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative bg-black py-24 text-zinc-100">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold"
        >
          Let’s collaborate
        </motion.h2>
        <p className="mt-3 max-w-2xl text-zinc-400">Have a project in mind or want to say hello? I’m open to exciting collaborations and new opportunities.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="absolute -inset-1 -z-0 rounded-3xl opacity-30 blur-2xl" style={{ background: 'radial-gradient(600px 120px at 10% 10%, rgba(234,179,8,0.15), transparent)' }} />
            <div className="relative z-10 grid gap-4">
              <div>
                <label className="text-sm text-zinc-400">Name</label>
                <input className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-yellow-500/40" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-zinc-400">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-yellow-500/40" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-zinc-400">Message</label>
                <textarea rows={5} className="mt-1 w-full rounded-xl border border-zinc-800 bg-zinc-900/60 px-3 py-2 text-sm outline-none ring-0 placeholder:text-zinc-500 focus:border-yellow-500/40" placeholder="Tell me about your project..." />
              </div>
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-5 py-2.5 text-sm font-medium text-yellow-200 transition hover:border-yellow-400/60 hover:text-yellow-100">
                <span className="absolute inset-0 translate-y-[180%] bg-gradient-to-t from-yellow-400/20 to-transparent transition group-hover:translate-y-0" />
                <Mail className="mr-2 h-4 w-4" /> Send message
              </button>
            </div>
          </motion.form>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6"
          >
            <div className="space-y-4">
              <a href="mailto:hello@example.com" className="group flex items-center gap-3 rounded-xl border border-transparent p-2 text-zinc-300 transition hover:border-yellow-500/30 hover:text-yellow-200">
                <Mail className="h-5 w-5 text-zinc-500 transition group-hover:text-yellow-400" />
                hello@example.com
              </a>
              <a href="#" className="group flex items-center gap-3 rounded-xl border border-transparent p-2 text-zinc-300 transition hover:border-yellow-500/30 hover:text-yellow-200">
                <Github className="h-5 w-5 text-zinc-500 transition group-hover:text-yellow-400" />
                github.com/yourname
              </a>
              <a href="#" className="group flex items-center gap-3 rounded-xl border border-transparent p-2 text-zinc-300 transition hover:border-yellow-500/30 hover:text-yellow-200">
                <Linkedin className="h-5 w-5 text-zinc-500 transition group-hover:text-yellow-400" />
                linkedin.com/in/yourname
              </a>
              <div className="mt-6 rounded-xl border border-zinc-800/60 bg-zinc-900/60 p-4 text-sm text-zinc-300">
                Prefer a quick call? Share your time slots and I’ll send a calendar invite.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
