function About() {
  return (
    <section
      id="about"
      className="bg-[#242424] flex flex-col items-center justify-center min-h-screen p-4 text-white"
    >
      <div className="max-w-3xl w-full text-center">
        <h1 className="font-bold mb-8 text-4xl tracking-wide uppercase">
          À propos
        </h1>

        <div className="leading-relaxed space-y-6 text-left text-lg text-balance">
          <p>
            Salut, je suis Alex, diplômée d'un BTS CIEL spécialisé en
            cybersécurité, informatique et réseaux. Curieuse, sérieuse et
            toujours motivée par les défis techniques, je suis passionnée par
            tout ce qui touche au numérique. J'ai commencé par monter mon propre
            ordinateur, puis j'ai exploré le développement, le réseau, la
            cybersécurité et bien d'autres choses jusqu'à trouver ce que j'aime
            : comprendre, construire et expérimenter.
          </p>

          <p>
            Grâce à mes stages et à mon investissement personnel, j'ai pu
            toucher à des domaines variés comme la conception de sites web, la
            virtualisation ou encore la gestion de serveurs. Je poursuis
            aujourd'hui mon parcours en préparant une entrée en école
            d'ingénieur à JUNIA ISEN en alternance avec l'envie de contribuer à
            des projets concrets, utiles et bien pensés.
          </p>

          <p>
            En-dehors de tout ça, je profite de mon temps libre pour faire du
            modélisme (surtout du drone FPV), bidouiller de l'électronique ou
            monter les PC de mes amis.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
