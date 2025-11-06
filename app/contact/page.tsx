import ContactForm from "@/components/contact-form"
import { FadeInSection } from "@/components/motion-wrapper"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Bergs & Mark | Digital Marketing Agency & IT Solutions",
  description:
    "Contact Bergs & Mark, a leading digital marketing agency and IT solutions firm. Reach out to us for a free consultation and let us help you grow your business. We offer a wide range of services, including SEO, PPC, social media marketing, and more.",
  keywords: ["contact us", "digital marketing agency", "it solutions firm", "free consultation", "get in touch", "contact information"],
}

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* Contact Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto text-center">
          <FadeInSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">Let's Talk</h1>
            <p className="text-lg sm:text-xl text-balance opacity-90">
              Ready to grow your business? Share your challenges and growth goals with us. Our team of experts will get back to you within 24 hours with strategic recommendations and a plan to help you succeed. As a top digital marketing agency and IT solution firm, we are here to help you with all your needs.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 pattern-subtle-grid">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-12 lg:gap-16 md:grid-cols-2">
            {/* Form */}
            <FadeInSection>
              <ContactForm />
            </FadeInSection>

            {/* Contact Info */}
            <FadeInSection delay={0.2}>
              <div className="space-y-12">
                <div>
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-3">Email</h3>
                  <a
                    href="mailto:bergsnco@gmail.com"
                    className="text-2xl font-bold hover:text-primary transition-colors"
                  >
                    bergsnco@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-3">Phone</h3>
                  <a href="tel:+91 9301703738" className="text-2xl font-bold hover:text-primary transition-colors">
                    +91 93017 03738
                  </a>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-3">Office</h3>
                  <p className="text-lg">
                    Bengaluru, Karnataka
                    <br />
                    India, IN
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-3">Social</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="https://www.linkedin.com/company/bergsnmark/about/?viewAsMember=true" className="text-lg hover:text-primary transition-colors">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/atulwn/" className="text-lg hover:text-primary transition-colors">
                        Instagram
                      </a>
                    </li>
                    <li>
                      <a href="https://x.com/atulvjd" className="text-lg hover:text-primary transition-colors">
                        Twitter
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance">Why Work With Bergs & Mark?</h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
              Before you reach out, here's what sets us apart and what you can expect from our partnership.
            </p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              {[
                {
                  title: "Expert Team of a Premier Agency",
                  desc: "With over 2 years of combined experience, our team at this digital marketing agency excels in brand strategy and sustainable business growth. We are the service provider you can trust.",
                },
                {
                  title: "Proven Results from a Top IT Firm",
                  desc: "We have a track record of transforming over 10 brands, generating more than $20 million in revenue, and maintaining a 98% client retention rate. Our IT solutions are second to none.",
                },
                {
                  title: "Transparent Process",
                  desc: "We provide weekly updates, clear roadmaps, and monthly performance dashboards, so you always know where your project stands. Our transparency is a cornerstone of our service.",
                },
                {
                  title: "Complete and Integrated Solution",
                  desc: "We are your one-stop IT solution firm. We provide an integrated partnership for everything from strategy and websites to Instagram, ads, content, videos, design, and campaigns.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="text-accent text-3xl font-black flex-shrink-0">✓</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-foreground/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
              <Image
                src="/team-collaboration-meeting-professional-environmen.jpg"
                alt="Why choose us"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Trust Badges */}
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4 text-center">
            {[
              { stat: "7+", label: "Brands Transformed" },
              { stat: "65%", label: "Client Retention" },
              { stat: "110%", label: "Avg Growth" },
              { stat: "$7k+", label: "Revenue Generated" },
            ].map((badge, idx) => (
              <FadeInSection key={idx} delay={idx * 0.1}>
                <div className="bg-card border border-border/50 p-8 rounded-lg">
                  <div className="text-3xl sm:text-4xl font-black text-accent mb-2">{badge.stat}</div>
                  <p className="text-sm text-foreground/70 font-semibold">{badge.label}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-balance">Frequently Asked Questions</h2>
          </FadeInSection>

          <div className="space-y-8">
            {[
              {
                q: "What is the typical project timeline for your agency?",
                a: "Most of our digital marketing and IT solution projects range from 1-2 months, depending on the scope. The initial strategy phase typically takes 2-4 weeks, followed by execution and optimization.",
              },
              {
                q: "Does your IT firm work with startups or only established companies?",
                a: "We work with ambitious brands at any stage of their growth. What matters most to us is a commitment to growth and a desire to succeed. We are a flexible service provider.",
              },
              {
                q: "How does your agency measure success?",
                a: "We establish clear KPIs at the beginning of every project. We track the metrics that matter most to your business, such as revenue, conversions, brand awareness, and customer acquisition cost. Our success is tied to your success.",
              },
              {
                q: "Can your IT solution firm work with my existing internal team?",
                a: "Absolutely. We work best as an extension of your team. We collaborate closely with your internal marketing, design, and product teams to ensure a seamless workflow and the best possible results.",
              },
              {
                q: "What industries does your digital marketing agency specialize in?",
                a: "We have experience working with clients in a wide range of industries, including SaaS, e-commerce, professional services, fintech, and more. Our expertise is transferable because we focus on the fundamentals: strategy, positioning, and growth systems.",
              },
              {
                q: "Do you offer retainer or ongoing support as a service provider?",
                a: "Yes, we do. Many of our clients transition to ongoing retainers for continuous optimization, new initiative development, and market expansion. We are here to support you for the long term.",
              },
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.05}>
                <div className="border-b border-border pb-8">
                  <h3 className="text-xl font-bold mb-4">{item.q}</h3>
                  <p className="text-muted-foreground text-lg">{item.a}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
