import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Particles from '../components/particles'
import { type User, getUserGitHub } from '../util/get-user'
import { transformePhone } from '../util/transforme-phone'

export const navigation = [
    { name: 'Projetos', href: '/projects' },
    { name: 'Contato', href: '/contact' },
    { name: 'Currículo', href: '/curriculum' },
    { name: 'Sobre mim', href: '/about' }
]

export const socials = [
    {
        icon: <Github size={20} />,
        href: 'https://github.com/rlucasorsi',
        label: 'Github',
        handle: 'rlucasorsi',
    },
    {
        icon: <Linkedin size={20} />,
        href: 'https://www.linkedin.com/in/lucas-orsi-43070a176',
        label: 'Linkedin',
        handle: '@Lucas Orsi',
    },
    {
        icon: <Mail size={20} />,
        href: 'mailto:rlucasorsi@gmail.com',
        label: 'Email',
        handle: 'rlucasorsi@gmail.com',
    },
    {
        icon: <Phone size={20} />,
        href: 'http://api.whatsapp.com/send?phone=5519983685124',
        label: 'Contato',
        handle: '+5519983685124',
    },
]

export default async function Home() {
    const { user } = await getUserGitHub()

    return (
        <div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
            <Image
                alt='Mountains'
                src={'/hero-background.svg'}
                fill
                sizes='(min-width: 120rem) 50vw, 100vw'
                style={{
                    objectFit: 'cover',
                }}
                quality={100}
                priority
                className='absolute top-0'
            />
            
            <Particles
                className='absolute inset-0 -z-10 animate-fade-in'
                quantity={100}
            />
            
            {/* Centered content */}
            <div className='flex flex-col items-center justify-center text-center z-10 px-4'>
                {/* Navigation - closer to title */}
                <nav className='mb-16 sm:mb-20 animate-fade-in'>
                    <div className='flex items-center justify-center gap-6 sm:gap-8 md:gap-12 flex-wrap'>
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className='text-zinc-400 hover:text-zinc-300 duration-500 text-base sm:text-lg font-medium'>
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </nav>

                {/* Main title - centered and prominent */}
                <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display bg-clip-text bg-gradient-radial-yellow mb-16 sm:mb-20'>
                    {user?.name}
                </h1>

                {/* Bio - minimal spacing */}
                <div className='mb-12 sm:mb-16 animate-fade-in'>
                    <h2 className='text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed'>
                        {user?.bio}
                    </h2>
                </div>
                
                {/* Social links - close to content */}
                <div className='flex flex-row gap-6 sm:gap-8 md:gap-10 animate-fade-in'>
                    {socials.map((s) => (
                        <Link
                            key={s.href}
                            href={s.href}
                            target='_blank'
                            className='flex flex-col items-center text-zinc-400 hover:text-zinc-300 group transition-colors duration-300'
                            title={transformePhone(s.handle)}>
                            <span className='flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 text-sm border border-zinc-600 rounded-full bg-zinc-800/50 backdrop-blur-sm group-hover:border-zinc-500 group-hover:bg-zinc-700/50 transition-all duration-300'>
                                {s.icon}
                            </span>
                            <span className='text-xs sm:text-sm mt-3 font-medium'>
                                {s.label}
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}