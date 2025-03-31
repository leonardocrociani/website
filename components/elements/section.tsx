export const Section = ({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) => {
    return <section className="flex flex-col gap-4">{children}</section>;
}

export const SectionTitle = ({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) => {
    return <h1 className="text-2xl font-bold tracking-tighter">{children}</h1>;
}
