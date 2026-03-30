import { Github, Linkedin, Mail, Phone } from 'lucide-react'
import React from 'react'

export const navigation = [
    { name: 'Projetos', href: '/projects' },
    { name: 'Contato', href: '/contact' },
    { name: 'Currículo', href: '/curriculum' },
    { name: 'Sobre mim', href: '/about' },
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
