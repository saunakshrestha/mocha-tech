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
  metadataBase: new URL('https://mochatech.netlify.app'),
  title: "MochaTech Pty Ltd | Electrical CAD Outsourcing (Perth, WA)",
  description:
    "Precision electrical CAD outsourcing for mining and resources clients in Western Australia. AutoCAD drafting, design & calculations, vendor coordination, and compliance-focused delivery.",
  keywords: [
    "electrical CAD outsourcing",
    "AutoCAD drafting Perth",
    "mining electrical design",
    "resources sector CAD",
    "electrical engineering WA",
    "CAD services Western Australia",
    "electrical calculations",
    "compliance documentation",
  ],
  authors: [{ name: "MochaTech Pty Ltd" }],
  creator: "MochaTech Pty Ltd",
  publisher: "MochaTech Pty Ltd",
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
    type: 'website',
    locale: 'en_AU',
    url: 'https://mochatech.netlify.app',
    siteName: 'MochaTech Pty Ltd',
    title: 'MochaTech Pty Ltd | Electrical CAD Outsourcing (Perth, WA)',
    description: 'Precision electrical CAD outsourcing for mining and resources clients in Western Australia.',
    images: [
      {
        url: '/illustrations/hero-cad-workspace.webp',
        width: 1200,
        height: 630,
        alt: 'MochaTech Electrical CAD Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MochaTech Pty Ltd | Electrical CAD Outsourcing',
    description: 'Precision electrical CAD outsourcing for mining and resources clients in Western Australia.',
    images: ['/illustrations/hero-cad-workspace.webp'],
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
    description: 'Precision electrical CAD outsourcing for mining and resources clients in Western Australia.',
    url: 'https://mochatech.netlify.app',
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
