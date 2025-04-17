import { NextResponse } from "next/server"
import { redis } from "@/lib/backend/redis";
import { PROTECTED_KEYS } from "@/constants/protected_keys";

// GET handler to retrieve a value
export async function GET(_request: Request, { params }: { params: Promise<{ key: string }> }) {
    const { key } = await params;
    try {
        const value = await redis.get(key)
        return NextResponse.json({ value })
    } catch (error) {
        console.error(`Error getting value for key ${key}:`, error)
        return NextResponse.json({ error: "Failed to get value" }, { status: 500 })
    }
}

// POST handler to set a value
export async function POST(request: Request, { params }: { params: Promise<{ key: string, secret?: string }> }) {
    const { key, secret } = await params;

    try {

        if (PROTECTED_KEYS.includes(key)) {
            if (secret != process.env.PROTECTED_KEYS_SECRET) {
                return NextResponse.json({ error: "This key is protected" }, { status: 403 })
            }
        }

        const body = await request.json()
        const { value } = body

        if (value === undefined) {
            return NextResponse.json({ error: "Value is required" }, { status: 400 })
        }

        await redis.set(key, value)

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error(`Error setting value for key ${key}:`, error)
        return NextResponse.json({ error: "Failed to set value" }, { status: 500 })
    }
}

