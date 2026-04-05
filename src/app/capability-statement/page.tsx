"use client";

import { useEffect, useState, useRef } from "react";
import { Download, FileText, Loader2 } from "lucide-react";
import Container from "@/components/ui/Container";

async function generateAndDownload() {
  const [{ default: Doc }, { pdf }] = await Promise.all([
    import("@/components/capability/CapabilityStatementPDF"),
    import("@react-pdf/renderer"),
  ]);
  const blob = await pdf(<Doc />).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "InkHunter-Capability-Statement.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function CapabilityStatementPage() {
  const [generating, setGenerating] = useState(false);
  const autoTriggered = useRef(false);

  // Auto-trigger download on first visit
  useEffect(() => {
    if (autoTriggered.current) return;
    autoTriggered.current = true;
    handleDownload();
  }, []);

  async function handleDownload() {
    setGenerating(true);
    try {
      await generateAndDownload();
    } finally {
      setGenerating(false);
    }
  }

  return (
    <div className="pt-28 pb-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-2xl bg-ocean-50 text-ocean-600 flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-ocean-950 mb-4">
              Capability Statement
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto">
              A comprehensive overview of InkHunter&apos;s services, key
              projects, impact credentials, and approach to large-scale public
              art.
            </p>
          </div>

          {/* Preview card */}
          <div className="rounded-3xl bg-gradient-to-br from-ocean-50 via-white to-ocean-50/30 border border-ocean-100 p-8 lg:p-10 mb-8">
            <h2 className="font-display text-xl font-bold text-ocean-950 mb-4">
              What&apos;s inside
            </h2>
            <ul className="space-y-3 text-gray-600 mb-8">
              {[
                "About InkHunter and our three-pillar approach",
                "Full services overview — murals, placemaking, consultation, and more",
                "Key project case studies with outcomes",
                "Impact evidence — economic, social, environmental, and wellbeing",
                "Client list, awards, education, and credentials",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-ocean-400 mt-2 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={handleDownload}
              disabled={generating}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-ocean-600 text-white font-semibold text-lg shadow-lg shadow-ocean-600/25 hover:bg-ocean-700 hover:shadow-ocean-700/30 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean-500 focus-visible:ring-offset-2"
            >
              {generating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating PDF...
                </>
              ) : (
                <>
                  <Download className="w-5 h-5" />
                  Download PDF
                </>
              )}
            </button>
          </div>

          {/* Info note */}
          <p className="text-center text-sm text-gray-400">
            3-page PDF including project imagery placeholders.
            For a tailored version, please{" "}
            <a
              href="/contact"
              className="text-ocean-600 hover:text-ocean-700 underline underline-offset-2"
            >
              get in touch
            </a>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}
