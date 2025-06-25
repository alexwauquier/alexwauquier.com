import { useTranslation } from "react-i18next";
import { useEffect, useRef, useState } from "react";
import { FaGlobe } from "react-icons/fa";

const languages = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative text-white">
      <button
        onClick={() => setOpen(!open)}
        className="flex gap-2 h-full hover:bg-white/10 items-center px-2 rounded"
      >
        <FaGlobe />
        {current.label}
      </button>

      {open && (
        <ul className="absolute bg-[#333] border border-[#7f7f7f] mt-2 right-0 rounded shadow-lg top-full z-10">
          {languages.map(({ code, label }) => (
            <li key={code}>
              <button
                onClick={() => {
                  i18n.changeLanguage(code);
                  setOpen(false);
                }}
                className="hover:bg-white/10 px-4 py-2 text-left w-full"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
