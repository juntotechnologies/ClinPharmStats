"use client"

import type React from "react"

import { useState, useEffect, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Clock, Paperclip } from "lucide-react"

// Contact form component with search params
function ContactForm() {
  const searchParams = useSearchParams()
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [attachment, setAttachment] = useState<File | null>(null)
  
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: "" },
  })
  
  // Pre-fill subject field from query parameter
  useEffect(() => {
    if (searchParams) {
      const subjectParam = searchParams.get("subject")
      if (subjectParam) {
        setFormData(prev => ({ ...prev, subject: subjectParam }))
      }
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAttachment(e.target.files[0])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))

    try {
      // Create FormData object
      const formSubmitData = new FormData();
      formSubmitData.append('name', formData.name);
      formSubmitData.append('email', formData.email);
      formSubmitData.append('_subject', formData.subject);
      formSubmitData.append('message', formData.message);
      formSubmitData.append('_captcha', 'false');
      formSubmitData.append('_template', 'table');
      
      // Add attachment if exists
      if (attachment) {
        formSubmitData.append('attachment', attachment);
      }
      
      // Send data to FormSubmit using fetch
      const response = await fetch('https://formsubmit.co/shaun.porwal@gmail.com', {
        method: 'POST',
        body: formSubmitData
      });
      
      if (response.ok) {
        // Success
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Thank you! Your message has been sent successfully." }
        });
        
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
        setAttachment(null);
      } else {
        // Error
        throw new Error("Form submission failed. Please try again.");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An error occurred. Please try again later."
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: errorMessage }
      });
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 bg-gradient-blue text-white">
        <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team to discuss how we can support your clinical research needs
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Removing the grid and restructuring the layout */}
          <div className="max-w-3xl mx-auto">
            {/* Contact Information - Now at the top */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-12 mb-8">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-3">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Our Office</h3>
                    <p className="text-muted-foreground">
                      21 Demarest Pl
                      <br />
                      Piscataway, NJ 08854, USA
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-3">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email Us</h3>
                    <p className="text-muted-foreground">shaun.porwal@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div id="contactForm" className="bg-white p-8 rounded-lg shadow-lg" style={{ scrollMarginTop: '100px' }}>
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
              
              {!status.submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    ></textarea>
                  </div>
                  
                  <div>
                    <div className="flex items-center">
                      <label className="flex items-center px-4 py-2 border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50">
                        <Paperclip className="h-5 w-5 text-gray-500 mr-2" />
                        <span className="text-sm text-gray-500">
                          {attachment ? attachment.name : 'Choose a file'}
                        </span>
                        <input
                          type="file"
                          id="attachment"
                          name="attachment"
                          onChange={handleFileChange}
                          className="sr-only"
                        />
                      </label>
                      {attachment && (
                        <button
                          type="button"
                          onClick={() => setAttachment(null)}
                          className="ml-2 text-sm text-red-500 hover:text-red-700"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                    <p className="mt-1 text-xs text-gray-500">
                      Max file size: 10MB. Supported format: PDF
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full bg-gradient-blue text-white py-3 px-6 rounded-md hover:opacity-90 transition-opacity font-medium disabled:opacity-70"
                  >
                    {status.submitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              ) : (
                <div className="text-center py-12">
                  <div className="bg-green-100 text-green-800 p-4 rounded-md mb-6">
                    {status.info.msg}
                  </div>
                  <button
                    onClick={() => setStatus({ submitted: false, submitting: false, info: { error: false, msg: "" } })}
                    className="bg-gradient-blue text-white py-2 px-6 rounded-md hover:opacity-90 transition-opacity font-medium"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
              
              {status.info.error && (
                <div className="mt-4 bg-red-100 text-red-800 p-4 rounded-md">
                  {status.info.msg}
                </div>
              )}
              
              <div className="mt-6 text-sm text-gray-500">
                <p>
                  Note: This form will send your message directly to our team. We'll respond to your inquiry as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8">Find Us</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.8367890122223!2d-74.46498754999999!3d40.5488627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c65531cfc58f%3A0x71d473c3d7c0b0b5!2s21%20Demarest%20Pl%2C%20Piscataway%2C%20NJ%2008854!5e0!3m2!1sen!2sus!4v1716841200000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ClinPharmStats Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

// Main contact page with Suspense boundary
export default function ContactPage() {
  return (
    <Suspense fallback={<div className="container mx-auto px-4 py-12 text-center">Loading contact form...</div>}>
      <ContactForm />
    </Suspense>
  );
} 