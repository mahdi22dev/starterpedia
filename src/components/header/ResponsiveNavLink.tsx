"use client";
import Link from "next/link";
import React from "react";

function ResponsiveNavLink({ text }: { text: string }) {
  return (
    <Link
      href={"/" + text}
      className="text-primary hover:bg-secondary w-full h-12 flex justify-center items-center transition-all duration-200"
    >
      {text}
    </Link>
  );
}

export default ResponsiveNavLink;
