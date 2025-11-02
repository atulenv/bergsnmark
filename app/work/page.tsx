import { FadeInSection, ScaleInSection } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function WorkPage() {
  const caseStudies = [
    {
      id: 1,
      company: "TechScale Industries",
      industry: "B2B SaaS",
      challenge:
        "Undifferentiated in a crowded market, competing solely on features with no clear positioning or messaging strategy. Struggling to attract quality leads.",
      solution:
        'Complete brand repositioning as "Enterprise Solution for Mid-Market Growth" through strategic messaging framework, website redesign, content strategy, and paid ads implementation.',
      results: [
        "Sales inquiry rate increased 3x in 6 months",
        "Brand recognition improved 250% in target market",
        "Average deal size increased 40%",
        "$2.3M additional ARR generated",
      ],
      image: "/saas-dashboard-design-interface.jpg",
    },
    {
      id: 2,
      company: "Luxe Collective",
      industry: "E-Commerce Premium Products",
      challenge:
        "Premium product line with only 2% conversion rate. Checkout experience was confusing, lacked trust signals, and had poor mobile optimization.",
      solution:
        "Complete customer journey redesign: simplified checkout process, added social proof badges, optimized product pages with better imagery, implemented strategic email funnel sequences, and ran retargeting campaigns.",
      results: [
        "Conversion rate increased from 2% to 6.2% (+210%)",
        "$500k additional ARR generated in first year",
        "Customer lifetime value increased 85%",
        "Cart abandonment reduced 35%",
      ],
      image: "/fashion-ecommerce-website.png",
    },
    {
      id: 3,
      company: "GrowthLabs Marketing",
      industry: "Professional Services / Consulting",
      challenge:
        "Service-based agency with weak market positioning, minimal online visibility, and inconsistent lead generation. Competing primarily on price.",
      solution:
        "Built comprehensive thought leadership platform: developed positioning framework, created content strategy, redesigned website, implemented SEO strategy, and launched consistent organic visibility engine across channels.",
      results: [
        "Qualified leads increased from 5 to 50+ monthly",
        "Established authority as industry thought leader",
        "Monthly retainer revenue increased 300%",
        "Website traffic increased 400%",
      ],
      image: "/professional-service-provider-website.jpg",
    },
    {
      id: 4,
      company: "CloudVault Pro",
      industry: "Cloud Infrastructure / Technical SaaS",
      challenge:
        "Complex technical product with poor messaging clarity. Target prospects didn't understand the value proposition or key differentiators.",
      solution:
        "Simplified positioning and created messaging hierarchy across all channels. Redesigned website for clarity, created explainer content, built case study framework, and implemented educational content strategy.",
      results: [
        "Product adoption increased 300%",
        "Free trial conversion rate improved 120%",
        "Support inquiries reduced 45% through clarity",
        "Customer onboarding time reduced 50%",
      ],
      image: "/tech-startup-dashboard.jpg",
    },
    {
      id: 5,
      company: "The Artisan Co.",
      industry: "Direct-to-Consumer / Luxury Products",
      challenge:
        "High-quality handmade products but competing on price in a commoditized market. No premium brand positioning or brand story.",
      solution:
        "Built premium brand narrative, redesigned packaging and visual identity, created content strategy showcasing craftsmanship, launched PR campaign, and implemented Instagram growth strategy.",
      results: [
        "Average order value increased 65%",
        "Brand became recognizable in luxury community",
        "Wholesale partnerships increased 5x",
        "Instagram followers grew from 5k to 50k",
      ],
      image: "/luxury-e-commerce-storefront.jpg",
    },
    {
      id: 6,
      company: "FinEdge Analytics",
      industry: "FinTech / Data Analytics",
      challenge:
        "Powerful analytics platform but invisible to market. Target B2B audience didn't know company existed despite excellent product.",
      solution:
        "Developed comprehensive content strategy, built SEO-optimized blog, created educational resources, implemented performance marketing system, and launched paid search campaigns.",
      results: [
        "Organic traffic increased 400%",
        "Product trial signups increased 250%",
        "Ranked #1 for 15+ key search terms",
        "Customer acquisition cost reduced 40%",
      ],
      image: "/growth-metrics-analytics.jpg",
    },
  ]

  return (
    <main className="pt-20">
      {/* Work Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div>
          <FadeInSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">Our Work</h1>
            <p className="text-lg sm:text-xl text-balance opacity-90">
              Case studies from diverse industries showing how we positioned, built, and scaled ambitious brands to
              market leadership.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 pattern-subtle-grid">
        <div>
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <FadeInSection key={study.id} delay={index * 0.1}>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  {/* Image */}
                  <div className="relative h-96 rounded-lg overflow-hidden">
                    <Image
                      src={study.image || "/placeholder.svg?height=384&width=384"}
                      alt={study.company}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="mb-8">
                      <div className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-2">
                        Case Study {String(study.id).padStart(2, "0")}
                      </div>
                      <h2 className="text-3xl sm:text-4xl font-bold mb-2">{study.company}</h2>
                      <p className="text-muted-foreground font-semibold">{study.industry}</p>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h3 className="font-bold text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                          The Challenge
                        </h3>
                        <p className="text-base text-foreground/80">{study.challenge}</p>
                      </div>

                      <div>
                        <h3 className="font-bold text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                          Our Solution
                        </h3>
                        <p className="text-base text-foreground/80">{study.solution}</p>
                      </div>

                      <div>
                        <h3 className="font-bold text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                          The Results
                        </h3>
                        <ul className="space-y-2">
                          {study.results.map((result, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-accent font-bold text-lg">→</span>
                              <span className="text-sm font-medium text-foreground/80">{result}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                {index < caseStudies.length - 1 && <div className="mt-16 border-t border-border"></div>}
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div>
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-balance">Measurable Results Across Industries</h2>
          </FadeInSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { stat: "6 Industries", desc: "Proven expertise across diverse sectors" },
              { stat: "300%+ Avg Growth", desc: "Average increase in key business metrics" },
              { stat: "98% Retention", desc: "Clients continue working with us long-term" },
            ].map((item, index) => (
              <ScaleInSection key={index} delay={index * 0.1}>
                <div className="p-8 bg-background border border-border rounded-lg text-center">
                  <div className="text-3xl sm:text-4xl font-bold mb-2">{item.stat}</div>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </ScaleInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Ready for your success story?</h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Let's discuss how we can apply this proven approach to your brand.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10">
              <Link href="/contact">Let's Talk</Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}
