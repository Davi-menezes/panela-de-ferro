import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, MessageCircle } from 'lucide-react'
import { RESTAURANT } from '../constants'

const LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Cardápio', href: '#cardapio' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50">
        {/* Background layer — sempre presente (evita artefato de renderização do backdrop-filter).
            Apenas a opacidade anima, garantindo transição suave sem contorno branco. */}
        <div
          aria-hidden
          className={`absolute inset-0 backdrop-blur-xl bg-[#0a0705]/90 border-b border-[#d4a853]/10 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 shrink-0">
            <span className="text-2xl">🍳</span>
            <span className="font-display font-bold text-white text-base sm:text-lg leading-tight hidden sm:block">
              Panela De Ferro
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {LINKS.map(({ label, href }) => (
              <a key={href} href={href} className="text-sm font-medium text-[#bda48f] hover:text-[#e9c46a] transition-colors duration-300">
                {label}
              </a>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={RESTAURANT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#d4a853] to-[#e67e22] text-[#0e0a07] hover:brightness-110 font-bold text-sm px-4 sm:px-5 py-2.5 rounded-xl shadow-lg shadow-amber-500/10 transition-all duration-300"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Reservar Mesa</span>
            </a>
            <button
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              className="md:hidden text-[#bda48f] hover:text-[#e9c46a] p-1 transition-colors"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] inset-x-0 z-40 bg-[#0a0705]/95 backdrop-blur-xl border-b border-[#d4a853]/10 px-6 py-6 flex flex-col gap-5 md:hidden"
          >
            {LINKS.map(({ label, href }) => (
              <a key={href} href={href} onClick={() => setOpen(false)} className="text-lg text-[#bda48f] hover:text-[#e9c46a] font-medium transition-colors">
                {label}
              </a>
            ))}
            <a
              href={RESTAURANT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#d4a853] to-[#e67e22] text-[#0e0a07] font-bold py-3.5 rounded-xl mt-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
