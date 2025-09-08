import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paper Background Examples",
  description: "Additional examples of the paper design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <header className="font-sans md:max-w-3/4 mx-auto py-6">
          <div className="flex gap-2">
            <Image
              alt="icon"
              src={"/icon.png"}
              width={35}
              height={35}
            />
            <p className="text-2xl font-medium">
              @paper-design | presets
            </p>
          </div>
        </header>
        <div className="md:max-w-3/4 mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
