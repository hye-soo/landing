/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LandingHero } from "./components/ui/landing-hero";
import { Feature108 } from "./components/blocks/shadcnblocks-com-feature108";
import { motion } from "motion/react";
import { 
  CheckCircle2, 
  Clock, 
  CloudDownload, 
  Zap, 
  Palette, 
  Star,
  ShieldCheck,
  GraduationCap,
  ArrowUpRight
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [email, setEmail] = useState("");

  const uspTabs = [
    {
      value: "tab-1",
      icon: <Clock className="h-auto w-4 shrink-0" />,
      label: "Fast Setup",
      content: {
        badge: "Under an Hour",
        title: "Done in Under an Hour",
        description: "Stop staring at a blank screen. Our guided wizard holds your hand through every step, ensuring you have a fully compliant, professional portfolio ready to submit before your deadline hits.",
        buttonText: "Start Building",
        imageSrc: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Student working fast",
      },
    },
    {
      value: "tab-2",
      icon: <ShieldCheck className="h-auto w-4 shrink-0" />,
      label: "Compliance",
      content: {
        badge: "Fail-Proof",
        title: "Fail-Proof Compliance Checker",
        description: "Worried you missed a rubric requirement? Our built-in validation tool cross-references your site against standard academic and internship criteria, giving you total peace of mind before you share your link.",
        buttonText: "Check Rubric",
        imageSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Compliance checking",
      },
    },
    {
      value: "tab-3",
      icon: <CloudDownload className="h-auto w-4 shrink-0" />,
      label: "Auto Sync",
      content: {
        badge: "Zero Uploads",
        title: "Zero Manual Uploads",
        description: "Connect your existing GitHub, Google Drive, or Behance accounts. Showcase instantly syncs your projects into a unified, clean layout so you never have to re-upload your work again.",
        buttonText: "Connect Accounts",
        imageSrc: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=2088&auto=format&fit=crop",
        imageAlt: "Cloud sync",
      },
    },
    {
      value: "tab-4",
      icon: <Zap className="h-auto w-4 shrink-0" />,
      label: "Real-time",
      content: {
        badge: "Night Before",
        title: "Built for the 'Night Before'",
        description: "Procrastinated? No problem. Enjoy real-time autosave, seamless mobile editing, and a live shareable link from the very first minute. Your progress is always safe, polished, and ready to send.",
        buttonText: "Try Live Editor",
        imageSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Late night coding",
      },
    },
    {
      value: "tab-5",
      icon: <Palette className="h-auto w-4 shrink-0" />,
      label: "Templates",
      content: {
        badge: "Infinite Styles",
        title: "One Setup, Infinite Styles",
        description: "Input your projects just once, then let our smart templates do the heavy lifting. Instantly generate and swap between multiple visual themes to perfectly match any specific class requirement or internship application.",
        buttonText: "Explore Themes",
        imageSrc: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop",
        imageAlt: "Design templates and UI kits",
      },
    },
  ];

  const studentTestimonials = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Graduating Senior",
      company: "BCIT",
      content: "I was panicking about my capstone portfolio deadline. Showcase's templates and checklist got me from zero to a professional link in 45 minutes. I actually enjoyed the process and got an A!",
      rating: 5,
      avatar: "https://picsum.photos/seed/alex/100/100"
    },
    {
      id: 2,
      name: "Sarah Chen",
      role: "Design Intern",
      company: "TechCo",
      content: "The compliance checker is an absolute lifesaver. It caught three missing requirements I would have totally overlooked before sending my link to recruiters. Highly recommend!",
      rating: 5,
      avatar: "https://picsum.photos/seed/sarah/100/100"
    },
    {
      id: 3,
      name: "Jordan Lee",
      role: "CS Student",
      company: "University of Washington",
      content: "Zero manual uploads is a game-changer. I just connected my GitHub and all my projects were beautifully formatted instantly. Saved me hours of copy-pasting.",
      rating: 5,
      avatar: "https://picsum.photos/seed/jordan/100/100"
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-slate-900 selection:bg-indigo-500/30 font-sans relative overflow-hidden">
      {/* Add a subtle ambient background for the glass to pop */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.05),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.05),transparent_50%)] pointer-events-none" />
      
      {/* Hero Section */}
      <LandingHero />

      {/* Unique Selling Propositions (USPs) */}
      <div id="usps" className="relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <Feature108 
          badge="Features"
          heading="Stop Stressing. Start Showcasing."
          description="We know you're busy juggling classes and applications. Showcase removes the friction from portfolio creation so you can focus on what matters: landing that grade or internship."
          tabs={uspTabs}
        />
      </div>

      {/* Social Proof / Testimonials */}
      {/* Removed AnimatedTestimonials component */}

      {/* CTA / Sign Up Form Section - Distraction Free */}
      <section id="signup" className="py-32 px-4 relative">
        <div className="absolute inset-0 bg-indigo-500/[0.03] blur-3xl" />
        
        <div className="container mx-auto max-w-3xl relative z-10">
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-white/40 backdrop-blur-2xl border border-white/80 text-center shadow-[0_8px_32px_rgba(0,0,0,0.05)]">
            <GraduationCap className="w-12 h-12 text-indigo-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4 text-slate-900">Aced Your Projects? Now Ace the Presentation.</h2>
            <p className="text-slate-600 mb-10 text-lg max-w-xl mx-auto">
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
                className="flex-1 px-6 py-4 rounded-full bg-white/50 backdrop-blur-md border border-white/80 focus:outline-none focus:border-indigo-500/50 focus:ring-2 focus:ring-indigo-500/20 transition-all text-slate-900 placeholder:text-slate-400 shadow-inner"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button 
                type="submit"
                className="relative flex items-center justify-center p-1 ps-6 pe-16 hover:ps-16 hover:pe-6 rounded-full bg-white/40 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.08),inset_0_1px_1px_rgba(255,255,255,1)] text-indigo-950 font-bold hover:bg-white/60 hover:shadow-[0_8px_32px_rgba(99,102,241,0.15),inset_0_1px_1px_rgba(255,255,255,1)] transition-all duration-500 whitespace-nowrap group overflow-hidden cursor-pointer h-14"
              >
                <span className="relative z-10 transition-all duration-500">
                  Claim Free Trial
                </span>
                <div className="absolute right-1 w-12 h-12 bg-white text-indigo-600 rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-52px)] group-hover:rotate-45 shadow-sm">
                  <ArrowUpRight size={20} />
                </div>
              </button>
            </form>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                No Credit Card Required
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                Instant Access
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-500" />
                Cancel Anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer (No Distractions) */}
      <footer className="py-8 px-4 border-t border-slate-200">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-rose-500 shadow-sm" />
            <span className="font-bold text-lg tracking-tight text-slate-800">Showcase</span>
          </div>
          <p className="text-slate-400 text-xs">
            &copy; 2026 Showcase Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
