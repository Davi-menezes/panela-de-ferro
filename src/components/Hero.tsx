import { motion } from 'framer-motion'
import { MessageCircle, UtensilsCrossed, ChevronDown, Star } from 'lucide-react'
import { RESTAURANT } from '../constants'

export default function Hero() {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Full-screen background image */}
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80"
        alt="Ambiente Aconchegante Panela De Ferro"
        className="absolute inset-0 w-full h-full object-cover brightness-[0.25]"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a07] via-[#0e0a07]/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e0a07]/70 via-transparent to-[#0e0a07]/40" />

      {/* Warm amber/orange glow blob */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-amber-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 sm:px-6 max-w-4xl mx-auto flex flex-col items-center">
        {/* Trust/Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#1c140e]/90 border border-[#d4a853]/30 text-[#e9c46a] text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8 shadow-lg shadow-black/40"
        >
          <div className="flex items-center gap-0.5 text-amber-400">
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
            <Star className="w-3.5 h-3.5 fill-current" />
          </div>
          <span>4.8 no Google · 25 anos de Tradição</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-[#f7f5f0] leading-[1.1] mb-5 sm:mb-6 drop-shadow-xl"
        >
          Sabor gaúcho que<br />
          <span className="text-gradient">aquece o coração</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-slate-300 text-base sm:text-lg md:text-xl font-light max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed drop-shadow"
        >
          A verdadeira culinária caseira do Rio Grande do Sul. Pratos preparados na panela de ferro com carinho de vó e sabor inigualável.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-sm sm:max-w-none"
        >
          <motion.a
            href={RESTAURANT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#d4a853] via-[#e67e22] to-[#c05c30] text-[#0e0a07] font-black px-7 sm:px-9 py-[18px] rounded-2xl text-sm sm:text-base shadow-[0_0_35px_rgba(212,168,83,0.35)] transition-all duration-300 border border-[#e9c46a]/30"
          >
            <MessageCircle className="w-5 h-5 fill-current shrink-0" />
            Reservar uma Mesa via WhatsApp
          </motion.a>
          
          <motion.a
            href="#cardapio"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-3 border border-[#d4a853]/40 bg-[#17110c]/50 hover:bg-[#17110c]/80 text-[#e9c46a] hover:text-[#f7f5f0] hover:border-[#d4a853] font-semibold px-7 sm:px-9 py-[18px] rounded-2xl text-sm sm:text-base transition-all duration-300"
          >
            <UtensilsCrossed className="w-5 h-5 shrink-0" />
            Conhecer Nosso Cardápio
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 text-[#d4a853]/60"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  )
}
