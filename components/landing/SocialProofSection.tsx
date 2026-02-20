"use client";

import { useState } from "react";
import { Play, Quote } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SOCIAL_PROOF } from "@/lib/constants";

function StarRating({ count = 5 }: { count?: number }) {
    return (
        <div className="flex gap-0.5" aria-label={`${count} star rating`}>
            {Array.from({ length: count }).map((_, i) => (
                <span key={i} className="text-amber-400 text-base">★</span>
            ))}
        </div>
    );
}

export default function SocialProofSection() {
    const [videoOpen, setVideoOpen] = useState(false);

    return (
        <section id="reviews-preview" className="py-20 md:py-28 bg-[#F7FAFC]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-[#17B6B1] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        {SOCIAL_PROOF.sectionLabel}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        {SOCIAL_PROOF.heading}
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        {SOCIAL_PROOF.subheading}
                    </p>
                </div>

                {/* Main grid: left video, right testimonials */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-12">
                    {/* Video Testimonial Card */}
                    <div className="lg:col-span-2">
                        <div
                            className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-lg h-full min-h-[300px] lg:min-h-[420px] bg-gradient-to-br from-slate-800 to-slate-900"
                            onClick={() => setVideoOpen(true)}
                            role="button"
                            tabIndex={0}
                            aria-label="Play video testimonial"
                            onKeyDown={(e) => e.key === "Enter" && setVideoOpen(true)}
                        >
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />

                            {/* Background gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#17B6B1]/20 to-slate-800 flex items-center justify-center">
                                <div className="text-center text-slate-400 px-6">
                                    <p className="text-4xl font-bold text-white/10">❝</p>
                                </div>
                            </div>

                            {/* Play Button */}
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="w-16 h-16 bg-[#17B6B1] rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                                    <Play className="h-7 w-7 text-white fill-white ml-1" />
                                </div>
                            </div>

                            {/* Caption */}
                            <div className="absolute bottom-0 left-0 right-0 z-20 p-5">
                                <StarRating />
                                <p className="text-white font-semibold mt-2">
                                    "Stopped working weekends after 6 years."
                                </p>
                                <p className="text-slate-300 text-sm mt-1">— Sarah K., E-commerce Founder</p>
                                <p className="text-[#17B6B1] text-xs mt-1">Watch story →</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Cards Grid */}
                    <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {SOCIAL_PROOF.cards.map((card, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3"
                            >
                                <Quote className="h-5 w-5 text-[#17B6B1] flex-shrink-0" />
                                <p className="text-slate-700 text-sm leading-relaxed flex-1">
                                    {card.quote.split(card.highlight).map((part, j, arr) => (
                                        <span key={j}>
                                            {part}
                                            {j < arr.length - 1 && (
                                                <mark className="bg-[#E0F7F6] text-[#0E9490] font-semibold px-0.5 rounded not-italic">
                                                    {card.highlight}
                                                </mark>
                                            )}
                                        </span>
                                    ))}
                                </p>
                                <div className="flex items-center gap-3 pt-2 border-t border-slate-100">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#17B6B1] to-[#0E9490] flex items-center justify-center flex-shrink-0">
                                        <span className="text-white text-xs font-bold">
                                            {card.name.charAt(0)}
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-slate-900 text-sm font-semibold">{card.name}</p>
                                        <p className="text-slate-500 text-xs">{card.role}</p>
                                    </div>
                                    <div className="ml-auto">
                                        <StarRating count={5} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* "As Seen On" Strip */}
                <div className="border-t border-slate-200 pt-10">
                    <p className="text-center text-slate-400 text-xs uppercase tracking-widest mb-6 font-medium">
                        As Featured In
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {SOCIAL_PROOF.seenOn.map((brand) => (
                            <span
                                key={brand}
                                className="text-slate-300 font-bold text-lg md:text-xl tracking-tight hover:text-slate-400 transition-colors cursor-default"
                            >
                                {brand}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
                <DialogContent className="max-w-4xl p-0 bg-black border-0 rounded-2xl overflow-hidden">
                    <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
                        {videoOpen && (
                            <iframe
                                src={`${SOCIAL_PROOF.testimonialVideoUrl}?autoplay=1&rel=0`}
                                className="absolute inset-0 w-full h-full"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                title="Video testimonial"
                            />
                        )}
                    </div>
                </DialogContent>
            </Dialog>
        </section>
    );
}
