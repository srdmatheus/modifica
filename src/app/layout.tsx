import type { Metadata } from "next";

import "@/styles/globals.css";

import { ThemeProvider } from "@/providers/theme";

import { Header } from "@/components/layout/header";

import { fonts } from "../../public/fonts";

export const metadata: Metadata = {
  title: "Modifica | Converta suas imagens para diversos formatos",
  description:
    "Converta facilmente suas imagens para vários formatos como PNG, JPEG, GIF e outros com nosso conversor de imagens online. Rápido e simples.",
  keywords:
    "conversor de imagens, converter imagens, conversor de imagens online, converter para png, converter para jpeg, converter para gif, conversor de arquivos",
  applicationName: "Modifica",
  authors: [{ name: "Matheus Ribeiro", url: "https://rmatheus.com" }],
  creator: "Matheus Ribeiro",
  publisher: "Matheus Ribeiro",
  colorScheme: "light dark",
  icons: {
    icon: "/favicon.ico"
  },
  robots: {
    index: true,
    follow: true,
    noarchive: false,
    nocache: false
  }
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  const fontVariables = fonts.map((font) => font.variable).join(" ");
  return (
    <html lang="pt-br">
      <body className={`${fontVariables} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
