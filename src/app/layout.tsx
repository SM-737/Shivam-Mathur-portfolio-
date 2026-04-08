import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ThemeProvider from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://shivammathur.dev"),
  title: "Shivam Mathur | LATTICE Developer & Aerospace Engineer",
  description:
    "Personal portfolio of Shivam Mathur — LATTICE Developer at Anduril Industries, aerospace engineer, and researcher specializing in hypersonic systems, robotics, and defense technology.",
  keywords: [
    "Shivam Mathur",
    "Anduril Industries",
    "LATTICE",
    "Aerospace Engineering",
    "Defense Technology",
    "Hypersonic",
    "Robotics",
  ],
  authors: [{ name: "Shivam Mathur" }],
  openGraph: {
    type: "website",
    title: "Shivam Mathur | LATTICE Developer & Aerospace Engineer",
    description:
      "Personal portfolio of Shivam Mathur — LATTICE Developer at Anduril Industries",
    siteName: "Shivam Mathur Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans">
        <ThemeProvider>
          <CustomCursor />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
