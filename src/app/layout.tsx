import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DZAMA Rhum — From Madagascar to the World",
  description:
    "DZAMA est le rhum de Madagascar. Découvrez nos gammes Prestige et Luxe, élaborées selon la tradition malgache.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
