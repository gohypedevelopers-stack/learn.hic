import { REVIEWS } from "@/lib/constants";

function StarRow({ count = 5 }: { count?: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: count }).map((_, i) => (
                <span key={i} className="text-amber-400 text-sm">★</span>
            ))}
        </div>
    );
}

export default function ReviewsSection() {
    return (
        <section id="reviews" className="py-20 md:py-28 bg-[#0F172A] text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block text-[#17B6B1] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        {REVIEWS.sectionLabel}
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                        {REVIEWS.heading}
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">{REVIEWS.subheading}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {REVIEWS.stats.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-[#17B6B1]/10 hover:border-[#17B6B1]/30 transition-all duration-200"
                        >
                            <p className="text-3xl md:text-4xl font-extrabold text-[#17B6B1] mb-2">
                                {stat.value}
                            </p>
                            <p className="text-slate-400 text-sm leading-snug">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Review Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {REVIEWS.cards.map((card, i) => (
                        <div
                            key={i}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/8 hover:border-[#17B6B1]/30 transition-all duration-200 flex flex-col gap-4"
                        >
                            <div className="flex items-center justify-between">
                                <StarRow count={card.rating} />
                                <div className="w-2 h-2 rounded-full bg-[#17B6B1]" />
                            </div>

                            <p className="text-slate-300 text-sm leading-relaxed flex-1">
                                {card.text.split(card.highlight).map((part, j, arr) => (
                                    <span key={j}>
                                        {part}
                                        {j < arr.length - 1 && (
                                            <mark className="bg-[#17B6B1]/20 text-[#17B6B1] font-semibold px-0.5 rounded not-italic">
                                                {card.highlight}
                                            </mark>
                                        )}
                                    </span>
                                ))}
                            </p>

                            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#17B6B1] to-[#0E9490] flex items-center justify-center flex-shrink-0">
                                    <span className="text-white text-xs font-bold">{card.name.charAt(0)}</span>
                                </div>
                                <div>
                                    <p className="text-white text-sm font-semibold">{card.name}</p>
                                    <p className="text-slate-500 text-xs">{card.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
