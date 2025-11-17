import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    quote:
      'Mi sono sentita ascoltata e capita. In poco tempo ho trovato strumenti utili per gestire l\'ansia.',
    author: 'Marta, 32 anni',
  },
  {
    quote:
      'Approccio professionale e umano. Le sedute mi hanno aiutato ad affrontare un periodo complesso.',
    author: 'Luca, 41 anni',
  },
  {
    quote: 'Consigliatissima. Competenza e grande empatia.',
    author: 'Giulia, 28 anni',
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="testimonials" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Cosa dicono le persone
          </h2>
          <p className="mt-3 text-slate-600">Esperienze reali di chi ha intrapreso un percorso.</p>
        </div>

        <div ref={ref} className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-slate-700">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-500">{t.author}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
