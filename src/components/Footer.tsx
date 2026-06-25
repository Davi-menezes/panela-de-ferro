import { RESTAURANT } from '../constants'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
            <span className="text-xl">🍳</span>
            <span className="font-display font-bold text-white">{RESTAURANT.name}</span>
          </div>
          <p className="text-slate-600 text-sm">{RESTAURANT.tagline}</p>
        </div>

        <div className="flex gap-6 text-sm text-slate-600">
          {['Início', 'Sobre', 'Cardápio', 'Contato'].map((s) => (
            <a key={s} href={`#${s.toLowerCase()}`} className="hover:text-violet-400 transition-colors">
              {s}
            </a>
          ))}
        </div>

        <p className="text-slate-700 text-xs text-center">
          © 2000–{new Date().getFullYear()} {RESTAURANT.name}
        </p>
      </div>
    </footer>
  )
}
