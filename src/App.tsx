import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Cardapio from './components/Cardapio'
import CTA from './components/CTA'
import Contato from './components/Contato'
import { RESTAURANT } from './constants'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0e0a07] text-[#f7f5f0]">
      <Navbar />
      <main className="pt-[72px]">
        <Hero />
        <Sobre />
        <Cardapio />
        <CTA />
        <Contato />
      </main>
      <footer className="py-8 text-center text-[#8a7261] text-sm border-t border-[#d4a853]/10">
        © {new Date().getFullYear()} {RESTAURANT.name} · Todos os direitos reservados
      </footer>
    </div>
  )
}
