import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChefHat, Flame, Leaf, Sparkles, UtensilsCrossed } from 'lucide-react'
import { CARDAPIO, type Prato } from '../constants'

const CATEGORY_ICONS = [Flame, UtensilsCrossed, Sparkles]

function DishImage({ prato }: { prato: Prato }) {
  const [erro, setErro] = useState(false)

  if (erro) {
    return (
      <div className="w-full h-full bg-[linear-gradient(135deg,#23160e,#0a0705_70%)] flex items-center justify-center">
        <ChefHat className="w-10 h-10 text-[#d4a853]/55" />
      </div>
    )
  }

  return (
    <img
      src={prato.imageUrl}
      alt={prato.nome}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      loading="lazy"
      onError={() => setErro(true)}
    />
  )
}

export default function Cardapio() {
  const [ativo, setAtivo] = useState(0)
  const categoria = CARDAPIO[ativo]
  const pratoDestaque = categoria.pratos.find((prato) => prato.destaque) ?? categoria.pratos[0]
  const pratos = categoria.pratos.filter((prato) => prato.nome !== pratoDestaque.nome)
  const IconeAtivo = CATEGORY_ICONS[ativo] ?? UtensilsCrossed

  return (
    <section id="cardapio" className="py-24 sm:py-28 px-5 sm:px-6 relative overflow-hidden bg-[#100b08]">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d4a853]/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d4a853]/15 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-14 items-end mb-12"
        >
          <div>
            <span className="text-[#d4a853] text-sm font-semibold uppercase tracking-widest">O que preparamos</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black text-[#f7f5f0] mt-3 leading-tight">
              Cardápio com alma de cozinha campeira
            </h2>
          </div>
          <p className="text-[#bda48f] text-base sm:text-lg leading-relaxed max-w-xl lg:ml-auto">
            Receitas gaúchas, porções generosas e ingredientes escolhidos para chegar à mesa com gosto de comida feita sem pressa.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-6 lg:gap-8 items-start">
          <motion.aside
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-2.5 lg:sticky lg:top-24 rounded-2xl"
          >
            <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-2">
              {CARDAPIO.map((cat, i) => {
                const Icone = CATEGORY_ICONS[i] ?? UtensilsCrossed
                const selecionado = ativo === i

                return (
                  <button
                    key={cat.titulo}
                    onClick={() => setAtivo(i)}
                    className={`group relative min-h-[86px] rounded-xl px-4 py-3 text-left transition-all duration-300 ${
                      selecionado
                        ? 'bg-gradient-to-r from-[#d4a853] to-[#e67e22] text-[#120b06] shadow-[0_16px_40px_rgba(212,168,83,0.18)]'
                        : 'bg-[#0b0705]/45 text-[#bda48f] hover:bg-[#1f150f]/70 hover:text-[#f7f5f0]'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className={`grid w-10 h-10 place-items-center rounded-lg ${selecionado ? 'bg-[#120b06]/12' : 'bg-[#d4a853]/10'}`}>
                        <Icone className="w-5 h-5" />
                      </span>
                      <span>
                        <span className="block font-display text-xl font-black leading-none">{cat.titulo}</span>
                        <span className={`mt-1 block text-xs uppercase tracking-wider ${selecionado ? 'text-[#3b2410]' : 'text-[#8a7261]'}`}>
                          {cat.pratos.length} opções
                        </span>
                      </span>
                    </span>
                  </button>
                )
              })}
            </div>
          </motion.aside>

          <AnimatePresence mode="wait">
            <motion.div
              key={categoria.titulo}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.28 }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-[1.05fr_0.95fr] overflow-hidden rounded-2xl border border-[#d4a853]/20 bg-[#17110c]/70 shadow-2xl shadow-black/25">
                <div className="group relative min-h-[280px] overflow-hidden">
                  <DishImage prato={pratoDestaque} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a07]/90 via-[#0e0a07]/15 to-transparent" />
                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-[#0e0a07]/80 border border-[#d4a853]/25 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-[#e9c46a]">
                    <IconeAtivo className="w-3.5 h-3.5" />
                    {pratoDestaque.destaque ?? 'Destaque'}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-center">
                  <p className="text-[#d4a853] text-xs font-bold uppercase tracking-[0.24em]">Sugestão da categoria</p>
                  <h3 className="font-display text-3xl sm:text-4xl font-black text-[#f7f5f0] mt-3 leading-tight">
                    {pratoDestaque.nome}
                  </h3>
                  <p className="text-[#bda48f] leading-relaxed mt-4">{pratoDestaque.descricao}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <span className="text-[#e9c46a] font-display text-3xl font-black">{pratoDestaque.preco}</span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#d4a853]/20 bg-[#0b0705]/45 px-3 py-1.5 text-xs uppercase tracking-wider text-[#bda48f]">
                      <Leaf className="w-3.5 h-3.5 text-[#d4a853]" />
                      Feito no dia
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {pratos.map((prato, i) => (
                  <motion.article
                    key={prato.nome}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="group grid grid-cols-[112px_1fr] min-h-[148px] overflow-hidden rounded-2xl border border-[#d4a853]/12 bg-[#17110c]/45 hover:bg-[#1c140e]/75 hover:border-[#d4a853]/35 transition-all duration-300"
                  >
                    <div className="relative overflow-hidden">
                      <DishImage prato={prato} />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#17110c]/30" />
                    </div>
                    <div className="p-4 flex flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display font-black text-xl leading-tight text-[#f7f5f0]">{prato.nome}</h3>
                        <span className="text-[#e9c46a] font-bold text-sm shrink-0">{prato.preco}</span>
                      </div>
                      <p className="text-[#bda48f] text-sm leading-relaxed mt-2 line-clamp-3">{prato.descricao}</p>
                      {prato.destaque && (
                        <span className="mt-auto pt-3 text-[11px] font-bold uppercase tracking-wider text-[#d4a853]">
                          {prato.destaque}
                        </span>
                      )}
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="text-center text-[#8a7261] text-xs mt-10">
          * Cardápio ilustrativo. Preços e pratos podem variar conforme disponibilidade dos ingredientes.
        </p>
      </div>
    </section>
  )
}
