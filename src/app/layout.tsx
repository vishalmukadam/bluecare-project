import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import LoadingScreen from "@/components/ui/LoadingScreen";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BlueCare Systems – Wastewater Treatment Solutions | bluecare.in",
  description:
    "Bluecare Systems Pvt. Ltd. delivers sustainable and innovative wastewater and environmental solutions. Pollution prevention, resource recovery, waste treatment, and efficient water management.",
  keywords: [
    "wastewater treatment",
    "water recycling",
    "ZLD systems",
    "effluent treatment",
    "sewage treatment",
    "water treatment",
    "BlueCare",
    "environmental solutions",
    "sustainability",
  ],
  authors: [{ name: "BlueCare Systems Pvt. Ltd." }],
  icons: {
    icon: "/bluecare-logo.png",
  },
  openGraph: {
    title: "BlueCare Systems – Wastewater Treatment Solutions",
    description:
      "Sustainable and innovative wastewater and environmental solutions. 100+ businesses served, 100+ MLD treated daily.",
    url: "https://bluecare.in",
    siteName: "BlueCare Systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BlueCare Systems – Wastewater Treatment Solutions",
    description:
      "Sustainable and innovative wastewater and environmental solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/bluecare-logo.png" as="image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "BlueCare Systems Pvt. Ltd.",
              url: "https://bluecare.in",
              logo: "https://bluecare.in/bluecare-logo.png",
              description:
                "Sustainable and innovative wastewater and environmental solutions provider.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "India",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-[#F8FAFE] text-[#3C4D57]`}>
        <LoadingScreen />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
