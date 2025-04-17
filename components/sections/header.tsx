import Link from "next/link"

export const Header = () => {
    return <div className="flex items-center justify-between">
        <Link
            className="no-underline"
            href="/">
            <h1 className="font-bold text-black dark:text-white text-2xl tracking-tighter">
                Leonardo Crociani
            </h1>
        </Link>
        <div className="flex gap-4">
            {/* <Link
                href="/blog"
                className="mono">
                blog
            </Link> */}
            <Link
                href="mailto:info@crociani.co"
                className="mono">
                email
            </Link>
        </div>
    </div>
}