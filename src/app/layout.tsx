import "../styles/globals.css";
import type { Metadata } from "next";
import Providers from "../providers/Providers";
import Navbar from "@/components/header/Navbar";
import Modal from "@/components/modals/Modal";
import ResNavbar from "@/components/header/ResNavbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/services/auth/auth.service";
import { Kanit } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { Footer } from "@/components/footer/Footer";

const kanit = Kanit({
  weight: ["400"],
  style: ["normal"],
  preload: false,
  display: "swap",
});

export const metadata: Metadata = {
  title: "Starterpedia",
  description: "hack your life with Starterpedia",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" className={kanit.className}>
      <Providers>
        <body>
          <NextTopLoader
            color="#F97316"
            initialPosition={0.08}
            crawlSpeed={200}
            height={3}
          />
          {/*@ts-ignore */}
          <Modal />
          {/*@ts-ignore */}
          <Navbar />
          <ResNavbar session={session} />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
