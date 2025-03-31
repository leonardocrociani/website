import NotFound from "@/app/not-found";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

    const { slug } = await params;

    if (!slug) return <NotFound />;

    // search in db.
    // render md.

    return null;
}