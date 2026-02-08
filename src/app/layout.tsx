import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mochatech.com.au"),
  title: "MochaTech Pty Ltd | Professional CAD Drafting & Outsourcing Services in Perth, WA",
  description:
    "Budget-friendly AutoCAD designs with precise, efficient outsourcing for any industry. Professional CAD drafting services in Perth, WA – mining, resources, infrastructure, and more.",
  keywords: [
    "CAD drafting Perth",
    "AutoCAD drafting services",
    "electrical CAD outsourcing",
    "CAD outsourcing Nepal",
    "AutoCAD Nepal",
    "CAD services Perth WA",
    "budget-friendly CAD design",
    "mining CAD services",
    "infrastructure CAD drafting",
    "AutoCAD outsourcing Australia",
    "professional CAD services",
    "electrical design Perth",
    "global project teams",
  ],
  authors: [{ name: "MochaTech Pty Ltd" }],
  creator: "MochaTech Pty Ltd",
  publisher: "MochaTech Pty Ltd",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: "/favicons/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://mochatech.com.au",
    siteName: "MochaTech Pty Ltd",
    title: "MochaTech Pty Ltd | Professional CAD Drafting & Outsourcing Services in Perth, WA",
    description:
      "Budget-friendly AutoCAD designs with precise, efficient outsourcing for any industry in Western Australia.",
    images: [
      {
        url: "/illustrations/hero-cad-workspace.webp",
        width: 1200,
        height: 630,
        alt: "MochaTech Electrical CAD Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MochaTech Pty Ltd | Professional CAD Drafting & Outsourcing Services in Perth, WA",
    description:
      "Budget-friendly AutoCAD designs with precise, efficient outsourcing for any industry in Western Australia.",
    images: ["/illustrations/hero-cad-workspace.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'MochaTech Pty Ltd',
    description: 'Budget-friendly AutoCAD designs with precise, efficient outsourcing for any industry in Western Australia.',
    url: 'https://mochatech.com.au',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'WA',
      addressLocality: 'Perth',
      addressCountry: 'AU',
    },
    areaServed: {
      '@type': 'State',
      name: 'Western Australia',
    },
    serviceType: [
      'Electrical CAD Outsourcing',
      'AutoCAD Drafting',
      'Electrical Design',
      'Vendor Coordination',
      'O&M Manuals',
    ],
    priceRange: '$$',
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#6F4E37" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${roboto.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
