"use client";

import { signOut } from "next-auth/react";
import React from "react";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

function SignOutButton({ className }: { className?: string }): JSX.Element {
  return (
    <button
      className={cn(
        buttonVariants({ variant: "default" }),
        "shadow-md",
        className
      )}
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
}

export default SignOutButton;
