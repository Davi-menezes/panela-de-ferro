import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight } from 'lucide-react'
import { RESTAURANT } from '../constants'

export default function CTA() {
  return (
    <section className="py-16 md:py-28 px-5 sm:px-6 relative overflow-hidden">
      {/* Background image com overlay forte */}
      <img
        src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&q=80"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover brightness-[0.14]"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#2a1405]/95 via-[#0e0a07]/80 to-[#0e0a07]/95" />

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-amber-600/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[#d4a853] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4 sm:mb-5"
        >
          ✦ Uma experiência que você não vai esquecer
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#f7f5f0] leading-[1.08] mb-5 sm:mb-6"
        >
          Tem uma ocasião especial?{' '}
          <span className="text-gradient">A mesa está posta.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-[#bda48f] text-base sm:text-lg leading-relaxed mb-8 sm:mb-10 max-w-xl mx-auto"
        >
          Aniversários, almoços em família, jantares entre amigos — aqui cada refeição vira memória. 
          Fale com a gente e monte o momento perfeito.
        </motion.p>

        {/* Prova social rápida */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-10 text-xs sm:text-sm text-[#8a7261]"
        >
          {['🍽️ Mais de 25 anos servindo', '👨‍🍳 Receitas da tradição gaúcha', '📍 No coração do RS'].map(item => (
            <span key={item}>{item}</span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4"
        >
          <motion.a
            href={RESTAURANT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#d4a853] via-[#e67e22] to-[#c05c30] text-[#0e0a07] font-black px-7 sm:px-9 py-[18px] rounded-2xl text-sm sm:text-base shadow-[0_0_40px_rgba(212,168,83,0.35)] border border-[#e9c46a]/30 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5 fill-current shrink-0" />
            Quero reservar minha mesa
          </motion.a>
          <motion.a
            href="#cardapio"
            whileHover={{ scale: 1.04 }}
            className="inline-flex items-center justify-center gap-2 text-[#bda48f] hover:text-[#e9c46a] font-semibold text-sm transition-colors duration-300"
          >
            Ou explore o cardápio primeiro
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
