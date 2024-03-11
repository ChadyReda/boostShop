import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { OPTIONS } from "./api/auth/[...nextauth]/route"
import SessionProvider from "@/app/components/SessionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boost Store",
  description: "Generated by create next app",
};

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode}>) {
  const session = await getServerSession(OPTIONS);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
