import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BarChart2, FileText, CheckCircle, FlaskRoundIcon as Flask } from "lucide-react"

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 bg-gradient-blue text-white">
        <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Specialized biostatistics and programming services for Phase 1 clinical trials and early drug development
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Phase 1 Clinical Trial Expertise</h2>
            <div className="w-20 h-1 bg-gradient-blue mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Specialized in early phase clinical trials and first-in-human studies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="card-gradient shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-blue flex items-center justify-center mb-4">
                  <BarChart2 className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Biostatistics</CardTitle>
                <CardDescription>Expert statistical analysis for early phase trials</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Phase 1 trial design and analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Sample size and power calculations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Dose escalation methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Safety data analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Interim analyses for early decisions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>DSMB and IDMC support</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-gradient shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-gradient-teal flex items-center justify-center mb-4">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Statistical Programming</CardTitle>
                <CardDescription>Cutting-edge R and Python programming</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Validated R and Python environments</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>CDISC SDTM and ADaM datasets</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Custom analysis workflows</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>PK/PD data processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Safety data automation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>Reproducible reporting</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-gradient shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-success/80 flex items-center justify-center mb-4">
                  <Flask className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Early Drug Development</CardTitle>
                <CardDescription>Comprehensive early phase support</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-2 mt-0.5 shrink-0" />
                    <span>First-in-human study design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-2 mt-0.5 shrink-0" />
                    <span>Dose escalation strategies</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-2 mt-0.5 shrink-0" />
                    <span>PK/PD modeling support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-2 mt-0.5 shrink-0" />
                    <span>Safety analysis expertise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-2 mt-0.5 shrink-0" />
                    <span>Regulatory submission support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-success mr-2 mt-0.5 shrink-0" />
                    <span>IND submission assistance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <section className="py-16 bg-secondary relative overflow-hidden">
            <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
            <div className="container mx-auto px-4 text-center relative z-10">
              <div className="max-w-3xl mx-auto bg-white p-10 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold mb-4">Need Phase 1 Trial Support?</h2>
                <p className="text-xl mb-8 text-muted-foreground">
                  Contact our team today to discuss how ClinPharmStats can support your early phase clinical trials.
                </p>
                <Button asChild size="lg" className="bg-gradient-blue hover:opacity-90 transition-opacity px-8">
                  <Link href="/contact">Contact Us Today</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  )
} 