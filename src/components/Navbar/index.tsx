import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { FiX } from "react-icons/fi"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed left-0 px-6 top-0 w-full z-100">
      <div className="flex items-center justify-between max-w-6xl mx-auto py-6">
        <div className="flex gap-2 items-center">
          <a href="/">
            <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          </a>
          <h1 className="font-bold hidden md:block text-xl tracking-widest uppercase">
            Alex Wauquier
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="gap-6 hidden md:flex text-lg">
          <a href="/">Accueil</a>
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(true)}
          className="block md:hidden"
          aria-label="Ouvrir le menu de navigation"
        >
          <FiMenu className="h-8 w-8" />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="bg-[#242424] fixed flex flex-col gap-8 inset-0 items-center justify-center text-4xl z-100">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute right-6 text-2xl text-white top-6"
            aria-label="Fermer le menu de navigation"
          >
            <FiX className="h-8 w-8" />
          </button>
          <a href="/" onClick={() => setMenuOpen(false)}>
            Accueil
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            À propos
          </a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>
            Projets
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  )
}

export default Navbar
