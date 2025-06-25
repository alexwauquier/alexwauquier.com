import { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import { FiMenu, FiX } from "react-icons/fi"
import LanguageSelector from "./LanguageSelector"

const sections = ["home", "about", "projects", "contact"]

function Navbar() {
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>("")

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sections.forEach((id) => {
      const section = document.getElementById(id)
      if (!section) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        { threshold: 0.5 }
      )

      observer.observe(section)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  const linkClass = (id: string) =>
    `nav-link hover:text-[#c4c4c4] transition ${
      activeSection === id ? "active" : ""
    }`

  return (
    <header className="bg-[#242424c0] fixed left-0 px-6 top-0 w-full z-10">
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
        <nav className="gap-6 h-8 hidden md:flex text-lg">
          <a href="#home" className={linkClass("home")}>
            {t("nav.home")}
          </a>
          <a href="#about" className={linkClass("about")}>
            {t("nav.about")}
          </a>
          <a href="#projects" className={linkClass("projects")}>
            {t("nav.projects")}
          </a>
          <a href="#contact" className={linkClass("contact")}>
            {t("nav.contact")}
          </a>
          <LanguageSelector />
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setMenuOpen(true)}
          className="block md:hidden"
          aria-label={t("nav.aria.openMenu")}
        >
          <FiMenu className="h-8 w-8" />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {menuOpen && (
        <div className="bg-[#242424] fixed flex flex-col gap-8 inset-0 items-center justify-center text-4xl z-50">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute right-6 text-2xl text-white top-6"
            aria-label={t("nav.aria.closeMenu")}
          >
            <FiX className="h-8 w-8" />
          </button>
          <a
            href="#home"
            className="active:text-[#c4c4c4] hover:text-[#c4c4c4] transition"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.home")}
          </a>
          <a
            href="#about"
            className="active:text-[#c4c4c4] hover:text-[#c4c4c4] transition"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.about")}
          </a>
          <a
            href="#projects"
            className="active:text-[#c4c4c4] hover:text-[#c4c4c4] transition"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.projects")}
          </a>
          <a
            href="#contact"
            className="active:text-[#c4c4c4] hover:text-[#c4c4c4] transition"
            onClick={() => setMenuOpen(false)}
          >
            {t("nav.contact")}
          </a>
          <LanguageSelector />
        </div>
      )}
    </header>
  )
}

export default Navbar
