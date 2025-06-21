import { useState } from "react"
import { FiCheck, FiCopy } from "react-icons/fi"

function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@alexwauquier.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="contact"
      className="bg-[#242424] flex flex-col items-center justify-center min-h-screen p-4 text-white"
    >
      <h1 className="font-bold mb-8 text-4xl tracking-wide uppercase">
        Contactez-moi
      </h1>

      <p className="max-w-xl mb-8 text-[#c4c4c4] text-center text-lg">
        Actuellement à la recherche d'une alternance pour intégrer une école
        d'ingénieur, je serais ravie d'échanger avec vous. Que ce soit pour une
        opportunité, une question ou simplement discuter, n'hésitez pas à me
        contacter !
      </p>

      <div className="flex items-center gap-2 mb-4">
        <p className="text-lg">contact@alexwauquier.com</p>
        <button
          onClick={copyEmail}
          className="active:text-white text-[#c4c4c4] hover:text-white transition"
          aria-label="Copier l'adresse email"
        >
          {copied ? <FiCheck size={20} /> : <FiCopy size={20} />}
        </button>
      </div>

      <a
        href="mailto:contact@alexwauquier.com"
        className="active:bg-white active:text-black border duration-200 hover:bg-white hover:text-black mt-2 px-6 py-3 rounded transition"
      >
        Écrire un message
      </a>
    </section>
  )
}

export default Contact
