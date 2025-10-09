import { About } from "@/components/sections/about";
import { Citations } from "@/components/sections/citations";
import { Reading } from "@/components/sections/reading";
import kv from "@/lib/frontend/kv";

export const revalidate = 0;

export default async function Page() {

    await kv.increment("home-page-views", 1);

    await kv.set("citations", [
        {
            citation: 'What sets successful cases apart from failures is that the entrepreneurs who make it have the foresight, skills, and tools to identify which parts of their plan are working exceptionally well and which are flawed — and to adapt their strategy accordingly.',
            source: 'The Lean Startup, Eric Ries'
        },
        {
            citation : 'Your network is your net worth.',
            source: 'Porter Gale, author of Your Network is Your Net Worth'
        }
    ]);

    const books = await kv.get("books", []) as { title: string; author: string; link: string }[];
    const citations = await kv.get("citations", []) as { citation: string; source: string }[];

    return <div className="flex flex-col gap-8">
        <About />
        <Reading books={books} />
        <Citations citations={citations} />
    </div>
}