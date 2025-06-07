import color from "tailwindcss/colors";

import { Code2, Database } from "lucide-react";
import { SiCypress, SiPython } from "react-icons/si";
import {
  FaShippingFast,
  FaNetworkWired, 
  FaBug,
  FaBookOpen,
  FaBrain,
  FaClock,
  FaCommentDots,
  FaCss3,
  FaDocker,
  FaGithub,
  FaHandHoldingHeart,
  FaHtml5,
  FaJsSquare,
  FaLaptopCode,
  FaLightbulb,
  FaNodeJs,
  FaPuzzlePiece,
  FaRobot,
  FaSmile,
  FaSyncAlt,
  FaUsers,
} from "react-icons/fa";
import { FaGitAlt, FaLanguage } from "react-icons/fa6";
import { GrMysql, GrOracle } from "react-icons/gr";
import { IoHardwareChip, IoLogoElectron, IoLogoVercel } from "react-icons/io5";
import { MdEngineering } from "react-icons/md";
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
      "Graduado em Engenharia Elétrica pela USF, com foco em projeto de sistemas elétricos, eletrônica de potência e automação industrial. Desenvolvi habilidades em análise de circuitos, controle de sistemas e eficiência energética, utilizando ferramentas como MATLAB e AutoCAD. Atualmente, aplico esses conhecimentos na área de qualidade de software, com ênfase em automação de testes e validação de sistemas.",
    icon: <IoHardwareChip size={40} color={color.white} />,
  },
  {
    name: "SENAI Roberto Mange",
    degree: "Técnico em Mecatrônica",
    period: "Concluido em 2018",
    describe:
      "Formação técnica em Mecatrônica com foco em automação, eletrônica e sistemas mecânicos. Domínio em programação de CLP, robótica, pneumática e hidráulica. Experiência prática em projetos de sistemas automatizados, utilizando CAD/CAM e sensores industriais, desenvolvendo soluções eficientes para a indústria.",
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
    position: "Analista de Sistemas - Foco em QA",
    period: "Atual",
    describe:
      "Desenvolvimento e manutenção de sistemas multi-tenant com foco em automação de processos. Implementação de testes automatizados usando Cypress, validação de APIs REST e análise de performance. Participação ativa no ciclo completo de desenvolvimento, desde concepção até deploy, priorizando qualidade e experiência do usuário.",
    icon: <FaBug  size={35} color={color.white} />,
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
      "Atuação na engenharia de teste com desenvolvimento de soluções para automação de processos de validação de produtos eletrônicos. Criação de scripts personalizados para otimização de testes, resultando em redução do tempo de ciclo e maior precisão nos processos. Análise de falhas e implementação de melhorias contínuas na qualidade dos produtos. Liderança em projetos de engenharia de teste e coordenação de equipes para atender prazos e metas de qualidade.",
    icon: <MdEngineering  size={40} color={color.white} />,
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
    {
    name: "Robert Bosch",
    position: "Estagiário em Logística Física",
    period: "Fevereiro/2021 – Agosto/2021",
    describe:
      "Atuação como estagiário na área de logística física, com foco no apoio às atividades de transporte interno de materiais. Acompanhamento do fluxo de movimentação entre setores produtivos, controle de entrada e saída de componentes e apoio na organização de materiais para otimização do espaço e agilidade nos processos. Colaboração com a equipe de logística para garantir a correta distribuição de insumos conforme as demandas de produção.",
    icon: <FaShippingFast  size={40} color={color.white} />,
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
    {
    name: "Jabil do Brasil",
    position: "Estagiário em Engenharia de Testes",
    period: "Dezembro/2019 – Janeiro/2021",
    describe:
      "Suporte à equipe de engenharia de teste no desenvolvimento e na automação de processos de validação de produtos eletrônicos. Auxílio na criação de scripts para otimização de testes e melhoria da eficiência. Participação na análise de falhas e propostas de melhorias contínuas nos processos de qualidade. Colaboração em projetos com foco em aprendizado técnico e desenvolvimento profissional.",
    icon: <MdEngineering  size={40} color={color.white} />,
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
