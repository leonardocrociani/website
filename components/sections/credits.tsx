import Link from "next/link"
import kv from '@/lib/frontend/kv';

export const Credits = async () => {
    return <div className="w-full flex mt-12 text-xs items-center justify-between mono text-gray-500">
        <div className="w-full text-start">
            Leonardo Crociani
        </div>
        <div className="w-full text-center">{kv.get('home-page-views', 0, true)} views</div>
        <div className="w-full text-end">
            <Link
                target="_blank"
                href="https://github.com/leonardocrociani/website">
                source
            </Link>
        </div>
    </div>
}