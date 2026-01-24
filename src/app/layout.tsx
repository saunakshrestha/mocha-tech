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
  title: "MochaTech Pty Ltd | Electrical CAD Outsourcing (Perth, WA)",
  description:
    "Precision electrical CAD outsourcing for mining and resources clients in Western Australia. AutoCAD drafting, design & calculations, vendor coordination, and compliance-focused delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${roboto.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
