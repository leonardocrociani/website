import { redirectsMap } from "@/constants/redirects_map";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    const redirectUrl = redirectsMap[id];
    if (redirectUrl) {
        redirect(redirectUrl);
    } else {
        // Handle the case where the ID is not found in the redirectsMap
        // You can redirect to a 404 page or show an error message
        redirect("/404");
    }
    return null;
}