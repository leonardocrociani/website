import approximate from 'approximate-number';

interface KVClient {
    get: <T>(key: string, defaultValue?: T, approximateNumber?: boolean) => Promise<T | string | null>
    set: (key: string, value: any) => Promise<void>
    increment: (key: string, amount?: number) => Promise<number>
}

class KV implements KVClient {
    private baseUrl: string

    constructor(baseUrl = (process.env.HOST_URL ?? '') + "/api/kv") {
        this.baseUrl = baseUrl;
    }

    /**
     * Get a value from storage
     */
    async get<T>(key: string, defaultValue?: T, approximateNumber?: boolean): Promise<T | string | null> {
        try {
            const response = await fetch(`${this.baseUrl}/${key}`)

            if (!response.ok) {
                throw new Error(`Failed to get value for key: ${key}`)
            }

            const data = await response.json()
            const value = data.value ?? defaultValue ?? null
            if (approximateNumber) {
                return approximate(value) as string;
            }
            return value as T;
        } catch (error) {
            console.error(`Error getting value for key ${key}:`, error)
            return defaultValue || null
        }
    }

    /**
     * Set a value in storage 
     */
    async set(key: string, value: any): Promise<void> {
        try {
            const response = await fetch(`${this.baseUrl}/${key}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ value }),
            })

            if (!response.ok) {
                throw new Error(`Failed to set value for key: ${key}`)
            }
        } catch (error) {
            console.error(`Error setting value for key ${key}:`, error)
            throw error
        }
    }

    /**
     * Increment a numeric value in storage
     */
    async increment(key: string, amount = 1): Promise<number> {
        if (typeof amount !== "number") {
            throw new Error("Amount must be a number")
        }
        if (amount <= 0) {
            throw new Error("Amount must be greater than 0")
        }
        if (!Number.isInteger(amount)) {
            throw new Error("Amount must be an integer")
        }
        try {
            const response = await fetch(`${this.baseUrl}/${key}/increment`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount }),
            })

            if (!response.ok) {
                throw new Error(`Failed to increment value for key: ${key}`)
            }

            const data = await response.json()
            return data.value
        } catch (error) {
            console.error(`Error incrementing value for key ${key}:`, error)
            throw error
        }
    }
}

const kv = new KV(undefined);
export default kv
