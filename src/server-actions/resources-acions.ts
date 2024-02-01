"use server";

import { getServerSession } from "next-auth";
import { prisma } from "../lib/prisma";
import { authOptions } from "@/services/auth/auth.service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const resourcesPagination = async () => {
  try {
    const data = await prisma.resources.findMany({ where: {} });
    if (data) {
      revalidatePath("/");
      return data;
    }
  } catch (error) {
  } finally {
    await prisma.$disconnect();
  }
};

export const saveNewResource = async (data: any) => {
  try {
    const DataObject = JSON.parse(data);
    const session = await getServerSession(authOptions);
    if (!session) {
      return redirect("/login");
    }
    //@ts-ignore
    const userId = session?.user?.id;
    console.log(userId);

    if (data) {
      await prisma.resources.create({
        data: {
          title: DataObject.title,
          author: DataObject.author,
          url: DataObject.url,
          description: DataObject.description,
          image: "image bytes",

          type: DataObject.type,
          user: {
            connect: {
              id: userId,
            },
          },
        },
      });
    }
  } catch (error: any) {
    console.error(error.message);
  } finally {
    await prisma.$disconnect();
  }
};
export const getUsersResource = async () => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return redirect("/login");
    }
    //@ts-ignore
    const userId = session?.user?.id;
    const data = await prisma.resources.findMany({ where: { userId: userId } });

    if (data) {
      revalidatePath("/home");
      return data;
    }
  } catch (error) {
  } finally {
    await prisma.$disconnect();
  }
};

export const removeResources = async (resourceId: number) => {
  try {
    await prisma.resources.delete({ where: { id: resourceId } });
  } catch (error) {
  } finally {
    await prisma.$disconnect();
  }
};
