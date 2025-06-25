export interface Project {
  titleKey: string;
  descriptionKey: string;
  tags: string[];
  github?: string;
  external?: string;
}

const projects: Project[] = [
  {
    titleKey: "projects.items.portfolio.title",
    descriptionKey: "projects.items.portfolio.description",
    tags: ["Vite", "React", "Tailwind", "TypeScript"],
    github: "https://github.com/alexwauquier/alexwauquier.com",
    external: "https://alexwauquier.com",
  },
  {
    titleKey: "projects.items.smartHotelApi.title",
    descriptionKey: "projects.items.smartHotelApi.description",
    tags: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker"],
    github: "https://github.com/alexwauquier/smart-hotel-api",
  },
  {
    titleKey: "projects.items.smartHotelMobileApp.title",
    descriptionKey: "projects.items.smartHotelMobileApp.description",
    tags: ["Expo", "React Native", "JWT", "i18next", "EAS"],
    github: "https://github.com/alexwauquier/smart-hotel-mobile-app",
  },
  {
    titleKey: "projects.items.smartHotelWebApp.title",
    descriptionKey: "projects.items.smartHotelWebApp.description",
    tags: ["HTML", "CSS", "JavaScript", "JWT"],
    github: "https://github.com/alexwauquier/smart-hotel-web-app",
  },
  {
    titleKey: "projects.items.ttgoLora32.title",
    descriptionKey: "projects.items.ttgoLora32.description",
    tags: ["ESP32", "LoRaWAN", "IoT", "PlatformIO"],
    github: "https://github.com/alexwauquier/ttgo-lora32",
  },
  {
    titleKey: "projects.items.serverRoomMonitoring.title",
    descriptionKey: "projects.items.serverRoomMonitoring.description",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Chart.js"],
    github:
      "https://github.com/alexwauquier/projet-iot-supervision-salle-serveurs",
  },
];

export default projects;
