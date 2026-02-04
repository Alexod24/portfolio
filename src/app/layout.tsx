import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA_EN as DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans, Cinzel } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/language-provider";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontCinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: "Alex | Full Stack Developer",
    template: `%s | Alex Portfolio`,
  },
  description: "Specializing in designing scalable architectures and building high-performance digital products.",
  openGraph: {
    title: "Alex | Full Stack Developer",
    description: "Specializing in designing scalable architectures and building high-performance digital products.",
    url: DATA.url,
    siteName: "Alex Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/me.png",
        width: 1200,
        height: 630,
        alt: "Alex Portfolio",
      },
    ],
  },
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
  twitter: {
    title: "Alex | Full Stack Developer",
    card: "summary_large_image",
    description: "Specializing in designing scalable architectures and building high-performance digital products.",
    images: ["/me.png"],
  },
  verification: {
    google: "",
    yandex: "",
  },
  icons: {
    icon: "/me.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-4xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable,
          fontCinzel.variable
        )}
      >
        <LanguageProvider>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <TooltipProvider delayDuration={0}>
              {children}
              <Navbar />
            </TooltipProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
