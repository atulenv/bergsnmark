import { FadeInSection, ScaleInSection } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Work | Digital Marketing Agency & IT Solutions",
  description:
    "Explore the case studies of Bergs & Mark, a leading digital marketing agency and IT solutions firm. See how we have helped businesses achieve their goals with our innovative strategies and custom solutions.",
  keywords: ["case studies", "our work", "digital marketing", "it solutions", "success stories", "client results"],
}

export default function WorkPage() {
  const caseStudies = [
    {
      id: 1,
      company: "TechScale Industries",
      industry: "B2B SaaS",
      challenge:
        "As a B2B SaaS company, TechScale Industries was undifferentiated in a crowded market, competing solely on features with no clear positioning or messaging strategy. They were struggling to attract quality leads and their digital marketing efforts were falling flat.",
      solution:
        'Our agency conducted a complete brand repositioning, establishing them as the "Enterprise Solution for Mid-Market Growth." This involved creating a strategic messaging framework, redesigning their website for a better user experience, developing a content strategy to showcase their expertise, and implementing a targeted paid ads campaign. This was a comprehensive IT solution that addressed all of their challenges.',
      results: [
        "Sales inquiry rate increased by 3x in just 6 months",
        "Brand recognition improved by 250% in their target market",
        "The average deal size increased by a remarkable 40%",
        "An additional $2.3M in annual recurring revenue (ARR) was generated",
      ],
      image: "/saas-dashboard-design-interface.jpg",
    },
    {
      id: 2,
      company: "Luxe Collective",
      industry: "E-Commerce Premium Products",
      challenge:
        "Luxe Collective had a premium product line but was struggling with a low 2% conversion rate. Their checkout experience was confusing, lacked trust signals, and was not optimized for mobile users, a critical issue for any e-commerce business.",
      solution:
        "Our digital marketing agency conducted a complete customer journey redesign. We simplified the checkout process, added social proof badges to build trust, optimized product pages with high-quality imagery, implemented strategic email funnel sequences to nurture leads, and ran effective retargeting campaigns to bring back lost customers.",
      results: [
        "The conversion rate increased from 2% to 6.2% (+210%)",
        "An additional $500k in annual recurring revenue (ARR) was generated in the first year",
        "Customer lifetime value (LTV) increased by an impressive 85%",
        "Cart abandonment was reduced by a significant 35%",
      ],
      image: "/fashion-ecommerce-website.png",
    },
    {
      id: 3,
      company: "GrowthLabs Marketing",
      industry: "Professional Services / Consulting",
      challenge:
        "GrowthLabs Marketing, a service-based agency, had weak market positioning, minimal online visibility, and inconsistent lead generation. They were competing primarily on price, which was not a sustainable business model.",
      solution:
        "As a top service provider, we built a comprehensive thought leadership platform for GrowthLabs. We developed a new positioning framework, created a content strategy to establish them as experts, redesigned their website to be more professional and user-friendly, implemented a robust SEO strategy to improve their search engine rankings, and launched a consistent organic visibility engine across all of their channels.",
      results: [
        "Qualified leads increased from 5 to over 50 per month",
        "They are now established as an authority and thought leader in their industry",
        "Monthly retainer revenue increased by an incredible 300%",
        "Website traffic increased by a massive 400%",
      ],
      image: "/professional-service-provider-website.jpg",
    },
    {
      id: 4,
      company: "CloudVault Pro",
      industry: "Cloud Infrastructure / Technical SaaS",
      challenge:
        "CloudVault Pro had a complex technical product with poor messaging clarity. Their target prospects didn't understand the value proposition or key differentiators, which was a major roadblock to their growth.",
      solution:
        "Our IT solution firm simplified their positioning and created a clear messaging hierarchy that was used across all of their marketing channels. We redesigned their website for clarity, created engaging explainer content to educate their audience, built a case study framework to showcase their successes, and implemented an educational content strategy to build trust and authority.",
      results: [
        "Product adoption increased by an astounding 300%",
        "The free trial conversion rate improved by 120%",
        "Support inquiries were reduced by 45% due to the improved clarity of their messaging",
        "Customer onboarding time was reduced by 50%",
      ],
      image: "/tech-startup-dashboard.jpg",
    },
    {
      id: 5,
      company: "The Artisan Co.",
      industry: "Direct-to-Consumer / Luxury Products",
      challenge:
        "The Artisan Co. had high-quality handmade products but was competing on price in a commoditized market. They had no premium brand positioning or compelling brand story to differentiate themselves from the competition.",
      solution:
        "Our agency built a premium brand narrative for The Artisan Co., redesigned their packaging and visual identity to reflect their high-quality products, created a content strategy that showcased their craftsmanship, launched a successful PR campaign to generate buzz, and implemented an Instagram growth strategy to reach a wider audience.",
      results: [
        "The average order value (AOV) increased by 65%",
        "The brand became highly recognizable in the luxury community",
        "Wholesale partnerships increased by an impressive 5x",
        "Their Instagram followers grew from 5,000 to 50,000",
      ],
      image: "/luxury-e-commerce-storefront.jpg",
    },
    {
      id: 6,
      company: "FinEdge Analytics",
      industry: "FinTech / Data Analytics",
      challenge:
        "FinEdge Analytics had a powerful analytics platform but was invisible to the market. Their target B2B audience didn't even know they existed, despite having an excellent product. This is a common challenge for many IT firms.",
      solution:
        "Our digital marketing agency developed a comprehensive content strategy to put FinEdge Analytics on the map. We built an SEO-optimized blog, created valuable educational resources, implemented a performance marketing system to track their results, and launched targeted paid search campaigns to reach their ideal customers.",
      results: [
        "Organic traffic increased by a massive 400%",
        "Product trial signups increased by an impressive 250%",
        "They now rank #1 for over 15 key search terms in their industry",
        "The customer acquisition cost (CAC) was reduced by 40%",
      ],
      image: "/growth-metrics-analytics.jpg",
    },
  ]

  return (
    <main className="pt-20">
      {/* Work Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto text-center">
          <FadeInSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">Our Work</h1>
            <p className="text-lg sm:text-xl text-balance opacity-90">
              Explore our case studies from diverse industries to see how our digital marketing agency and IT solution firm has positioned, built, and scaled ambitious brands to become market leaders. We are the service provider that delivers results.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 pattern-subtle-grid">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <FadeInSection key={study.id} delay={index * 0.1}>
                <div className="grid gap-12 lg:gap-16 md:grid-cols-2 items-start">
                  {/* Image */}
                  <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
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
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-balance">Measurable Results Across Industries from a Top Agency</h2>
          </FadeInSection>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { stat: "3 Industries", desc: "Our digital marketing agency has proven expertise across diverse sectors, including B2B SaaS, e-commerce, and professional services." },
              { stat: "175%+ Avg Growth", desc: "We deliver an average increase in key business metrics for our clients, driving substantial growth and ROI." },
              { stat: "65% Retention", desc: "Our clients continue to work with us long-term, a testament to the quality of our service and the results we deliver as a leading IT firm." },
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
        <div className="max-w-4xl mx-auto text-center">
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
