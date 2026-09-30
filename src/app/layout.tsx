import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Especialização Avançada em Eletrólise | com Mentoria ao Vivo - Dilene Araújo",
  description: "Formação teórica completa em eletrólise estética com mentoria ao vivo. Elimine pelos que o laser não alcança (brancos, ruivos e finos). Por Dilene Araújo.",
  keywords: ["eletrólise", "curso de eletrólise", "depilação definitiva", "pelos brancos", "estética avançada", "dilene araújo"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-926778965"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-926778965');
          `}
        </Script>
      </head>
      <body className="antialiased bg-[#FAF9F6] text-slate-900">
        {children}
      </body>
    </html>
  );
}