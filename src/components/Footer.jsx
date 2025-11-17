export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative mt-20 border-t border-slate-200 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-600 text-sm">
            © {year} Alessandra Scarsi — Psicologa a Pordenone
          </p>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#services" className="hover:text-slate-900">Servizi</a>
            <a href="#about" className="hover:text-slate-900">Chi sono</a>
            <a href="#contact" className="hover:text-slate-900">Contatti</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
