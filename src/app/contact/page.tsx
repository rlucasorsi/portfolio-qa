'use client'
import { Card } from '@/components/card'
import { Navigation } from '@/components/nav'
import Particles from '@/components/particles'
import { transformePhone } from '@/util/transforme-phone'
import Image from 'next/image'
import Link from 'next/link'
import { socials } from '../page'

export default function Contact() {
    return (
        <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <Image
                alt="Mountains"
                src={'/hero-background.svg'}
                fill
                sizes="(min-width: 1920px) 50vw, 100vw"
                style={{ objectFit: 'cover' }}
                className="absolute top-0"
            />
            <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100} />

            <div className="container flex flex-col items-center justify-center min-h-screen px-4 mx-auto pb-12 space-y-10 sm:space-y-12 md:space-y-16">
                <div className="mt-20 md:mt-24 text-center px-4">
                    <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold bg-clip-text text-transparent bg-gradient-radial-yellow whitespace-nowrap cursor-default">
                        Contatos
                    </h1>
                    <h2 className="mt-4 text-base sm:text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
                        Escolha uma das opções abaixo para entrar em contato.
                    </h2>
                </div>

                <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
                    {socials.map((s) => (
                        <Card key={s.label.replaceAll(' ', '')}>
                            <Link
                                href={s.href}
                                target="_blank"
                                className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col items-center gap-4 group duration-500 relative">
                                <span
                                    className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                                    aria-hidden="true"
                                />
                                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange duration-300">
                                    {s.icon}
                                </span>
                                <div className="z-10 flex flex-col items-center text-center">
                                    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-zinc-200 group-hover:text-white font-display duration-200">
                                        {transformePhone(s.handle)}
                                    </span>
                                    <span className="mt-2 text-xs sm:text-sm text-zinc-400 group-hover:text-zinc-200 duration-300">
                                        {s.label}
                                    </span>
                                </div>
                            </Link>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}
