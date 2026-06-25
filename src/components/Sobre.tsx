import { motion } from 'framer-motion'
import { RESTAURANT } from '../constants'

const STATS = [
  { label: 'Fundado em', valor: '2000' },
  { label: 'Anos de história', valor: '25+' },
  { label: 'Estado', valor: 'RS' },
]

export default function Sobre() {
  return (
    <section id="sobre" className="py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl border border-[#d4a853]/10">
            <img
              src="https://images.unsplash.com/photo-1598930266225-dd7f3b8991fa?w=800&q=80"
              alt="Cozinhando na panela de ferro"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a07]/80 via-transparent to-transparent" />
          </div>
          {/* Corner accents */}
          <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#d4a853]/60 rounded-tl-2xl" />
          <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#d4a853]/60 rounded-br-2xl" />
          {/* Badge flutuante */}
          <div className="absolute bottom-8 left-8 glass px-5 py-3">
            <p className="text-xs text-[#bda48f] uppercase tracking-widest">Localização</p>
            <p className="text-[#f7f5f0] font-semibold text-sm mt-0.5">Pantano Grande — RS</p>
          </div>
        </motion.div>

        {/* Conteúdo */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-[#d4a853] text-sm font-semibold uppercase tracking-widest">Nossa história</span>
          <h2 className="font-display text-5xl font-black text-[#f7f5f0] mt-3 mb-6 leading-tight">
            Tradição servida<br />com orgulho
          </h2>
          <p className="text-[#bda48f] text-lg leading-relaxed mb-10">
            {RESTAURANT.description}
          </p>

          <div className="grid grid-cols-3 gap-4">
            {STATS.map(({ label, valor }) => (
              <div key={label} className="glass p-5 text-center glow border border-[#d4a853]/10">
                <p className="text-gradient font-display font-black text-3xl">{valor}</p>
                <p className="text-[#8a7261] text-xs mt-1 uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
