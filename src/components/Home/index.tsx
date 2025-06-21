import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import Navbar from "../Navbar"

function Home() {
  return (
    <section
      id="home"
      className="bg-[#242424] flex flex-col items-center min-h-screen p-4 text-white"
    >
      <Navbar />

      {/* Hero Section */}
      <main className="flex  flex-1 flex-col items-center justify-center text-center">
        <img
          src="/logo.svg"
          alt="Logo"
          className="h-24 mb-4 mx-auto w-24 z-20"
        />
        <h1 className="font-bold mb-2 text-4xl tracking-widest uppercase">
          Alex Wauquier
        </h1>
        <h2 className="mb-6 text-xl uppercase">
          Future ingénieure du numérique
        </h2>

        <div className="gap-4 grid grid-cols-1 md:grid-cols-2 mt-6 text-black text-lg uppercase w-full">
          <a
            className="active:bg-[#242424] active:text-white bg-white border-2 border-white font-semibold hover:bg-[#242424] hover:text-white px-8 py-6 rounded-lg transition"
            href="#about"
          >
            À propos
          </a>
          <a
            className="active:bg-[#242424] active:text-white bg-white border-2 border-white font-semibold hover:bg-[#242424] hover:text-white px-8 py-6 rounded-lg transition"
            href="#projects"
          >
            Mes projets
          </a>
          <a
            className="active:bg-[#242424] active:text-white bg-white border-2 border-white font-semibold hover:bg-[#242424] hover:text-white px-8 py-6 rounded-lg transition"
            href="#contact"
          >
            Me contacter
          </a>
          <a
            className="active:bg-[#242424] active:text-white bg-white border-2 border-white font-semibold hover:bg-[#242424] hover:text-white px-8 py-6 rounded-lg transition"
            href="https://github.com/alexwauquier"
            target="_blank"
          >
            Mon GitHub
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center mt-8 text-black">
          <a
            href="mailto:contact@alexwauquier.com"
            className="active:-translate-y-1 active:text-[#9c59d1] bg-white hover:-translate-y-1 hover:text-[#9c59d1] p-2 rounded transition"
            aria-label="Envoyer un mail à Alex"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="https://github.com/alexwauquier"
            target="_blank"
            className="active:-translate-y-1 active:text-[#9c59d1] bg-white hover:-translate-y-1 hover:text-[#9c59d1] p-2 rounded transition"
            aria-label="Voir mon profil GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/alexwauquier/"
            target="_blank"
            className="active:-translate-y-1 active:text-[#9c59d1] bg-white hover:-translate-y-1 hover:text-[#9c59d1] p-2 rounded transition"
            aria-label="Voir mon profil LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <p className="mt-10 text-xl uppercase">
          Découvrez mes projets GitHub !
        </p>
      </main>
    </section>
  )
}

export default Home
