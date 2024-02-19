"use server";

import { prisma } from "@/lib/prisma";
import { authOptions } from "@/services/auth/auth.service";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const isAdmin = async (id: string) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return redirect("/login");
  }
  try {
    const user = await prisma.user.findFirst({
      where: { id: id },
    });
    console.log(user);
    return user?.Role === "admin" ? true : false;
  } catch (error: any) {
    console.log(error.message);
  } finally {
    await prisma.$disconnect();
  }
  return false;
};
