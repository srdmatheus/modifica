import type { Metadata } from "next";

import "@/styles/globals.css";

import { fonts } from "../../public/fonts";

export const metadata: Metadata = {
  title: "Converte Já",
  description: "Converta e comprima seus arquivos de forma rápida e fácil."
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  const fontVariables = fonts.map((font) => font.variable).join(" ");
  return (
    <html lang="pt-br">
      <body className={`${fontVariables} font-sans`}>{children}</body>
    </html>
  );
}
