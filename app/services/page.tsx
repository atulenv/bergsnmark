import { FadeInSection } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Our Services | Digital Marketing Agency & IT Solutions",
  description:
    "Explore the wide range of services offered by Bergs & Mark, a leading digital marketing agency and IT solutions firm. From SEO and PPC to web design and development, we have the expertise to help you achieve your business goals.",
  keywords: ["services", "digital marketing", "it solutions", "seo", "ppc", "web design", "web development", "social media marketing"],
}

export default function ServicesPage() {
  const services = [
    {
      id: "strategy",
      title: "Website Design & Development",
      description:
        "As a top IT firm, we build high-converting websites that are not only visually stunning but also optimized for performance and search engines. We design responsive, fast-loading websites that turn your visitors into loyal customers. Whether you need an e-commerce platform or a SaaS application, our web development team has you covered.",
      features: [
        "Custom responsive design for all devices",
        "E-commerce & payment integration",
        "Performance optimization & fast loading speeds",
        "SEO built-in from day one for maximum visibility",
        "Advanced analytics and tracking integration",
        "Ongoing optimization & support from our expert team",
      ],
      color: "bg-background",
      image: "/website-design-development-mockup.jpg",
    },
    {
      id: "design",
      title: "Instagram Growth & Content Management",
      description:
        "Our digital marketing agency offers strategic Instagram growth services that deliver real results. We create engaging content, grow your following organically, and turn your followers into paying customers. Our proven strategies have been shown to deliver over 300% growth for our clients.",
      features: [
        "Content calendar & strategy development",
        "Professional content creation & photography",
        "Organic growth tactics & follower engagement strategies",
        "Reels optimization & compelling storytelling",
        "In-depth hashtag research & community management",
        "Monthly performance analytics & detailed reporting",
      ],
      color: "bg-secondary",
      image: "/instagram-strategy-analytics-dashboard.jpg",
    },
    {
      id: "growth",
      title: "Paid Advertising Campaigns",
      description:
        "Our agency specializes in smart ad spend that generates qualified leads and drives sales. We manage Google Ads, Facebook, and Instagram campaigns, and our team of experts continuously optimizes your campaigns to maximize your return on investment (ROI).",
      features: [
        "Google Ads (Search, Display, Shopping) management",
        "Meta Ads (Facebook & Instagram campaigns) expertise",
        "Effective retargeting & remarketing strategies",
        "High-converting landing page design & optimization",
        "Comprehensive A/B testing & conversion tracking",
        "Monthly performance reports & strategic adjustments",
      ],
      color: "bg-background",
      image: "/paid-ads-campaign-google-meta-optimization.jpg",
    },
    {
      id: "conversion",
      title: "Promotional Videos & Creative Production",
      description:
        "As a full-service agency, we create compelling video content that tells your brand's story and drives engagement. From product videos to promotional campaigns, our creative team handles all aspects of production, ensuring a final product that resonates with your audience.",
      features: [
        "Promotional video production & professional editing",
        "Engaging product showcase videos",
        "Creative brand storytelling content",
        "Social media video optimization for all platforms",
        "High-quality professional cinematography",
        "Post-production services, including animation and effects",
      ],
      color: "bg-secondary",
      image: "/promotional-video-production-setup-studio.jpg",
    },
    {
      id: "creative",
      title: "Poster Design & Graphic Design",
      description:
        "Our design team creates visual content that stops scrollers in their tracks and converts viewers into customers. We offer custom poster designs, social media graphics, marketing collateral, and complete visual identity systems to make your brand stand out.",
      features: [
        "Custom poster & flyer design for all your marketing needs",
        "Engaging social media graphics & custom templates",
        "Comprehensive brand identity & logo design services",
        "Professionally designed marketing collateral",
        "Print-ready file preparation and delivery",
        "Unlimited design revisions until you are 100% satisfied",
      ],
      color: "bg-background",
      image: "/poster-design-graphic-design-mockup.jpg",
    },
    {
      id: "campaigns",
      title: "Complete Marketing Campaigns",
      description:
        "Our IT solution firm provides end-to-end marketing campaigns that integrate your website, content, ads, and email into a single, cohesive growth system. By ensuring that all of your marketing efforts are working together, we can deliver exponential results for your business.",
      features: [
        "Integrated campaign strategy & meticulous planning",
        "Multi-channel coordination & flawless execution",
        "High-quality content creation for all your platforms",
        "Effective email marketing automation funnels",
        "Advanced lead scoring & nurturing systems",
        "Comprehensive performance dashboard & in-depth analytics",
      ],
      color: "bg-secondary",
      image: "/marketing-funnel-visualization-with-conversion-opt.jpg",
    },
  ]

  return (
    <main className="pt-20">
      {/* Services Hero */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto text-center">
          <FadeInSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">Services Built for Growth</h1>
            <p className="text-lg sm:text-xl text-balance opacity-90">
              As a premier digital marketing agency and IT solution firm, we offer a comprehensive suite of integrated services that work together to build, brand, and grow your business. From stunning websites and strategic Instagram growth to targeted paid ads, captivating video production, creative design, and complete, end-to-end marketing campaigns, we are the service provider that can do it all.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 pattern-subtle-grid">
        <div className="max-w-6xl mx-auto">
          {services.map((service, index) => (
            <FadeInSection key={service.id} delay={index * 0.1}>
              <div
                id={service.id}
                className={`${service.color} rounded-lg p-6 md:p-8 lg:p-12 mb-12 border border-border`}
              >
                <div className="grid gap-10 lg:gap-16 md:grid-cols-2 items-start">
                  <div className="flex flex-col">
                    <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden mb-8">
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
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-balance">Our Pricing Philosophy</h2>
            <div className="space-y-6 text-lg">
              <p>
                As a leading digital marketing agency, we don't compete on price; we compete on the value we deliver. Our fees reflect the high caliber of our team, the depth of our strategic process, and the exceptional results we consistently achieve for our clients. We are a service provider that is committed to your success.
              </p>
              <p>
                Every project we undertake is unique. We take the time to assess the scope, complexity, and opportunities of your project to structure an engagement that makes sense for your business and timeline. As a top IT firm, we provide customized solutions that are tailored to your specific needs.
              </p>
              <p className="font-bold">Let's discuss what's possible for your brand and how our agency can help you achieve your goals.</p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-balance">How Our Agency Works</h2>
          </FadeInSection>

          <div className="space-y-12">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                desc: "We start by listening. We ask the hard questions about your business, your target market, and your ultimate goals. This allows us to get a deep understanding of your needs and how our services can help.",
              },
              {
                step: "02",
                title: "Strategy & Planning",
                desc: "As a top IT solution firm, we develop a customized approach, a detailed timeline, and a comprehensive scope of work that aligns with your vision. Our strategic planning process ensures that we are always on the right track.",
              },
              {
                step: "03",
                title: "Execution with Precision",
                desc: "Our team of experts executes your project with precision and attention to detail. We maintain complete transparency throughout the process and are committed to delivering on schedule.",
              },
              {
                step: "04",
                title: "Launch & Continuous Optimization",
                desc: "After we launch your project, we continuously measure the results, gather feedback, and refine our strategies for ongoing improvement. This commitment to optimization is what sets our agency apart.",
              },
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="grid gap-8 md:grid-cols-2 items-center pb-12 border-b border-border">
                  <div>
                    <div className="text-4xl sm:text-5xl font-bold text-muted-foreground mb-4">{item.step}</div>
                    <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                    <p className="text-lg text-muted-foreground">{item.desc}</p>
                  </div>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-background to-secondary" />
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
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
