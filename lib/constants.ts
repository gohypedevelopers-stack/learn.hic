// ─────────────────────────────────────────────
// LANDING PAGE CONTENT CONSTANTS
// Edit this file to change all copy in one place
// ─────────────────────────────────────────────

export const SITE = {
    name: "ScaleOS",
    logo: "ScaleOS",
    tagline: "Built for founders who are done being the bottleneck.",
};

export const ANNOUNCEMENT_BAR = {
    text: "⚡ Only 12 spots available for the February cohort.",
    cta: "Apply Now →",
    href: "#apply",
};

export const NAV_LINKS = [
    { label: "What You Get", href: "#what-you-get" },
    { label: "Reviews", href: "#reviews" },
    { label: "Apply", href: "#apply" },
    { label: "FAQ", href: "#faq" },
];

export const HERO = {
    headline: "Are You the Bottleneck\nIn Your Own Business?",
    subheadline:
        "Apply for a high-impact workshop that replaces you as the single point of failure—so your business can grow without you holding it back.",
    videoThumbnailAlt: "Workshop preview video",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Replace with real URL
    ctaButton: "I'm Ready to Apply",
    ctaHref: "#apply",
    supportingLine: "🔒 Limited to 12 founder spots. Free to apply—no commitment required.",
};

export const SOCIAL_PROOF = {
    sectionLabel: "WHAT PEOPLE ARE SAYING",
    heading: "Founders Who Stopped Running the Machine",
    subheading:
        "Real results from real business owners who applied the ScaleOS framework.",
    testimonialVideoAlt: "Video testimonial from Sarah K.",
    testimonialVideoThumb: "/testimonial-thumb.jpg",
    testimonialVideoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    cards: [
        {
            quote:
                "Within 6 weeks of the workshop I had my first true week off—no fires, no Slack pings, no emergencies. The framework just works.",
            name: "Marcus T.",
            role: "CEO, Apex Logistics",
            highlight: "first true week off",
        },
        {
            quote:
                "I went from approving every invoice to having a team that runs the entire ops cycle autonomously. Revenue up 40% in 3 months.",
            name: "Priya S.",
            role: "Founder, NestWell Homes",
            highlight: "Revenue up 40%",
        },
        {
            quote:
                "Stopped being the single point of failure. Now I work ON the business, not in it. Wish I'd found this two years ago.",
            name: "Daniel R.",
            role: "MD, Silverline Consulting",
            highlight: "work ON the business",
        },
        {
            quote:
                "The SOPs we built in the workshop reduced onboarding time from 3 weeks to 4 days. Absolute game changer.",
            name: "Fatima A.",
            role: "COO, BrightPath Agency",
            highlight: "onboarding time from 3 weeks to 4 days",
        },
    ],
    seenOn: ["Forbes", "Inc.", "Entrepreneur", "YC Blog", "Product Hunt"],
};

export const FEATURES = {
    sectionLabel: "WHAT YOU'LL GET",
    heading: "Three Pillars of Business Freedom",
    subheading:
        "Everything you need to extract yourself from day-to-day operations—without losing quality or momentum.",
    cards: [
        {
            number: "01",
            title: "The ScaleOS Framework",
            description:
                "A battle-tested operational model that separates your identity from your business functions.",
            bullets: [
                "Map every role you currently own",
                "Identify the 20% that only you can do",
                "Build decision trees for everything else",
                "Create accountability without micromanaging",
                "Graduate from operator to owner",
            ],
            imageAlt: "Framework illustration",
        },
        {
            number: "02",
            title: "Implementation & SOPs",
            description:
                "Done-with-you standard operating procedures that capture your expertise and make it executable by anyone.",
            bullets: [
                "Live SOP buildout during the workshop",
                "Templates for hiring, onboarding & ops",
                "Loom-compatible process walkthroughs",
                "Delegation scorecard & trust matrix",
                "90-day handover playbook",
            ],
            imageAlt: "SOPs and implementation",
        },
        {
            number: "03",
            title: "Your 90-Day Roadmap",
            description:
                "Walk away with a personalised execution plan, accountability partner, and clear next milestones.",
            bullets: [
                "Custom 90-day extraction timeline",
                "Weekly milestone check-ins",
                "Private community access (90 days)",
                "Direct Slack access to facilitators",
                "Optional 1-on-1 follow-up call",
            ],
            imageAlt: "Roadmap and next steps",
        },
    ],
};

export const CTA_BAND = {
    text: "Ready to stop being the bottleneck?",
    subtext: "Apply in under 3 minutes. We review every application personally.",
    button: "Apply for the Workshop →",
    href: "#apply",
};

export const REVIEWS = {
    sectionLabel: "FOUNDER REVIEWS",
    heading: "The Numbers Don't Lie",
    subheading: "Verified outcomes from our last three cohorts.",
    stats: [
        { value: "94%", label: "Report working fewer hours within 60 days" },
        { value: "3.2×", label: "Average revenue growth in 12 months" },
        { value: "400+", label: "Founders transformed since 2022" },
        { value: "4.9★", label: "Average workshop rating" },
    ],
    cards: [
        {
            name: "James H.",
            role: "Founder, Clearpath Digital",
            rating: 5,
            text: "I used to be the last person to leave and the first to arrive. Now my team runs Monday standup without me. The process maps we built in the workshop are literally on our company Wiki.",
            highlight: "team runs Monday standup without me",
        },
        {
            name: "Amara O.",
            role: "CEO, Zenith Health",
            rating: 5,
            text: "Best investment I made this year. Not just the ROI—the mental clarity you get when you're no longer doing 14-hour days is priceless. Highly recommend to any founder feeling burned out.",
            highlight: "mental clarity",
        },
        {
            name: "Tom B.",
            role: "MD, BlueRidge Capital",
            rating: 5,
            text: "We scaled from $22k MRR to $67k MRR in five months after implementing the framework. The hiring templates alone saved us thousands in bad hires.",
            highlight: "$22k MRR to $67k MRR in five months",
        },
        {
            name: "Lena M.",
            role: "Co-Founder, PetalBox",
            rating: 5,
            text: "I apply is probably in my top 3 business decisions ever. I finally have a GM who runs operations and I can focus on product and vision. Life-changing.",
            highlight: "top 3 business decisions ever",
        },
        {
            name: "Ben K.",
            role: "Owner, K&L Properties",
            rating: 5,
            text: "Skeptical going in, converted coming out. The facilitators are real operators who've done it themselves. No fluff, just systems that actually work in the real world.",
            highlight: "No fluff, just systems",
        },
        {
            name: "Sofia R.",
            role: "Founder, Rojo Creative",
            rating: 5,
            text: "We cut our client delivery time in half using the SOPs from the workshop. Clients noticed the improvement immediately. Can't believe I didn't do this sooner.",
            highlight: "cut client delivery time in half",
        },
    ],
};

export const APPLICATION = {
    sectionLabel: "APPLICATION",
    heading: "Apply for the Workshop",
    subheading:
        "Answer a few questions—if it's a fit, we'll reach out within 48 hours to schedule a 15-min clarity call.",
    disclaimer:
        "We review every application personally. This is not a sales call—it's a fit check.",
    industries: [
        "Professional Services",
        "E-commerce / Retail",
        "Real Estate",
        "Technology / SaaS",
        "Healthcare / Wellness",
        "Marketing / Agency",
        "Financial Services",
        "Manufacturing / Trades",
        "Education / Coaching",
        "Other",
    ],
    revenueOptions: [
        "Less than $5k/mo",
        "$5k – $20k/mo",
        "$20k – $50k/mo",
        "$50k – $100k/mo",
        "$100k+/mo",
        "Prefer not to say",
    ],
    successMessage: {
        heading: "Application Received! 🎉",
        body: "Thank you for applying. Our team will review your answers and reach out within 48 hours if it's a fit. Check your inbox (and junk folder) for a confirmation email.",
    },
};

export const FAQS = [
    {
        question: "What happens after I apply?",
        answer:
            "Once you submit, our team reviews your application within 48 hours. If it looks like a strong fit, we'll reach out to schedule a 15-minute clarity call to make sure the workshop is right for you—no pressure, no hard sells.",
    },
    {
        question: "Is this right for my industry?",
        answer:
            "The ScaleOS framework is industry-agnostic. We've worked with founders in services, e-commerce, real estate, SaaS, healthcare, agencies, and more. If you run a business and you're the bottleneck, this is for you.",
    },
    {
        question: "Do I need a team?",
        answer:
            "Not necessarily. Some attendees are solo operators planning to hire—the workshop actually helps you build the foundation BEFORE you bring people in, so you hire into a system rather than chaos.",
    },
    {
        question: "How long is the workshop?",
        answer:
            "The core workshop is a full-day intensive (9am–5pm), delivered virtually via Zoom. You'll have breaks and collaborative sessions. Optional follow-up sessions happen over the 90 days after.",
    },
    {
        question: "What if I can't attend on the suggested date?",
        answer:
            "We run cohorts every 6–8 weeks. If the upcoming date doesn't work, let us know in the application and we'll add you to the waitlist for the next cohort. Spots usually fill quickly so early applications are prioritised.",
    },
    {
        question: "Is there a cost to the workshop?",
        answer:
            "There's no cost to apply. If accepted, you'll receive full details about the investment during your clarity call. We offer flexible payment options and a full satisfaction guarantee.",
    },
    {
        question: "What if I've tried other business courses and they didn't work?",
        answer:
            "Most courses give you information. We give you implementation. The workshop is hands-on—you leave with actual SOPs, decision frameworks, and a 90-day roadmap built for YOUR business, not a generic template.",
    },
    {
        question: "Will I have ongoing support after the workshop?",
        answer:
            "Yes. All attendees get 90-day access to our private community, weekly group Q&As, and direct Slack access to facilitators. You are not left to implement alone.",
    },
];

export const FOOTER = {
    tagline: "Helping founders build businesses that run without them.",
    links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Contact", href: "mailto:hello@scaleos.co" },
    ],
    disclaimer:
        "© 2025 ScaleOS. All rights reserved. Results mentioned are illustrative of what's possible and may not be typical. Individual results will vary based on effort, experience, and business context.",
};
