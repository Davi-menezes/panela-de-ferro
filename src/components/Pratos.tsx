import { motion } from 'framer-motion'
import { CARDAPIO } from '../constants'
import type { Prato } from '../constants'

// Exibe apenas os pratos principais como prévia
const pratos = CARDAPIO.find(c => c.titulo === 'Pratos Principais')?.pratos ?? []

export default function Pratos() {
  return (
    <section id="pratos" className="py-24 px-6 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-violet-800/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-violet-400 text-sm font-semibold uppercase tracking-widest">Cardápio</span>
          <h2 className="text-4xl font-black mt-3">Pratos Tradicionais</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pratos.map((prato: Prato, i: number) => (
            <motion.div
              key={prato.nome}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-7 hover:border-violet-500/40 transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">{prato.nome}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{prato.descricao}</p>
              <p className="text-gold font-bold mt-4">{prato.preco}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
