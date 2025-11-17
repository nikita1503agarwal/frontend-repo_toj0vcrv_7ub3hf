import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Brain, MessageSquare, Users } from 'lucide-react'

const services = [
  {
    icon: Heart,
    title: 'Ansia e stress',
    desc: 'Strumenti pratici e percorsi mirati per gestire ansia, stress e somatizzazioni.',
  },
  {
    icon: Brain,
    title: 'Autostima e crescita',
    desc: 'Sostegno per sviluppare fiducia in sé, assertività e benessere personale.',
  },
  {
    icon: MessageSquare,
    title: 'Terapia individuale',
    desc: 'Sedute personalizzate per adulti e adolescenti, in studio e online.',
  },
  {
    icon: Users,
    title: 'Relazioni e famiglia',
    desc: 'Supporto per dinamiche relazionali, comunicazione e conflitti.',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Di cosa mi occupo
          </h2>
          <p className="mt-3 text-slate-600">
            Un approccio umano, basato sull'ascolto e su metodi scientifici.
          </p>
        </div>

        <div ref={ref} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i }}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-700 ring-1 ring-sky-100">
                <s.icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
