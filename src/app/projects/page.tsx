import { Navigation } from '@/components/nav'
import Particles from '@/components/particles'
import { ProjectsList } from '@/components/project-list'
import { getUserGitHub } from '@/util/get-user'
import { projectCategories } from '@/util/project-config'
import Image from 'next/image'
import React from 'react'

export default async function ProjectsPage() {
    const {
        repositorios: { categorizedRepositories },
    } = await getUserGitHub()

    return (
        <div className='pb-16'>
            <Navigation />
            <Image
                alt='Mountains'
                src={'/hero-background.svg'}
                fill
                sizes='(min-width: 1920px) 50vw, 100vw'
                style={{
                    objectFit: 'cover',
                }}
                className='absolute top-0'
            />

            <Particles
                className='absolute inset-0 -z-10 animate-fade-in'
                quantity={100}
            />
            <div className='px-6 pt-20 mx-auto space-y-8 md:space-y-16 max-w-7xl lg:px-8 md:pt-24 lg:pt-32'>
                <div className='max-w-2xl mx-auto lg:mx-0'>
                    <h2 className='z-10 text-3xl text-transparent cursor-default text-edge-outline font-display sm:text-4xl md:text-8xl whitespace-nowrap bg-clip-text bg-gradient-radial-yellow'>
                        Projetos
                    </h2>
                    <p className='mt-4 text-zinc-400'>
                        Uma seleção dos meus melhores projetos, destacando
                        minhas habilidades em qualidade de software, automação
                        de testes e desenvolvimento, com proficiência em
                        diversas ferramentas e tecnologias.
                    </p>
                </div>

                {Object.entries(projectCategories).map(
                    ([categoryKey, category]) => {
                        const subcategories =
                            categorizedRepositories[categoryKey]
                        if (!subcategories) return null

                        return (
                            <div key={categoryKey} className='space-y-12'>
                                <div className='space-y-4'>
                                    <h2 className='z-10 text-2xl text-transparent cursor-default text-edge-outline font-display sm:text-3xl md:text-5xl whitespace-nowrap bg-clip-text bg-gradient-radial-yellow tracking-wider uppercase'>
                                        {category.title}
                                    </h2>
                                    <div className='w-full h-px bg-zinc-800' />
                                </div>

                                {Object.entries(subcategories).map(
                                    ([subTitle, projects]) => {
                                        if (!projects || projects.length === 0)
                                            return null

                                        return (
                                            <div
                                                key={subTitle}
                                                className='space-y-6 ml-4 md:ml-8'>
                                                <h3 className='text-xl font-semibold text-zinc-200 border-l-4 border-yellow-500 pl-4'>
                                                    {subTitle}
                                                </h3>
                                                <ProjectsList
                                                    projects={projects}
                                                />
                                            </div>
                                        )
                                    }
                                )}
                            </div>
                        )
                    }
                )}
            </div>
        </div>
    )
}
