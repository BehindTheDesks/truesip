"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image";
import logo from "@/public/images/true_sip_logo.png";

export default function ComingSoon() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const quotes = [
    "Trust the journey, not just the drink",
    "One scan could save your night",
    "Simple tech. Real protection",
    "Verify your drink, protect your peace",
  ]

  // Rotate quotes every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  // Track mouse position for spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setTimeout(() => {
        setEmail("")
        setIsSubmitted(false)
      }, 3000)
    }
  }

  return (
    <div className="min-h-screen bg-deep-forest text-sandstone overflow-hidden relative">
      {/* True Spotlight Effect - follows mouse */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(90, 146, 16, 0.15), transparent 40%)`,
        }}
      />

      {/* Animated background pattern */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/shield-pattern.jpg')] bg-repeat animate-pulse" />
      </div>

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-2 py-6 md:px-12 md:py-8">
        <div className="flex gap-2 items-center justify-center flex-col">
          {/* TrueSip Logo Icon */}
            <Image
              src={logo}
              alt="TrueSip Logo"
              className=" w-32 md:w-64 "
            />
          <div className=" translate-x-[70px] md:translate-x-16">
            <p className="text-xs md:text-sm text-golden-lime/80 font-light">Verify Every Sip. Protect Every Life</p>
          </div>
        </div>

      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 md:mb-24">
            <div className="inline-block mb-6 md:mb-8">
              <Badge
                variant="secondary"
                className="bg-fresh-leaf/20 text-fresh-leaf border-fresh-leaf/40 text-lg md:text-xl px-6 py-3 animate-bounce"
              >
                🔍 Coming Soon
              </Badge>
            </div>

            <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight text-balance">
              <span className="block text-sandstone mb-2">Fake alcohol is</span>
              <span className="block text-fresh-leaf animate-pulse">everywhere</span>
            </h2>

            <p className="text-lg md:text-2xl lg:text-3xl text-golden-lime/90 mb-6 max-w-3xl mx-auto leading-relaxed font-light text-pretty">
              How amazing would it feel to verify the authenticity of your drink?
            </p>
          </div>

          {/* Interactive Quote Section */}
          <div className="relative mb-16 md:mb-24">
            <div className="bg-rich-forest/30 backdrop-blur-sm border-2 border-fresh-leaf/20 rounded-2xl p-8 md:p-12 transition-all duration-500 hover:border-fresh-leaf/40 hover:shadow-2xl hover:shadow-fresh-leaf/10">
              <div className="text-center min-h-[120px] md:min-h-[80px] flex items-center justify-center">
                {quotes.map((quote, index) => (
                  <p
                    key={index}
                    className={`text-2xl md:text-4xl font-medium text-sandstone absolute transition-all duration-700 text-balance ${index === currentQuoteIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                  >
                    "{quote}"
                  </p>
                ))}
              </div>
              <div className="flex justify-center gap-2 mt-8">
                {quotes.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all duration-300 ${index === currentQuoteIndex ? "w-12 bg-fresh-leaf" : "w-1.5 bg-fresh-leaf/30"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16 md:mb-24">
            {[
              { icon: "🔍", title: "Smart Detection", desc: "Advanced technology to identify fake products" },
              { icon: "⚡", title: "Instant Results", desc: "One scan gives you peace of mind" },
              { icon: "🛡️", title: "True Protection", desc: "Your safety is our priority" },
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-rich-forest/20 backdrop-blur-sm border border-fresh-leaf/20 rounded-xl p-6 transition-all duration-300 hover:bg-rich-forest/40 hover:border-fresh-leaf/40 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-4xl md:text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-sandstone mb-2">{feature.title}</h3>
                <p className="text-golden-lime/70 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Email Signup */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-fresh-leaf/10 to-deep-forest/30 backdrop-blur-sm border-2 border-golden-lime/30 rounded-2xl p-8 md:p-12 shadow-2xl">
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-4 text-sandstone">Be the first to know</h3>
              <p className="text-center text-golden-lime/80 mb-8 leading-relaxed">
                Join our waitlist and get exclusive early access when we launch
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col md:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-deep-forest/50 border-fresh-leaf/30 text-sandstone placeholder:text-sandstone/40 h-12 md:h-14 text-base md:text-lg focus:border-fresh-leaf focus:ring-fresh-leaf"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-fresh-leaf hover:bg-fresh-leaf/90 text-deep-forest font-bold h-12 md:h-14 px-8 text-base md:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-fresh-leaf/30"
                  >
                    {isSubmitted ? "✓ Joined!" : "Notify Me"}
                  </Button>
                </div>
                {isSubmitted && (
                  <p className="text-center text-golden-lime animate-pulse">Thanks! We'll be in touch soon 🎉</p>
                )}
              </form>

              <div className="mt-8 pt-8 border-t border-golden-lime/20">
                <div className="flex flex-wrap justify-center gap-6 text-sm text-golden-lime/60">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-fresh-leaf rounded-full animate-pulse"></span>
                    No spam
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-fresh-leaf rounded-full animate-pulse"></span>
                    Exclusive access
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-fresh-leaf rounded-full animate-pulse"></span>
                    Unsubscribe anytime
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 md:mt-24">
            <p className="text-xl md:text-2xl text-golden-lime/90 font-medium mb-4">Simple tech. Real protection.</p>
            <p className="text-base md:text-lg text-sandstone/60">Verify your drink, protect your peace</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-fresh-leaf/10 mt-20">
        <div className="container mx-auto px-6 py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sandstone/60 text-sm">© 2025 TrueSip. Making safe drinking natural.</p>
            <div className="flex gap-6">
              {[
                { name: "Twitter", url: "#" },
                { name: "Instagram", url: "https://www.instagram.com/truesipng?igsh=MXB4ZHB0bzh0N3Z4dQ==" },
                { name: "LinkedIn", url: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-golden-lime/60 hover:text-golden-lime transition-colors duration-300 text-sm"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
