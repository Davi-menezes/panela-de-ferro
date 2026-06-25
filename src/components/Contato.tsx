import { motion } from 'framer-motion'
import { MapPin, Phone, ExternalLink, Clock, Map } from 'lucide-react'
import { RESTAURANT } from '../constants'

export default function Contato() {
  const INFO = [
    { icon: Phone, label: 'Telefone / WhatsApp', valor: RESTAURANT.phone, href: `tel:${RESTAURANT.phone}` },
    { icon: MapPin, label: 'Endereço', valor: RESTAURANT.address, href: RESTAURANT.maps },
    { icon: ExternalLink, label: 'Instagram', valor: '@restpaneladeferro2000', href: RESTAURANT.instagram },
  ]

  return (
    <section id="contato" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#d4a853] text-sm font-semibold uppercase tracking-widest">Venha nos visitar</span>
          <h2 className="font-display text-5xl font-black text-[#f7f5f0] mt-3">Contato</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Info cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {INFO.map(({ icon: Icon, label, valor, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="glass flex items-center gap-5 p-5 hover:border-[#d4a853]/45 hover:glow transition-all duration-300 group border border-[#d4a853]/10"
              >
                <div className="w-12 h-12 rounded-xl bg-[#d4a853]/10 flex items-center justify-center shrink-0 group-hover:bg-[#d4a853]/20 transition-colors">
                  <Icon className="w-5 h-5 text-[#e9c46a]" />
                </div>
                <div>
                  <p className="text-xs text-[#8a7261] uppercase tracking-widest">{label}</p>
                  <p className="text-[#f7f5f0] font-semibold mt-0.5">{valor}</p>
                </div>
              </a>
            ))}

            {/* Horários */}
            <div className="glass p-6 border border-[#d4a853]/10">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-[#d4a853]/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-[#e9c46a]" />
                </div>
                <p className="text-[#f7f5f0] font-semibold">Horários de Funcionamento</p>
              </div>
              <div className="space-y-3">
                {RESTAURANT.horarios.map(({ dias, horas }) => (
                  <div key={dias} className="flex justify-between items-center py-3 border-b border-[#d4a853]/10 last:border-0">
                    <p className="text-[#bda48f] text-sm">{dias}</p>
                    <p className="text-[#e9c46a] text-sm font-semibold">{horas}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Maps CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass overflow-hidden border border-[#d4a853]/10"
          >
            <div className="relative h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=800&q=80"
                alt="Pantano Grande RS"
                className="w-full h-full object-cover brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0a07] to-transparent" />
              <div className="absolute bottom-5 left-5">
                <p className="text-[#f7f5f0] font-bold font-display text-xl">Pantano Grande</p>
                <p className="text-[#bda48f] text-sm">{RESTAURANT.address}</p>
              </div>
            </div>
            <div className="p-6">
              <a
                href={RESTAURANT.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-[#d4a853] via-[#e67e22] to-[#c05c30] text-[#0e0a07] font-black py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(212,168,83,0.25)] hover:brightness-110 border border-[#e9c46a]/30"
              >
                <Map className="w-5 h-5" />
                Abrir no Google Maps
              </a>
              <a
                href={RESTAURANT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full border border-[#d4a853]/30 hover:border-[#d4a853] text-[#bda48f] hover:text-[#f7f5f0] font-semibold py-4 rounded-xl transition-all duration-300 mt-3"
              >
                Reservar via WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
