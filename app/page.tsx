import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, FileText, Users, Award, BarChart2, CheckCircle, TrendingUp, Zap } from "lucide-react"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-14 bg-gradient-blue text-white">
        <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Specialized Biostatistics & Clinical Research Services
              </h1>
              <p className="text-lg mb-8 text-white/90">
                Expert biostatistics and clinical research services for pharmaceutical companies, 
                with cutting-edge statistical programming using R and Python.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                  <Link href="/services">Our Services</Link>
                </Button>
                <Button asChild variant="default" size="lg" className="bg-primary/90 text-white hover:bg-primary border border-white">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-1 bg-white/20 rounded-lg blur-xl"></div>
                <div className="relative">
                  <Image
                    src="/images/cookie.png"
                    alt="Cookie - Alpha Stats Chief Happiness Officer"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                    priority
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-primary/60 text-white p-4 rounded-b-lg backdrop-blur-sm">
                    <div className="text-center">
                      <h3 className="text-xl font-bold">Cookie</h3>
                      <p className="text-sm opacity-90">Chief Happiness Officer (CHO)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialized Services</h2>
            <div className="w-20 h-1 bg-gradient-blue mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive biostatistics and clinical research services tailored to your specific needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-gradient hover-lift shadow-md">
              <CardContent className="pt-8">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <BarChart2 className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Biostatistics</h3>
                <p className="text-center text-muted-foreground mb-6">
                  Expert statistical analysis and methodology for clinical trials and research studies.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/services" className="flex items-center justify-center">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="card-gradient hover-lift shadow-md">
              <CardContent className="pt-8">
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <FileText className="h-10 w-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3">Statistical Programming</h3>
                <p className="text-center text-muted-foreground mb-6">
                  Cutting-edge R and Python programming for advanced statistical analysis.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/services" className="flex items-center justify-center">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About Alpha Stats</h2>
              <div className="w-20 h-1 bg-gradient-blue mx-auto mb-6"></div>
            </div>
            <div className="prose prose-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
              <p className="mb-4">
                We provide biostatistics and statistical programming services to the pharmaceutical 
                and biotechnology industry. Our focus is on delivering high-quality statistical analysis
                and reporting for clinical trials.
              </p>
              <p className="mb-4">
                Alpha Stats is a New Jersey Corporation, previously operating as NJ Biostatistics Inc since 1999. Alpha
                Stats is headed by a Biostatistician with a PhD having over 25 years of statistical experience.
              </p>
              <p className="mb-4">
                We support our clients by way of functional roles on clients projects, both on-site support and via
                remote access to clients systems. Our professionals also support as Independent Statisticians and
                Independent SAS Programmers for un-blinded analysis, and support DSMB and IDMC.
              </p>
              <p>
                We meet all criteria mandated by the GCP, ICH and FDA guidelines. Our professionals work closely with
                clients Biostatisticians, Statistical Programmers, Data Management team, Clinicians, Medical Writers,
                and Regulatory Affairs. Mathematical and computer methodology is developed for innovative statistical
                designs and analyses.
              </p>
            </div>
            <div className="text-center mt-8">
              <Button asChild className="bg-gradient-blue hover:opacity-90 transition-opacity">
                <Link href="/about" className="flex items-center">
                  Learn More About Us <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Alpha Stats</h2>
            <div className="w-20 h-1 bg-gradient-blue mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring expertise, innovation, and reliability to every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-8 border rounded-lg hover:shadow-lg transition-shadow hover-lift bg-white">
              <div className="mb-6 flex justify-center">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Award className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">25+ Years Experience</h3>
              <p className="text-muted-foreground">Led by experts with decades of industry experience</p>
            </div>

            <div className="text-center p-8 border rounded-lg hover:shadow-lg transition-shadow hover-lift bg-white">
              <div className="mb-6 flex justify-center">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Users className="h-10 w-10 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Specialized Team</h3>
              <p className="text-muted-foreground">Highly qualified professionals in biostatistics and programming</p>
            </div>

            <div className="text-center p-8 border rounded-lg hover:shadow-lg transition-shadow hover-lift bg-white">
              <div className="mb-6 flex justify-center">
                <div className="p-3 bg-success/10 rounded-full">
                  <CheckCircle className="h-10 w-10 text-success" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Regulatory Compliance</h3>
              <p className="text-muted-foreground">Meeting all GCP, ICH and FDA guidelines</p>
            </div>

            <div className="text-center p-8 border rounded-lg hover:shadow-lg transition-shadow hover-lift bg-white">
              <div className="mb-6 flex justify-center">
                <div className="p-3 bg-info/10 rounded-full">
                  <TrendingUp className="h-10 w-10 text-info" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovative Methodology</h3>
              <p className="text-muted-foreground">Advanced statistical designs and analyses</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <p>Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <p>Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <p>Expert Consultants</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <p>Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-xl">
            <div className="mb-2">
              <Zap className="h-12 w-12 text-primary mx-auto" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
            <p className="text-xl mb-8 text-muted-foreground">
              Contact our team today to discuss how Alpha Stats can support your clinical research needs.
            </p>
            <Button asChild size="lg" className="bg-gradient-blue hover:opacity-90 transition-opacity px-8">
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 