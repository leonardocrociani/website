import NotFound from "@/app/not-found";

export default function Page({ params }: { params: { slug: string } }) {

    const { slug } = params;

    if (!slug) return <NotFound />;

    // search in db.
    // render md.
    
    return null;
}