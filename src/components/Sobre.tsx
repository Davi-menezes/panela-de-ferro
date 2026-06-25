import { motion } from 'framer-motion'
import { useState } from 'react'
import { RESTAURANT } from '../constants'

const STATS = [
  { label: 'Fundado em', valor: '2000' },
  { label: 'Anos de história', valor: '25+' },
  { label: 'Estado', valor: 'RS' },
]

export default function Sobre() {
  const [imagemDisponivel, setImagemDisponivel] = useState(true)

  return (
    <section id="sobre" className="py-16 md:py-28 px-5 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-14 items-center">

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-[#d4a853]/10">
            {imagemDisponivel ? (
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=900&q=80"
                alt="Cozinhando na panela de ferro"
                className="w-full h-full object-cover"
                onError={() => setImagemDisponivel(false)}
              />
            ) : (
              <div className="w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(212,168,83,0.22),transparent_34%),linear-gradient(135deg,#24170f,#090604_72%)] flex items-end">
                <div className="p-8">
                  <p className="font-display text-4xl font-black text-[#f7f5f0] leading-tight">
                    Panela de ferro,<br />fogo lento e mesa farta
                  </p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a07]/80 via-transparent to-transparent" />
          </div>
          {/* Corner accents */}
          <div className="absolute -top-3 -left-3 w-12 sm:w-16 h-12 sm:h-16 border-t-2 border-l-2 border-[#d4a853]/60 rounded-tl-2xl" />
          <div className="absolute -bottom-3 -right-3 w-12 sm:w-16 h-12 sm:h-16 border-b-2 border-r-2 border-[#d4a853]/60 rounded-br-2xl" />
          {/* Badge flutuante */}
          <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 glass px-4 sm:px-5 py-2.5 sm:py-3">
            <p className="text-xs text-[#bda48f] uppercase tracking-widest">Localização</p>
            <p className="text-[#f7f5f0] font-semibold text-sm mt-0.5">Pantano Grande — RS</p>
          </div>
        </motion.div>

        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#d4a853] text-sm font-semibold uppercase tracking-widest">Nossa história</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-[#f7f5f0] mt-3 mb-5 sm:mb-6 leading-tight">
            Tradição servida<br />com orgulho
          </h2>
          <p className="text-[#bda48f] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10">
            {RESTAURANT.description}
          </p>

          <div className="grid grid-cols-3 gap-2 sm:gap-4">
            {STATS.map(({ label, valor }) => (
              <div key={label} className="glass p-3 sm:p-5 text-center glow border border-[#d4a853]/10">
                <p className="text-gradient font-display font-black text-xl sm:text-3xl">{valor}</p>
                <p className="text-[#8a7261] text-[10px] sm:text-xs mt-1 uppercase tracking-wider leading-tight sm:tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
