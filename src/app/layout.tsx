import type { Metadata, Viewport } from "next";

import "@/styles/globals.css";

import { ThemeProvider } from "@/providers/theme";

import { APP_CONFIG } from "@/config/site";
import { Header } from "@/components/layout/header";

import { fonts } from "../../public/fonts";

export const metadata: Metadata = {
  applicationName: APP_CONFIG.APP_NAME,
  title: {
    default: APP_CONFIG.APP_DEFAULT_TITLE,
    template: APP_CONFIG.APP_TITLE_TEMPLATE
  },
  description: APP_CONFIG.APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_CONFIG.APP_DEFAULT_TITLE
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    type: "website",
    siteName: APP_CONFIG.APP_NAME,
    title: {
      default: APP_CONFIG.APP_DEFAULT_TITLE,
      template: APP_CONFIG.APP_TITLE_TEMPLATE
    },
    description: APP_CONFIG.APP_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_CONFIG.APP_DEFAULT_TITLE,
      template: APP_CONFIG.APP_TITLE_TEMPLATE
    },
    description: APP_CONFIG.APP_DESCRIPTION
  }
};

export const viewport: Viewport = {
  themeColor: "#fafafa"
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
