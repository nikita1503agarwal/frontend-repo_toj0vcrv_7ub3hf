import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="relative py-20 sm:py-24 bg-gradient-to-tr from-sky-50 to-rose-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            ref={ref}
          >
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
              Prenota un colloquio
            </h2>
            <p className="mt-3 text-slate-600">
              Scrivimi per informazioni o per fissare una prima consulenza conoscitiva.
            </p>

            <form className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm text-slate-600">Nome</label>
                <input className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200" />
              </div>
              <div>
                <label className="text-sm text-slate-600">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-slate-600">Messaggio</label>
                <textarea rows="4" className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-sky-200" />
              </div>
              <div className="sm:col-span-2">
                <button type="button" className="inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-white font-medium shadow-lg shadow-sky-600/30 hover:bg-sky-700">
                  Invia richiesta
                </button>
              </div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="space-y-3">
              <p className="text-slate-600">Studio a Pordenone e consulenze online.</p>
              <p className="text-slate-600">Email: info@alessandrascarsi.com</p>
              <p className="text-slate-600">Tel: +39 333 123 4567</p>
            </div>
            <div className="mt-6 aspect-video w-full overflow-hidden rounded-2xl">
              <img src="/map.jpg" alt="Mappa" className="h-full w-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
