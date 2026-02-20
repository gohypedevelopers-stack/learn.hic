import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/constants";

export default function FAQSection() {
    return (
        <section id="faq" className="py-20 md:py-28 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="inline-block text-[#17B6B1] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                        FAQ
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                        Questions? We've Got Answers.
                    </h2>
                    <p className="text-slate-500 text-lg">
                        Everything you need to know before applying.
                    </p>
                </div>

                {/* Accordion */}
                <Accordion type="single" collapsible className="space-y-3">
                    {FAQS.map((faq, i) => (
                        <AccordionItem
                            key={i}
                            value={`faq-${i}`}
                            className="border border-slate-200 rounded-2xl px-6 overflow-hidden shadow-sm hover:shadow-md transition-shadow data-[state=open]:border-[#17B6B1]/40 data-[state=open]:bg-[#E0F7F6]/30"
                        >
                            <AccordionTrigger className="py-5 text-left font-semibold text-slate-800 hover:text-[#17B6B1] hover:no-underline text-sm sm:text-base transition-colors [&[data-state=open]]:text-[#17B6B1]">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="pb-5 text-slate-600 text-sm leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                {/* Footer nudge */}
                <div className="mt-10 text-center">
                    <p className="text-slate-500 text-sm">
                        Still have a question?{" "}
                        <a
                            href="mailto:hello@scaleos.co"
                            className="text-[#17B6B1] font-semibold hover:underline"
                        >
                            Email us directly →
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
