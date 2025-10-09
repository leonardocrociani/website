import { About } from "@/components/sections/about";
import { Citations } from "@/components/sections/citations";
import { Reading } from "@/components/sections/reading";
import kv from "@/lib/frontend/kv";

export const revalidate = 0;

export default async function Page() {

    await kv.increment("home-page-views", 1);
    const books = await kv.get("books", []) as { title: string; author: string; link: string }[];
    const citations = await kv.get("citations", []) as { citation: string; source: string }[];

    return <div className="flex flex-col gap-8">
        <About />
        <Reading books={books} />
        <Citations citations={citations} />
    </div>
}