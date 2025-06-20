export interface Project {
  title: string
  description: string
  tags: string[]
  github?: string
  external?: string
}

const projects: Project[] = [
  {
    title: "Mon Portfolio",
    description:
      "Un site personnel conçu pour mettre en valeur mon profil et mes différents projets.",
    tags: ["Vite", "React", "Tailwind", "TypeScript"],
    github: "https://github.com/alexwauquier/alexwauquier.com",
    external: "https://alexwauquier.com",
  },
  {
    title: "Smart Hotel - API",
    description:
      "Une API RESTful conçue dans le cadre d'un projet de fin de BTS pour gérer les commandes du bar et les capteurs d'un hôtel connecté. Ce backend alimente à la fois l'application mobile et l'application web du projet Smart Hotel.",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
    github: "https://github.com/alexwauquier/smart-hotel-api",
  },
  {
    title: "Smart Hotel - Mobile App",
    description:
      "Application mobile qui permet aux clients de passer des commandes et aux employés de les gérer. L'application interagit avec une API externe pour récupérer et envoyer les données.",
    tags: ["Expo", "React Native", "JWT", "i18next", "EAS"],
    github: "https://github.com/alexwauquier/smart-hotel-mobile-app",
  },
  {
    title: "Smart Hotel - Web App",
    description:
      "Application web conçue pour gérer les commandes du bar et les données des capteurs d'un hôtel connecté. Elle fournit une interface intuitive pour les employés via navigateur, en interaction avec une API externe.",
    tags: ["HTML", "CSS", "JavaScript", "JWT"],
    github: "https://github.com/alexwauquier/smart-hotel-web-app",
  },
  {
    title: "TTGO LoRa32",
    description:
      "Prototype permettant d'envoyer des messages via le protocole LoRaWAN à l'aide de la carte LoRa32. Ce projet explore les bases de la communication longue portée à faible consommation dans le contexte IoT.",
    tags: ["ESP32", "LoRaWAN", "IoT", "PlatformIO"],
    github: "https://github.com/alexwauquier/ttgo-lora32",
  },
  {
    title: "Supervision Salle Serveurs",
    description:
      "Projet de fin de première année de BTS consistant à développer un système de surveillance environnementale pour une salle de serveurs. L'application permet de collecter, stocker et visualiser la température et l'humidité.",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Chart.js"],
    github:
      "https://github.com/alexwauquier/projet-iot-supervision-salle-serveurs",
  },
]

export default projects
