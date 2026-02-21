/**
 * ApplicationSection
 * ------------------
 * Section wrapper — deliberately a SERVER component.
 * The LeadConnectorForm child is a CLIENT component that handles
 * the GHL iframe + next/script loading.
 */

import { Lock } from "lucide-react";
import { APPLICATION } from "@/lib/constants";
import LeadConnectorForm from "@/components/landing/LeadConnectorForm";

export default function ApplicationSection() {
    return (
        <section id="apply" className="py-20 md:py-28 bg-[#F7FAFC]">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">

                {/* ── Section Header ── */}
                <div className="text-center mb-12">
                    <span className="inline-block text-[#17B6B1] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        {APPLICATION.sectionLabel}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        {APPLICATION.heading}
                    </h2>
                    <p className="text-slate-500 text-lg">{APPLICATION.subheading}</p>
                </div>

                {/* ── Form Card ── */}
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                    {/* Top teal accent stripe */}
                    <div className="h-1.5 bg-gradient-to-r from-[#17B6B1] to-[#0E9490]" />

                    {/* GoHighLevel embedded form — client component with next/script */}
                    <div className="p-2 sm:p-4">
                        <LeadConnectorForm />
                    </div>
                </div>

                {/* ── Trust line ── */}
                <p className="mt-5 text-center text-slate-400 text-xs flex items-center justify-center gap-1.5">
                    <Lock className="h-3 w-3 flex-shrink-0" />
                    {APPLICATION.disclaimer}
                </p>

            </div>
        </section>
    );
}
