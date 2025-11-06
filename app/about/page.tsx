import { FadeInSection } from "@/components/motion-wrapper"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Bergs & Mark | Digital Marketing Agency & IT Solutions",
  description:
    "Learn about Bergs & Mark, a leading digital marketing agency and IT solutions firm. Discover our story, mission, and the values that drive us to deliver exceptional results for our clients. We are a team of experts dedicated to helping businesses grow.",
  keywords: ["about us", "digital marketing agency", "it solutions firm", "company story", "mission and values", "expert team"],
}

export default function AboutPage() {
  return (
    <main className="pt-20">
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto text-center">
          <FadeInSection>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">Our Story</h1>
            <p className="text-lg sm:text-xl text-balance opacity-90">
              Bergs & Mark was founded by a team of passionate digital marketing experts and IT professionals who were obsessed with delivering real growth and measurable results. We saw a gap in the market for a truly integrated service provider that could combine cutting-edge marketing strategies with robust IT solutions. Our journey began with a simple mission: to help businesses of all sizes build an unstoppable online presence and achieve their most ambitious goals.
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
                  Our mission is to empower ambitious brands to build an unstoppable online presence. We don't just add to the market clutter; we bring clarity, strategic positioning, and sustainable growth through our integrated digital marketing and IT solutions. We are committed to being the best service provider for our clients, delivering not just services, but tangible results.
                </p>
                <p className="text-lg text-muted-foreground">
                  Every brand we partner with becomes a leader in its industry. Every strategy we develop is designed to drive measurable results and a high return on investment. Every campaign we execute demonstrates the power of integrated, expert marketing and IT solutions, leading to exponential growth and long-term success.
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
                desc: "Beautiful design without a solid strategy is just decoration. As a leading IT firm, we start with your business goals, competitive analysis, and clear objectives. Our designs amplify your strategy and drive results.",
              },
              {
                title: "Measurable Results",
                desc: "We are a results-driven agency. We track the metrics that matter most to your business: revenue, conversions, leads, and ROI. We ignore vanity metrics and focus on data-driven decisions.",
              },
              {
                title: "Partnership Mindset",
                desc: "You're not just another client to us. We become a true partner in your success, deeply invested in your growth and long-term goals. We are the service provider you can trust.",
              },
              {
                title: "Directness & Clarity",
                desc: "We believe in honest and transparent communication. No corporate jargon or sugar-coating. We provide clear, strategic recommendations to help you succeed.",
              },
              {
                title: "Continuous Optimization",
                desc: "The first version is never the final one. As a top digital marketing agency, we continuously test, learn, analyze data, and refine our strategies for exponential improvement and sustained growth.",
              },
              {
                title: "Quality Without Compromise",
                desc: "We never deliver work that we're not proud of. While deadlines are important, excellence and integrity are paramount. We are committed to delivering the highest quality IT solutions and marketing campaigns.",
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
                  <h3 className="text-3xl font-bold mb-4">Expert Leadership from a Top IT Firm</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Our founding team brings over 2 years of combined experience in digital marketing, brand strategy, and IT solutions. As a leading agency, we have a deep understanding of the digital landscape and a proven track record of success.
                  </p>
                  <p className="text-lg text-muted-foreground">
                    We've navigated the complexities of digital marketing and IT so you don't have to. We know what works, what doesn't, and how to create a customized strategy that will deliver the results you need.
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
              <div>
                <h3 className="text-3xl font-bold mb-4">Our Culture of Excellence</h3>
                <p className="text-lg text-muted-foreground">
                  We foster a collaborative, not hierarchical, environment. Everyone on our team contributes to strategy and reviews work. The best ideas win, regardless of title. We are a team of passionate professionals who are hungry for results and celebrate success together. We obsess over the details because we know that they compound into remarkable outcomes for our clients. This is what makes us a top-tier service provider.
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
                image: "",
              },
              {
                name: "Vivaan Monga",
                title: "Exclusive Mentor, DevOps",
                bio: "7+ years in DevOps and Founder Of Karmaa Count",
                image: "",
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
                q: "Deep Strategic Thinking from a Leading Agency",
                a: "We don't start with design. We start with strategy. As a top digital marketing agency, we take the time to understand your market, competitors, and audience. Strategy guides every decision we make.",
              },
              {
                q: "End-to-End Execution from a Single IT Firm",
                a: "From initial positioning to campaign launch and optimization, we handle the entire process. You get a single, dedicated partner, not a collection of disconnected agencies. We are the IT solution firm that can do it all.",
              },
              {
                q: "Real, Measurable Results",
                a: "We are measured by the business outcomes we deliver, not by awards or accolades. Revenue, conversions, and growth are our key metrics. We are the service provider that delivers real results.",
              },
              {
                q: "Transparency & Communication",
                a: "We believe in open and honest communication. You'll receive weekly updates, participate in regular strategy sessions, and have direct access to our leadership team. You'll always know what's happening and why.",
              },
              {
                q: "Proven Track Record Across Industries",
                a: "Our case studies speak for themselves. We have a proven track record of success with clients in a wide range of industries, from SaaS and e-commerce to professional services. We deliver consistent results, no matter the industry.",
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
