"use client";

import { useState } from "react";
import { Play, ArrowRight, CheckCircle2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { HERO } from "@/lib/constants";

export default function HeroSection() {
    const [videoOpen, setVideoOpen] = useState(false);

    return (
        <section className="relative bg-[#0F172A] text-white overflow-hidden">
            {/* Background gradient orbs */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#17B6B1]/10 blur-3xl" />
                <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#17B6B1]/8 blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[#17B6B1]/5 blur-3xl" />
            </div>

            {/* Grid pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(#17B6B1 1px, transparent 1px), linear-gradient(90deg, #17B6B1 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#17B6B1]/15 border border-[#17B6B1]/30 text-[#17B6B1] text-sm font-medium mb-8 animate-fade-in-up">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    <span>400+ Founders Transformed Since 2022</span>
                </div>

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-6 animate-fade-in-up animation-delay-200">
                    {HERO.headline.split("\n").map((line, i) => (
                        <span key={i} className="block">
                            {i === 0 ? (
                                line
                            ) : (
                                <span className="bg-gradient-to-r from-[#17B6B1] to-[#2dd4bf] bg-clip-text text-transparent">
                                    {line}
                                </span>
                            )}
                        </span>
                    ))}
                </h1>

                {/* Subheadline */}
                <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-400">
                    {HERO.subheadline}
                </p>

                {/* Video Block */}
                <div className="relative max-w-3xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl teal-glow group cursor-pointer">
                    {/* Thumbnail */}
                    <div
                        className="relative w-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center"
                        style={{ aspectRatio: "16/9" }}
                        onClick={() => setVideoOpen(true)}
                        role="button"
                        aria-label="Play workshop preview video"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === "Enter" && setVideoOpen(true)}
                    >
                        {/* Placeholder graphic in thumbnail */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#17B6B1]/20 to-transparent" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
                            <p className="text-slate-400 text-sm mb-4 uppercase tracking-widest">Workshop Preview</p>
                            <p className="text-white text-2xl md:text-3xl font-bold max-w-xl leading-snug">
                                "How I built a business that runs without me"
                            </p>
                            <p className="text-slate-400 mt-3 text-sm">— Marcus T., CEO Apex Logistics</p>
                        </div>

                        {/* Play Button */}
                        <button
                            className="absolute inset-0 flex items-center justify-center group/play"
                            aria-label="Play video"
                            onClick={() => setVideoOpen(true)}
                        >
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#17B6B1]/40 rounded-full scale-150 animate-ping opacity-30" />
                                <div className="relative w-20 h-20 bg-[#17B6B1] hover:bg-[#0E9490] rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl group-hover/play:scale-110">
                                    <Play className="h-8 w-8 text-white fill-white ml-1" />
                                </div>
                            </div>
                        </button>

                        {/* Duration badge */}
                        <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md">
                            8:47
                        </div>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="flex flex-col items-center gap-3">
                    <Button
                        asChild
                        size="lg"
                        className="bg-[#17B6B1] hover:bg-[#0E9490] text-white text-lg font-bold px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200 group"
                    >
                        <a href={HERO.ctaHref} id="hero-cta">
                            {HERO.ctaButton}
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>

                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <Lock className="h-3.5 w-3.5" />
                        <span>{HERO.supportingLine}</span>
                    </div>
                </div>

                {/* Trust badges */}
                <div className="mt-12 flex flex-wrap justify-center gap-6 text-slate-500 text-sm">
                    {[
                        "✓ No credit card required",
                        "✓ Free to apply",
                        "✓ 48-hour response",
                    ].map((badge) => (
                        <span key={badge} className="flex items-center gap-1.5">
                            {badge}
                        </span>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                <DialogContent className="max-w-4xl p-0 bg-black border-0 rounded-2xl overflow-hidden">
                    <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                        {videoOpen && (
                            <iframe
                                src={`${HERO.videoUrl}?autoplay=1&rel=0`}
                                className="absolute inset-0 w-full h-full"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                title="Workshop preview video"
                            />
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
}
