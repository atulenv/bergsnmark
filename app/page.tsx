import NewHeroSection from "@/components/new-hero-section"
import { ClientLogosCarousel } from "@/components/client-logos-carousel"
import { ServiceCarousel } from "@/components/service-carousel"
import { FadeInSection } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <NewHeroSection />

      {/* Client Logos Section */}
      <section className="py-20 px-6 bg-secondary border-t border-b border-border">
        <div className="max-w-7xl mx-auto">
          <FadeInSection>
            <h3 className="text-center text-sm font-semibold text-foreground/60 uppercase tracking-widest mb-12">
              Trusted by Leading Brands
            </h3>
          </FadeInSection>
          <ClientLogosCarousel />
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="mb-20">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
                What We Do
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground mb-8 leading-tight">
                Complete Digital Growth Solutions
              </h2>
              <p className="text-lg sm:text-xl text-foreground/70 max-w-3xl leading-relaxed">
                From stunning websites to Instagram growth, paid ads to full-scale campaigns. We're your complete
                digital marketing partner.
              </p>
            </div>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {[
              {
                title: "Website Design & Development",
                description:
                  "High-converting websites that look stunning and perform. We build digital storefronts that turn visitors into customers.",
                points: [
                  "Custom responsive design",
                  "E-commerce integration",
                  "Performance optimization",
                  "SEO built-in from day one",
                  "Fast loading speeds",
                  "Mobile-first approach",
                ],
                image: "/beautiful-responsive-website-design-on-desktop-and.jpg",
              },
              {
                title: "Instagram Growth & Management",
                description:
                  "Your Instagram isn't just pretty. It's a conversion machine. We grow followers, increase engagement, and drive real results.",
                points: [
                  "Content strategy & creation",
                  "Growth hacking techniques",
                  "Engagement optimization",
                  "Influencer partnerships",
                  "Reels & story strategies",
                  "Analytics & reporting",
                ],
                image: "/instagram-feed-with-beautiful-branded-content-enga.jpg",
              },
              {
                title: "Paid Advertising (Google, Meta)",
                description:
                  "Smart ad spend. We create campaigns that generate leads and sales. Every dollar optimized for maximum ROI.",
                points: [
                  "Google Ads management",
                  "Facebook & Instagram ads",
                  "Retargeting campaigns",
                  "Landing page optimization",
                  "A/B testing & refinement",
                  "ROI tracking & reporting",
                ],
                image: "/digital-marketing-analytics-dashboard-with-convers.jpg",
              },
              {
                title: "Complete Growth Campaigns",
                description:
                  "End-to-end campaigns that tie everything together. Website + content + ads + email = exponential growth.",
                points: [
                  "Campaign strategy",
                  "Multi-channel execution",
                  "Content creation suite",
                  "Email marketing funnels",
                  "Lead nurturing systems",
                  "Performance analytics",
                ],
                image: "/marketing-funnel-visualization-with-conversion-opt.jpg",
              },
            ].map((service, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-card border border-border/50 p-6 md:p-8 lg:p-12 rounded-lg hover:border-accent/50 transition-colors group">
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                  <p className="text-foreground/70 mb-8 leading-relaxed">{service.description}</p>
                  <div className="space-y-2.5">
                    {service.points.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <span className="text-accent font-bold text-lg">▪</span>
                        <span className="text-foreground/70 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Services Deep Dive Carousel */}
      <section className="py-32 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
              Our Services
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground mb-20 leading-tight">Explore What We Offer</h2>
          </FadeInSection>

          <ServiceCarousel
            services={[
              {
                title: "Website Design & Development",
                description:
                  "We don't just build websites. We build revenue-generating machines. Every pixel, every interaction, every line of code is optimized for conversion. From e-commerce to SaaS, we create digital experiences that perform.",
                image: "/modern-website-design-mockup-on-desktop-and-mobile.jpg",
                features: [
                  "Fully responsive design for all devices",
                  "E-commerce & payment integration",
                  "SEO optimization built-in",
                  "Lightning-fast performance",
                  "Advanced analytics integration",
                  "Ongoing optimization & support",
                ],
              },
              {
                title: "Instagram Growth & Marketing",
                description:
                  "Instagram is where your customers are. We grow your following organically, create content that converts, and turn followers into paying customers. Our strategies are proven to deliver 300%+ growth.",
                image: "/instagram-feed-with-beautiful-branded-content-enga.jpg",
                features: [
                  "Content calendar & strategy",
                  "Organic growth tactics",
                  "Reels & stories optimization",
                  "Hashtag research & strategy",
                  "Community management",
                  "Influencer collaborations",
                ],
              },
              {
                title: "Paid Advertising Campaigns",
                description:
                  "Not all ad spend is created equal. We architect campaigns that generate qualified leads and sales. Through continuous optimization and testing, we maximize your ROI and minimize wasted spend.",
                image: "/digital-marketing-analytics-dashboard-with-convers.jpg",
                features: [
                  "Google Ads (Search, Display, Shopping)",
                  "Meta Ads (Facebook & Instagram)",
                  "Retargeting & remarketing campaigns",
                  "Landing page design & optimization",
                  "Conversion tracking & analytics",
                  "Monthly performance reports",
                ],
              },
              {
                title: "Complete Growth Campaigns",
                description:
                  "Why do individual tactics when you can orchestrate complete campaigns? We integrate websites, content, ads, and email into cohesive systems designed for exponential growth.",
                image: "/marketing-funnel-visualization-with-conversion-opt.jpg",
                features: [
                  "End-to-end campaign strategy",
                  "Multi-channel coordination",
                  "Content creation for all platforms",
                  "Email marketing automation",
                  "Lead scoring & nurturing",
                  "Performance analytics dashboard",
                ],
              },
            ]}
          />
        </div>
      </section>

      {/* The Market Reality */}
      <section className="py-32 px-6 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto">
          <FadeInSection>
            <span className="inline-block px-4 py-2 bg-white/10 text-primary-foreground rounded-full text-sm font-semibold mb-6">
              The Reality
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-12 leading-tight">Why Most Businesses Fail Online</h2>

            <div className="space-y-10 text-lg leading-relaxed">
              <div>
                <h3 className="text-2xl font-bold mb-4">They treat digital as an afterthought</h3>
                <p className="text-primary-foreground/80">
                  A beautiful website that doesn't convert. Social media posts with no strategy. Ads running without
                  clear goals. Nothing connects. Nothing works together. That's not a strategy—that's chaos.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">They hire multiple agencies</h3>
                <p className="text-primary-foreground/80">
                  One agency for the website. Another for social. Another for ads. Nobody talking to each other.
                  Conflicting strategies. Wasted budget. Mediocre results. The left hand never knows what the right hand
                  is doing.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">They focus on vanity metrics</h3>
                <p className="text-primary-foreground/80">
                  "Look! 10,000 followers!" But where are the customers? "We got 100,000 website visitors!" But only 50
                  conversions? Vanity metrics feel good but don't pay the bills. We obsess over metrics that matter:
                  revenue, ROI, growth.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">They settle for mediocre execution</h3>
                <p className="text-primary-foreground/80">
                  Amateur design. Low-quality content. Inconsistent branding. Poor user experience. Slow websites. These
                  details compound into poor results. We obsess over every detail because execution is everything.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* How We're Different */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
              Our Advantage
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground mb-20 leading-tight">
              Why Bergs & Mark Delivers Results
            </h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Integrated Approach",
                description:
                  "No silos. No disconnects. We orchestrate websites, content, ads, and email into one cohesive system. Everything works together for maximum impact.",
              },
              {
                title: "Results-Obsessed",
                description:
                  "We measure what matters: conversions, leads, revenue, ROI. Every strategy, every tactic, every decision is grounded in driving measurable business results.",
              },
              {
                title: "Strategic First",
                description:
                  "We start with strategy, not aesthetics. Clear positioning. Defined target audience. Proven systems. Then we execute with excellence.",
              },
              {
                title: "Transparent Reporting",
                description:
                  "No black boxes. Monthly dashboards showing exactly what's working, what's not, and why. You always know where your money is going and what ROI you're getting.",
              },
              {
                title: "Proven Track Record",
                description:
                  "50+ brands transformed. $20M+ in revenue generated. 4.9★ rating from clients. These aren't promises—they're proof.",
              },
              {
                title: "Obsessive Execution",
                description:
                  "Good strategy + mediocre execution = failure. We obsess over details. Perfect design. Optimized copy. Fast websites. Quality content. Excellence everywhere.",
              },
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.05}>
                <div className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 px-6 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
              Results
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground mb-20 leading-tight">Client Success Stories</h2>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: "E-Commerce Startup",
                industry: "Fashion & Apparel",
                challenge: "3% conversion rate, high bounce rate, poor user experience on mobile.",
                solution:
                  "Complete website redesign + ad campaign + email funnels. Optimized for mobile, streamlined checkout, retargeting campaigns.",
                results: "6.2% conversion rate (+107%), 40% lower bounce rate, $500k additional revenue in year one.",
                image: "/fashion-ecommerce-website.png",
              },
              {
                name: "SaaS Platform",
                industry: "Project Management",
                challenge: "Low brand awareness, no social presence, unstructured marketing efforts.",
                solution:
                  "Brand strategy + Instagram growth program + Google Ads + content calendar. Built entire digital presence from scratch.",
                results:
                  "50k Instagram followers, 35 qualified leads monthly, $1M ARR growth, established market authority.",
                image: "/saas-dashboard-design-interface.jpg",
              },
              {
                name: "Local Service Provider",
                industry: "Home Services",
                challenge: "Relying on referrals only, no online presence, competitors outranking them.",
                solution: "Website + SEO optimization + Google Local + paid search + content strategy.",
                results: "70% of new business from online, ranked #1 for main keywords, 3x revenue growth.",
                image: "/professional-service-provider-website.jpg",
              },
              {
                name: "Digital Product Creator",
                industry: "Online Courses",
                challenge: "Launching a course, no existing audience, need to build credibility fast.",
                solution: "Complete launch strategy: landing page + email funnels + Instagram strategy + launch ads.",
                results: "1200 course enrollments in first month, $150k revenue, 15k engaged social following.",
                image: "/online-course-dashboard.png",
              },
            ].map((study, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-card border border-border/50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={study.image || "/placeholder.svg"}
                      alt={study.name}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 md:p-6 lg:p-8">
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-accent uppercase tracking-widest">{study.industry}</p>
                      <h3 className="text-2xl font-bold text-foreground mt-2">{study.name}</h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-2">
                          Challenge
                        </p>
                        <p className="text-foreground/70 text-sm">{study.challenge}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wide mb-2">
                          Solution
                        </p>
                        <p className="text-foreground/70 text-sm">{study.solution}</p>
                      </div>
                      <div className="pt-2 border-t border-border">
                        <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-2">Results</p>
                        <p className="text-foreground font-semibold text-sm">{study.results}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10">
              <Link href="/work">View All Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-6">
              Process
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-foreground mb-20 leading-tight">How We Work Together</h2>
          </FadeInSection>

          <div className="space-y-16">
            {[
              {
                step: "01",
                title: "Discovery & Audit",
                description:
                  "We dive deep. Understand your business, goals, target audience, and competitive landscape. What are you solving? Who needs it? Why should they care about you vs competitors?",
              },
              {
                step: "02",
                title: "Strategy Session",
                description:
                  "We develop your digital strategy. Clear positioning. Defined audience segments. Proven systems for reaching them. This becomes your North Star—everything else flows from this.",
              },
              {
                step: "03",
                title: "Creative Execution",
                description:
                  "We build it all. Website design. Content creation. Ad copy. Email sequences. Social media strategy. Every piece is crafted to support your overall strategy and drive conversions.",
              },
              {
                step: "04",
                title: "Campaign Launch",
                description:
                  "We coordinate the launch across all channels. Websites go live. Social content starts flowing. Ads go active. Everything synchronized for maximum impact and brand consistency.",
              },
              {
                step: "05",
                title: "Continuous Optimization",
                description:
                  "Launch is just the beginning. We monitor everything, gather data, test variations, and optimize continuously. Every month we refine further. ROI compounds over time.",
              },
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.08}>
                <div className="flex gap-8 md:gap-12 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-accent/10 flex items-center justify-center border-2 border-accent">
                      <span className="text-2xl md:text-3xl font-black text-accent">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-grow pt-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">{item.title}</h3>
                    <p className="text-base md:text-lg text-foreground/70 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-8 leading-tight">Ready to Grow?</h2>
            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-12 leading-relaxed">
              Let's talk about your business, your goals, and how we can help you build an unstoppable online presence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto">
                <Link href="/contact">Start Your Growth Journey</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 h-auto border-2 border-white text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/work">Explore Case Studies</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}
