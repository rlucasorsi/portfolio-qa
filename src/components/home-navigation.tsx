import { navigation } from '@/constants/navigation'
import Link from 'next/link'
import React from 'react'

export function HomeNavigation() {
    return (
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
    )
}
