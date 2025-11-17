import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-20 sm:py-28 bg-gradient-to-b from-white to-slate-50/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Chi sono
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Sono una psicologa con sede a Pordenone, specializzata nel supporto a persone che
              desiderano migliorare il loro benessere emotivo. Lavoro con un approccio integrato,
              empatico e concreto, orientato alla persona e ai suoi obiettivi.
            </p>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Offro percorsi individuali in presenza e online, con attenzione alla relazione e alla
              costruzione di strumenti utili nella vita quotidiana.
            </p>
            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center rounded-full bg-sky-600 px-5 py-3 text-white font-medium shadow-lg shadow-sky-600/30 hover:bg-sky-700">
                Contattami
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative mx-auto max-w-lg">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50 via-white to-rose-50 shadow-xl" />
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur" />
              <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-3xl border border-slate-200 bg-white/70 backdrop-blur" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
