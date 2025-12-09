"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, ShieldCheck, BrainCircuit, Zap } from "lucide-react";
import HackerText from "@/components/HackerText";
import MagneticButton from "@/components/MagneticButton";
import SpotlightBackground from "@/components/SpotlightBackground";

const features = [
  {
    title: "Self-Healing Infrastructure",
    description: "Protocol detects anomalies before they become outages. It patches its own code in real-time.",
    icon: ShieldCheck,
  },
  {
    title: "Neural Optimization",
    description: "Our models learn your traffic patterns, optimizing database queries to reduce latency by up to 90%.",
    icon: BrainCircuit,
  },
  {
    title: "Silent Deploy",
    description: "Push updates to millions of users without a single millisecond of downtime. The future is seamless.",
    icon: Zap,
  },
];

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden p-4 text-center">
      <SpotlightBackground />

      {/* Hero Section */}
      <div className="z-10 mt-20 flex max-w-4xl flex-col items-center gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500"
        >
          <Terminal className="h-4 w-4" />
          <span>Protocol</span>
        </motion.div>

        <h1 className="text-5xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl">
          <HackerText text="Code at the Speed of Thought" speed={40} className="block" />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-xl text-lg text-zinc-400"
        >
          The world's first autonomous system architect.
          <br />
          You dream it. Protocol builds it. Zero latency. Zero errors.
        </motion.p>

        {/* Input Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-4 flex w-full max-w-md flex-col items-center gap-4 sm:flex-row"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Enter your comms ID"
            className="w-full rounded-full border border-zinc-800 bg-black/50 px-6 py-4 text-zinc-300 outline-none backdrop-blur-sm transition-colors focus:border-accent placeholder:text-zinc-700"
          />
          <MagneticButton>
            <span className="flex items-center gap-2 whitespace-nowrap">
              Join Waitlist <ArrowRight className="h-4 w-4" />
            </span>
          </MagneticButton>
        </motion.form>
      </div>

      {/* Features Grid */}
      <div className="z-10 mt-32 grid w-full max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
            className="group flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            <div className="rounded-full bg-white/5 p-4 text-accent transition-colors group-hover:bg-accent/10 group-hover:text-accent">
              <feature.icon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
            <p className="text-center text-zinc-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Footer Ticker */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden border-t border-zinc-900 py-4 backdrop-blur-md">
        <div className="flex select-none gap-8 whitespace-nowrap">
          <motion.div
            className="flex min-w-full gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-xs font-mono tracking-widest text-zinc-600">
                /// 5,000+ WAITLISTED /// SYSTEM SECURE /// DECENTRALIZED PROTOCOL ///
              </span>
            ))}
          </motion.div>
          <motion.div
            className="flex min-w-full gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 20,
            }}
          >
            {[...Array(10)].map((_, i) => (
              <span key={`dup-${i}`} className="text-xs font-mono tracking-widest text-zinc-600">
                /// 5,000+ WAITLISTED /// SYSTEM SECURE /// DECENTRALIZED PROTOCOL ///
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
