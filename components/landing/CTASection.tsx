import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTA_BAND } from "@/lib/constants";

export default function CTASection() {
    return (
        <section className="py-16 bg-[#17B6B1] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
                <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-white/5" />
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                        backgroundSize: "32px 32px",
                    }}
                />
            </div>

            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-3">
                    {CTA_BAND.text}
                </h2>
                <p className="text-white/80 text-lg mb-8">{CTA_BAND.subtext}</p>

                <Button
                    asChild
                    size="lg"
                    className="bg-white text-[#17B6B1] hover:bg-slate-50 font-bold text-lg px-10 py-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all duration-200 group"
                >
                    <a href={CTA_BAND.href}>
                        {CTA_BAND.button}
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </Button>
            </div>
        </section>
    );
}
