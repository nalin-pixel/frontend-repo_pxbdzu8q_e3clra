export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative bg-black py-10 text-zinc-400">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
        <p className="text-sm">© {year} Goldfolio. All rights reserved.</p>
        <div className="text-xs">
          Crafted with care — black & gold.
        </div>
      </div>
    </footer>
  );
}
