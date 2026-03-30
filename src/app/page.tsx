import Image from 'next/image'
import React from 'react'
import { Hero } from '../components/hero'
import { HomeNavigation } from '../components/home-navigation'
import Particles from '../components/particles'
import { SocialLinks } from '../components/social-links'
import { getUserGitHub } from '../util/get-user'

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

            <div className='flex flex-col items-center justify-center text-center z-10 px-4'>
                <HomeNavigation />
                <Hero name={user?.name} bio={user?.bio} />
                <SocialLinks />
            </div>
        </div>
    )
}
