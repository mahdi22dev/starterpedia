"use server";

import { getServerSession } from "next-auth";
import { prisma } from "../lib/prisma";
import { authOptions } from "@/services/auth/auth.service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const resourcesPagination = async (page: number, type: string) => {
  console.log(page, type);
  const pageSize = 6;

  let data;
  try {
    if (type == "all") {
      data = await prisma.resources.findMany({
        take: pageSize,
        skip: page * pageSize,
        where: {},
        select: { id: true, title: true, image: true, type: true, url: true },
      });
    } else {
      data = await prisma.resources.findMany({
        take: pageSize,
        skip: page * pageSize,
        where: { ...(type && { type }) },
        select: { id: true, title: true, image: true, type: true, url: true },
      });
    }

    return data;
  } catch (error) {
  } finally {
    await prisma.$disconnect();
  }
};

export const homeResources = async () => {
  try {
    const data = await prisma.resources.findMany({
      take: 6,
      skip: 0,
      where: {},
      select: { id: true, title: true, image: true, type: true, url: true },
    });

    return data;
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
    if (data) {
      await prisma.resources.create({
        data: {
          title: DataObject.title,
          author: DataObject.author,
          name: DataObject.name,
          url: DataObject.url,
          description: DataObject.description,
          image: DataObject.image,
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
    const data = await prisma.resources.findMany({
      where: { userId: userId },
      select: {
        id: true,
        title: true,
        image: true,
        type: true,
        url: true,
      },
    });

    if (data) {
      revalidatePath("/home");
      return data;
    }
  } catch (error) {
  } finally {
    await prisma.$disconnect();
  }
};

export const removeResources = async (resourceId: string) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return redirect("/login");
    }
    await prisma.resources.deleteMany({ where: { id: resourceId } });
  } catch (error: any) {
    console.log(error.message);
  } finally {
    await prisma.$disconnect();
  }
};

export const getResourceById = async (resourceId: string) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return redirect("/login");
    }
    const data = await prisma.resources.findFirst({
      where: { id: resourceId },
    });
    return data;
  } catch (error: any) {
    console.log(error.message);
  } finally {
    await prisma.$disconnect();
  }
};
