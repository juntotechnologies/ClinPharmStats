"use client"

import dynamic from "next/dynamic"

const BioEqCard = dynamic(() => import("./components/BioEqCard").then(mod => mod.BioEqCard), {
  loading: () => <div className="animate-pulse bg-muted h-[400px] rounded-lg" />
})

const PlaceholderCard = dynamic(() => import("./components/PlaceholderCard").then(mod => mod.PlaceholderCard), {
  loading: () => <div className="animate-pulse bg-muted h-[200px] rounded-lg" />
})

export default function OpenSourcePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Mission Statement */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Open Source Contributions</h1>
        <p className="text-xl text-muted-foreground mb-4">
          We are passionate supporters of open source software, believing it to be the driving force behind innovation rather than development in silos.
        </p>
        <p className="text-xl text-muted-foreground">
          Our mission is to expand and enhance clinical research tools for the Python community, making advanced biostatistical analysis more accessible to researchers worldwide.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <BioEqCard />
        <PlaceholderCard />
      </div>
    </div>
  )
} 