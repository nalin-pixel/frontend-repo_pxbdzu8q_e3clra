import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Briefcase, GraduationCap, Star } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home', Icon: Home },
  { href: '#about', label: 'About', Icon: User },
  { href: '#skills', label: 'Skills', Icon: Star },
  { href: '#experience', label: 'Experience', Icon: Briefcase },
  { href: '#education', label: 'Education', Icon: GraduationCap },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
    >
      <div
        className={`backdrop-blur-md rounded-full px-5 py-2 border transition-all duration-300 ${
          scrolled ? 'bg-black/50 border-yellow-400/60 shadow-[0_0_30px_rgba(212,175,55,0.25)]' : 'bg-black/30 border-yellow-400/40'
        }`}
      >
        <ul className="flex items-center gap-2">
          {links.map(({ href, label, Icon }) => (
            <li key={href}>
              <a
                href={href}
                className="group flex items-center gap-2 rounded-full px-3 py-2 text-sm text-neutral-200 hover:text-yellow-300 transition-colors"
              >
                <Icon className="h-4 w-4 text-yellow-400 group-hover:text-yellow-300" />
                <span className="hidden sm:block font-medium">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
