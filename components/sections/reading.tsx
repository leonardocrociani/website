"use client";

import Link from "next/link";
import { Section, SectionTitle } from "../elements/section";

export const Reading = ({
    books,
}: {
    books: { title: string; author?: string; link?: string }[];
}) => {
    return (
        <Section>
            <SectionTitle>reading · books I suggest</SectionTitle>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {books.length === 0 && (
                    <p className="text-gray-500 italic text-sm">
                        No books added yet.
                    </p>
                )}
                {books.map((book, index) => (
                    <div
                        key={index}
                        className="rounded-lg border border-gray-200 bg-white/60 p-4"
                    >
                        <h3 className="text-base font-semibold text-gray-800">
                            {book.title}
                        </h3>
                        {book.author && (
                            <p className="text-sm text-gray-600 mt-1">{book.author}</p>
                        )}
                        {book.link && (
                            <Link
                                href={book.link}
                                target="_blank"
                                className="mt-2 inline-block text-sm text-blue-600 hover:underline"
                            >
                                View more →
                            </Link>
                        )}
                    </div>
                ))}
            </div>
        </Section>
    );
};
