import type { Metadata } from "next";
import { DM_Sans, Roboto_Serif } from "next/font/google";
import "./globals.css";
import MainWrapper from "@/components/layout/MainWrapper";
import ScrollToTop from "@/components/atoms/ScrollToTop";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // all weights
  variable: "--font-dmSans",
  display: "swap",
});
const roboto = Roboto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // all weights
  variable: "--font-roboto",
  display: "swap",
});
export const metadata: Metadata = {
  title: "Aimers Tech",
  description: "We build and back exceptional service businesses.",
  openGraph: {
    title: "aimers global",
    description: "We build and back exceptional service businesses.",
    url: "https://www.aimersglobal.co",
    siteName: "aimers global",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${dmSans.variable} antialiased`}>
        <MainWrapper>
          {children}
        </MainWrapper>
        <ScrollToTop />
      </body>
    </html>
  );
}
