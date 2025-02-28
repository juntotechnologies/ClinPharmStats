"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would send this data to your server
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We will get back to you soon!")
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 bg-gradient-blue text-white">
        <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team to discuss how Alpha Stats can support your clinical research needs
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
        ></div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card className="shadow-lg card-gradient">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription className="text-lg">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-base">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-base">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-base">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="Your phone number"
                          value={formData.phone}
                          onChange={handleChange}
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-base">
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your company"
                          value={formData.company}
                          onChange={handleChange}
                          className="h-12"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-base">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="How can we help you?"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="resize-none"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full md:w-auto bg-gradient-blue hover:opacity-90 transition-opacity"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="shadow-lg card-gradient h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                  <CardDescription className="text-base">
                    Reach out to us directly using the information below.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Address</h3>
                      <p className="text-muted-foreground">
                        21 Demarest Pl
                        <br />
                        Piscataway, NJ 08854
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Phone</h3>
                      <p className="text-muted-foreground">+1 (609) 555-1234</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email</h3>
                      <p className="text-muted-foreground">info@alphastatsinc.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 pt-4 border-t">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 5:00 PM EST
                        <br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8">Our Location</h2>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="h-12 w-12 text-primary" />
            </div>
            <p className="text-lg">
              21 Demarest Pl
              <br />
              Piscataway, NJ 08854
              <br />
              United States
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

