"use server";

import { prisma } from "../lib/prisma";

export const saveNewsletter = async (email: string) => {
  try {
    if (email) {
      await prisma.newsLetter.create({
        data: { email: email },
      });
    }
  } catch (error: any) {
    console.error("Error saving GitHub user:", error);
  } finally {
    await prisma.$disconnect();
  }
};
