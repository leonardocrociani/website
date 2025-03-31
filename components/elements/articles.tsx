import Link from "next/link"

export const Articles = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const articles = [
        {
            title: "How to use the new Google Search Console API",
            description: "A step-by-step guide to using the new Google Search Console API.",
            date: "2023-10-01",
            slug: "https://example.com/article1",
            image: "https://example.com/image1.jpg"
        },
        {
            title: "How to use the new Google Search Console API",
            description: "A step-by-step guide to using the new Google Search Console API.",
            date: "2023-10-01",
            slug: "https://example.com/article1",
            image: "https://example.com/image1.jpg"
        },
        {
            title: "How to use the new Google Search Console API",
            description: "A step-by-step guide to using the new Google Search Console API.",
            date: "2023-10-01",
            slug: "https://example.com/article1",
            image: "https://example.com/image1.jpg"
        },
    ]

    return (
        <table className="w-full border-collapse">
            <tbody>
                {articles.map((article, index) => (
                    <tr key={index} className="border-b border-gray-300 last:border-0">
                        <td>
                            <Link
                                href={article.slug}
                                className="block transition-all py-3 flex items-center justify-between no-underline hover:bg-gray-100 duration-300 ease-in-out"
                            >
                                <h3 className="text-gray-900">
                                    {article.title}
                                </h3>
                                <p className="text-gray-400 text-sm font-medium">
                                    {new Date(article.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
