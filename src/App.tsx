/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LandingHero } from "./components/ui/landing-hero";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Clock, 
  Link as LinkIcon, 
  Zap, 
  Layout, 
  ArrowRight,
  Star,
  ShieldCheck,
  GraduationCap
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");

  const usps = [
    {
      icon: <Clock className="w-8 h-8 text-indigo-400" />,
      title: "Submission-Ready in 60 Minutes",
      description: "Stop fighting with website builders. Our guided templates take you from a blank page to a fully compliant portfolio in under an hour."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-rose-400" />,
      title: "Built-in Compliance Checker",
      description: "Never miss a grading rubric requirement. Validate your portfolio against common academic criteria before you submit."
    },
    {
      icon: <LinkIcon className="w-8 h-8 text-violet-400" />,
      title: "Zero-Friction Imports",
      description: "Connect your GitHub, Google Drive, or Behance. Pull in your projects instantly without the hassle of manual re-uploading."
    }
  ];

  const testimonials = [
    {
      name: "Alex Rivera",
      role: "BCIT D3 Student",
      content: "I was panicking about my graduation portfolio deadline. Showcase got me from zero to a professional link in 45 minutes. I actually enjoyed the process!",
      avatar: "https://picsum.photos/seed/alex/100/100"
    },
    {
      name: "Sarah Chen",
      role: "Design Intern @ TechCo",
      content: "The checklist feature is a lifesaver. It caught three missing requirements I would have totally overlooked. Got the internship!",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    }
  ];

  return (
    <div className="bg-[#030303] text-white selection:bg-indigo-500/30">
      {/* Hero Section */}
      <LandingHero />

      {/* Unique Selling Propositions (USPs) */}
      <section id="usps" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Built for Deadlines, Designed for Success
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto">
              We know you're busy. Showcase removes the friction from portfolio creation so you can focus on what matters: your work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {usps.map((usp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group flex flex-col items-center text-center"
              >
                <div className="mb-6 p-4 rounded-2xl bg-white/[0.03] w-fit group-hover:scale-110 transition-transform">
                  {usp.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{usp.title}</h3>
                <p className="text-white/40 leading-relaxed">
                  {usp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-24 px-4 bg-white/[0.01]">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <h2 className="text-3xl font-bold">Trusted by Students at Top Institutions</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.03] border border-white/[0.08] relative">
                <p className="text-lg text-white/70 italic mb-6">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={t.avatar} 
                    alt={t.name} 
                    className="w-12 h-12 rounded-full border-2 border-indigo-500/30"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-semibold">{t.name}</h4>
                    <p className="text-sm text-white/40">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Sign Up Form Section */}
      <section id="signup" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-indigo-500/[0.02] blur-3xl" />
        
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="p-12 rounded-[2.5rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.1] text-center">
            <GraduationCap className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Ready to Submit?</h2>
            <p className="text-white/60 mb-10 text-lg">
              Join 5,000+ students who stopped stressing and started showcasing. 
              Start your 14-day full-access trial today.
            </p>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert("Welcome to the future of portfolios! Check your email to get started.");
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input 
                type="email" 
                required
                placeholder="Enter your student email"
                className="flex-1 px-6 py-4 rounded-full bg-white/[0.05] border border-white/[0.1] focus:outline-none focus:border-indigo-500/50 transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit"
                className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-colors whitespace-nowrap"
              >
                Start My Free Trial
              </button>
            </form>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/30">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500/50" />
                No Credit Card
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500/50" />
                Instant Setup
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500/50" />
                Cancel Anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/[0.05]">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-rose-500" />
            <span className="font-bold text-xl tracking-tight">Showcase</span>
          </div>
          <p className="text-white/20 text-sm">
            &copy; 2026 Showcase Inc. Designed for the next generation of creators.
          </p>
        </div>
      </footer>
    </div>
  );
}
