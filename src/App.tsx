/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LandingHero } from "./components/ui/landing-hero";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Clock, 
  CloudDownload, 
  Zap, 
  Palette, 
  Star,
  ShieldCheck,
  GraduationCap
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");

  // All 5 USPs rewritten to target deadline-driven, compliance-focused students
  const usps = [
    {
      icon: <Clock className="w-8 h-8 text-indigo-400" />,
      title: "Done in Under an Hour",
      description: "Stop staring at a blank screen. Our guided wizard holds your hand through every step, ensuring you have a fully compliant, professional portfolio ready to submit before your deadline hits."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-rose-400" />,
      title: "Fail-Proof Compliance Checker",
      description: "Worried you missed a rubric requirement? Our built-in validation tool cross-references your site against standard academic and internship criteria, giving you total peace of mind before you share your link."
    },
    {
      icon: <CloudDownload className="w-8 h-8 text-violet-400" />,
      title: "Zero Manual Uploads",
      description: "Connect your existing GitHub, Google Drive, or Behance accounts. Showcase instantly syncs your projects into a unified, clean layout so you never have to re-upload your work again."
    },
    {
      icon: <Zap className="w-8 h-8 text-amber-400" />,
      title: "Built for the 'Night Before'",
      description: "Procrastinated? No problem. Enjoy real-time autosave, seamless mobile editing, and a live shareable link from the very first minute. Your progress is always safe, polished, and ready to send."
    },
    {
      icon: <Palette className="w-8 h-8 text-cyan-400" />,
      title: "One Setup, Infinite Styles",
      description: "Input your projects just once, then let our smart templates do the heavy lifting. Instantly generate and swap between multiple visual themes to perfectly match any specific class requirement or internship application."
    }
  ];

  const testimonials = [
    {
      name: "Alex Rivera",
      role: "Graduating Senior",
      content: "I was panicking about my capstone portfolio deadline. Showcase's templates and checklist got me from zero to a professional link in 45 minutes. I actually enjoyed the process and got an A!",
      avatar: "https://picsum.photos/seed/alex/100/100"
    },
    {
      name: "Sarah Chen",
      role: "Secured a Design Internship",
      content: "The compliance checker is an absolute lifesaver. It caught three missing requirements I would have totally overlooked before sending my link to recruiters. Highly recommend!",
      avatar: "https://picsum.photos/seed/sarah/100/100"
    }
  ];

  return (
    <div className="bg-[#030303] text-white selection:bg-indigo-500/30 font-sans">
      {/* Hero Section */}
      <LandingHero />

      {/* Unique Selling Propositions (USPs) */}
      <section id="usps" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
              Stop Stressing. Start Showcasing.
            </h2>
            <p className="text-white/40 max-w-2xl mx-auto text-lg">
              We know you're busy juggling classes and applications. Showcase removes the friction from portfolio creation so you can focus on what matters: landing that grade or internship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {usps.map((usp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors group flex flex-col items-center text-center ${
                  index === 3 ? 'lg:col-start-1 lg:col-end-2 lg:ml-auto' : ''
                } ${
                  index === 4 ? 'lg:col-start-2 lg:col-end-4 lg:mr-auto' : ''
                }`}
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

      {/* CTA / Sign Up Form Section - Distraction Free */}
      <section id="signup" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-indigo-500/[0.02] blur-3xl" />
        
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/[0.1] text-center shadow-2xl">
            <GraduationCap className="w-12 h-12 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Aced Your Projects? Now Ace the Presentation.</h2>
            <p className="text-white/60 mb-10 text-lg max-w-xl mx-auto">
              Join thousands of students who stopped stressing over code and started showcasing their true potential. 
              Claim your 14-day free trial today.
            </p>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                alert("Welcome to Showcase! Check your student email to begin your 14-day trial.");
              }}
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
            >
              <input 
                type="email" 
                required
                placeholder="Enter your student email"
                className="flex-1 px-6 py-4 rounded-full bg-white/[0.05] border border-white/[0.1] focus:outline-none focus:border-indigo-500/50 transition-colors text-white placeholder:text-white/30"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit"
                className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-white/90 transition-colors whitespace-nowrap shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Claim Free Trial
              </button>
            </form>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/40">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                No Credit Card Required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                Instant Access
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                Cancel Anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer (No Distractions) */}
      <footer className="py-8 px-4 border-t border-white/[0.05]">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-rose-500" />
            <span className="font-bold text-lg tracking-tight">Showcase</span>
          </div>
          <p className="text-white/20 text-xs">
            &copy; 2026 Showcase Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
