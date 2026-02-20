import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        // Basic validation
        if (!body.fullName || !body.email || !body.biggestChallenge) {
            return NextResponse.json(
                { ok: false, error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Simulate processing delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // In production: save to DB, send email, trigger CRM webhook, etc.
        console.log("[/api/apply] New application received:", {
            fullName: body.fullName,
            email: body.email,
            businessName: body.businessName,
            monthlyRevenue: body.monthlyRevenue,
            industry: body.industry,
            timestamp: new Date().toISOString(),
        });

        return NextResponse.json({ ok: true, message: "Application received!" });
    } catch (error) {
        console.error("[/api/apply] Error:", error);
        return NextResponse.json(
            { ok: false, error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
