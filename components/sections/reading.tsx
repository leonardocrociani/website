import Link from "next/link";
import { Section, SectionTitle } from "../elements/section";

export const Reading = () => {
    return <Section>
        <SectionTitle>reading</SectionTitle>
        <div>
            I am currently reading <Link
                href={'https://amzn.to/4i00X6y'}
                about="_blank">
                four steps to the epiphany
            </Link>&nbsp;by Steve Blank.
        </div>
    </Section>
}