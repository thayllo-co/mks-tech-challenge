import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Desafio MKS",
  description:
    "Aplicação Next.js desenvolvida para atender ao desafio técnico proposto pela MKS Desenvolvimento de Sistemas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
