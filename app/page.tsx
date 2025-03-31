import { About } from "@/components/sections/about";
import { Reading } from "@/components/sections/reading";
import kv from "@/lib/frontend/kv";

export const revalidate = 0;

export default async function Page() {

    await kv.increment("home-page-views", 1);

    return <div className="flex flex-col gap-8">
        <About />
        <Reading />
    </div>
}