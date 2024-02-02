import { Button } from "@/components/ui/button";
import { getResourceById } from "@/server-actions/resources-acions";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

async function Resource({ params }: { params: { resource: number } }) {
  console.log(params);

  const card = {
    id: params.resource,
    title: "course",
    description: "test description",
    type: "Software",
    url: "www.google.com",
    author: "Mahdi Idrissi",
  };

  const cardData = await getResourceById(Number(params.resource));
  console.log(cardData);

  if (!cardData) {
    return notFound();
  }
  return (
    <main className="flex flex-col gap-4 justify-start max-w-7xl mx-auto min-h-screen p-10">
      <div className="relative w-full h-96 rounded-sm">
        <Image
          src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={card.title}
          className="mx-auto mt-1 z-10"
          fill
          objectFit="cover"
        />
      </div>
      <h1 className="text-4xl capitalize">{card.title}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
        porro nam magnam! Necessitatibus delectus, explicabo illum reprehenderit
        inventore quibusdam facilis voluptatum excepturi dolorem quos facere
        ipsa ad. Error, vero veritatis.
      </p>

      <Button asChild variant="default" className="w-28 ">
        <a target="_blank" href={card.url} className="flex gap-2 items-center">
          View {card.type}
        </a>
      </Button>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-sm">Author :</p>
          <a
            href={"https://twitter.com/home"}
            target="_blank"
            className="flex gap-2 items-center"
          >
            {card.author} <FaArrowRightLong />
          </a>
        </div>

        <div className="space-y-2">
          <p className="text-sm">Type :</p>
          <Link
            href={"/type?t=" + card.type}
            className="flex gap-2  items-center"
          >
            {card.type || "Software"} <FaArrowRightLong />
          </Link>
        </div>
        <div className="space-y-2">
          <p className="text-sm">Published :</p>
          <p>January 22, 2024</p>
        </div>
      </div>
    </main>
  );
}

export default Resource;
