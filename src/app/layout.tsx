import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Nerds Room | Where Builders, Hackers & Creators Meet",
  description: "A community designed for students, innovators, and future tech leaders.",
};

import CustomCursor from "@/components/CustomCursor";
import NoiseOverlay from "@/components/NoiseOverlay";
import GridBackground from "@/components/GridBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${poppins.className} antialiased`}>
        <CustomCursor />
        <NoiseOverlay />
        <GridBackground />
        {children}
      </body>
    </html>
  );
}
