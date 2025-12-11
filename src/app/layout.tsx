import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import { I18nProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "TLC - Tangier Logistics Center",
  description: "Votre partenaire logistique au cœur de Tanger Med. Solutions d'entreposage, manutention et logistique sur mesure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
       
        <ErrorReporter />
      
        <I18nProvider>
          {children}
        </I18nProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
