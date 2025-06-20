import { useState } from "react"
import { FaExternalLinkAlt, FaGithub, FaRegFolder } from "react-icons/fa"
import projects from "../../data/projects"

function Projects() {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projects : projects.slice(0, 6)

  return (
    <section
      id="projects"
      className="bg-[#242424] flex flex-col items-center min-h-screen p-4 py-16 text-white"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="font-bold mb-8 text-4xl tracking-wide uppercase">
          Mes projets
        </h1>
        <p className="mb-12 text-[#c4c4c4]">
          Voici quelques-uns de mes projets
        </p>

        <div className="gap-6 grid lg:grid-cols-3 sm:grid-cols-2">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white hover:-translate-y-1 p-6 rounded shadow transition transform"
            >
              <div>
                <div className="flex justify-between mb-4">
                  <FaRegFolder className="text-[#7f7f7f] text-2xl" />
                  <div className="flex gap-3">
                    {project.external && (
                      <a href={project.external} target="_blank">
                        <FaExternalLinkAlt className="hover:text-[#9c59d1] text-[#7f7f7f] text-2xl" />
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank">
                        <FaGithub className="hover:text-[#9c59d1] text-[#7f7f7f] text-2xl" />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="font-semibold mb-2 text-black text-xl">
                  {project.title}
                </h3>
                <p className="text-black text-left text-sm">
                  {project.description}
                </p>
              </div>
              <ul className="flex flex-wrap gap-2 mt-4 text-[#7f7f7f] text-xs">
                {project.tags.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {projects.length > 6 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="border duration-200 hover:bg-white hover:text-black mt-12 px-6 py-3 rounded transition"
          >
            {showAll ? "Voir moins" : "Voir plus"}
          </button>
        )}
      </div>
    </section>
  )
}

export default Projects
