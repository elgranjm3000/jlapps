import type { Metadata } from "next";
import { Sora, Manrope } from "next/font/google";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jlapps.example.com"), // TODO: dominio real al publicar
  title: {
    default: "JLAPPS — Diseño y desarrollo de aplicaciones móviles a la medida",
    template: "%s | JLAPPS",
  },
  description:
    "Apps móviles, páginas web y agentes de WhatsApp con IA para tu negocio. Presupuesto sin compromiso — escríbenos por WhatsApp.",
  keywords: [
    "desarrollo de apps móviles",
    "crear una app para mi negocio",
    "diseño de páginas web",
    "agente de WhatsApp con IA",
    "chatbot WhatsApp",
    "app delivery",
    "tienda online app",
    "desarrollo de apps Venezuela",
    "JLAPPS",
  ],
  applicationName: "JLAPPS",
  authors: [{ name: "JLAPPS" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_VE",
    url: "/",
    siteName: "JLAPPS",
    title: "JLAPPS — Tu negocio, en la pantalla de tus clientes",
    description:
      "Apps móviles, páginas web y agentes de WhatsApp que atienden y venden por ti. Cotiza sin compromiso.",
    images: [{ url: "/og-image.jpg", width: 512, height: 512, alt: "JLAPPS" }],
  },
  twitter: {
    card: "summary",
    title: "JLAPPS — Apps móviles a la medida",
    description:
      "Delivery, tiendas, citas, pagos: tu negocio en una app. Cotiza por WhatsApp.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon-64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${display.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
