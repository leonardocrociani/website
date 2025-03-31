import { Credits } from "@/components/sections/credits";
import { Header } from "@/components/sections/header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { startDb } from "@/lib/backend/db";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Leonardo Crociani",
  description: "Portfolio of Leonardo Crociani",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div>
          <main className="container flex flex-col justify-between mx-auto min-h-screen p-8 max-w-3xl">
            <div className="flex flex-col gap-12">
              <Header />
              {children}
            </div>
            <Credits />
          </main>
        </div>
      </body>
    </html>
  );
}
