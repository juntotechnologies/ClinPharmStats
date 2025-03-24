"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function BioEqCard() {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle>BioEq</CardTitle>
        <CardDescription>Python package for bioequivalence analysis</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="relative w-full aspect-[2/1] mb-6">
          <Image
            src="/readme-banner.png"
            alt="BioEq Banner"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="rounded-lg object-cover"
            loading="lazy"
          />
        </div>
        <p className="text-sm text-muted-foreground">
          A comprehensive toolkit for analyzing pharmacokinetic data in bioequivalence studies, supporting various study designs including crossover, parallel, and replicate designs.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button asChild variant="outline">
          <Link href="https://github.com/juntotechnologies/bioeq" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View on GitHub
          </Link>
        </Button>
        <div className="text-sm text-muted-foreground">MIT License</div>
      </CardFooter>
    </Card>
  )
} 