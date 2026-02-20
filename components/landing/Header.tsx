"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ANNOUNCEMENT_BAR, NAV_LINKS, SITE } from "@/lib/constants";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 32);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            {/* Announcement Bar */}
            <div className="bg-[#17B6B1] text-white text-sm py-2 px-4 text-center flex items-center justify-center gap-2">
                <Zap className="h-3.5 w-3.5 flex-shrink-0" />
                <span>{ANNOUNCEMENT_BAR.text}</span>
                <a
                    href={ANNOUNCEMENT_BAR.href}
                    className="font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
                >
                    {ANNOUNCEMENT_BAR.cta}
                </a>
            </div>

            {/* Sticky Nav */}
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
                        ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
                        : "bg-white"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 rounded-lg bg-[#17B6B1] flex items-center justify-center">
                                <span className="text-white font-bold text-sm">S</span>
                            </div>
                            <span className="font-bold text-xl text-slate-900 group-hover:text-[#17B6B1] transition-colors">
                                {SITE.logo}
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#17B6B1] rounded-lg hover:bg-[#E0F7F6] transition-all duration-200"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        {/* Desktop CTA */}
                        <div className="hidden md:flex items-center gap-3">
                            <Button
                                asChild
                                className="bg-[#17B6B1] hover:bg-[#0E9490] text-white font-semibold px-5 py-2 rounded-xl shadow-sm transition-all duration-200 hover:shadow-md"
                            >
                                <a href="#apply">Apply Now</a>
                            </Button>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                        >
                            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="md:hidden border-t border-slate-100 bg-white px-4 py-4 space-y-1">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-[#17B6B1] hover:bg-[#E0F7F6] rounded-lg transition-all"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                        <div className="pt-2">
                            <Button
                                asChild
                                className="w-full bg-[#17B6B1] hover:bg-[#0E9490] text-white font-semibold rounded-xl"
                            >
                                <a href="#apply" onClick={() => setMenuOpen(false)}>
                                    Apply Now
                                </a>
                            </Button>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
