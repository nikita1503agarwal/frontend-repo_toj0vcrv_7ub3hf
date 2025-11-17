import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="absolute -top-48 -left-48 h-96 w-96 rounded-full bg-sky-200/60 blur-3xl" />
      <div className="absolute -bottom-48 -right-48 h-96 w-96 rounded-full bg-rose-200/60 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <span className="inline-flex items-center rounded-full border border-sky-200 bg-white/70 px-3 py-1 text-xs font-medium text-sky-700 backdrop-blur">
              Psicologa a Pordenone
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Benessere psicologico, con empatia e professionalità
            </h1>
            <p className="mt-5 text-slate-600 text-lg leading-relaxed">
              Supporto psicologico personalizzato per adulti e adolescenti. In studio a Pordenone e online.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-white font-medium shadow-lg shadow-sky-600/30 hover:bg-sky-700">
                Prenota una consulenza
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-3 text-slate-700 hover:bg-white/60">
                Scopri i servizi
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative z-10"
          >
            <div className="relative mx-auto max-w-md">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-rose-50 shadow-xl"/>
              <div className="pointer-events-none absolute -left-6 -top-6 h-24 w-24 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur" />
              <div className="pointer-events-none absolute -right-6 -bottom-6 h-24 w-24 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
