"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function PlaceholderCard() {
  return (
    <Card className="flex flex-col bg-muted/50">
      <CardHeader>
        <CardTitle className="text-muted-foreground">More Coming Soon</CardTitle>
        <CardDescription>Stay tuned for additional packages</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">
          We're actively developing more open source tools to support the clinical research community.
        </p>
      </CardContent>
    </Card>
  )
} 