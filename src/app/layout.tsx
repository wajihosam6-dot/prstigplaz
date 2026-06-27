import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "../styles/globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
  preload: true,
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Prestige Plaza Furniture — Luxury Crafted For Timeless Living",
  description:
    "Discover Prestige Plaza Furniture — Toronto's premier luxury furniture destination. Handcrafted pieces, curated collections, and bespoke design services for discerning homeowners.",
  keywords: [
    "luxury furniture Toronto",
    "premium furniture store",
    "high-end furniture",
    "bespoke furniture",
    "Italian furniture",
    "designer furniture",
    "living room furniture",
    "bedroom furniture",
    "dining furniture",
    "Prestige Plaza",
  ],
  authors: [{ name: "Prestige Plaza Furniture" }],
  creator: "Prestige Plaza Furniture",
  publisher: "Prestige Plaza Furniture",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://prestigeplazafurniture.com",
    siteName: "Prestige Plaza Furniture",
    title: "Prestige Plaza Furniture — Luxury Crafted For Timeless Living",
    description:
      "Toronto's premier luxury furniture destination. Handcrafted pieces, curated collections, and bespoke design services.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Prestige Plaza Furniture — Luxury Showroom",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestige Plaza Furniture — Luxury Crafted For Timeless Living",
    description:
      "Toronto's premier luxury furniture destination. Handcrafted pieces, curated collections.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://prestigeplazafurniture.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0908",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jost.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FurnitureStore",
              name: "Prestige Plaza Furniture",
              description:
                "Toronto's premier luxury furniture destination offering handcrafted pieces, curated collections, and bespoke design services.",
              url: "https://prestigeplazafurniture.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Toronto",
                addressRegion: "ON",
                addressCountry: "CA",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "10:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Saturday", "Sunday"],
                  opens: "11:00",
                  closes: "18:00",
                },
              ],
              priceRange: "$$$",
              hasMap: "https://maps.app.goo.gl/Prjgb5z2F24gLqck7",
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        {/* Grain / Noise Overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
