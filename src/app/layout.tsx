import Header from "@/ui/header";
import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "猫探偵局",
  description:
    "関西を中心に猫カフェ・野良猫スポットを探索し、ブログやSNSで発信する【猫好きの猫好きによる猫好きのためのメディア】です。",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {/* <Header /> */}
        {children}
      </body>
    </html>
  );
}
