import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blush and Linen | Wellness Spa & Aesthetics",
  description: "Your path to wellness and rejuvenation. Premium aesthetic treatments, medical weight loss, and facial therapies.",
  openGraph: {
    title: "Blush and Linen | Wellness Spa & Aesthetics",
    description: "Your path to wellness and rejuvenation. Premium aesthetic treatments, medical weight loss, and facial therapies.",
    url: "https://blushandlinen.com",
    siteName: "Blush and Linen",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600334129128-685054110de4?auto=format&fit=crop&q=80",
        width: 1200,
        height: 630,
        alt: "Blush and Linen Aesthetics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans min-h-screen flex flex-col bg-linen text-charcoal">
        {children}
      </body>
    </html>
  );
}
