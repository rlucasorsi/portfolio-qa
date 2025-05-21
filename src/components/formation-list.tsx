'use client'

import React from 'react'
import * as userInfo from '@/util/user-information'
import { Card } from './card'
import { CardContent, CardHeader, CardTitle } from './ui/card'

// Componente de título consistente com os outros títulos de seções
const SectionTitle = ({ children }) => (
  <h2 className="z-10 text-lg sm:text-2xl md:text-3xl text-transparent cursor-default text-edge-outline font-display bg-clip-text bg-gradient-radial-yellow tracking-wider mb-4">
    {children}
  </h2>
)

// Componente para cada item de formação acadêmica
const FormationItem = ({ formation }) => (
  <Card key={formation.name}>
    <CardHeader className="flex flex-row items-center space-x-4 pb-2">
      {formation.icon}
      <div>
        <CardTitle className="text-2xl text-zinc-100 font-bold">
          {formation.degree}
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          {formation.name}
        </p>
      </div>
    </CardHeader>
    <CardContent className="relative w-full h-full p-2 md:p-8">
      <p className="leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
        {formation.describe ?? ''}
      </p>
    </CardContent>
  </Card>
)

export function FormationList() {
  return (
    <section className="space-y-4">
      <SectionTitle>Formação Acadêmica</SectionTitle>
      
      <div className="w-full h-px bg-zinc-800 mb-6" />
      
      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
        {userInfo.formation.map((formation) => (
          <FormationItem key={formation.name} formation={formation} />
        ))}
      </div>
    </section>
  )
}
