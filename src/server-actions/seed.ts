// "use server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/services/auth/auth.service";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const seed = async () => {
  try {
    const generateRandomData = () => ({
      title: "best course",
      author: "www.twitter.com/profile",
      name: "mahdi idrissi",
      url: "www.google.com",
      description: "lorem text",
      image: "image bytes",
      type: "software",
      userId: "",
    });

    // Generate an array of unique random data objects
    const uniqueResources = Array.from({ length: 10 }, generateRandomData);

    console.log(uniqueResources);

    const session = await getServerSession(authOptions);
    if (!session) {
      return redirect("/login");
    }
    // @ts-ignore
    const userId = session.user.id;
    console.log(userId);

    await prisma.resources.createMany({
      data: uniqueResources.map((resource) => ({
        ...resource,
        user: {
          connect: {
            id: userId,
          },
        },
      })),
    });
  } catch (error: any) {
    console.error(error);
  } finally {
    await prisma.$disconnect();
  }
};
