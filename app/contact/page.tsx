import { Mail, MapPin } from "lucide-react"

const contactEmail = "shaun.porwal@gmail.com"

export default function ContactPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-12 bg-gradient-blue text-white">
        <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Get in touch with our team to discuss how we can support your clinical research needs
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap justify-center gap-12 mb-8">
              <div className="flex flex-col items-center text-center">
                <div className="bg-primary/10 p-3 rounded-full mb-3">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h2 className="font-semibold text-lg">Our Office</h2>
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
                  <h2 className="font-semibold text-lg">Email Us</h2>
                  <a
                    href="mailto:shaun.porwal@gmail.com"
                    className="text-primary hover:underline"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Business Inquiries</h2>
              <p className="mb-6 text-muted-foreground">
                For questions about our biostatistics and clinical research services, contact us by email.
              </p>
              <a
                href="mailto:shaun.porwal@gmail.com?subject=Business%20Inquiry"
                className="inline-flex items-center justify-center rounded-md bg-gradient-blue px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
              >
                Email ClinPharmStats
              </a>
              <p className="mt-6 rounded-md bg-amber-50 p-4 text-sm text-amber-900">
                We are not currently hiring and are not accepting employment inquiries or unsolicited résumés.
              </p>
            </div>
          </div>
        </div>
      </section>

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
  )
}
