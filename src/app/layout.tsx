import type { Metadata } from "next";
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
      <body className="antialiased bg-[#FAF9F6] text-slate-900">
        {children}
      </body>
    </html>
  );
}