'use client'

import React from 'react'
import * as userInfo from '@/util/user-information'
import { Card } from './card'
import { CardContent, CardHeader, CardTitle } from './ui/card'

export function FormationList() {
  return (
    <section className="space-y-4 max-w-2xl mx-auto lg:mx-0">
      <h2 className="z-10 text-lg sm:text-2xl md:text-3xl text-transparent cursor-default text-edge-outline font-display bg-clip-text bg-gradient-radial-yellow tracking-wider mb-4">
        Formação Acadêmica
      </h2>
      
      <div className="w-full h-px bg-zinc-800 mb-4" />
      
      <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2">
        {userInfo.formation.map((formation) => (
          <Card key={formation.name} className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
            <CardHeader className="flex flex-row items-center space-x-4 pb-2">
              <div className="text-zinc-400">
                {formation.icon}
              </div>
              <div>
                <CardTitle className="text-xl text-zinc-100 font-bold">
                  {formation.degree}
                </CardTitle>
                <p className="text-sm text-zinc-400">
                  {formation.name}
                </p>
              </div>
            </CardHeader>
            <CardContent className="relative w-full p-4 text-zinc-400">
              <p className="leading-7">
                {formation.describe ?? ''}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
