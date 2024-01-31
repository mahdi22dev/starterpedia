import Link from "next/link";
import { authOptions } from "@/services/auth/auth.service";

import { getServerSession } from "next-auth";
import Image from "next/image";
import SignOutButton from "./SignOutButton";

import SubmitButton from "./SubmitButton";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export async function Navbar(): Promise<JSX.Element> {
  const session = await getServerSession(authOptions);
  return (
    <nav className="hidden justify-between items-center px-3 py-3 md:px-10 md:py-1 max-w-7xl mx-auto md:flex">
      <Link href={"/home"}>
        <Image src={"/logo3.png"} width={130} height={100} alt="logo image" />
      </Link>

      <div className="gap-2 capitalize flex">
        {navLinks.map((link) => {
          return (
            <Link href={"/home"} className="hover:opacity-60" key={link.id}>
              {link.name}
            </Link>
          );
        })}
        {session && (
          <Link href={"/user_resource"} className="hover:opacity-60">
            {"Resources"}
          </Link>
        )}
      </div>

      <div className="flex gap-6 items-center">
        <SubmitButton />
        {session ? (
          <SignOutButton />
        ) : (
          <Link
            href={"/login"}
            className={cn(buttonVariants({ variant: "outline" }), "shadow-md")}
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
