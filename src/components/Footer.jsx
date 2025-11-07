export default function Footer() {
  return (
    <footer className="bg-black text-neutral-300">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© {new Date().getFullYear()} Your Name — Crafted with care.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#home" className="hover:text-yellow-300 transition">Top</a>
            <a href="#projects" className="hover:text-yellow-300 transition">Projects</a>
            <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
