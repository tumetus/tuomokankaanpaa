import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Tuomo Kankaanpää - I build Trust for Dev Tool Companies",
  description:
    "I help dev tool companies bridge the gap between complex features and user adoption while building authority and capturing more leads.",
  openGraph: {
    title: "Tuomo Kankaanpää - I build Trust for Dev Tool Companies",
    description:
      "I help dev tool companies bridge the gap between complex features and user adoption while building authority and capturing more leads.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuomo Kankaanpää - I build Trust for Dev Tool Companies",
    description:
      "I help dev tool companies bridge the gap between complex features and user adoption while building authority and capturing more leads.",
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
      className={`${plusJakartaSans.variable} ${outfit.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
