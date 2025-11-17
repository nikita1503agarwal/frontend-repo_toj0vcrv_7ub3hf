import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Servizi', href: '#services' },
  { label: 'Chi sono', href: '#about' },
  { label: 'Testimonianze', href: '#testimonials' },
  { label: 'Contatti', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm bg-white/60 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-slate-800 text-lg">
            Alessandra Scarsi
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-sky-600/30 hover:bg-sky-700 transition-colors"
            >
              Prenota un colloquio
            </a>
          </nav>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-slate-700 hover:text-slate-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-sky-600/30 hover:bg-sky-700"
            >
              Prenota un colloquio
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
