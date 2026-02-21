"use client";

/**
 * LeadConnectorForm
 * -----------------
 * Dedicated client component for the GHL / LeadConnector embedded form.
 *
 * WHY A SEPARATE COMPONENT?
 *  - next/script must only be rendered inside a Client Component.
 *  - Isolating the iframe here keeps ApplicationSection cleaner.
 *
 * FIXES APPLIED vs THE ORIGINAL EMBED:
 *  1. `data-layout` is now valid JSON  → '{"id":"INLINE"}'
 *  2. Iframe has an explicit `min-h-[720px]` (not height:100%) so it never
 *     collapses to 0px when the parent has no fixed height.
 *  3. Script is loaded with next/script strategy="afterInteractive" — the
 *     recommended way to guarantee execution on both local and Vercel prod.
 *  4. Script is loaded exactly once per page regardless of re-renders.
 */

import Script from "next/script";
import { useEffect, useRef } from "react";

const GHL_FORM_ID = "YSXyWWHbyV0zJnlnb3ww";
const GHL_FORM_URL = `https://api.leadconnectorhq.com/widget/form/${GHL_FORM_ID}`;
const SCRIPT_SRC = "https://link.msgsndr.com/js/form_embed.js";

export default function LeadConnectorForm() {
    const iframeRef = useRef<HTMLIFrameElement>(null);

    // Optional runtime debug — visible in Vercel Function / browser console
    useEffect(() => {
        if (iframeRef.current) {
            console.log("[GHL Form] iframe mounted:", iframeRef.current);
        }
    }, []);

    return (
        <>
            {/*
              * next/script with strategy="afterInteractive":
              *   – Loads after hydration, works correctly on Vercel edge/SSR.
              *   – Deduplicated by Next.js: rendered only once even if the
              *     component mounts twice (StrictMode).
              */}
            <Script
                src={SCRIPT_SRC}
                strategy="afterInteractive"
                onLoad={() => console.log("[GHL Form] embed script loaded ✓")}
                onError={(e) => console.error("[GHL Form] embed script failed:", e)}
            />

            {/*
              * Wrapper guarantees a visible height on every environment.
              * min-h-[720px] > data-height="673" so the iframe always has room.
              */}
            <div className="w-full min-h-[720px] rounded-2xl overflow-hidden bg-white">
                <iframe
                    ref={iframeRef}
                    src={GHL_FORM_URL}
                    /* ── Fixed: valid JSON (double-quotes), not single-quote JS object ── */
                    data-layout='{"id":"INLINE"}'
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Feb-V1 - Workshop Form 2026"
                    data-height="673"
                    data-layout-iframe-id={`inline-${GHL_FORM_ID}`}
                    data-form-id={GHL_FORM_ID}
                    id={`inline-${GHL_FORM_ID}`}
                    title="Feb-V1 - Workshop Form 2026"
                    /* ── Fixed: explicit pixel height, not height:100% ── */
                    className="w-full min-h-[720px] border-0"
                    style={{ border: "none" }}
                />
            </div>
        </>
    );
}
