import {
  ArrowLeft,
  GraduationCap,
  Users,
  Target,
  Heart,
  CheckCircle,
  Award,
  Bug,
  Shield,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/components/nav";
import Particles from "../../components/particles";

export default function About() {
  const services = [
    {
      icon: <Bug className="w-8 h-8" />,
      title: "Testes Funcionais",
      description:
        "Execução de testes manuais e automatizados para garantir que cada funcionalidade atenda aos requisitos especificados.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Testes de Segurança",
      description:
        "Identificação de vulnerabilidades e falhas de segurança para proteger aplicações contra ameaças externas.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automação de Testes",
      description:
        "Desenvolvimento de scripts automatizados para otimizar processos de teste e garantir entregas mais rápidas.",
    },
  ];

  const benefits = [
    "Redução de bugs em produção através de testes rigorosos",
    "Implementação de processos de QA desde o início do projeto",
    "Criação de documentação detalhada de casos de teste",
    "Mentoria em boas práticas de qualidade de software",
    "Análise de performance e otimização de aplicações",
  ];

  const skills = [
    "Cypress",
    "Jest",
    "Postman",
    "Swagger",
    "Git Actions",
    "Git",
    "Rancher",
    "JavaScript",
  ];

  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      {/* Background Image */}
      <Image
        alt="Mountains"
        src={"/hero-background.svg"}
        fill
        sizes="(min-width: 120rem) 50vw, 100vw"
        style={{
          objectFit: "cover",
        }}
        quality={100}
        priority
        className="absolute inset-0 -z-20"
      />

      {/* Particles Background */}
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />

      {/* Navigation - Fixed */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10 flex-1 pt-20">
        <div className="w-full max-w-4xl mx-auto px-6 py-8">
          {/* Seção Hero com Título, Foto e Mensagem */}
          <div className="animate-fade-in mb-16">
            {/* Título centralizado */}
            <div className="text-center mb-12">
              <h1 className="z-10 text-3xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-5xl md:text-6xl whitespace-nowrap bg-clip-text bg-gradient-radial-yellow">
                Sobre mim
              </h1>
            </div>

            {/* Grid com Foto e Texto */}
            <div className="grid md:grid-cols-12 gap-12 items-start">
              {/* Foto à esquerda - ocupa 4 colunas */}
              <div className="md:col-span-4 flex justify-center md:justify-start">
                <div className="relative w-72 h-96 rounded-lg overflow-hidden">
                  <Image
                    src="/profile-picture.png"
                    alt="Foto de Perfil QA Engineer"
                    fill
                    sizes="288px"
                    style={{
                      objectFit: "cover",
                    }}
                    quality={100}
                    className="rounded-lg"
                  />
                </div>
              </div>

              {/* Texto à direita - ocupa 8 colunas */}
              <div className="md:col-span-8 text-left">
                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-6">
                  Desenvolvedor de software especializado em Quality Assurance
                  com 2 anos de experiência sólida em projetos de tecnologia e
                  automação de testes.
                </p>
                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-6">
                  Experiência prática na implementação de testes automatizados,
                  integração com pipelines de CI/CD e desenvolvimento de
                  estratégias de qualidade que garantem entregas confiáveis.
                </p>
                <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">
                  Busco oportunidades para crescer profissionalmente em empresas
                  que valorizam qualidade de software e inovação tecnológica,
                  aplicando meus conhecimentos em automação de testes e
                  metodologias ágeis.
                </p>
              </div>
            </div>

            {/* Título profissional centralizado abaixo */}
            <div className="text-center mt-8">
              <h2 className="text-2xl md:text-3xl font-display text-zinc-200">
                QUALITY ASSURANCE ENGINEER
              </h2>
            </div>
          </div>

          {/* Separador */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/30 to-zinc-300/0 mb-6" />
          </div>

          {/* Apresentação Principal */}
          <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-500 rounded-lg p-8 mb-12 animate-fade-in">
            <h3 className="text-xl font-display text-zinc-200 mb-4">
              Experiência Profissional
            </h3>
            <p className="text-zinc-300 leading-relaxed mb-6">
              <strong className="text-zinc-200">2 anos</strong> de experiência
              sólida em projetos de tecnologia, com foco em automação de testes
              e garantia de qualidade. Especialista em criar estratégias
              eficientes que impactam positivamente na qualidade do produto
              final.
            </p>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Experiência prática em{" "}
              <strong className="text-zinc-200">
                desenvolvimento de testes automatizados
              </strong>
              , integração com pipelines de CI/CD e implementação de processos
              de qualidade em ambientes ágeis com entregas contínuas.
            </p>
            <p className="text-zinc-300 leading-relaxed">
              <strong className="text-zinc-200">Principais conquistas:</strong>{" "}
              Implementação de suites de testes automatizados, otimização de
              processos de QA e contribuição significativa para redução de bugs
              em produção através de testes eficientes.
            </p>
          </div>

          {/* Serviços em Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-in">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-500 rounded-lg p-6 hover:border-zinc-400 transition-colors duration-500"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 text-zinc-200">{service.icon}</div>
                  <h3 className="text-lg font-display text-zinc-200 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/30 to-zinc-300/0 mb-12" />

          {/* Competências */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-xl font-display text-zinc-200 mb-6 text-left md:text-center">
              Competências Técnicas e Soft Skills:
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-zinc-200 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-300">
                    <strong>Automação de Testes:</strong> Cypress, Jest -
                    Desenvolvimento de testes automatizados integrados ao CI/CD
                  </p>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-zinc-200 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-300">
                    <strong>Testes de API:</strong> Postman, Swagger -
                    Validação e documentação de APIs REST
                  </p>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-zinc-200 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-300">
                    <strong>DevOps & CI/CD:</strong> Git Actions, Git, Rancher -
                    Integração e deployment contínuo
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-zinc-200 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-300">
                    <strong>Desenvolvimento:</strong> JavaScript - Programação
                    e scripting para automação de testes
                  </p>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-zinc-200 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-300">
                    <strong>Metodologias Ágeis:</strong> Experiência em
                    ambientes Scrum e Kanban com entregas frequentes
                  </p>
                </div>

                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-zinc-200 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-zinc-300">
                    <strong>Qualidade de Software:</strong> Definição de
                    processos e padrões para garantia de qualidade contínua
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tecnologias */}
          <div className="mb-12 animate-fade-in">
            <h2 className="text-xl font-display text-zinc-200 mb-6 text-left md:text-center">
              Principais tecnologias:
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-500 rounded-lg p-3 text-center hover:border-zinc-400 transition-colors duration-500"
                >
                  <span className="text-zinc-200 font-medium text-sm">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-gradient-to-r from-zinc-300/0 via-zinc-300/30 to-zinc-300/0 mb-12" />

          {/* Call to Action Final */}
          <div className="text-left md:text-center bg-zinc-900/50 backdrop-blur-sm border border-zinc-500 rounded-lg p-8 animate-fade-in">
            <h2 className="text-2xl font-display text-zinc-200 mb-4">
              Interessado em conhecer meu trabalho?
            </h2>
            <p className="text-zinc-300 mb-4">
              Profissional dedicado e em constante aprendizado, buscando
              crescimento e oportunidades de contribuir com projetos
              desafiadores.
            </p>
            <p className="text-zinc-300 mb-8">
              Estou em busca de oportunidades onde possa aplicar e expandir
              meus conhecimentos em QA, contribuindo para o desenvolvimento de
              produtos digitais de alta qualidade.
            </p>
            <p className="text-lg text-zinc-200 mb-8 font-medium">
              Vamos conversar sobre oportunidades?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start md:justify-center">
              <Link
                href="/contact"
                className="duration-500 text-zinc-400 hover:text-zinc-300 border border-zinc-500 bg-zinc-900 hover:border-zinc-400 px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Entre em Contato
              </Link>
              <Link
                href="/projects"
                className="duration-500 text-zinc-400 hover:text-zinc-300 border border-zinc-500 bg-zinc-900 hover:border-zinc-400 px-8 py-3 rounded-lg font-semibold transition-all"
              >
                Ver Meu Portfólio
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}