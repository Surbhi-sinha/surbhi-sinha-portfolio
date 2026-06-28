import type { Metadata } from "next";
import "./globals.css";
import { Archivo, JetBrains_Mono } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Surbhi Sinha — Full-Stack Engineer",
  description:
    "Surbhi Sinha — Full-stack engineer building scalable systems and intelligent products. Distributed systems, AI-driven automation, and high-performance web applications.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Surbhi Sinha — Full-Stack Engineer",
    description:
      "Full-stack engineer building scalable systems and intelligent products.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} ${jetbrainsMono.variable} bg-black text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
