import Link from "next/link";
import { authOptions } from "@/services/auth/auth.service";
import { getServerSession } from "next-auth";
import Image from "next/image";
import SignOutButton from "./SignOutButton";
import SubmitButton from "./SubmitButton";
import { navLinks } from "@/lib/data";
import { Button } from "../ui/button";

export async function Navbar(): Promise<JSX.Element> {
  const session = await getServerSession(authOptions);
  return (
    <nav className="hidden justify-between items-center px-3 py-3 md:px-10 md:py-1 max-w-7xl mx-auto md:flex">
      <Link
        href={"/home"}
        className="relative w-[130px] h-[85px] min-h-[85px] min-w-[130px]"
      >
        <Image src={"/logo3.png"} fill alt="logo image" />
      </Link>

      <div className="gap-2 capitalize flex">
        {navLinks.map((link) => {
          return (
            <Link
              href={"/" + link.name}
              className="hover:opacity-60"
              key={link.id}
            >
              {link.name}
            </Link>
          );
        })}
        {session && (
          <Link
            href={"/user_resource"}
            className="hover:opacity-60 text-red-300"
          >
            my Resources
          </Link>
        )}
      </div>

      <div className="flex gap-6 items-center">
        {session ? (
          <SubmitButton />
        ) : (
          <Button asChild variant={"secondary"}>
            <Link href={"/login"}>Submit New Resource</Link>
          </Button>
        )}
        {session ? (
          <SignOutButton />
        ) : (
          <Button asChild variant={"default"}>
            <Link href={"/login"} className={"shadow-md"}>
              Sign In
            </Link>
          </Button>
        )}
      </div>
    </nav>
  );
}
export default Navbar;
