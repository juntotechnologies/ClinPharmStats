import Link from "next/link"
import { Metadata } from "next"
import "./page.css"
import { ExternalLink, BookOpen, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Scholarship | ClinPharmStats",
  description: "Academic publications and research contributions by Shaun Porwal and the ClinPharmStats team in biostatistics and clinical research.",
  keywords: ["publications", "research", "academic papers", "biostatistics research", "clinical trials publications"],
  openGraph: {
    title: "Academic Publications | ClinPharmStats",
    description: "Research publications and academic contributions in biostatistics and clinical research.",
  },
}

interface Publication {
  title: string
  authors: string
  journal: string
  year: number
  citations: number
  url: string
}

export default function ScholarshipPage() {
  // Publications data from Google Scholar
  const publications: Publication[] = [
    {
      title: "Prostate-specific antigen density cutoff of 0.15 ng/ml/cc to propose prostate biopsies to patients with negative magnetic resonance imaging: efficient threshold or legacy of the past?",
      authors: "F Pellegrino, AL Tin, A Martini, EA Vertosick, SP Porwal, A Stabile, ...",
      journal: "European urology focus 9 (2), 291-297",
      year: 2023,
      citations: 24,
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=eR7hro0AAAAJ&citation_for_view=eR7hro0AAAAJ:u5HHmVD_uO8C"
    },
    {
      title: "Response to 2 Induction Courses of Bacillus Calmette-Guérin Therapy Among Patients with High-Risk Non–Muscle-Invasive Bladder Cancer: 5-Year Follow-Up of a Phase 2 Clinical Trial",
      authors: "AB Katims, J Tallman, E Vertosick, S Porwal, G Dalbagni, EK Cha, ...",
      journal: "JAMA oncology 10 (4), 522-525",
      year: 2024,
      citations: 6,
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=eR7hro0AAAAJ&citation_for_view=eR7hro0AAAAJ:d1gkVwhDpl0C"
    },
    {
      title: "The effect of the da Vinci® Vessel Sealer on robot-assisted laparoscopic prostatectomy complications",
      authors: "F Pellegrino, AL Tin, DD Sjoberg, NE Benfante, RC Weber, SP Porwal, ...",
      journal: "Journal of robotic surgery 17 (4), 1763-1768",
      year: 2023,
      citations: 1,
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=eR7hro0AAAAJ&citation_for_view=eR7hro0AAAAJ:u-x6o8ySG0sC"
    },
    {
      title: "Oncologic outcomes of retroperitoneal lymph node dissection following first-line chemotherapy for metastatic non-seminomatous germ cell tumors",
      authors: "RS Matulewicz, F Baky, N Liso, BM Williams, S Porwal, M Assel, ...",
      journal: "Annals of Oncology",
      year: 2025,
      citations: 0,
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=eR7hro0AAAAJ&citation_for_view=eR7hro0AAAAJ:qjMakFHDy7sC"
    },
    {
      title: "The absolute volume of Gleason Pattern 4 on radical prostatectomy is more strongly associated with advanced stage and biochemical recurrence than Gleason grade groups",
      authors: "S Scuderi, AL Tin, J Klug, S Porwal, L Quarta, M Ciabattini, NP Tenace, ...",
      journal: "Journal of Urology, 10.1097",
      year: 2025,
      citations: 0,
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=eR7hro0AAAAJ&citation_for_view=eR7hro0AAAAJ:2osOgNQ5qMEC"
    },
    {
      title: "The quantification of GSP4 volume is superior to ISUP GG classification and% GSP4 for predicting adverse outcomes in radical prostatectomy patients",
      authors: "SLA Scuderi, A Tin, A Stabile, E Mazzone, L Quarta, P Zaurito, S Porwal, ...",
      journal: "European Urology 85, S56",
      year: 2024,
      citations: 0,
      url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=eR7hro0AAAAJ&citation_for_view=eR7hro0AAAAJ:9yKSN-GCB0IC"
    }
  ];

  // Function to highlight author name
  const highlightAuthor = (authors: string) => {
    // Replace variations of Shaun Porwal with bold version
    return authors
      .replace(/SP Porwal/gi, "<strong>SP Porwal</strong>")
      .replace(/S Porwal/gi, "<strong>S Porwal</strong>")
      .replace(/Shaun P Porwal/gi, "<strong>Shaun P Porwal</strong>")
      .replace(/Shaun Porwal/gi, "<strong>Shaun Porwal</strong>")
      .replace(/Porwal S/gi, "<strong>Porwal S</strong>")
      .replace(/Porwal SP/gi, "<strong>Porwal SP</strong>")
      .replace(/Porwal, S/gi, "<strong>Porwal, S</strong>")
      .replace(/Porwal, SP/gi, "<strong>Porwal, SP</strong>");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 bg-gradient-blue text-white">
        <div className="absolute inset-0 bg-dots-pattern opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Academic Publications</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Research contributions and scholarly work in biostatistics, clinical research, and data science
          </p>
        </div>
        <div
          className="absolute bottom-0 left-0 right-0 h-16 bg-white"
          style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
        ></div>
      </section>

      {/* Publications Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Research Publications</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Peer-reviewed publications in medical journals and conference proceedings
              </p>
              <div className="flex justify-center mt-6">
                <Link 
                  href="https://scholar.google.com/citations?hl=en&user=eR7hro0AAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  View Google Scholar Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {publications.map((pub, index) => (
                <div 
                  key={index} 
                  className="publication-card bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row justify-between md:items-start gap-4">
                      <div className="flex-1">
                        <h3 className="publication-title text-xl font-semibold mb-3 text-primary hover:text-primary/80 transition-colors">
                          <Link href={pub.url} target="_blank" rel="noopener noreferrer">
                            {pub.title}
                          </Link>
                        </h3>
                        <p 
                          className="publication-authors text-gray-700 mb-2" 
                          dangerouslySetInnerHTML={{ __html: highlightAuthor(pub.authors) }}
                        />
                        <p className="text-gray-600 italic mb-4">{pub.journal}</p>
                      </div>
                      <div className="flex flex-row md:flex-col items-center md:items-end gap-3">
                        <span className="year-badge">
                          {pub.year}
                        </span>
                        {pub.citations > 0 && (
                          <div className="citation-badge">
                            <Award className="h-3.5 w-3.5 mr-1" />
                            {pub.citations} {pub.citations === 1 ? 'citation' : 'citations'}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Link 
                        href={pub.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:text-primary/80 inline-flex items-center"
                      >
                        View publication
                        <ExternalLink className="ml-1 h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600">
                For a complete list of publications and citation metrics, please visit my{" "}
                <Link 
                  href="https://scholar.google.com/citations?hl=en&user=eR7hro0AAAAJ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Scholar profile
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 