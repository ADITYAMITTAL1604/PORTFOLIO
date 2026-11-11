import { useEffect, useState, type FormEvent } from "react";
import { Check, Copy, Mail, Send, X } from "lucide-react";
import { profile } from "@/data/portfolio";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill out your name, email, and message.");
      return;
    }

    setError("");
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#241C15]/60 backdrop-blur-xs p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
    >
      <div
        className="w-full max-w-lg bg-white border border-[#241C15] rounded-2xl p-6 sm:p-8 shadow-[0_8px_0_#241C15]"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#241C15]/10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#554D46]">
              Get in Touch
            </p>
            <h2
              id="contact-modal-title"
              className="font-serif-display text-3xl font-medium text-[#241C15] mt-1"
            >
              Let&apos;s connect
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact dialog"
            className="p-2 rounded-full border border-[#241C15]/15 text-[#241C15] hover:bg-[#FFE01B] transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="my-5 flex items-center justify-between gap-3 p-3.5 rounded-xl bg-[#FFE01B]/45 border border-[#241C15]/20">
          <div className="flex items-center gap-2.5 min-w-0">
            <Mail className="w-4 h-4 shrink-0 text-[#241C15]" />
            <span className="text-sm font-medium text-[#241C15] truncate">
              {profile.email}
            </span>
          </div>
          <button
            type="button"
            onClick={handleCopyEmail}
            className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#241C15]/25 text-xs font-semibold text-[#241C15] hover:bg-[#FFE01B] transition-colors cursor-pointer"
          >
            {copied ? (
              <Check className="w-3.5 h-3.5 text-green-700" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-semibold uppercase tracking-wider text-[#554D46] mb-1.5"
            >
              Name
            </label>
            <input
              id="contact-name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your name"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F6F4] border border-[#241C15]/20 text-sm text-[#241C15] focus:outline-none focus:border-[#241C15]"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-semibold uppercase tracking-wider text-[#554D46] mb-1.5"
            >
              Email
            </label>
            <input
              id="contact-email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F6F4] border border-[#241C15]/20 text-sm text-[#241C15] focus:outline-none focus:border-[#241C15]"
            />
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="block text-xs font-semibold uppercase tracking-wider text-[#554D46] mb-1.5"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              rows={3}
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Write a quick note..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F6F4] border border-[#241C15]/20 text-sm text-[#241C15] focus:outline-none focus:border-[#241C15] resize-none"
            />
          </div>

          {error && <p className="text-xs font-medium text-red-700">{error}</p>}
          {submitted && (
            <p className="text-xs font-medium text-green-800 bg-green-100 border border-green-300 rounded-lg px-3 py-2">
              Opening your email client with the draft message!
            </p>
          )}

          <div className="flex justify-end gap-2.5 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="pill-btn-outline !py-2 !px-4 !text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="pill-btn-dark !py-2 !px-5 !text-sm"
            >
              Send Message
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
