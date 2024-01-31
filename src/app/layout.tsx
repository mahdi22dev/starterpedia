import "../styles/globals.css";
import type { Metadata } from "next";
import Providers from "../providers/Providers";
import Navbar from "@/components/header/Navbar";
import Modal from "@/components/modals/Modal";
import ResNavbar from "@/components/header/ResNavbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/services/auth/auth.service";
import { inter, satoshi } from "@/styles/fonts";
import { cn } from "@/lib/utils";

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
    <html
      lang="en"
      className={cn(
        satoshi.variable,
        inter.variable,
        "bg-[#FFFFFC] font-[var(--font-satoshi)]"
      )}
    >
      <Providers>
        {/*@ts-ignore */}

        <body className={inter.className}>
          {/*@ts-ignore */}
          <Modal />
          {/*@ts-ignore */}
          <Navbar />
          <ResNavbar session={session} />
          {children}
        </body>
      </Providers>
    </html>
  );
}
