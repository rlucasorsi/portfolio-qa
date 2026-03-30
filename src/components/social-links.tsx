import { socials } from '@/constants/navigation'
import { transformPhone } from '@/util/transform-phone'
import Link from 'next/link'
import React from 'react'

export function SocialLinks() {
    return (
        <div className='flex flex-row gap-6 sm:gap-8 md:gap-10 animate-fade-in z-10'>
            {socials.map((s) => (
                <Link
                    key={s.href}
                    href={s.href}
                    target='_blank'
                    className='flex flex-col items-center text-zinc-400 hover:text-zinc-300 group transition-colors duration-300'
                    title={transformPhone(s.handle)}>
                    <span className='flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 text-sm border border-zinc-600 rounded-full bg-zinc-800/50 backdrop-blur-sm group-hover:border-zinc-500 group-hover:bg-zinc-700/50 transition-all duration-300'>
                        {s.icon}
                    </span>
                    <span className='text-xs sm:text-sm mt-3 font-medium'>
                        {s.label}
                    </span>
                </Link>
            ))}
        </div>
    )
}
