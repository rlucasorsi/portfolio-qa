import React from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getUserGitHub } from "@/util/get-user";
import * as userInfo from "@/util/user-information";

import { Navigation } from "@/components/nav";
import Particles from "@/components/particles";
import { FormationList } from "@/components/formation-list";
import { CousesList } from "@/components/couses-list";
import { ExperiencesList } from "@/components/experiences-list";
import { LanguageList } from "@/components/language-list";
import { ProjectsList } from "@/components/project-list";

// Componente para a seção do perfil do usuário
const ProfileSection = ({ user }) => (
  <section className="max-w-2xl mx-auto lg:mx-0">
    <h2 className="z-10 text-lg sm:text-2xl md:text-3xl text-transparent cursor-default text-edge-outline font-display whitespace-nowrap bg-clip-text bg-gradient-radial-yellow tracking-wider">
      {user?.name}
    </h2>

    <p className="mt-4 text-zinc-400">
      I'm currently working on 🚀 building backend applications with
      Node.js, focusing on automation and scalable solutions.
    </p>
    <p className="mt-4 text-zinc-400">
      I'm looking to collaborate on 🤝 exciting open-source projects,
      especially on creating an SRS (Spaced Repetition System) app for
      language learning!
    </p>
    <p className="mt-4 text-zinc-400">
      I'm looking for help with 🙋‍♂️ improving my front-end skills and
      learning more about advanced JavaScript frameworks.
    </p>
    <p className="mt-4 text-zinc-400">
      I'm currently learning 📚 more about cloud computing and
      containerization with Docker and Kubernetes.
    </p>
    <p className="mt-4 text-zinc-400">
      Ask me about 💬 test automation with Cypress, backend development
      with Node.js, and working with SQL databases.
    </p>
  </section>
);

// Componente genérico para exibir habilidades
const SkillsSection = ({ title, skills }) => (
  <section className="max-w-2xl mx-auto lg:mx-0">
    <h2 className="z-10 text-lg sm:text-2xl md:text-3xl text-transparent cursor-default text-edge-outline font-display bg-clip-text bg-gradient-radial-yellow tracking-wider mb-4">
      {title}
    </h2>

    <div className="w-full h-px bg-zinc-800 mb-6" />
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {skills.map((skill) => (
        <Badge
          key={skill.name}
          className="p-3 border-2 bg-gray-400/30 hover:bg-gray-400/50 text-white rounded-xl flex items-center justify-center transition-colors duration-200"
        >
          <span className="rounded-full p-1 mr-2 text-lg">{skill.icon}</span>
          <span className="font-medium">{skill.name.toLocaleUpperCase()}</span>
        </Badge>
      ))}
    </div>
  </section>
);

// Componente de Background (separado para melhorar a organização)
const Background = () => (
  <>
    <Image
      alt="Mountains"
      src="/hero-background.svg"
      fill
      sizes="(min-width: 1920px) 50vw, 100vw"
      style={{ objectFit: "cover" }}
      className="absolute top-0"
    />
    <Particles
      className="absolute inset-0 -z-10 animate-fade-in"
      quantity={100}
    />
  </>
);

export default async function ProjectsPage() {
  const { user } = await getUserGitHub();

  return (
    <div className="pb-16">
      <Navigation />
      <Background />
      
      <div className="px-6 pt-20 mx-auto space-y-8 md:space-y-16 max-w-7xl lg:px-8 md:pt-24 lg:pt-32">
        <ProfileSection user={user} />
        <SkillsSection title="Hard Skills" skills={userInfo.hardSkills} />
        <SkillsSection title="Soft Skills" skills={userInfo.softSkills} />
        <FormationList />
        <CousesList />
        <ExperiencesList />
        <LanguageList />
        {/* ProjectsList está importado mas não estava sendo usado no código original */}
      </div>
    </div>
  );
}