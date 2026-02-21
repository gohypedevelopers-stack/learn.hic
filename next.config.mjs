/** @type {import('next').NextConfig} */
const nextConfig = {
    // SSR/serverless on Vercel — no static export

    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    // ─────────────────────────────────────────────────────────
                    // X-Frame-Options
                    //   Vercel injects SAMEORIGIN by default.
                    //   We override it to ALLOWALL so external iframes work.
                    //   The granular per-origin control is done via CSP
                    //   frame-ancestors below (modern browsers prefer CSP).
                    // ─────────────────────────────────────────────────────────
                    {
                        key: "X-Frame-Options",
                        value: "ALLOWALL",
                    },

                    // ─────────────────────────────────────────────────────────
                    // Content-Security-Policy
                    //
                    // frame-ancestors — WHO can embed THIS site in an iframe:
                    //   'self'                             → direct access
                    //   https://app.clientmagnetplatform.com
                    //   https://*.clientmagnetplatform.com → CMP embeds
                    //   https://learn-hic.vercel.app       → self on Vercel
                    //
                    // frame-src / child-src — what THIS site embeds (GHL form):
                    //   https://api.leadconnectorhq.com
                    //   https://*.leadconnectorhq.com
                    // ─────────────────────────────────────────────────────────
                    {
                        key: "Content-Security-Policy",
                        value: [
                            "default-src 'self'",

                            // Scripts — self + GHL widget script
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://link.msgsndr.com https://api.leadconnectorhq.com",

                            // Styles
                            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",

                            // Fonts
                            "font-src 'self' https://fonts.gstatic.com",

                            // Images
                            "img-src 'self' data: https:",

                            // Network requests (fetch/XHR)
                            "connect-src 'self' https://api.leadconnectorhq.com https://*.leadconnectorhq.com https://link.msgsndr.com",

                            // GHL form iframe that THIS page embeds
                            "frame-src 'self' https://api.leadconnectorhq.com https://*.leadconnectorhq.com",

                            // ── frame-ancestors: who may embed THIS page ──
                            // Note: wildcards in frame-ancestors only work for
                            // subdomains when written as *.domain.com (no scheme
                            // wildcard). Listing both schemes for safety.
                            "frame-ancestors 'self' https://learn-hic.vercel.app https://app.clientmagnetplatform.com https://*.clientmagnetplatform.com",
                        ].join("; "),
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
