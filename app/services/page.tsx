import { FadeInSection } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function ServicesPage() {
  const services = [
    {
      id: "strategy",
      title: "Website Design & Development",
      description:
        "High-converting websites built for your specific business goals. We design responsive, fast-loading websites that turn visitors into customers. From e-commerce to SaaS platforms.",
      features: [
        "Custom responsive design for all devices",
        "E-commerce & payment integration",
        "Performance optimization & fast loading",
        "SEO built in from day one",
        "Advanced analytics integration",
        "Ongoing optimization & support",
      ],
      color: "bg-background",
      image: "/website-design-development-mockup.jpg",
    },
    {
      id: "design",
      title: "Instagram Growth & Content Management",
      description:
        "Strategic Instagram growth that converts. We create engaging content, grow your following organically, and turn followers into paying customers. Proven to deliver 300%+ growth.",
      features: [
        "Content calendar & strategy development",
        "Professional content creation & photography",
        "Organic growth tactics & strategies",
        "Reels optimization & storytelling",
        "Hashtag research & community engagement",
        "Monthly performance analytics & reporting",
      ],
      color: "bg-secondary",
      image: "/instagram-strategy-analytics-dashboard.jpg",
    },
    {
      id: "growth",
      title: "Paid Advertising Campaigns",
      description:
        "Smart ad spend that generates qualified leads and sales. We manage Google Ads, Facebook, and Instagram campaigns with continuous optimization to maximize your ROI.",
      features: [
        "Google Ads (Search, Display, Shopping)",
        "Meta Ads (Facebook & Instagram campaigns)",
        "Retargeting & remarketing strategies",
        "Landing page design & optimization",
        "A/B testing & conversion tracking",
        "Monthly performance reports & adjustments",
      ],
      color: "bg-background",
      image: "/paid-ads-campaign-google-meta-optimization.jpg",
    },
    {
      id: "conversion",
      title: "Promotional Videos & Creative Production",
      description:
        "Compelling video content that tells your brand story and drives engagement. From product videos to promotional campaigns, we handle all creative production.",
      features: [
        "Promotional video production & editing",
        "Product showcase videos",
        "Brand storytelling content",
        "Social media video optimization",
        "Professional cinematography",
        "Post-production & animation",
      ],
      color: "bg-secondary",
      image: "/promotional-video-production-setup-studio.jpg",
    },
    {
      id: "creative",
      title: "Poster Design & Graphic Design",
      description:
        "Visual design that stops scrollers and converts viewers. Custom poster designs, social media graphics, marketing collateral, and complete visual identity systems.",
      features: [
        "Custom poster & flyer design",
        "Social media graphics & templates",
        "Brand identity & logo design",
        "Marketing collateral design",
        "Print-ready file preparation",
        "Design revisions until perfect",
      ],
      color: "bg-background",
      image: "/poster-design-graphic-design-mockup.jpg",
    },
    {
      id: "campaigns",
      title: "Complete Marketing Campaigns",
      description:
        "End-to-end campaigns that integrate websites, content, ads, and email into one cohesive growth system. Everything working together for exponential results.",
      features: [
        "Integrated campaign strategy & planning",
        "Multi-channel coordination & execution",
        "Content creation for all platforms",
        "Email marketing automation funnels",
        "Lead scoring & nurturing systems",
        "Performance dashboard & analytics",
      ],
      color: "bg-secondary",
      image: "/marketing-funnel-visualization-with-conversion-opt.jpg",
    },
  ]

  return (
    <main className="pt-20">
      {/* Services Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div>
          <FadeInSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">Services Built for Growth</h1>
            <p className="text-lg sm:text-xl text-balance opacity-90">
              We offer integrated services that work together to build, brand, and grow your business. Websites,
              Instagram growth, paid ads, video production, design, and complete campaigns.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 pattern-subtle-grid">
        <div>
          {services.map((service, index) => (
            <FadeInSection key={service.id} delay={index * 0.1}>
              <div id={service.id} className={`${service.color} rounded-lg p-6 md:p-8 lg:p-12 mb-12 border border-border`}>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                  <div>
                    <div className="relative h-64 rounded-lg overflow-hidden mb-8">
                      <Image
                        src={service.image || "/placeholder.svg?height=256&width=400"}
                        alt={service.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold mb-6">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-8">{service.description}</p>
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href="/contact">Get Started</Link>
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-muted-foreground mb-6 uppercase tracking-wide">
                      What's Included
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-primary font-bold mt-0.5">→</span>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div>
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance">Pricing Philosophy</h2>
            <div className="space-y-6 text-lg">
              <p>
                We don't compete on price. We compete on value. Our fees reflect the caliber of our team, the depth of
                our process, and the results we consistently deliver.
              </p>
              <p>
                Every project is unique. We assess scope, complexity, and opportunity to structure engagements that make
                sense for your business and timeline.
              </p>
              <p className="font-bold">Let's talk about what's possible for your brand.</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div>
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-balance">How We Work</h2>
          </FadeInSection>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We listen. We ask hard questions about your business, your market, and your goals.",
              },
              {
                step: "02",
                title: "Strategy & Planning",
                desc: "We develop a customized approach, timeline, and scope of work that aligns with your vision.",
              },
              {
                step: "03",
                title: "Execution",
                desc: "We execute with precision, maintaining transparency and delivering on schedule.",
              },
              {
                step: "04",
                title: "Launch & Optimize",
                desc: "We launch, measure results, gather feedback, and refine continuously for ongoing improvement.",
              },
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="grid md:grid-cols-2 gap-8 items-center pb-12 border-b border-border">
                  <div>
                    <div className="text-4xl sm:text-5xl font-bold text-muted-foreground mb-4">{item.step}</div>
                    <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                    <p className="text-lg text-muted-foreground">{item.desc}</p>
                  </div>
                  <div className="h-64 bg-gradient-to-br from-background to-secondary rounded-lg"></div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="text-center">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Ready to transform your brand?</h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">Let's discuss which services align with your goals and timeline.</p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-10">
              <Link href="/contact">Schedule a Call</Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}
