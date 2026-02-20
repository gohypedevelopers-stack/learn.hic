import { CheckCircle2 } from "lucide-react";
import { FEATURES } from "@/lib/constants";

const CARD_GRADIENTS = [
    "from-[#17B6B1]/10 to-[#17B6B1]/5",
    "from-slate-100 to-slate-50",
    "from-[#E0F7F6] to-white",
];

const ICON_COLORS = [
    "bg-[#17B6B1] text-white",
    "bg-slate-800 text-white",
    "bg-[#17B6B1]/15 text-[#17B6B1]",
];

export default function FeaturesSection() {
    return (
        <section id="what-you-get" className="py-20 md:py-28 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-[#17B6B1] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        {FEATURES.sectionLabel}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        {FEATURES.heading}
                    </h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">{FEATURES.subheading}</p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {FEATURES.cards.map((card, i) => (
                        <div
                            key={i}
                            className={`relative rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br ${CARD_GRADIENTS[i]}`}
                        >
                            {/* Card number */}
                            <div className="p-8 pb-0">
                                <div className="flex items-center justify-between mb-6">
                                    <div
                                        className={`w-12 h-12 rounded-2xl flex items-center justify-center ${ICON_COLORS[i]}`}
                                    >
                                        <span className="text-sm font-black">{card.number}</span>
                                    </div>
                                    {i === 0 && (
                                        <span className="text-xs font-semibold text-[#17B6B1] bg-[#17B6B1]/10 px-3 py-1 rounded-full">
                                            Core Framework
                                        </span>
                                    )}
                                    {i === 1 && (
                                        <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full">
                                            Done-With-You
                                        </span>
                                    )}
                                    {i === 2 && (
                                        <span className="text-xs font-semibold text-[#17B6B1] bg-[#E0F7F6] px-3 py-1 rounded-full">
                                            Ongoing Support
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-6">{card.description}</p>
                            </div>

                            {/* Illustration placeholder */}
                            <div className="mx-8 rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-slate-100 to-slate-200 h-36 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="text-4xl mb-2">{["🗺️", "📋", "🧭"][i]}</div>
                                    <p className="text-slate-400 text-xs">{card.imageAlt}</p>
                                </div>
                            </div>

                            {/* Bullets */}
                            <div className="px-8 pb-8 space-y-3">
                                {card.bullets.map((bullet, j) => (
                                    <div key={j} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-4 w-4 text-[#17B6B1] flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-700 text-sm">{bullet}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
