"use client";

import { useEffect } from "react";
import { Lock } from "lucide-react";
import { APPLICATION } from "@/lib/constants";

const GHL_FORM_ID = "YSXyWWHbyV0zJnlnb3ww";
const GHL_FORM_URL = `https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`;

export default function ApplicationSection() {
    // Inject the official GHL resize script so the iframe auto-sizes
    useEffect(() => {
        const SCRIPT_ID = "ghl-widget-script";
        if (document.getElementById(SCRIPT_ID)) return;

        const script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.src = "https://link.msgsndr.com/js/form_embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Leave the script mounted — removing it mid-session breaks the iframe
        };
    }, []);

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

                    {/* GoHighLevel embedded form iframe */}
                    <div className="p-2 sm:p-4">
                        <iframe
                            src={GHL_FORM_URL}
                            id={`inline-${GHL_FORM_ID}`}
                            data-layout="{'id':'INLINE'}"
                            data-trigger-type="alwaysShow"
                            data-trigger-value=""
                            data-activation-type="alwaysActivated"
                            data-activation-value=""
                            data-deactivation-type="neverDeactivate"
                            data-deactivation-value=""
                            data-form-name="Application Form"
                            data-height="auto"
                            data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
                            data-form-id={GHL_FORM_ID}
                            title="Application Form — Grab Your Spot"
                            style={{ width: "100%", minHeight: 600, border: "none" }}
                            className="w-full transition-all duration-300"
                            allow="payment"
                            loading="lazy"
                        />
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
