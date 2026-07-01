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
  title: "Surbhi Sinha - Full-Stack Developer & AI Engineer",
  description:
    "Portfolio of Surbhi Sinha, a full-stack developer building AI-powered products, enterprise web experiences, real-time systems, and scalable APIs.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Surbhi Sinha - Full-Stack Developer & AI Engineer",
    description:
      "Full-stack developer building AI-powered products, enterprise web experiences, real-time systems, and scalable APIs.",
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
