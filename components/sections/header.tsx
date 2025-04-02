import Link from "next/link"

export const Header = () => {
    return <div className="flex items-center justify-between">
        <Link
            className="no-underline"
            href="/">
            <h1 className="font-bold text-black text-2xl tracking-tighter">
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
                href="mailto:l.crociani@outlook.com"
                className="mono">
                email
            </Link>
        </div>
    </div>
}
