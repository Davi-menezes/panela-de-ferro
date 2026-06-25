import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CARDAPIO } from '../constants'

export default function Cardapio() {
  const [ativo, setAtivo] = useState(0)

  return (
    <section id="cardapio" className="py-28 px-6 relative overflow-hidden">
      {/* Glow bg */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#d4a853] text-sm font-semibold uppercase tracking-widest">O que preparamos</span>
          <h2 className="font-display text-5xl font-black text-[#f7f5f0] mt-3">Nosso Cardápio</h2>
          <p className="text-[#bda48f] mt-3 text-base max-w-md mx-auto">
            Receitas tradicionais gaúchas, preparadas com ingredientes frescos todos os dias.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex glass p-1.5 gap-1 border border-[#d4a853]/15">
            {CARDAPIO.map((cat, i) => (
              <button
                key={cat.titulo}
                onClick={() => setAtivo(i)}
                className={`relative px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                  ativo === i ? 'text-[#0e0a07]' : 'text-[#bda48f] hover:text-[#f7f5f0]'
                }`}
              >
                {ativo === i && (
                  <motion.div
                    layoutId="tab-bg"
                    className="absolute inset-0 bg-gradient-to-r from-[#d4a853] to-[#e67e22] rounded-xl"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{cat.titulo}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={ativo}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {CARDAPIO[ativo].pratos.map((prato, i) => (
              <motion.div
                key={prato.nome}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="group glass overflow-hidden hover:border-[#d4a853]/40 hover:glow transition-all duration-300 rounded-2xl border border-[#d4a853]/10"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={prato.imageUrl}
                    alt={prato.nome}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display font-bold text-lg text-[#f7f5f0] leading-snug">{prato.nome}</h3>
                    <span className="text-[#e9c46a] font-bold text-sm shrink-0 mt-0.5">{prato.preco}</span>
                  </div>
                  <p className="text-[#bda48f] text-sm leading-relaxed">{prato.descricao}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Aviso fictício */}
        <p className="text-center text-[#8a7261] text-xs mt-10">
          * Cardápio ilustrativo — preços e pratos sujeitos a alteração. Consulte a equipe.
        </p>
      </div>
    </section>
  )
}
