import imagePoli from "../assets/poliRubro.png";
import imageFast from "../assets/fastDelivery.png";
import imageFacu from "../assets/facuRaffa.png";
import imageTmdb from "../assets/tmdb.png";
import imageProyect from "../assets/proyect3d.png";

const projects = [
  {
    nameProject: "polirubro",
    img: imagePoli,
    translationKey: "polirubro",
    status: "En Desarrollo",
    functions: {
      modeUser: true,
      modeAdmin: true
    },
    repositoryLinks: {
      front: "https://github.com/gerpag/polirubroProps-front",
      back: "https://github.com/gerpag/polirubroProps-back",
    },
    skill: [
      "JavaScript",
      "ReactJs",
      "Tailwind CSS",
      "NodeJs",
      "Express",
      "MongoDB",
      "Mongoose",
      "Redux",
      "Git",
    ],
  },
  {
    nameProject: "fastdelivery",
    img: imageFast,
    translationKey: "fastdelivery",
    status: "Finalizado",
    functions: {
      modeUser: true,
      modeAdmin: true
    },
    repositoryLinks: {
      front: "https://github.com/AlexisMartinez98/fastDelivery-backoffice",
      front2: "https://github.com/AlexisMartinez98/fastDelivery-delivery",
      back: "https://github.com/AlexisMartinez98/fastDelivery-api",
    },
    skill: [
      "JavaScript",
      "Next",
      "Tailwind CSS",
      "NodeJs",
      "Express",
      "MongoDB",
      "Mongoose",
      "Jest",
      "Redux",
      "Aws (EC2, S3 Y IAM)",
      "Git",
    ],
  },
  {
    nameProject: `facundo${" "}raffa`,
    img: imageFacu,
    translationKey: "facundoraffa",
    status: "Finalizado",
    functions: {
      modeUser: true
    },
    repositoryLinks: {
      front: "https://github.com/AlexisMartinez98/Desafios-DesarrolloWeb",
    },
    linkWeb: "https://alexis-martinez.vercel.app/",

    skill: ["HTML", "CSS", "Sass", "Bootstrap", "Figma", "Git"],
  },
  {
    nameProject: "TMDB-ALEXIS",
    img: imageTmdb,
    translationKey: "tmdb",
    status: "Finalizado",
    functions: {
      modeUser: true
    },
    repositoryLinks: {
      front: "https://github.com/AlexisMartinez98/tmdb_alexis",
      back: "https://github.com/AlexisMartinez98/fastDelivery-api",
    },
    linkWeb: "https://alexis-martinez.vercel.app/",

    skill: [
      "JavaScript",
      "ReactJs",
      "Tailwind CSS",
      "NodeJs",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Git",
    ],
  },
  {
    nameProject: "Objetos3D",
    img: imageProyect,
    translationKey: "objetos3d",
    status: "Finalizado",
    functions: {
      modeUser: true,
      modeAdmin: true
    },
    repositoryLinks: {
      front: "https://github.com/AlexisMartinez98/Project-3D",
      back: "https://github.com/AlexisMartinez98/Project-3D/tree/development/back",
    },
    skill: [
      "JavaScript",
      "ReactJs",
      "Tailwind CSS",
      "NodeJs",
      "Express",
      "PostgreSQL",
      "Sequelize",
      "Git",
    ],
  },
];
export default projects;
