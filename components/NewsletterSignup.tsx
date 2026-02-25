"use client";

import { useState } from "react";
import { Mail, User, ArrowRight, Check, Loader2 } from "lucide-react";

interface NewsletterSignupProps {
  showNameFields?: boolean;
  compact?: boolean;
}

export default function NewsletterSignup({ showNameFields = true, compact = false }: NewsletterSignupProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const resetStatus = () => {
    if (status !== "idle") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setStatus("loading");
    
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email,
          firstName: firstName || undefined,
          lastName: lastName || undefined,
        }),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus("success");
        setMessage("You're on the list!");
        setEmail("");
        setFirstName("");
        setLastName("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  };

  const inputClass = compact
    ? "w-full pl-11 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent transition-all"
    : "w-full pl-12 pr-4 py-4 bg-white/10 border border-white/30 rounded-lg text-white text-lg placeholder-white/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent transition-all";

  const buttonClass = compact
    ? "w-full sm:w-auto px-6 py-3 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white font-bold uppercase tracking-wide rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap"
    : "w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white text-lg font-bold uppercase tracking-wide rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap";

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        {showNameFields && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={compact ? 18 : 20} />
              <input
                type="text"
                value={firstName}
                onChange={(e) => { setFirstName(e.target.value); resetStatus(); }}
                placeholder="First name"
                className={inputClass}
                disabled={status === "loading" || status === "success"}
              />
            </div>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={compact ? 18 : 20} />
              <input
                type="text"
                value={lastName}
                onChange={(e) => { setLastName(e.target.value); resetStatus(); }}
                placeholder="Last name"
                className={inputClass}
                disabled={status === "loading" || status === "success"}
              />
            </div>
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={compact ? 18 : 20} />
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); resetStatus(); }}
              placeholder="Email address"
              className={inputClass}
              disabled={status === "loading" || status === "success"}
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === "loading" || status === "success" || !email}
            className={buttonClass}
          >
            {status === "loading" ? (
              <Loader2 className="animate-spin" size={20} />
            ) : status === "success" ? (
              <>
                <Check size={20} />
                Subscribed
              </>
            ) : (
              <>
                Subscribe
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>
      </form>
      
      {message && (
        <p className={`mt-4 text-sm text-center ${status === "success" ? "text-green-400" : "text-red-400"}`}>
          {message}
        </p>
      )}
    </div>
  );
}
