/** @type {import('next').NextConfig} */
const nextConfig = {
    // No output: "export" — we want SSR/serverless on Vercel

    async headers() {
        return [
            {
                // Apply to every route
                source: "/(.*)",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: [
                            // Allow the page itself to be served normally
                            "default-src 'self'",
                            // Scripts: self + GHL embed script
                            "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://link.msgsndr.com https://api.leadconnectorhq.com",
                            // Frames: allow GHL form iframe origin
                            "frame-src 'self' https://api.leadconnectorhq.com https://*.leadconnectorhq.com",
                            // Styles / images / connect can be open for third-party widgets
                            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                            "font-src 'self' https://fonts.gstatic.com",
                            "img-src 'self' data: https:",
                            "connect-src 'self' https://api.leadconnectorhq.com https://*.leadconnectorhq.com https://link.msgsndr.com",
                        ].join("; "),
                    },
                ],
            },
        ];
    },
};

export default nextConfig;
