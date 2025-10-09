import { Section, SectionTitle } from "../elements/section";

export const Citations = ({
    citations,
}: {
    citations: { citation: string; source: string }[];
}) => {
    return (
        <Section>
            <SectionTitle>citations</SectionTitle>
            <div className="flex flex-col gap-4">
                {citations.length === 0 ? (
                    <p className="text-sm italic text-gray-500">No citations added yet.</p>
                ) : (
                    citations.map(({ citation, source }, index) => (
                        <div
                            key={index}
                            className="border-s-2 border-gray-200 ps-5 text-gray-800"
                        >
                            <p className="text-sm leading-relaxed font-light">
                                “{citation}”
                            </p>
                            <p className="mt-1 text-xs text-gray-500 font-light">
                                - {source}
                            </p>
                        </div>
                    ))
                )}
            </div>
        </Section>
    );
};
