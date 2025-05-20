import color from "tailwindcss/colors";

import { Code2, Database } from "lucide-react";
import { BiLogoTypescript } from "react-icons/bi";
import { DiJqueryLogo } from "react-icons/di";
import { SiCypress, SiPython } from "react-icons/si";
import {
  FaBookOpen,
  FaBootstrap,
  FaBrain,
  FaClock,
  FaCode,
  FaCommentDots,
  FaCss3,
  FaDocker,
  FaFigma,
  FaGithub,
  FaHandHoldingHeart,
  FaHandshake,
  FaHtml5,
  FaJsSquare,
  FaLaptopCode,
  FaLightbulb,
  FaNodeJs,
  FaPuzzlePiece,
  FaReact,
  FaRobot,
  FaSchool,
  FaSmile,
  FaSyncAlt,
  FaUsers,
} from "react-icons/fa";
import { FaGitAlt, FaLanguage } from "react-icons/fa6";
import { GrMysql, GrOracle } from "react-icons/gr";
import { IoHardwareChip, IoLogoElectron, IoLogoVercel } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiJquery,
  SiJsonwebtokens,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReactos,
  SiZod,
} from "react-icons/si";

import { GiTeacher } from "react-icons/gi";

export const hardSkills = [
  {
    name: "Cypress",
    icon: <SiCypress color={color.green[600]} className="h-4 w-4" />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 color={color.orange[500]} className="h-4 w-4" />,
  },
  {
    name: "CSS3",
    icon: <FaCss3 color={color.blue[500]} className="h-4 w-4" />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare color={color.yellow[400]} className="h-4 w-4" />,
  },
  {
    name: "Node.js",
    icon: (
      <FaNodeJs
        className="h-4 w-4"
        fill={color.lime[500]}
        color={color.lime[500]}
      />
    ),
  },
  {
    name: "Inteligência Artificial",
    icon: <FaRobot color={color.gray[300]} className="h-4 w-4" />,
  },
  {
    name: "Git",
    icon: (
      <FaGitAlt
        className="h-4 w-4"
        fill={color.orange[600]}
        color={color.zinc[400]}
      />
    ),
  },
  {
    name: "GitHub",
    icon: (
      <FaGithub
        className="h-4 w-4"
        fill={color.zinc[800]}
        color={color.zinc[400]}
      />
    ),
  },
  {
    name: "API Rest",
    icon: <Database color={color.rose[500]} className="h-4 w-4" />,
  },
  {
    name: "Express",
    icon: <SiExpress color={color.gray[300]} className="h-4 w-4" />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma color={color.emerald[500]} className="h-4 w-4" />,
  },
  {
    name: "MYSQL",
    icon: <GrMysql color={color.blue[300]} className="h-4 w-4" />,
  },
  {
    name: "PostgressSQL",
    icon: (
      <SiPostgresql
        color={color.white}
        fill={color.blue[300]}
        className="h-4 w-4"
      />
    ),
  },
  {
    name: "Docker",
    icon: <FaDocker className="h-4 w-4" fill={color.blue[500]} />,
  },
  {
    name: "JWT",
    icon: <SiJsonwebtokens color={color.green[500]} className="h-4 w-4" />,
  },
  {
    name: "Vercel",
    icon: <IoLogoVercel color={color.zinc[800]} className="h-4 w-4" />,
  },
  {
    name: "Zod",
    icon: <SiZod color={color.violet[800]} className="h-4 w-4" />,
  },
];

export const softSkills = [
  {
    name: "Comunicação Eficaz",
    icon: <FaCommentDots color={color.sky[300]} className="h-4 w-4" />,
  },
  {
    name: "Resolução de Problemas",
    icon: <FaPuzzlePiece color={color.sky[300]} className="h-4 w-4" />,
  },
  {
    name: "Trabalho em Equipe",
    icon: <FaUsers color={color.sky[300]} className="h-4 w-4" />,
  },
  {
    name: "Gestão de Tempo",
    icon: <FaClock color={color.sky[300]} className="h-4 w-4" />,
  },
  {
    name: "Adaptabilidade",
    icon: <FaSyncAlt color={color.sky[300]} className="h-4 w-4" />,
  },
  {
    name: "Pensamento Crítico",
    icon: <FaBrain color={color.sky[300]} className="h-4 w-4" />,
  },
  {
    name: "Autogestão e Proatividade",
    icon: <FaLightbulb color={color.sky[300]} className="h-4 w-4" />,
  },
  {
    name: "Empatia",
    icon: <FaSmile color={color.sky[300]} className="h-4 w-4" />,
  },
  {
    name: "Resiliência",
    icon: <FaHandHoldingHeart color={color.sky[300]} className="h-4 w-4" />,
  },
  {
    name: "Aprendizado Contínuo",
    icon: <FaBookOpen color={color.sky[300]} className="h-4 w-4" />,
  },
  {
    name: "Desenvolvimento Ágil",
    icon: <Code2 color={color.sky[300]} className="h-4 w-4" />,
  },
];

export const formation = [
  {
    name: "Universidade São Francisco",
    degree: "Engenharia Elétrica",
    period: "Concluido em 2024",
    describe:
      "Faculdade em Engenharia Elética pela Universidade São Francisco concluido em Junho de 2024",
    icon: <IoHardwareChip size={40} color={color.white} />,
  },
  {
    name: "Faculdade Descomplica Digital",
    degree: "Análise e Desenvolvimento de Sistemas",
    period: "Em andamento",
    describe:
      "Faculdade de analise e desenvolvimento de sistemas em modalidade EAD. com término em junho de 2026",
    icon: <IoHardwareChip size={40} color={color.white} />,
  },
];

export const courses = [
  {
    name: "Cypress do zero a nuvem",
    institution: "Udemy",
    describe: "Curso focado em testes E2E com Cypress",
    icon: <SiCypress size={40} color={color.green[500]} />,
  },
  {
    name: "Introdução à Computação com Python",
    institution: "USP",
    describe:
      "Curso introdutório da USP que aborda os fundamentos da programação utilizando Python de forma prática e acessível.",
    icon: <SiPython size={40} color={color.yellow[400]} />,
  },
  {
    name: "SQL do básico ao avançado (com MySQL e Projeto)",
    institution: "Udemy",
    describe:"Curso completo de SQL que aborda desde os fundamentos até conceitos avançados de bancos de dados relacionais, utilizando MySQL. Inclui gerenciamento de tabelas, comandos CRUD, JOINs, subqueries, funções agregadas, normalização, diagrama ER e um projeto final com PHP e MySQL.",
    icon: <SiMysql size={40} color={color.blue[500]} />,
  },
];

export const experiences = [
  {
    name: "ContractLabs",
    position: "Analista de Sistemas",
    period: "Atual",
    describe:
      "Desenvolvimento do novo sistema da empresa que estava em PL/SQL para tecnologias modernas como Node.js, JQuery, Bootstrap, EJS, Express, HTML, CSS, JavaScript e SQL. Inovações com React Native e AI.",
    icon: <FaLaptopCode size={40} color={color.white} />,
    stack: [
      <SiCypress />,
      <SiNodedotjs />,
      <SiJquery />,
      <SiExpress />,
      <SiHtml5 />,
      <SiCss3 />,
      <SiJavascript />,
      <SiMysql />
    ],
  },
  {
    name: "Jabil do Brasil",
    position: "Técnico de Testes Jr.",
    period: "Março/2023 – Agosto/2023",
    describe:
      "Responsável pela direção técnica e desenvolvimento de sistemas para diversos clientes, utilizando tecnologias modernas como Node.js, React, React Native, Bootstrap, Express, JavaScript, SQL, e AI. Especialização em soluções escaláveis e inovadoras para web, mobile e desktop.",
    icon: <FaLaptopCode size={40} color={color.white} />,
    stack: [
      <SiNodedotjs />,
      <SiJquery />,
      <SiBootstrap />,
      <SiExpress />,
      <SiHtml5 />,
      <SiCss3 />,
      <SiJavascript />,
      <SiMysql />,
      <SiReact />,
      <SiReactos />,
    ],
  },
];

export const languages = [
  {
    name: "Português",
    level: "Nativo",
    icon: <FaLanguage size={40} color={color.white} />,
  },
  {
    name: "Inglês",
    level: "Intermediário / Têcnico",
    icon: <FaLanguage size={40} color={color.white} />,
  },
];
