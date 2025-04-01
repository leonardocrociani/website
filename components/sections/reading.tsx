import Link from "next/link";
import { Section, SectionTitle } from "../elements/section";
import kv from "@/lib/frontend/kv";

export const Reading = () => {
    return <Section>
        <SectionTitle>reading</SectionTitle>
        <div>
            I am currently reading <Link
                href={'https://amzn.to/4i00X6y'}
                about="_blank">
                four steps to the epiphany
            </Link>&nbsp;
            <span className="mono text-gray-400 text-sm">
                ({kv.get('book-percentage', 0)}%)
            </span>&nbsp;by Steve Blank.
        </div>
    </Section>
}