import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, User, Star, Mail } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', icon: Rocket },
    { label: 'About', href: '#about', icon: User },
    { label: 'Work', href: '#work', icon: Star },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`backdrop-blur-xl rounded-2xl border transition-all ${
          scrolled ? 'border-zinc-800/80 bg-zinc-900/70 shadow-[0_8px_40px_rgba(0,0,0,0.35)]' : 'border-zinc-800/40 bg-zinc-900/40'
        }`}
      >
        <div className="flex items-center gap-3 px-4 py-2">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-500/40 to-amber-300/20 blur-md" />
            <div className="relative grid h-9 w-9 place-items-center rounded-full bg-zinc-900 border border-zinc-800">
              <Rocket className="h-4 w-4 text-yellow-400" />
            </div>
          </div>
          <span className="hidden sm:block font-semibold tracking-wide text-zinc-100">Goldfolio</span>
        </div>
        <ul className="flex items-center gap-1 pr-2">
          {navItems.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                className="group relative mx-1 inline-flex items-center gap-2 rounded-xl border border-transparent px-3 py-2 text-sm text-zinc-300 transition hover:text-zinc-100 focus:outline-none"
              >
                <Icon className="h-4 w-4 text-zinc-400 transition group-hover:text-yellow-400" />
                <span className="hidden sm:block">{label}</span>
                <span className="pointer-events-none absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
}
