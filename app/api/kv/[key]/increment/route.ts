import { NextResponse } from "next/server"
import { redis } from "@/lib/backend/redis"

export async function POST(request: Request, { params }: { params: Promise<{ key: string }> }) {
    const { key } = await params;

    try {
        const body = await request.json()
        const { amount = 1 } = body

        if (typeof amount !== "number") {
            return NextResponse.json({ error: "Amount must be a number" }, { status: 400 })
        }

        const newValue = await redis.incrby(key, amount)

        return NextResponse.json({ value: newValue })
    } catch (error) {
        console.error(`Error incrementing value for key ${key}:`, error)
        return NextResponse.json({ error: "Failed to increment value" }, { status: 500 })
    }
}

