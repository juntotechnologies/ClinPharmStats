import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function CareersPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/10 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Careers at ClinPharmStats</h1>
          <p className="text-lg max-w-3xl mx-auto">
            Join our team of experts in biostatistics and programming
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Join ClinPharmStats?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card>
              <CardHeader>
                <CardTitle>Professional Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Work on challenging projects across various therapeutic areas and expand your expertise in
                  biostatistics and clinical research.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Expert Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Collaborate with experienced professionals who are leaders in their fields and learn from their
                  extensive industry knowledge.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Work-Life Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We value our employees' wellbeing and offer flexible work arrangements to help maintain a healthy
                  work-life balance.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Current Openings */}
          <h2 className="text-3xl font-bold text-center mb-8">Current Openings</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <CardTitle>Senior Biostatistician</CardTitle>
                    <CardDescription>Full-time | Piscataway, NJ (Remote options available)</CardDescription>
                  </div>
                  <Badge>New</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Responsibilities:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Lead statistical analysis for clinical trials</li>
                      <li>Develop statistical analysis plans</li>
                      <li>Provide statistical input for study protocols</li>
                      <li>Collaborate with clients and internal teams</li>
                      <li>Mentor junior statisticians</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Requirements:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>PhD or MS in Statistics, Biostatistics, or related field</li>
                      <li>5+ years of experience in pharmaceutical/biotech industry</li>
                      <li>Proficiency in R or Python programming</li>
                      <li>Knowledge of regulatory requirements</li>
                      <li>Excellent communication skills</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/contact?subject=Job Application: Senior Biostatistician#contactForm">Apply Now</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <CardTitle>Python/R Programmer</CardTitle>
                    <CardDescription>Full-time | Piscataway, NJ (Remote options available)</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Responsibilities:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Create SDTM and ADaM datasets</li>
                      <li>Generate tables, listings, and figures (TLFs)</li>
                      <li>Develop and validate Python/R programs</li>
                      <li>Ensure data quality and integrity</li>
                      <li>Document programming processes</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Requirements:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Bachelor's degree in Statistics, Computer Science, or related field</li>
                      <li>3+ years of Python or R programming experience in clinical trials</li>
                      <li>Knowledge of CDISC standards (SDTM, ADaM)</li>
                      <li>Experience with statistical analysis and reporting</li>
                      <li>Attention to detail and problem-solving skills</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href="/contact?subject=Job Application: Python/R Programmer#contactForm">Apply Now</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* General Application */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">Don't See a Position That Fits?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Submit your resume for future opportunities.
          </p>
          <Button asChild size="lg">
            <Link href="/contact?subject=General Job Application#contactForm">Submit General Application</Link>
          </Button>
        </div>
      </section>
    </div>
  )
} 