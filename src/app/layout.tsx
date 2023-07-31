import Header from "@/ui/header";
import "../styles/globals.css";
import { Inter } from "next/font/google";
import { ScriptGa } from "@/lib/gtag";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "猫探偵局",
  description:
    "関西を中心に猫カフェ・野良猫スポットを探索し、ブログやSNSで発信する【猫好きの猫好きによる猫好きのためのメディア】です",
  name: "google-site-verification",
  content: "yfBq0_xc_ZQ3gZL2hpxXc3jo1rfBhdEjUM3_xXPaMs0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <ScriptGa />
      </head>
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
