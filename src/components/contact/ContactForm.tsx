"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

const projectTypes = [
  "Large-Scale Mural",
  "Cultural Precinct Development",
  "Community Consultation",
  "Emerging Artist Program",
  "Environmental Advocacy Art",
  "Therapeutic Art & Wellbeing",
  "Digital Art & Animation",
  "Educational Workshop",
  "Other",
];

const budgetRanges = [
  "Under $10,000",
  "$10,000 – $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000+",
  "Not sure yet",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center p-12 bg-bush-50 rounded-2xl border border-bush-200">
        <CheckCircle2 className="w-12 h-12 text-bush-500 mx-auto mb-4" />
        <h3 className="font-display text-2xl font-bold text-ocean-950 mb-2">
          Thank you!
        </h3>
        <p className="text-gray-600">
          Your enquiry has been received. Patrick will be in touch within 2–3
          business days.
        </p>
      </div>
    );
  }

  const inputStyles =
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent transition-all duration-200";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="flex items-center gap-3 p-4 bg-sunset-50 border border-sunset-200 rounded-xl text-sunset-700">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">
            Something went wrong. Please try again or email us directly.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className={inputStyles}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="organisation" className="block text-sm font-medium text-gray-700 mb-1.5">
            Organisation
          </label>
          <input
            type="text"
            id="organisation"
            name="organisation"
            className={inputStyles}
            placeholder="Council, company, or organisation"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className={inputStyles}
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className={inputStyles}
            placeholder="0400 000 000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1.5">
            Project Type
          </label>
          <select id="projectType" name="projectType" className={inputStyles}>
            <option value="">Select a project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1.5">
            Budget Range
          </label>
          <select id="budget" name="budget" className={inputStyles}>
            <option value="">Select a budget range</option>
            {budgetRanges.map((range) => (
              <option key={range} value={range}>
                {range}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1.5">
          Project Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          className={inputStyles}
          placeholder="City, suburb, or address"
        />
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1.5">
          Timeline
        </label>
        <input
          type="text"
          id="timeline"
          name="timeline"
          className={inputStyles}
          placeholder="When are you hoping to start?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Tell us about your project *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputStyles}
          placeholder="What are you looking to achieve? Any specific themes, locations, or community goals?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center gap-2 px-8 py-3.5 bg-ocean-600 text-white font-semibold rounded-full hover:bg-ocean-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-ocean-600/25"
      >
        {status === "submitting" ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Enquiry
          </>
        )}
      </button>
    </form>
  );
}
