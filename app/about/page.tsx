import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Users, FileText, Award, Target } from "lucide-react"

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 bg-gradient-blue text-white">
        <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Alpha Stats</h1>
          <p className="text-xl max-w-3xl mx-auto">
            A specialty CRO providing expert biostatistics and clinical research services since 1999
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 relative">
                Our Company
                <div className="w-20 h-1 bg-gradient-blue mt-4"></div>
              </h2>
              <div className="space-y-4">
                <p>
                  Alpha Stats Inc is a specialty CRO providing Biostatistics and Statistical Programming services to the
                  pharmaceutical and biotechnology industry. Our focus is on delivering high-quality statistical
                  analysis and reporting for clinical trials.
                </p>
                <p>
                  Alpha Stats is a New Jersey Corporation, previously operating as NJ Biostatistics Inc since 1999.
                  Alpha Stats is headed by a Biostatistician with a PhD having over 25 years of statistical experience.
                </p>
                <p>
                  We provide comprehensive statistical support for clinical trials, from study design and analysis
                  planning to final statistical reporting. Our team of expert statisticians and programmers ensures the
                  highest quality deliverables for your clinical research needs.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-xl"></div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Alpha Stats Office"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg relative"
                />
              </div>
            </div>
          </div>

          <div className="mb-16 py-12 px-8 bg-secondary rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Expertise</h2>
              <div className="w-20 h-1 bg-gradient-blue mx-auto mb-8"></div>
              <p className="text-lg text-center max-w-3xl mx-auto mb-6">
                We meet all criteria mandated by the GCP, ICH and FDA guidelines. Our professionals work closely with
                clients Biostatisticians, Statistical Programmers, Data Management team, Clinicians, Medical Writers,
                and Regulatory Affairs.
              </p>
              <p className="text-lg text-center max-w-3xl mx-auto">
                Mathematical and computer methodology is developed for innovative statistical designs and analyses.
              </p>
            </div>
          </div>

          {/* About Navigation Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-gradient hover-lift shadow-md">
              <CardContent className="pt-8">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Ex-CEO Profile</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Learn about our founder and former CEO's extensive experience in biostatistics.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/about/ex-ceo-profile" className="flex items-center justify-center">
                    View Profile <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-gradient hover-lift shadow-md">
              <CardContent className="pt-8">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-accent/10 rounded-full">
                    <FileText className="h-10 w-10 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Clinical Experience</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Explore our extensive experience across various therapeutic areas.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/about/clinical-experience" className="flex items-center justify-center">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-gradient hover-lift shadow-md">
              <CardContent className="pt-8">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-info/10 rounded-full">
                    <Target className="h-10 w-10 text-info" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Mission & Vision</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Discover our company's mission, vision, and core values.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/about/mission-vision" className="flex items-center justify-center">
                    Read More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-gradient hover-lift shadow-md">
              <CardContent className="pt-8">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-success/10 rounded-full">
                    <Award className="h-10 w-10 text-success" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center">Why Alpha Stats</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Find out what sets us apart from other CROs in the industry.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/about/why-alpha-stats" className="flex items-center justify-center">
                    Discover <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Alpha Stats?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss how we can support your clinical research needs.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
} 