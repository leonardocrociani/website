import { NextResponse } from "next/server"
import { redis } from "@/lib/backend/redis";

// GET handler to retrieve a value
export async function GET(request: Request, { params }: { params: Promise<{ key: string }> }) {
    const { key } = await params;

    console.log('Fetching key:', key)

    try {
        const value = await redis.get(key)
        return NextResponse.json({ value })
    } catch (error) {
        console.error(`Error getting value for key ${key}:`, error)
        return NextResponse.json({ error: "Failed to get value" }, { status: 500 })
    }
}

// POST handler to set a value
export async function POST(request: Request, { params }: { params: Promise<{ key: string }> }) {
    const { key } = await params;

    try {
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

