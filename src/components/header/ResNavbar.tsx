"use client";
import Link from "next/link";
import Image from "next/image";
import ResNavLinks from "./ResNavLinks";
import ResNavToggleButton from "./ResNavToggleButton";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export function ResNavbar(session: any): JSX.Element {
  const { isNavbarOpen } = useSelector((state: RootState) => state.user);
  return (
    <nav className="flex justify-between items-center px-3 py-3 md:px-10 md:py-1 max-w-7xl mx-auto md:hidden">
      <Link href={"/home"}>
        <Image src={"/logo3.png"} width={130} height={100} alt="logo image" />
      </Link>
      <ResNavToggleButton />
      {isNavbarOpen && <ResNavLinks session={session} />}
    </nav>
  );
}
export default ResNavbar;
