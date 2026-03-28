"use client";

import { useState, useEffect, useCallback } from "react";
import { X, Mail, User, ArrowRight, Check, Loader2 } from "lucide-react";

interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleClose = useCallback(() => {
    onClose();
    // Reset form after close animation
    setTimeout(() => {
      setFirstName("");
      setLastName("");
      setEmail("");
      setStatus("idle");
      setMessage("");
    }, 300);
  }, [onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) handleClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, handleClose]);

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

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-md bg-black border border-white/20 shadow-[12px_12px_0_0_#ff3b1d] p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-bold uppercase tracking-[0.05em] text-white md:text-3xl">
          Stay in the loop
        </h3>
        <p className="mt-4 text-base leading-7 text-white/72">
          Join our mailing list for ticket updates, behind-the-scenes content, and first word on what&apos;s next.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value={firstName}
                onChange={(e) => { setFirstName(e.target.value); if (status !== "idle") setStatus("idle"); }}
                placeholder="First name"
                className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent transition-all"
                disabled={status === "loading" || status === "success"}
              />
            </div>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value={lastName}
                onChange={(e) => { setLastName(e.target.value); if (status !== "idle") setStatus("idle"); }}
                placeholder="Last name"
                className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent transition-all"
                disabled={status === "loading" || status === "success"}
              />
            </div>
          </div>

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); if (status !== "idle") setStatus("idle"); }}
              placeholder="Email address"
              className="w-full pl-11 pr-4 py-3 bg-white/10 border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent transition-all"
              disabled={status === "loading" || status === "success"}
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading" || status === "success" || !email}
            className="w-full px-6 py-4 bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-white font-bold uppercase tracking-wide rounded-lg transition-all flex items-center justify-center gap-2"
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
        </form>

        {message && (
          <p className={`mt-4 text-sm text-center ${status === "success" ? "text-green-400" : "text-red-400"}`}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

// Simple button that opens the modal
export function SignupButton({ className, children }: { className?: string; children?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} className={className}>
        {children || "Sign Up"}
      </button>
      <SignupModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
