import Link from "next/link"
import kv from '@/lib/frontend/kv';

export const Credits = async () => {
    return <div className="w-full flex text-xs items-center justify-between mono text-gray-500">
        <div className="w-full text-start">
            Leonardo Crociani
        </div>
        <div className="w-full text-center">{kv.get('home-page-views', 0)} views</div>
        <div className="w-full text-end">
            <Link
                target="_blank"
                href="https://github.com/leonardocrociani/portfolio">
                source
            </Link>
        </div>
    </div>
}