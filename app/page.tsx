"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false)

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Counter animation
  useEffect(() => {
    const counters = document.querySelectorAll(".counter")
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target as HTMLElement
          const target = Number.parseInt(counter.getAttribute("data-target") || "0")
          let current = 0
          const increment = target / 100
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              counter.textContent = target.toString()
              clearInterval(timer)
            } else {
              counter.textContent = Math.ceil(current).toString()
            }
          }, 20)
        }
      })
    })
    counters.forEach((counter) => observer.observe(counter))
    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      name: "Maria Gonzalez",
      role: "GM in Fintech industry",
      image: "/professional-woman-diverse.png",
      rating: 5,
      text: "MOBILE INNOVATION transformed our digital presence. Their campaign resulted in a 189% increase .",
    },
    {
      name: "Ahmed Al Marri",
      role: "Private company owner.",
      image: "/middle-eastern-businessman.png",
      rating: 5,
      text: "The team understands Dubai's luxury market perfectly. Their influencer campaign drove 240% more foot traffic during Ramadan — we've extended our contract for another year.",
    },
    {
      name: "Elena Petrova",
      role: "Marketing Director",
      image: "/professional-woman-executive.png",
      rating: 4.5,
      text: "We needed high-quality leads. MOBILE INNOVATION's LinkedIn strategy delivered 12000+ qualified leads — 30% of which converted to sales.",
    },
    {
      /*{
      name: "Raj Patel",
      role: "Owner, JBR Seafood Restaurant",
      image: "/restaurant-owner.png",
      rating: 5,
      text: "TikTok was new to us, but MOBILE INNOVATION made it work. Their videos of our beachfront dining went viral — delivery orders increased by 300% in just 2 months.",
    },*/
    },
  ]

  const services = [
    {
      icon: "📈",
      title: "Data-Driven Marketing",
      description: "Tailored for Regional solutions",
      features: ["Audience Segmentation", "Real-Time Campaign Optimization", "ROI Tracking & Reporting"],
    },
    {
      icon: "📢",
      title: "Social Media Advertising",
      description:
        "Engage regional audience on Google, Instagram, TikTok, Facebook and LinkedIn - with content aligned to local culture.",
      features: ["Culture-Aligned Content", "Influencer Collaboration", "Paid Campaign Management"],
    },
    {
      icon: "🔍",
      title: "SEO & Content Marketing",
      description: "Rank higher on Google - with content that resonates with different audiences",
      features: ["Bilingual SEO", "Local SEO", "Industry-Specific Content Creation"],
    },
    {
      icon: "🎨",
      title: "Digital Creative",
      description: "Design ads, videos, and landing pages that reflect pioneer - and drive clicks",
      features: ["Luxury Visual Design", "Video Production (Local Landmarks)", "Conversion-Optimized Landing Pages"],
    },
    {
      icon: "🗺️",
      title: "Market Strategy",
      description: "Navigate Regional unique business landscape - from cultural norms to regulatory requirements.",
      features: ["Localization (Language, Culture)", "Holiday Campaigns ", "Competitor Analysis"],
    },
    {
      icon: "📊",
      title: "Analytics & Insights",
      description: "Turn data into action with custom reports — focused on key performance metrics.",
      features: ["Custom Data Dashboards", "Performance Forecasting", "Actionable Recommendations"],
    },
  ]

  const projects = [
    {
      image: "/luxury-hotel-dubai-marina.png",
      category: "Hotels",
      title: "Hotel Business",
      description: "Increased bookings by 189% via social media ads and SEO — targeting tourists.",
    },
    {
      image: "/luxury-retail-dubai-mall.png",
      category: "Retail",
      title: "Mall Business",
      description: "Drove 240% foot traffic with Eid campaign — combining influencer marketing and local SEO.",
    },
    {
      image: "/dubai-real-estate-downtown.png",
      category: "Real Estate",
      title: "Downtown Villas",
      description: "Generated 120+ leads via targeted LinkedIn ads — focusing on expat professionals in Dubai.",
    },
    {
      image: "/dubai-restaurant-seafood.png",
      category: "F&B",
      title: "Restaurant Business",
      description: "Increased delivery orders by 300% with TikTok ads — showcasing Dubai beachfront dining.",
    },
    {
      image: "/dubai-spa-palm-jumeirah.png",
      category: "Wellness",
      title: "Fintech APP Business",
      description: "Boosted 200% increasing of app downloads.",
    },
  ]

  const insights = [
    {
      image: "/dubai-social-media-trends.png",
      category: "Social Media",
      date: "August 15, 2024",
      readTime: "6 min read",
      title: "2024 Dubai Social Media Trends: What Brands Need to Know",
      description:
        "From TikTok's dominance among expats to Ramadan content strategies — how to leverage social media in Dubai this year.",
    },
    {
      image: "/dubai-seo-strategy.png",
      category: "SEO",
      date: "July 28, 2024",
      readTime: "7 min read",
      title: "Bilingual SEO in Dubai: Arabic vs. English Keyword Strategy",
      description:
        "Data-backed insights on which languages drive more traffic — and how to optimize for both local Emiratis and expats.",
    },
    {
      image: "/dubai-eid-marketing.png",
      category: "Strategy",
      date: "June 12, 2024",
      readTime: "5 min read",
      title: "Eid Al-Adha 2024: Marketing Campaign Ideas for Dubai Brands",
      description: "How to create culturally sensitive campaigns that resonate — with examples from top Dubai brands.",
    },
  ]

  return (
    <div className="font-sans text-neutral-800 bg-stone-100 antialiased">
      {/* Navigation */}
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${isNavbarScrolled ? "bg-slate-800/95 backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <a href="#" className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-600 to-amber-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl">MI</span>
              </div>
              <span className="text-2xl font-bold text-white">
                MOBILE<span className="text-amber-500">INNOVATION</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-white hover:text-amber-500 transition-colors">
                About us
              </a>
              <a href="#services" className="text-white hover:text-amber-500 transition-colors">
                Service
              </a>
              <a href="#work" className="text-white hover:text-amber-500 transition-colors">
                Work
              </a>
              <a href="#insights" className="text-white hover:text-amber-500 transition-colors">
                Insights
              </a>
              <a href="#contact" className="text-white hover:text-amber-500 transition-colors">
                Contact
              </a>
            </nav>

            {/* Desktop CTA */}
            <Button className="hidden md:block bg-amber-500 hover:bg-amber-400 text-slate-600 font-semibold px-6 py-2 rounded-full transition-all transform hover:scale-105">
              Get a Proposal
            </Button>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white text-2xl">
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-600/95 backdrop-blur-md">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a href="#about" className="text-white hover:text-amber-500 transition-colors py-2">
                About us
              </a>
              <a href="#services" className="text-white hover:text-amber-500 transition-colors py-2">
                Service
              </a>
              <a href="#work" className="text-white hover:text-amber-500 transition-colors py-2">
                Work
              </a>
              <a href="#insights" className="text-white hover:text-amber-500 transition-colors py-2">
                Insights
              </a>
              <a href="#contact" className="text-white hover:text-amber-500 transition-colors py-2">
                Contact
              </a>
              <Button className="bg-amber-500 hover:bg-amber-400 text-slate-600 font-semibold px-6 py-3 rounded-full text-center transition-all">
                Get a Proposal
              </Button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-800">
        {/* Background Elements */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
        <div className="absolute top-20 right-10 w-60 h-60 rounded-full bg-amber-500/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-slate-600/20 blur-3xl"></div>

        {/* Dubai Skyline */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-slate-600/30"
          style={{
            clipPath:
              "polygon(0 100%, 5% 80%, 10% 95%, 15% 70%, 20% 100%, 25% 65%, 30% 90%, 35% 75%, 40% 100%, 45% 80%, 50% 95%, 55% 70%, 60% 90%, 65% 60%, 70% 85%, 75% 70%, 80% 95%, 85% 65%, 90% 80%, 95% 70%, 100% 100%)",
          }}
        ></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                We Create{" "}
                <span className="bg-gradient-to-r from-amber-500 to-slate-600 bg-clip-text text-transparent">
                  Digital Experiences
                </span>{" "}
                That Convert
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0">
                Digital marketing & Online advertising agency - Combining data-driven strategies with creative
                excellence to grow your brand globally.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                <Button className="bg-amber-500 hover:bg-amber-400 text-slate-600 font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105">
                  View Our Work
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-white text-white hover:border-amber-500 hover:text-amber-500 font-semibold px-8 py-4 rounded-full transition-all bg-transparent"
                >
                  Contact Us
                </Button>
              </div>

              {/* Client Logos */}
              {/*<div className="mt-16 hidden md:block">
                <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">Trusted by Brands in Dubai</p>
                <div className="flex flex-wrap items-center gap-8 opacity-70">
                  <img
                    src="/generic-company-logo.png"
                    alt="Client logo"
                    className="h-8 grayscale hover:grayscale-0 transition-all"
                  />
                  <img
                    src="/abstract-business-logo.png"
                    alt="Client logo"
                    className="h-8 grayscale hover:grayscale-0 transition-all"
                  />
                  <img
                    src="/generic-brand-logo.png"
                    alt="Client logo"
                    className="h-8 grayscale hover:grayscale-0 transition-all"
                  />
                  <img
                    src="/generic-corporate-logo.png"
                    alt="Client logo"
                    className="h-8 grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </div>*/}
            </div>

            {/* Visual Content */}
            <div className="w-full lg:w-2/3 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
                <img
                  src="/banner-image.jpg"
                  alt="Digital marketing dashboard with Dubai data"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-800/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    {/*<div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>*/}
                    {/*<span className="text-white text-sm">Dubai Hotel Campaign: +189% Bookings</span>*/}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-slate-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
            <a href="#services" className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll Down</span>
              <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Visual */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/dubai-office-meydan-grandstand.png"
                  alt="MOBILE INNOVATION Dubai Office (Meydan Grandstand)"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>

              {/* Location Badge */}
              {/*<Card className="absolute top-1/4 -left-8 max-w-xs z-20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-slate-600/10 flex items-center justify-center mr-3">
                      <span className="text-slate-600">📍</span>
                    </div>
                    <h4 className="font-bold text-slate-600">Based in Meydan, Dubai</h4>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Strategically located at Meydan Grandstand — the heart of Dubai's business district.
                  </p>
                </CardContent>
              </Card>*/}
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2">
              <span className="text-amber-500 font-semibold uppercase tracking-wider">Our Story</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-600 mt-2 mb-6">
                Rooted in Global Expertise, Built for Boundaryless Growth
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                MOBILE INNOVATION was founded to bridge global digital marketing excellence with hyper-local market
                insights—wherever your audience resides. Our team combines deep understanding of cultural nuances,
                regional consumer behaviors, and global best practices to deliver strategies that transcend borders.
              </p>
              <p className="text-gray-600 text-lg mb-8">
                With a globally distributed team and a footprint spanning diverse markets, we've partnered with 50+
                brands—from emerging startups to multinational corporations—to amplify their digital presence, drive
                meaningful conversions, and foster enduring customer connections worldwide.
              </p>

              {/* Core Advantages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {[
                  {
                    icon: "💡",
                    title: "Local Insights",
                    desc: "Deep understanding of local & regioanl consumer behavior.",
                  },
                  {
                    icon: "👥",
                    title: "Expert Team",
                    desc: "Localized team with more than 5+ years experience in digital marketing.",
                  },
                  { icon: "📈", title: "Results Focused", desc: "ROI-driven strategies with clear, measurable goals." },
                  { icon: "🤝", title: "Client Partnerships", desc: "Transparent collaboration, no hidden fees." },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-slate-600/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-slate-600 text-xl">{item.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-600 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="bg-slate-600 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105">
                Meet Our Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-semibold uppercase tracking-wider">OUR EXPERTISE</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-600 mt-2 mb-6">
              Digital Marketing Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              We combine data-driven strategies with creative excellence to deliver measurable results for your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="w-14 h-14 rounded-lg bg-slate-600/10 flex items-center justify-center mb-6">
                    <span className="text-slate-600 text-2xl">{service.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-600 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <span className="text-amber-500 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="text-slate-600 font-semibold flex items-center hover:text-amber-500 transition-colors"
                  >
                    Learn More <span className="ml-2 transform hover:translate-x-1 transition-transform">→</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-24 bg-stone-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-amber-500 font-semibold uppercase tracking-wider">OUR PORTFOLIO</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-600 mt-2 mb-6">Recent Projects</h2>
            <p className="text-gray-600 text-lg">
              Explore our latest work and see how we’ve helped businesses achieve their marketing and ads goals.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[].map((filter, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "secondary"}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0
                    ? "bg-slate-600 text-white hover:bg-slate-700"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/90 via-slate-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-6">
                      <span className="bg-amber-500 text-slate-600 text-sm font-semibold px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-600 group-hover:text-amber-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mt-2">{project.description}</p>
              </div>
            ))}

            <div key="6" className="group">
              <div
                className="text-center text-xl font-bold text-slate-600 group-hover:text-amber-500 transition-colors"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "70%" }}
              >
                Exploring more....
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-slate-600 hover:bg-slate-700 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-slate-600 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-semibold uppercase tracking-wider">OUR IMPACT</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-6">
              Driving Measurable Results
            </h2>
            <p className="text-gray-300 text-lg">
              We believe in data-driven success. Here’s how we’ve helped our clients growing.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { number: 30, suffix: "%", label: "Average ROI Increase" },
              { number: 12, suffix: "", label: "Clients Served" },
              { number: 8, suffix: "", label: "Successful Campaigns" },
              { number: 98, suffix: "%", label: "Client Satisfaction Rate" },
            ].map((stat, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <CardContent className="p-0">
                  <div className="text-4xl md:text-5xl font-bold text-amber-500 mb-2 counter" data-target={stat.number}>
                    0
                  </div>
                  <p className="text-white text-lg">
                    {stat.suffix} {stat.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Performance Chart */}
          {/* <Card className="bg-white/5 backdrop-blur-md p-8 lg:p-12">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row gap-12">
                <div className="w-full lg:w-1/2">
                  <h3 className="text-2xl font-bold text-white mb-6">Dubai Campaign Performance</h3>
                  <p className="text-gray-300 mb-8">
                    Our campaigns outperform Dubai industry benchmarks — with consistent growth in traffic and
                    conversions.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        metric: "Click-Through Rate (CTR)",
                        value: "5.2%",
                        percentage: 88,
                        comparison: "3.5x higher than Dubai marketing average",
                      },
                      {
                        metric: "Conversion Rate",
                        value: "9.1%",
                        percentage: 82,
                        comparison: "3.0x higher than Dubai marketing average",
                      },
                      {
                        metric: "Cost Per Acquisition (CPA)",
                        value: "-42%",
                        percentage: 75,
                        comparison: "Lower than Dubai marketing average",
                      },
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-white font-medium">{item.metric}</span>
                          <span className="text-amber-500 font-semibold">{item.value}</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2.5">
                          <div
                            className="bg-amber-500 h-2.5 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">{item.comparison}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="bg-white/5 rounded-xl p-4 h-full flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">📊</div>
                      <p>Performance Chart Visualization</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>*/}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-semibold uppercase tracking-wider">TESTIMONIALS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-600 mt-2 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it. Hear from some of our satisfied clients.
            </p>
          </div>

          {/* Testimonial Slider */}
          <div className="relative">
            <div className="overflow-hidden">
              <div className="flex transition-transform duration-500">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                    <Card className="p-8 shadow-lg h-full">
                      <CardContent className="p-0">
                        <div className="flex items-center mb-6">
                          <img
                            src={testimonial.image || "/placeholder.svg"}
                            alt="Client"
                            className="w-14 h-14 rounded-full object-cover mr-4"
                          />
                          <div>
                            <h4 className="font-bold text-slate-600">{testimonial.name}</h4>
                            <p className="text-gray-500">{testimonial.role}</p>
                          </div>
                        </div>
                        <div className="text-amber-500 mb-4">
                          {"★".repeat(Math.floor(testimonial.rating))}
                          {testimonial.rating % 1 !== 0 && "☆"}
                        </div>
                        <p className="text-gray-600 italic">"{testimonial.text}"</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            {/* <button
              onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-amber-500 transition-colors z-10 md:-left-6"
            >
              ←
            </button>
            <button
              onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 bg-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-slate-600 hover:text-amber-500 transition-colors z-10 md:-right-6"
            >
              →
            </button>*/}

            {/* Dots Indicator */}
            {/*<div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-slate-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div> */}
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-amber-500 font-semibold uppercase tracking-wider">Insights</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-600 mt-2 mb-6">
              Digital Marketing Trends in Dubai
            </h2>
            <p className="text-gray-600 text-lg">
              Stay updated with our latest research, tips, and strategies for the Dubai market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Card
                key={index}
                className="bg-stone-100 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={insight.image || "/placeholder.svg"}
                    alt={insight.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-amber-500 text-slate-600 text-sm font-semibold px-3 py-1 rounded-full">
                    {insight.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-4">
                    <span>📅 {insight.date}</span>
                    <span className="mx-3">•</span>
                    <span>⏱️ {insight.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-600 mb-3 hover:text-amber-500 transition-colors">
                    {insight.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{insight.description}</p>
                  <a
                    href="#"
                    className="text-slate-600 font-semibold flex items-center hover:text-amber-500 transition-colors"
                  >
                    Read More <span className="ml-2 transform hover:translate-x-1 transition-transform">→</span>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              className="border-2 border-slate-600 text-slate-600 hover:bg-slate-600 hover:text-white font-semibold px-8 py-4 rounded-full transition-all bg-transparent"
            >
              View All Insights
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-slate-800 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        ></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Info lg:w-1/2*/}
            <div className="w-full ">
              <span className="text-amber-500 font-semibold uppercase tracking-wider">GET IN TOUCH</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Let's discuss how we can help you achieve your business goals globally. Fill out the form and our team
                will get back to you within 24 hours.
              </p>

              <div className="space-y-6 mb-8">
                {[
                  {
                    icon: "📍",
                    title: "Visit Us",
                    desc: "Meydan Grandstand, 6th floor, Meydan Road, Nad Al Sheba, Dubai, U.A.E.",
                  },
                  { icon: "✉️", title: "Email Us", desc: "mobile.innovation@inboxlnk.com" },
                  { icon: "📞", title: "Call Us", desc: "+971 4 555 6789" },
                ].map((contact, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-amber-500 text-xl">{contact.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{contact.title}</h3>
                      <p className="text-gray-300">{contact.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.689-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.057-1.69-.073-4.849-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber-500 hover:text-slate-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.072-4.358-.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.057-1.69-.073-4.849-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-1/2">
              {/* <Card className="p-8 shadow-xl">
                <CardContent className="p-0">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
                        Service Interested In
                      </label>
                      <select
                        id="service"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                      >
                        <option>Select a service</option>
                        <option>Data-Driven Marketing</option>
                        <option>Social Media Advertising</option>
                        <option>SEO & Content Marketing</option>
                        <option>Digital Creative</option>
                        <option>Dubai Market Strategy</option>
                        <option>Analytics & Insights</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-slate-600 focus:border-transparent"
                        placeholder="Tell us about your project goals and requirements..."
                      ></textarea>
                    </div>
                    <Button className="w-full bg-slate-600 hover:bg-slate-700 text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-105">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/*<footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-slate-600 to-amber-500 flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MI</span>
                </div>
                <span className="text-2xl font-bold">
                  MOBILE<span className="text-amber-500">INNOVATION</span>
                </span>
              </div>
              <p className="text-gray-400 mb-4">
                Dubai-based digital marketing agency helping brands grow their online presence in the Middle East and
                beyond.
              </p>
              <p className="text-gray-400 text-sm">© 2024 MOBILE INNOVATION. All rights reserved.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-amber-500 transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-500 transition-colors">
                    Social Media
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-500 transition-colors">
                    SEO & Content
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-amber-500 transition-colors">
                    Analytics
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Meydan Grandstand, Dubai</li>
                <li>mobile.innovation@inboxlnk.com</li>
                <li>+971 4 555 6789</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>*/}
    </div>
  )
}
