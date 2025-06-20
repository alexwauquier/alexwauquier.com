export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  external?: string
}

const projects: Project[] = [
  {
    title: "Mon portfolio",
    description:
      "Un site personnel conçu pour mettre en valeur mon profil et mes différents projets.",
    tags: ["Vite", "React", "Tailwind", "TypeScript"],
    github: "https://github.com/alexwauquier/alexwauquier.com",
    external: "https://alexwauquier.com",
  },
]

export default projects
