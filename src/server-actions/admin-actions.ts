"use server";

import { prisma } from "@/lib/prisma";

export const isAdmin = async (id: string) => {
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
