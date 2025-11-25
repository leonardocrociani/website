import Image from "next/image";
import { Section, SectionTitle } from "../elements/section";
import Link from "next/link";

export const About = () => {
    return (
        <Section>
            <SectionTitle>about</SectionTitle>
            <div className="flex justify-between gap-4 md:flex-row flex-col-reverse">
                <div className="flex flex-col gap-4">
                    <div>
                        I&apos;m a builder with a strong passion for creating impactful products.
                        I&apos;m the creator of{" "}
                        <Link
                            target="_blank"
                            href="https://appuntiexpress.com"
                            className="text-blue-500 hover:text-blue-700"
                        >
                            appuntiexpress.com
                        </Link>{" "}
                        and{" "}
                        <Link
                            target="_blank"
                            href="https://sbobinare.app"
                            className="text-blue-500 hover:text-blue-700"
                        >
                            sbobinare.app
                        </Link>. I&apos;m currently a Software Engineer at <Link target="_blank" href="https://bendingspoons.com" className="text-blue-500 hover:text-blue-700">Bending Spoons</Link>.
                    </div>
                    <div>
                        I earned both my Bachelor&apos;s and Master&apos;s degrees at the University of Pisa, graduating <i>cum laude</i> (110/110 with honors) in Computer Science and Artificial Intelligence.
                        You can read my Master&apos;s thesis here:{" "}
                        <Link
                            target="_blank"
                            href="https://etd.adm.unipi.it/theses/available/etd-06252025-142712/unrestricted/Master_Thesis.pdf"
                            className="text-blue-500 hover:text-blue-700"
                        >
                            Master Thesis
                        </Link>.
                    </div>
                </div>
                <div>
                    <Image
                        src="https://lh3.googleusercontent.com/a/ACg8ocK8ZAou6gmBqdnfrocssBg0l0GkBaLTC3QH5I0uTfaU3_dCZIEn=s576-c-no"
                        alt="Leonardo Crociani"
                        width={350}
                        height={350}
                        className="rounded-full md:mb-0 mb-4 bg-gray-100 block mx-auto grayscale hover:grayscale-0 transition-all duration-200 ease-in-out"
                        priority
                    />
                </div>
            </div>
            {/* <div>
                <p className="mb-1">Currently:</p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Software Engineer @ Bending Spoons</li>
                </ul>
            </div> */}
        </Section>
    );
};
