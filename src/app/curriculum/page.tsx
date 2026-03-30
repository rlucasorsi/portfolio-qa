import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import type React from 'react'

import * as userInfo from '@/data/user-info'
import { getUserGitHub } from '@/util/get-user'

import { CoursesList } from '@/components/courses-list'
import { ExperiencesList } from '@/components/experiences-list'
import { FormationList } from '@/components/formation-list'
import { LanguageList } from '@/components/language-list'
import { Navigation } from '@/components/nav'
import Particles from '@/components/particles'

// Tipagens
type User = {
    name?: string
}

type Skill = {
    name: string
    icon: React.ReactNode
}

type GitHubUser = {
    user: User | null
}

const ProfileSection: React.FC<{ user: User }> = ({ user }) => (
    <section className='max-w-2xl mx-auto lg:mx-0'>
        <h2 className='z-10 text-lg sm:text-2xl md:text-3xl text-transparent cursor-default text-edge-outline font-display whitespace-nowrap bg-clip-text bg-gradient-radial-yellow tracking-wider'>
            {user?.name}
        </h2>

        <p className='mt-4 text-zinc-400'>
            🚀 Sou apaixonado por garantir a qualidade de software de forma
            eficiente e inteligente, focando em automação de testes com Cypress
            para acelerar ciclos de entrega e reduzir falhas em produção.
        </p>
        <p className='mt-4 text-zinc-400'>
            🎯 Minha missão é transformar processos de QA, implementando testes
            robustos e escaláveis que aumentam a confiança das equipes e
            melhoram a experiência do usuário final.
        </p>
        <p className='mt-4 text-zinc-400'>
            🤝 Busco colaborar em projetos desafiadores onde posso aplicar minha
            expertise em automação e ajudar a elevar o padrão de qualidade
            através de inovação e boas práticas.
        </p>
        <p className='mt-4 text-zinc-400'>
            📚 Estou sempre em evolução, estudando novas tecnologias como
            frameworks avançados de JavaScript, Docker e Kubernetes para ampliar
            meu impacto em ambientes de desenvolvimento modernos.
        </p>
        <p className='mt-4 text-zinc-400'>
            💬 Pergunte-me sobre automação de testes com Cypress, integração
            contínua, desenvolvimento backend com Node.js e otimização de
            pipelines de QA.
        </p>
    </section>
)

const SkillsSection: React.FC<{ title: string; skills: Skill[] }> = ({
    title,
    skills,
}) => (
    <section className='max-w-2xl mx-auto lg:mx-0'>
        <h2 className='z-10 text-lg sm:text-2xl md:text-3xl text-transparent cursor-default text-edge-outline font-display bg-clip-text bg-gradient-radial-yellow tracking-wider mb-4'>
            {title}
        </h2>

        <div className='w-full h-px bg-zinc-800 mb-6' />
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3'>
            {skills.map((skill) => (
                <Badge
                    key={skill.name}
                    className='p-3 border-2 bg-gray-400/30 hover:bg-gray-400/50 text-white rounded-xl flex items-center justify-center transition-colors duration-200'>
                    <span className='rounded-full p-1 mr-2 text-lg'>
                        {skill.icon}
                    </span>
                    <span className='font-medium'>
                        {skill.name.toUpperCase()}
                    </span>
                </Badge>
            ))}
        </div>
    </section>
)

const Background: React.FC = () => (
    <>
        <Image
            alt='Mountains'
            src='/hero-background.svg'
            fill
            sizes='(min-width: 1920px) 50vw, 100vw'
            style={{ objectFit: 'cover' }}
            className='absolute top-0'
        />
        <Particles
            className='absolute inset-0 -z-10 animate-fade-in'
            quantity={100}
        />
    </>
)

export default async function ProjectsPage() {
    const { user }: GitHubUser = await getUserGitHub()

    return (
        <div className='pb-16'>
            <Navigation />
            <Background />

            <div className='px-6 pt-20 mx-auto space-y-8 md:space-y-16 max-w-7xl lg:px-8 md:pt-24 lg:pt-32'>
                {user && <ProfileSection user={user} />}
                <SkillsSection
                    title='Hard Skills'
                    skills={userInfo.hardSkills}
                />
                <SkillsSection
                    title='Soft Skills'
                    skills={userInfo.softSkills}
                />
                <FormationList />
                <CoursesList />
                <ExperiencesList />
                <LanguageList />
            </div>
        </div>
    )
}
