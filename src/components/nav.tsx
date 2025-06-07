'use client'
import { ArrowLeft, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { navigation } from '../app/page'

export const Navigation = () => {
    const ref = useRef<HTMLElement>(null)
    const [isIntersecting, setIntersecting] = useState(true)
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        if (!ref.current) return
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting)
        )

        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <header ref={ref}>
            <div
                className={`fixed inset-x-0 top-0 z-50 backdrop-blur duration-200 border-b ${
                    isIntersecting
                        ? 'bg-zinc-900/0 border-transparent'
                        : 'bg-zinc-900/500 border-zinc-800'
                }`}>
                <div className="container flex items-center justify-between px-4 py-4 sm:p-6 mx-auto">
                    {/* Mobile: Botão voltar */}
                    <Link
                        href="/"
                        className="text-zinc-300 hover:text-zinc-100 duration-200 sm:hidden"
                        aria-label="Voltar"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </Link>

                    {/* Desktop: Botão voltar (esquerda) */}
                    <Link
                        href="/"
                        className="text-zinc-300 hover:text-zinc-100 duration-200 hidden sm:block"
                        aria-label="Voltar"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </Link>

                    {/* Desktop: Navigation links */}
                    <nav className="hidden sm:flex sm:gap-8 items-center text-base text-zinc-400">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="duration-200 hover:text-zinc-100"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile: Menu button */}
                    <button
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        className="sm:hidden text-zinc-300 hover:text-white"
                        aria-label="Abrir menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>

                    {/* Desktop: Espaço vazio para manter centralização */}
                    <div className="hidden sm:block w-6"></div>
                </div>

                {/* Mobile menu overlay */}
                {isMobileMenuOpen && (
                    <div className="sm:hidden bg-zinc-900/95 border-t border-zinc-800">
                        <nav className="container mx-auto px-4 py-6">
                            <div className="flex flex-col gap-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="text-zinc-400 hover:text-zinc-100 duration-200 py-2 text-lg"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}