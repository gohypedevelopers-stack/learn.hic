import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FOOTER, SITE } from "@/lib/constants";

export default function Footer() {
    return (
        <>
            {/* Final CTA Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-[#0a1628] to-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#17B6B1]/8 blur-3xl" />
                </div>
                <div className="relative max-w-3xl mx-auto px-4 text-center">
                    <span className="inline-block text-[#17B6B1] text-xs font-bold uppercase tracking-[0.2em] mb-6">
                        One Last Thing
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        The founder who built the business shouldn't be the one{" "}
                        <span className="text-[#17B6B1]">holding it back.</span>
                    </h2>
                    <p className="text-slate-400 text-lg mb-10">
                        Apply today. It takes 3 minutes. If it's a fit, we'll reach out. No pressure, no pitch.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-[#17B6B1] hover:bg-[#0E9490] text-white font-bold text-lg px-12 py-7 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200 group"
                    >
                        <a href="#apply" id="final-cta">
                            Apply for the Workshop
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>
                    <p className="text-slate-600 text-sm mt-6">
                        Free to apply · No credit card · 48-hour response
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-400 py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Logo */}
                        <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-[#17B6B1] flex items-center justify-center">
                                <span className="text-white font-bold text-xs">S</span>
                            </div>
                            <span className="text-white font-bold text-lg">{SITE.logo}</span>
                        </div>

                        {/* Tagline */}
                        <p className="text-sm text-slate-500 text-center max-w-xs">
                            {FOOTER.tagline}
                        </p>

                        {/* Links */}
                        <nav className="flex items-center gap-4 flex-wrap justify-center" aria-label="Footer navigation">
                            {FOOTER.links.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-sm hover:text-white transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    <div className="border-t border-slate-800 mt-8 pt-6 text-center">
                        <p className="text-xs text-slate-600 max-w-3xl mx-auto leading-relaxed">
                            {FOOTER.disclaimer}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
