import type { Metadata } from "next";
import { Playfair_Display, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RUGVED VASTU | Expert Vastu & Numerology Consultancy",
  description: "Premium Vastu, Numerology, and Astrology consultancy with 21+ years of experience. Official Jiten Pyramid partners.",
  openGraph: {
    title: "RUGVED VASTU | Expert Vastu & Numerology Consultancy",
    description: "Premium Vastu, Numerology, and Astrology consultancy with 21+ years of experience. Official Jiten Pyramid partners.",
    url: "https://aurelian-veda.com", // Placeholder
    siteName: "RUGVED VASTU",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.webp" type="image/webp" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "RUGVED VASTU",
              "image": "",
              "telephone": "+91 0000000000",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "BKC Complex",
                "addressLocality": "Mumbai",
                "postalCode": "400051",
                "addressCountry": "IN"
              },
              "priceRange": "$$",
              "url": "https://aurelian-veda.com"
            })
          }}
        />
      </head>
      <body className={`${playfair.variable} ${inter.variable} ${montserrat.variable} min-h-full flex flex-col bg-parchment font-body-md text-deep-navy overflow-x-hidden antialiased`}>
        {children}
      </body>
    </html>
  );
}
