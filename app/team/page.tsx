import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin, FileText } from "lucide-react"

export default function TeamPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 bg-gradient-blue text-white">
        <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet the experts behind Alpha Stats' success in biostatistics and clinical research
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
        ></div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Vijay Chauhan */}
            <div className="mb-20">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-xl"></div>
                    <div className="bg-white p-2 rounded-lg shadow-lg relative">
                      <div className="aspect-square relative overflow-hidden rounded-md bg-muted">
                        <Image
                          src="/placeholder.svg"
                          alt="Vijay Chauhan"
                          width={400}
                          height={400}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center gap-4">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="mailto:vijay@alphastats.com">
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold">Vijay Chauhan, Ph.D.</h2>
                    <p className="text-xl text-muted-foreground">President & CEO</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 relative">
                        Education
                        <div className="w-16 h-1 bg-gradient-blue mt-2"></div>
                      </h3>
                      <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:gap-4">
                          <div className="font-semibold text-primary whitespace-nowrap">1989-1990</div>
                          <div>
                            <p className="font-medium">Postdoctoral Fellow - Estimation of variance components</p>
                            <p className="text-muted-foreground">McGill University, Montreal, Canada</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:gap-4">
                          <div className="font-semibold text-primary whitespace-nowrap">1986-1987</div>
                          <div>
                            <p className="font-medium">Postdoctoral Fellow - Statistical modeling using mixed models</p>
                            <p className="text-muted-foreground">Swiss Federal Institute of Technology, Zurich, Switzerland</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:gap-4">
                          <div className="font-semibold text-primary whitespace-nowrap">1982-1985</div>
                          <div>
                            <p className="font-medium">Ph.D.(Statistics) - Mixed Model Methods</p>
                            <p className="text-muted-foreground">Edinburgh University, Scotland</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 relative">
                        Biostatistics & SAS Experience
                        <div className="w-16 h-1 bg-gradient-blue mt-2"></div>
                      </h3>
                      <div className="space-y-4">
                        <p>
                          PhD in Statistics with specialization in mixed models methodology for prediction of fixed and random effects, 
                          and in estimating variance components. Over 25 years of statistical experience including 13 years in the 
                          pharmaceutical and biotech companies and CROs.
                        </p>
                        
                        <p>
                          Responsibilities in various assignments in the pharmaceutical industry included protocol development, 
                          writing Statistical Analysis Plans and programming specifications, supporting IDMC, DSMB and drug development 
                          advisory boards in evaluation and interpretation of clinical trial results and formulating recommendations, 
                          integrated summary of efficacy and safety, CRFs review, contributing to writing of clinical study reports 
                          and pre-NDA briefing packages, direct interactions with FDA reviewers and responding to FDA queries, 
                          assisting Regulatory Affairs in drafting letters of responses to FDA.
                        </p>
                        
                        <p>
                          Therapeutic areas of experience include cardiovascular, hypertension, diabetes, oncology, Mesothelioma trials, 
                          Dermatology (Acne Vulgaris), CNS (Bipolar I Disorder and Schizophrenia), weight loss, anti-fungal, pain studies, 
                          diagnostic imaging, anti-infective (complicated skin structure infections, complicated intra-abdominal infection), 
                          postmenopausal management and contraceptive studies.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Shaun Porwal */}
            <div className="mb-20">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-xl"></div>
                    <div className="bg-white p-2 rounded-lg shadow-lg relative">
                      <div className="aspect-square relative overflow-hidden rounded-md bg-muted">
                        <Image
                          src="/placeholder.svg"
                          alt="Shaun Porwal"
                          width={400}
                          height={400}
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center gap-4">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="mailto:shaun.porwal@gmail.com">
                        <Mail className="h-4 w-4" />
                        <span className="sr-only">Email</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://linkedin.com/in/shaunporwal" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        <span className="sr-only">LinkedIn</span>
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href="https://shaunporwal.com" target="_blank" rel="noopener noreferrer">
                        <FileText className="h-4 w-4" />
                        <span className="sr-only">Website</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold">Shaun Porwal</h2>
                    <p className="text-xl text-muted-foreground">Chief Technology Officer</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 relative">
                        Education
                        <div className="w-16 h-1 bg-gradient-blue mt-2"></div>
                      </h3>
                      <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:gap-4">
                          <div className="font-semibold text-primary whitespace-nowrap">2021</div>
                          <div>
                            <p className="font-medium">Master's in Biomedical Data Science (MS)</p>
                            <p className="text-muted-foreground">Icahn School of Medicine at Mount Sinai</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:gap-4">
                          <div className="font-semibold text-primary whitespace-nowrap">2019</div>
                          <div>
                            <p className="font-medium">Bachelor's in Biomedical Engineering, Chinese (BE)</p>
                            <p className="text-muted-foreground">Rutgers University - New Brunswick</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 relative">
                        Professional Experience
                        <div className="w-16 h-1 bg-gradient-blue mt-2"></div>
                      </h3>
                      <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:gap-4">
                          <div className="font-semibold text-primary whitespace-nowrap">2021-Present</div>
                          <div>
                            <p className="font-medium">Data Analyst/Engineer</p>
                            <p className="text-muted-foreground">Memorial Sloan Kettering Cancer Center, New York, NY</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                              <li>Engineered data pipelines with SQL-extracted institutional data for surgical outcomes analysis</li>
                              <li>Developed AI radiology pipeline with fine-tuned Llama3.1 and image segmentation models</li>
                              <li>Led statistical analyses for landmark studies using advanced methods (GAM, logistic regression, Kaplan-Meier)</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:gap-4">
                          <div className="font-semibold text-primary whitespace-nowrap">2020-2021</div>
                          <div>
                            <p className="font-medium">Bioinformatics Intern</p>
                            <p className="text-muted-foreground">Sema4, Stamford, CT</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                              <li>Engineered automated pipelines with Bash, Python, WDL, and AWS to detect structural variants</li>
                              <li>Identified repeat variants in 100+ samples for diabetes therapies research</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 relative">
                        Technical Expertise
                        <div className="w-16 h-1 bg-gradient-blue mt-2"></div>
                      </h3>
                      <div className="space-y-4">
                        <p>
                          Shaun brings extensive expertise in data engineering, AI/ML implementation, and statistical analysis to Alpha Stats. His background in biomedical data science enables him to bridge the gap between clinical research and advanced technology solutions.
                        </p>
                        
                        <p>
                          He has developed several open-source tools including the widely-used <a href="https://decisioncurveanalysis.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dcurves</a> Python library (27k+ downloads) for evaluating binary and survival models, and enterprise solutions like no-more-sql, a fine-tuned Llama + RAG pipeline for secure text-to-SQL conversion.
                        </p>
                        
                        <p>
                          Shaun is multilingual, speaking English, Mandarin Chinese, Hindi, Japanese, and Spanish, which enhances his ability to collaborate with international teams and clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">
                  We are committed to delivering the highest quality statistical analysis and programming services, exceeding industry standards and client expectations.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">
                  We work closely with our clients, understanding their unique needs and providing tailored solutions through open communication and partnership.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center">
                  We continuously explore new methodologies and technologies to enhance our services and provide cutting-edge solutions to complex statistical challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Interested in working with our expert team? Check out our current openings and apply today.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
            <Link href="/careers">View Career Opportunities</Link>
          </Button>
        </div>
      </section>
    </div>
  )
} 