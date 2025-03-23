"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Users, FileText, Award, Target, X, Mail, Linkedin, Phone } from "lucide-react"

export default function AboutPage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClinicExpanded, setIsClinicExpanded] = useState(false);
  const [isMissionExpanded, setIsMissionExpanded] = useState(false);
  const [isWhyExpanded, setIsWhyExpanded] = useState(false);

  const handleExpandCard = () => {
    setIsExpanded(true);
  };

  const handleCloseExpanded = () => {
    setIsExpanded(false);
  };
  
  const handleExpandClinicCard = () => {
    setIsClinicExpanded(true);
  };

  const handleCloseClinicExpanded = () => {
    setIsClinicExpanded(false);
  };
  
  const handleExpandMissionCard = () => {
    setIsMissionExpanded(true);
  };

  const handleCloseMissionExpanded = () => {
    setIsMissionExpanded(false);
  };
  
  const handleExpandWhyCard = () => {
    setIsWhyExpanded(true);
  };

  const handleCloseWhyExpanded = () => {
    setIsWhyExpanded(false);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 bg-gradient-blue text-white">
        <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ClinPharmStats</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Providing expert biostatistics and clinical research services since 1999
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
                  ClinPharmStats provides biostatistics and statistical programming services to the
                  pharmaceutical and biotechnology industry. Our focus is on delivering high-quality statistical
                  analysis and reporting for clinical trials.
                </p>
                <p>
                  ClinPharmStats is a New Jersey Corporation, previously operating as NJ Biostatistics Inc since 1999.
                  ClinPharmStats is headed by a Biostatistician with a PhD having over 25 years of statistical experience.
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
                  src="/images/alphastats_building.png"
                  alt="ClinPharmStats Headquarters Building"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg relative"
                />
              </div>
            </div>
          </div>

          {/* Team Members Section (Replacing Our Expertise) */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Team</h2>
            <div className="w-20 h-1 bg-gradient-blue mx-auto mb-12"></div>

            {/* Vijay Chauhan */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-xl"></div>
                    <div className="bg-white p-2 rounded-lg shadow-lg relative">
                      <div className="aspect-square relative overflow-hidden rounded-md bg-muted">
                        <Image
                          src="/images/chauhan_vijay_fixed.png"
                          alt="Vijay Chauhan - Data Scientist"
                          width={400}
                          height={400}
                          className="object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110"
                          style={{ objectFit: 'cover', objectPosition: 'center' }}
                          sizes="(max-width: 768px) 100vw, 400px"
                          priority
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
            <div className="mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-xl"></div>
                    <div className="bg-white p-2 rounded-lg shadow-lg relative">
                      <div className="aspect-square relative overflow-hidden rounded-md bg-muted">
                        <Image
                          src="/images/porwal_shaun.png"
                          alt="Shaun Porwal"
                          width={400}
                          height={400}
                          className="object-cover w-full h-full transition duration-300 ease-in-out hover:scale-110"
                          style={{ objectFit: 'cover', objectPosition: 'center' }}
                          sizes="(max-width: 768px) 100vw, 400px"
                          priority
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
                        Background & Expertise
                        <div className="w-16 h-1 bg-gradient-blue mt-2"></div>
                      </h3>
                      <div className="space-y-4">
                        <p>
                          Shaun brings extensive expertise in data engineering, AI/ML implementation, and statistical analysis to ClinPharmStats. With a strong foundation in biomedical data science, he excels at bridging the gap between clinical research and advanced technology solutions.
                        </p>
                        
                        <p>
                          Since 2021, Shaun has been working at Memorial Sloan Kettering Cancer Center, where he has engineered data pipelines for surgical outcomes analysis, developed AI radiology pipelines with fine-tuned large language models, and led statistical analyses for landmark clinical studies. His experience also includes bioinformatics work at Sema4, where he built automated pipelines for genomic analysis.
                        </p>
                        
                        <p>
                          He has developed several open-source tools including the widely-used <a href="https://decisioncurveanalysis.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">dcurves</a> Python library (27k+ downloads) for evaluating binary and survival models, and enterprise solutions like no-more-sql, a fine-tuned Llama + RAG pipeline for secure text-to-SQL conversion.
                        </p>
                        
                        <p>
                          Shaun is multilingual, speaking English, Mandarin Chinese, Hindi, Japanese, and Spanish, which enhances his ability to collaborate with international teams and clients. His unique combination of technical expertise and healthcare domain knowledge makes him an invaluable asset to ClinPharmStats and our clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gaurav Chauhan */}
            <div className="mb-16">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="md:w-1/3">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-xl"></div>
                    <div className="bg-white p-2 rounded-lg shadow-lg relative">
                      <div className="aspect-square relative overflow-hidden rounded-md bg-muted flex items-center justify-center">
                        <div className="text-center p-6">
                          <p className="text-lg font-medium text-gray-600 mb-2">Gaurav is camera shy</p>
                          <p className="text-sm text-gray-500">A professional headshot will be added soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-center gap-4">
                    <Button variant="outline" size="icon" asChild>
                      <Link href="mailto:gaurav@clinpharmstats.com">
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
                    <Button variant="outline" size="icon" asChild>
                      <Link href="tel:+12015551234">
                        <Phone className="h-4 w-4" />
                        <span className="sr-only">Phone</span>
                      </Link>
                    </Button>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold">Gaurav Chauhan</h2>
                    <p className="text-xl text-muted-foreground">Director of Operations</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 relative">
                        Education
                        <div className="w-16 h-1 bg-gradient-blue mt-2"></div>
                      </h3>
                      <div className="space-y-4">
                        <div className="flex flex-col md:flex-row md:gap-4">
                          <div className="font-semibold text-primary whitespace-nowrap">2008</div>
                          <div>
                            <p className="font-medium">Master's in Project Management (MPM)</p>
                            <p className="text-muted-foreground">Keller Graduate School of Management</p>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:gap-4">
                          <div className="font-semibold text-primary whitespace-nowrap">2006</div>
                          <div>
                            <p className="font-medium">Bachelor's in Business Administration (BBA)</p>
                            <p className="text-muted-foreground">DeVry University</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 relative">
                        Operations Experience
                        <div className="w-16 h-1 bg-gradient-blue mt-2"></div>
                      </h3>
                      <div className="space-y-4">
                        <p>
                          Gaurav has over 15 years of experience in operations management within the pharmaceutical and healthcare industries. He specializes in optimizing project workflows, resource allocation, and process improvement.
                        </p>
                        
                        <p>
                          At ClinPharmStats, Gaurav oversees day-to-day operations, ensures project timelines and deliverables are met, and coordinates between statistical teams and clients. His expertise in project management methodologies has been instrumental in streamlining our service delivery and enhancing client satisfaction.
                        </p>
                        
                        <p>
                          Prior to joining ClinPharmStats, Gaurav held operations roles at leading CROs where he managed cross-functional teams and implemented process improvements that significantly reduced project timelines while maintaining quality standards.
                        </p>
                        
                        <p>
                          His combination of business acumen and understanding of the clinical research landscape makes him an essential part of our leadership team, ensuring that our statistical expertise is delivered through efficient operational frameworks.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                <h3 className="text-xl font-bold mb-3 text-center">Biostatistical Experience</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Explore our comprehensive biostatistical services and experience in clinical research.
                </p>
                <Button variant="outline" className="w-full" onClick={handleExpandCard}>
                  <span className="flex items-center justify-center">
                    View Details <ChevronRight className="ml-2 h-4 w-4" />
                  </span>
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
                <Button variant="outline" className="w-full" onClick={handleExpandClinicCard}>
                  <span className="flex items-center justify-center">
                    Learn More <ChevronRight className="ml-2 h-4 w-4" />
                  </span>
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
                <Button variant="outline" className="w-full" onClick={handleExpandMissionCard}>
                  <span className="flex items-center justify-center">
                    Read More <ChevronRight className="ml-2 h-4 w-4" />
                  </span>
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
                <h3 className="text-xl font-bold mb-3 text-center">Why ClinPharmStats</h3>
                <p className="text-muted-foreground mb-6 text-center">
                  Find out what sets us apart from other CROs in the industry.
                </p>
                <Button variant="outline" className="w-full" onClick={handleExpandWhyCard}>
                  <span className="flex items-center justify-center">
                    Discover <ChevronRight className="ml-2 h-4 w-4" />
                  </span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expanded Biostatistical Experience Modal */}
      {isExpanded && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl max-w-4xl relative max-h-[90vh] overflow-y-auto">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full bg-gray-100"
              onClick={handleCloseExpanded}
            >
              <X className="h-6 w-6" />
            </button>
            
            <h2 className="text-3xl font-bold mb-6 text-primary">Biostatistical Experience</h2>
            <div className="w-20 h-1 bg-gradient-blue mb-8"></div>
            
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              
              <p className="mb-6">
                We offer comprehensive biostatistical expertise across all phases of clinical research. Our experienced team provides services including study design and protocol development, sample size calculations, and statistical analysis planning to establish a solid foundation for your clinical trials.
              </p>
              
              <p className="mb-6">
                Our technical capabilities include randomization listing generation, SAS programming of statistical inferential efficacy tables and figures, and thorough validation of efficacy and safety summary tables, listings, and figures. We also perform interim analyses, exploratory analyses, and outcomes research to ensure your data is properly interpreted and presented.
              </p>
              
              <p className="mb-6">
                For specialized needs, we serve as independent statisticians for un-blinded analyses and as DSMB statisticians. Our regulatory support includes NDA/BLA pre-meeting package preparation, assistance to advisory and expert groups for critical analyses of clinical trials data, and support for medical writers in drafting clinical study reports.
              </p>
              
              <p className="mb-6">
                We provide comprehensive statistical report writing and abbreviated report writing services, and are experienced in preparing responses to FDA review questions to ensure regulatory compliance and approval.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Additional Services</h3>
              
              <p className="mb-6">
                Beyond our biostatistical core services, we offer SAS programming, medical writing, FSP services, vendor management, and fixed cost project options to provide a complete solution for your clinical research needs.
              </p>
              
              <div className="text-center mt-8">
                <Button variant="outline" onClick={handleCloseExpanded}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Expanded Clinical Experience Modal */}
      {isClinicExpanded && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl max-w-4xl relative max-h-[90vh] overflow-y-auto">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full bg-gray-100"
              onClick={handleCloseClinicExpanded}
            >
              <X className="h-6 w-6" />
            </button>
            
            <h2 className="text-3xl font-bold mb-6 text-accent">Clinical Experience</h2>
            <div className="w-20 h-1 bg-gradient-blue mb-8"></div>
            
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold mb-4">Therapeutic Areas of Experience</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-8">
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></div>
                  <span>Cardiovascular (Hypertension Trials)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></div>
                  <span>Migraine Headache</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></div>
                  <span>Vasomotor Symptoms</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></div>
                  <span>Weight Loss</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></div>
                  <span>Hormone Replacement Therapy</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></div>
                  <span>Anti-infective</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></div>
                  <span>Dermatology (Acne Vulgaris)</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></div>
                  <span>Antifungal</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></div>
                  <span>Non-Hodgkin's Lymphoma</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></div>
                  <span>Analgesics</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></div>
                  <span>Mesothelioma</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></div>
                  <span>Anaesthetics</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></div>
                  <span>Multiple Sclerosis</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></div>
                  <span>Pain studies</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></div>
                  <span>Bipolar I Disorder</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></div>
                  <span>Osteoporosis</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></div>
                  <span>Schizophrenia</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 mr-2"></div>
                  <span>Dentifrices</span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Industry Experience</h3>
              
              <p className="mb-6">
                Our experience spans Phase 1 to 4 clinical trials gained working with major pharmaceutical companies and research organizations including:
              </p>
              
              <p className="mb-6">
                Bayer HealthCare, Pfizer, Genentech Inc, Johnson & Johnson Pharmaceutical Research and Development, J&J, Janssen Research Foundation, Glaxo SmithKline, NIH, McNeil Consumer Healthcare, Purdue Pharma LLP, Mitsubishi, DepoMed Inc, Sumitomo Pharmaceuticals America Ltd, Sankyo-Pharma USA, Baxter Pharmaceutical Company, Knoll Pharmaceutical Company, Alfacell inc, and BioTime Inc.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Additional Services</h3>
              
              <p className="mb-6">
                We also provide specialized Health Economics and Outcomes Research (HEOR) services and Publication Support to complement our clinical data analysis and reporting capabilities.
              </p>
              
              <div className="text-center mt-8">
                <Button variant="outline" onClick={handleCloseClinicExpanded}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Expanded Mission & Vision Modal */}
      {isMissionExpanded && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl max-w-4xl relative max-h-[90vh] overflow-y-auto">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full bg-gray-100"
              onClick={handleCloseMissionExpanded}
            >
              <X className="h-6 w-6" />
            </button>
            
            <h2 className="text-3xl font-bold mb-6 text-info">Mission & Vision</h2>
            <div className="w-20 h-1 bg-gradient-blue mb-8"></div>
            
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              
              <p className="mb-6">
                ClinPharmStats is committed to its clients for an excellent relationship in partnering work on clinical development and achieving their goals and objectives. Quality is always at the top priority while keeping costs low and timely completion of projects.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              
              <p className="mb-6">
                ClinPharmStats is a specialty CRO for Biostatistics, Statistical Programming, and Medical Writing. In addition, we are planning for undertaking clinical data management projects at our facility in New Jersey.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Future Initiatives</h3>
              
              <p className="mb-6">
                We are discussing creating facilities for pre-clinical research in India. We are looking for partners and investors for pre-clinical development program.
              </p>
              
              <div className="text-center mt-8">
                <Button variant="outline" onClick={handleCloseMissionExpanded}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Expanded Why ClinPharmStats Modal */}
      {isWhyExpanded && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-xl max-w-4xl relative max-h-[90vh] overflow-y-auto">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 p-2 rounded-full bg-gray-100"
              onClick={handleCloseWhyExpanded}
            >
              <X className="h-6 w-6" />
            </button>
            
            <h2 className="text-3xl font-bold mb-6 text-success">Why ClinPharmStats</h2>
            <div className="w-20 h-1 bg-gradient-blue mb-8"></div>
            
            <div className="prose prose-lg max-w-none">
              <h3 className="text-xl font-bold mb-4">Cost-Effective Approach</h3>
              
              <p className="mb-6">
                ClinPharmStats is a cost effective CRO committed to high quality and timely completion of clients projects. ClinPharmStats is against unnecessary overtime billings and change orders. Since employees in most of the pharmaceutical companies are not paid for overtime, it is unreasonable for CROs to burden clients on account of overtime.
              </p>
              
              <p className="mb-6">
                It is well known that workload can be light at some time points, so it is unreasonable to bill clients for overtime whenever resources are required to put in a little more time and effort. The full time employee (FTE) model is helpful to client as well as CROs. The FTE model considers extra hours of effort as a part of their job responsibilities.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Efficient Project Management</h3>
              
              <p className="mb-6">
                However, the need for extra work hours and pressure should be avoided by managing projects efficiently. It is generally the re-work on SAS programs which drives to situations of the need for extra hours of work. We have observed that most CROs create a havoc asking its clients for approval of engaging extra resources or justifying the need of extra hours of work whenever adhoc requests are received.
              </p>
              
              <p className="mb-6">
                In such situation clients do not have much to say because such requests are generally urgent, and eventually clients end up paying CROs exorbitantly. ClinPharmStats handles such situations by reprioritizing the tasks and by obtaining sufficient specifications and documentation for execution of such requests. Sufficient specifications are very important in a fast execution of any adhoc analysis.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Dedicated Professionals</h3>
              
              <p className="mb-6">
                Our professionals happily devote extra hours at no additional cost and are flexible in making them available beyond regular work hours and even weekends. Cooperation and dedication of our professionals have eliminated overtime costs for our clients. Our professionals are highly experienced with excellent communication skills.
              </p>
              
              <h3 className="text-xl font-bold mb-4">Client-Focused Resource Selection</h3>
              
              <p className="mb-6">
                Unlike many CROs, ClinPharmStats involves its clients in face to face technical screening and selection of resources for their projects. We have observed that many CROs engage resources with insufficient experience after the award of projects outsourced to them. ClinPharmStats identifies resources up front before starting any project and the same resources support the client until completion.
              </p>
              
              <p className="mb-6">
                Our resources communicate directly with the client's team in an attempt to be treated as extended team member. ClinPharmStats always tries to accommodate within our clients budget.
              </p>
              
              <div className="text-center mt-8">
                <Button variant="outline" onClick={handleCloseWhyExpanded}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
} 