import { Header } from "@/components/sections/header";
import { Credits } from "@/components/sections/credits";
import { About } from "@/components/sections/about";
import { Reading } from "@/components/sections/reading";

export default function Page() {
    return <div className="flex flex-col gap-8">
            <About />
            <Reading />
        </div>
}