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
                        I am a software engineer with a strong inclination towards AI. 
                        I&apos;m the creator of <Link 
                            target="_blank" 
                            href="https://appuntiexpress.com"
                            className="text-blue-500 hover:text-blue-700"
                        >
                            appuntiexpress.com
                        </Link> and <Link 
                            target="_blank" 
                            href="https://sbobinare.app"
                            className="text-blue-500 hover:text-blue-700"
                        >
                            sbobinare.app
                        </Link>. 
                        I work to ease people&apos;s lives.
                    </div>
                    <div>
                        I&apos;m pursuing a Master&apos;s degree in Artificial Intelligence (CS Dept.) at the University of Pisa, 
                        working on a thesis at the intersection of AI and venture capital, collaborating with <Link 
                            target="_blank" 
                            href="https://obloo.vc" 
                            className="text-blue-500 hover:text-blue-700"
                        >
                            obloo.vc
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
            <div>
                I currently work part-time for my father&apos;s company, <Link 
                    target="_blank" 
                    href="https://micronetonline.it"
                    className="text-blue-500 hover:text-blue-700"
                >
                    Micronet
                </Link>, where I find software solutions to clients&apos; problems.
            </div>
        </Section>
    );
};