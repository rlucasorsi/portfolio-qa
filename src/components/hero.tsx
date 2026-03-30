import React from 'react'

interface HeroProps {
    name?: string
    bio?: string
}

export function Hero({ name, bio }: HeroProps) {
    return (
        <div className='flex flex-col items-center justify-center text-center z-10 px-4'>
            <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display bg-clip-text bg-gradient-radial-yellow mb-16 sm:mb-20'>
                {name}
            </h1>

            <div className='mb-12 sm:mb-16 animate-fade-in'>
                <h2 className='text-sm sm:text-base md:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed'>
                    {bio}
                </h2>
            </div>
        </div>
    )
}
