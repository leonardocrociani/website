import Link from "next/link"

export const Credits = () => {
    return <div className="w-full flex justify-between mono text-sm text-gray-500">
        <div>
            Leonardo Crociani ({(new Date()).getFullYear()})
        </div>
        <Link
            target="_blank"
            href="https://github.com/leonardocrociani/portfolio">
            source
        </Link>
    </div>
}