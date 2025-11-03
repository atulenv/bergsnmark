import { FadeInSection } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto text-center">
          <FadeInSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">Our Story</h1>
            <p className="text-lg sm:text-xl text-balance opacity-90">
              Built by digital marketing experts obsessed with real growth and measurable results.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Mission with image */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 pattern-subtle-grid">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="grid gap-12 lg:gap-16 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-balance">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  We exist to help ambitious brands build unstoppable online presence. Not to add clutter to the market,
                  but to create clarity, strategic positioning, and sustainable growth through integrated digital
                  solutions.
                </p>
                <p className="text-lg text-muted-foreground">
                  Every brand we work with becomes stronger. Every strategy we develop drives measurable results. Every
                  campaign we execute demonstrates that integrated, expert marketing delivers exponential growth.
                </p>
              </div>
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
                <Image
                  src="/professional-team-working-on-laptop-in-modern-offi.jpg"
                  alt="Our team working together"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16">Our Core Values</h2>
          </FadeInSection>

          <div className="grid gap-10 md:grid-cols-2">
            {[
              {
                title: "Strategy Over Aesthetics",
                desc: "Beautiful design without strategy is decoration. We start with positioning, competitive advantage, and clear goals. Design amplifies strategy.",
              },
              {
                title: "Measurable Results",
                desc: "We track what matters. Revenue, conversions, leads, ROI. Vanity metrics are ignored. Every decision is data-driven.",
              },
              {
                title: "Partnership Mindset",
                desc: "You're not a client number. We become invested in your success and remain committed to your growth long-term.",
              },
              {
                title: "Directness & Clarity",
                desc: "We say what we think. No corporate speak, no sugar coating. Just honest feedback and clear strategic recommendations.",
              },
              {
                title: "Continuous Optimization",
                desc: "First version is never final. We test, learn, analyze data, and refine continuously for exponential improvement.",
              },
              {
                title: "Quality Without Compromise",
                desc: "We never ship work we're not proud of. Deadlines matter, but excellence and integrity matter more.",
              },
            ].map((value, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground text-lg">{value.desc}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8 pattern-minimal-dots">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16">The Team</h2>
            <div className="space-y-12">
              <div className="grid gap-10 md:grid-cols-2 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4">Expert Leadership</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Our founding team brings 2+ years of combined experience in digital marketing, brand strategy, and
                    business growth.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    We've made every mistake so you don't have to. We know what works and what doesn't in digital
                    marketing.
                  </p>
                </div>
                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden">
                  <Image
                    src="/team-collaboration-meeting-professional-environmen.jpg"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="grid gap-10 md:grid-cols-2 items-center">
                <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden order-2 md:order-1">
                  <Image
                    src="/social-media-content-creation-team.jpg"
                    alt="Content creation team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4">Our Culture</h3>
                <p className="text-lg text-muted-foreground">
                  We're collaborative, not hierarchical. Everyone contributes to strategy. Everyone reviews work. Ideas
                  win based on merit, not title. We work focused, we stay hungry for results, and we celebrate success
                  together. We obsess over details because details compound into remarkable outcomes.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { stat: "10+", label: "Brands Transformed" },
                { stat: "2+", label: "Years Combined Experience" },
                { stat: "$7K+", label: "Revenue Generated for Clients" },
                { stat: "65%", label: "Client Retention Rate" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">{item.stat}</div>
                  <div className="text-sm opacity-90">{item.label}</div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-center text-balance">Leadership Team</h2>
          </FadeInSection>

          <div className="grid gap-10 md:grid-cols-3">
            {[
              {
                name: "Atul Sahu",
                title: "Founder & Strategy Director",
                bio: "2+ years in digital marketing And Search Engine Optimization.",
                image: "/professional-headshot-woman-ceo-founder.jpg",
              },
            
            ].map((member, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="relative aspect-square mb-6 rounded-lg overflow-hidden">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-4">{member.title}</p>
                  <p className="text-foreground/70 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16">What Our Clients Say</h2>
          </FadeInSection>

          <div className="grid gap-10 md:grid-cols-2">
            {[
              {
                quote:
                  "Bergs & Mark didn't just redesign our website—they transformed our entire digital presence. Our conversion rate went from 2% to 6.2% and revenue increased 65% year-over-year.",
                author: "Jessica Lee",
                company: "Luxe Collective (E-commerce)",
                image: "/professional-headshot-woman-entrepreneur.jpg",
              },
              {
                quote:
                  "The strategic clarity they brought to our positioning was game-changing. We went from being invisible to the market leader in our category within 6 months.",
                author: "David Thompson",
                company: "TechScale Industries (SaaS)",
                image: "/professional-ceo-headshot.png",
              },
              {
                quote:
                  "Working with Bergs & Mark felt like having a world-class marketing team as our partner. The transparency, results, and ongoing optimization are unmatched.",
                author: "Maria Gonzalez",
                company: "CloudVault Pro (Cloud Infrastructure)",
                image: "/woman-executive-headshot.png",
              },
              {
                quote:
                  "They didn't just execute—they educated us. We learned their framework and now have the capability to grow even faster independently.",
                author: "James Wong",
                company: "FinEdge Analytics (FinTech)",
                image: "/professional-headshot-man-business.jpg",
              },
            ].map((testimonial, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="bg-card border border-border/50 p-8 rounded-lg">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-foreground/80 text-lg mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-foreground/60">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-16 text-balance">Why Work With Us</h2>
          </FadeInSection>

          <div className="space-y-8">
            {[
              {
                q: "Deep Strategic Thinking",
                a: "We don't start with design. We start with strategy. We understand your market, competitors, and audience. Strategy guides every decision.",
              },
              {
                q: "End-to-End Execution",
                a: "From positioning through launch and optimization, we own the entire process. You get one partner, not 5 different agencies.",
              },
              {
                q: "Real Results",
                a: "We're measured by business outcomes, not awards or accolades. Revenue, conversions, growth—these are our metrics.",
              },
              {
                q: "Transparency & Communication",
                a: "Weekly updates. Regular strategy sessions. Direct access to leadership. You always know what's happening and why.",
              },
              {
                q: "Proven Track Record",
                a: "We have case studies from SaaS to e-commerce to professional services. Diverse industries, consistent results.",
              },
            ].map((item, index) => (
              <FadeInSection key={index} delay={index * 0.1}>
                <div className="pb-8 border-b border-border">
                  <h3 className="text-2xl font-bold mb-4">{item.q}</h3>
                  <p className="text-muted-foreground text-lg">{item.a}</p>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">Let's build something remarkable.</h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90">
              If our approach resonates, let's talk about what we can do together.
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-10">
              <Link href="/contact">Start a Conversation</Link>
            </Button>
          </FadeInSection>
        </div>
      </section>
    </main>
  )
}
