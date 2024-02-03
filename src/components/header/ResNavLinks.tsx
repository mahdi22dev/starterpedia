"use client";
import React from "react";
import { ResponsiveNavbarVariants } from "@/lib/variants";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import SignOutButton from "./SignOutButton";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/lib/data";
import ResponsiveNavLink from "./ResponsiveNavLink";
import { closeNavbar, closeisBoxchecked } from "@/redux/user/userSlice";
import SubmitButton from "./SubmitButton";

function ResNavLinks(session: any): JSX.Element {
  const dispatch: AppDispatch = useDispatch();

  const navbarclose = (): void => {
    dispatch(closeNavbar());
    dispatch(closeisBoxchecked());
  };
  const { isNavbarOpen } = useSelector((state: RootState) => state.user);
  return (
    <AnimatePresence>
      <motion.div
        variants={ResponsiveNavbarVariants}
        initial={"initial"}
        animate={"animate"}
        key={isNavbarOpen ? "open" : "closed"}
        className="bg-slate-200 w-full z-50 fixed top-0 left-0 flex justify-center items-start"
        onClick={navbarclose}
      >
        <div className="gap-2 capitalize flex flex-col w-full">
          <div className="flex flex-col mt-[30%]">
            {navLinks.map((link) => {
              return <ResponsiveNavLink text={link.name} key={link.id} />;
            })}
            {session?.session?.session && (
              <Link
                href={"/user_resource"}
                className="text-red-300 hover:bg-secondary w-full h-12 flex justify-center items-center transition-all duration-200 "
              >
                my Resources
              </Link>
            )}
          </div>

          <div className="flex flex-col gap-2 mt-5 items-center">
            <SubmitButton className="w-full rounded-none" />
            {session?.session?.session ? (
              <SignOutButton className="w-full rounded-none" />
            ) : (
              <Button
                asChild
                variant={"default"}
                className="w-full rounded-none"
              >
                <Link href={"/login"} className={"shadow-md"}>
                  Sign In
                </Link>
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ResNavLinks;
