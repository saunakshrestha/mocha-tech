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
  title: "CAD Drafting & AutoCAD Outsourcing Services | Offshore Nepal Team | MochaTech",
  description:
    "Leading CAD drafting & AutoCAD services in Perth, WA. Affordable electrical CAD outsourcing for mining, infrastructure, oil & gas. Expert AutoCAD drafters delivering precision designs 24/7. Get instant quotes.",
  keywords: [
    "CAD drafting services Perth",
    "AutoCAD drafting Perth",
    "CAD services Perth WA",
    "electrical CAD drafting",
    "AutoCAD outsourcing Australia",
    "CAD drafting companies",
    "electrical drafting services",
    "AutoCAD design services",
    "CAD outsourcing services",
    "mining CAD services Australia",
    "infrastructure CAD drafting",
    "oil and gas CAD services",
    "affordable CAD drafting",
    "professional AutoCAD services",
    "electrical design Perth",
    "CAD drafting Australia",
    "AutoCAD electrical drafting",
    "Perth engineering services",
    "Western Australia CAD services",
    "mechanical CAD drafting",
    "structural CAD services",
    "3D CAD modeling Perth",
    "CAD conversion services",
    "as-built drawings Perth",
    "CAD documentation services",
  ],
  authors: [{ name: "MochaTech Pty Ltd" }],
  creator: "MochaTech Pty Ltd",
  publisher: "MochaTech Pty Ltd",
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "google-site-verification=vdAzLxA7Pq8GF2dwPG4ELFdvLCHyEatfPqURhnjduUA",
  },
  icons: {
    icon: [
      { url: '/favicons/favicon.ico', sizes: 'any' },
      { url: '/favicons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'icon',
        url: '/favicons/favicon.ico',
      },
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
    siteName: "MochaTech - CAD Drafting Services Nepal",
    title: "Expert CAD Drafting & AutoCAD Services Nepal | MochaTech Australia",
    description:
      "Top-rated CAD drafting services. Professional AutoCAD outsourcing for mining, oil & gas, infrastructure. Fast turnaround, competitive rates. Trusted by Australian industries.",
    images: [
      {
        url: "/illustrations/hero-cad-workspace.webp",
        width: 1200,
        height: 630,
        alt: "Professional CAD Drafting and AutoCAD Services in Perth, Western Australia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CAD Drafting Services Nepal | AutoCAD Outsourcing | MochaTech",
    description:
      "Professional CAD drafting & AutoCAD services in Perth. Expert electrical, mechanical & structural drafting for Australian industries. Get your free quote today.",
    images: ["/illustrations/hero-cad-workspace.webp"],
    creator: "@MochaTech",
    site: "@MochaTech",
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
    alternateName: 'MochaTech CAD Services',
    description: 'Leading CAD drafting and AutoCAD services provider in Perth, Western Australia. Specializing in electrical, mechanical, and structural CAD drafting for mining, infrastructure, oil & gas industries across Australia.',
    url: 'https://mochatech.com.au',
    telephone: '+61 0424 055 711',
    email: 'projects@mochatech.com.au',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'WA',
      addressLocality: 'Perth',
      addressCountry: 'AU',
    },
    areaServed: [
      {
        '@type': 'State',
        name: 'Western Australia',
      },
      {
        '@type': 'Country',
        name: 'Australia',
      },
    ],
    serviceType: [
      'CAD Drafting Services',
      'AutoCAD Drafting',
      'Electrical CAD Outsourcing',
      'Electrical Design Services',
      'Mechanical CAD Drafting',
      'Structural CAD Services',
      'As-Built Drawings',
      'CAD Conversion Services',
      'Vendor Coordination',
      'O&M Manuals',
      '3D CAD Modeling',
    ],
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '50',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'CAD Drafting Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Electrical CAD Drafting',
            description: 'Professional electrical CAD drafting and design services for all industries',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AutoCAD Outsourcing',
            description: 'Cost-effective AutoCAD outsourcing solutions with 24/7 support',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Mining CAD Services',
            description: 'Specialized CAD services for mining and resources sector',
          },
        },
      ],
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#6F4E37" />
        <meta name="geo.region" content="AU-WA" />
        <meta name="geo.placename" content="Perth" />
        <meta name="geo.position" content="-31.9505;115.8605" />
        <meta name="ICBM" content="-31.9505, 115.8605" />
        <link rel="icon" href="/favicons/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
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
