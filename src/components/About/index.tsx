import { useTranslation } from "react-i18next"

function About() {
  const { t } = useTranslation()

  return (
    <section
      id="about"
      className="bg-[#242424] flex flex-col items-center justify-center min-h-screen p-4 text-white"
    >
      <div className="max-w-3xl w-full text-center">
        <h1 className="font-bold mb-8 text-4xl tracking-wide uppercase">
          {t("about.title")}
        </h1>

        <div className="leading-relaxed space-y-6 text-left text-lg text-balance">
          <p>{t("about.paragraph1")}</p>
          <p>{t("about.paragraph2")}</p>
          <p>{t("about.paragraph3")}</p>
        </div>
      </div>
    </section>
  )
}

export default About
