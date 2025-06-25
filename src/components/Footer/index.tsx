import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <section
      id="footer"
      className="bg-[#242424] border-t flex flex-col items-center justify-center p-4 text-white"
    >
      <footer>
        <div className="flex justify-center gap-4 mb-2 text-xl">
          <a
            className="hover:text-[#9c59d1]"
            href="mailto:contact@alexwauquier.com"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            className="hover:text-[#9c59d1]"
            href="https://github.com/alexwauquier"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            className="hover:text-[#9c59d1]"
            href="https://linkedin.com/in/alexwauquier"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
        <p className="mb-2">
          Copyright © 2025 <strong>Alex Wauquier</strong>
        </p>
      </footer>
    </section>
  );
}

export default Footer;
