import { Button } from "@/components/ui/button";
import { formatDate, getImageUrl } from "@/lib/utils";
import { getResourceById } from "@/server-actions/resources-acions";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

async function Resource({ params }: { params: { resource: string } }) {
  console.log(params);

  const cardData = await getResourceById(params.resource);
  console.log(cardData);

  if (!cardData) {
    return notFound();
  }

  return (
    <main className="flex flex-col gap-4 justify-start max-w-7xl mx-auto min-h-screen p-10">
      <div className="relative w-full h-96 rounded-sm">
        <Image
          src={getImageUrl(cardData.image)}
          alt={cardData.title}
          fill
        ></Image>
      </div>
      <h1 className="text-4xl capitalize">{cardData.title}</h1>
      <p>{cardData.description}</p>

      <Button asChild variant="default" className="w-28 ">
        <a
          target="_blank"
          href={cardData.url}
          className="flex gap-2 items-center"
        >
          View {cardData.type}
        </a>
      </Button>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <p className="text-sm">Author :</p>
          <a
            href={cardData.author}
            target="_blank"
            className="flex gap-2 items-center"
          >
            {cardData.name} <FaArrowRightLong />
          </a>
        </div>

        <div className="space-y-2">
          <p className="text-sm">Type :</p>
          <Link
            href={"/resources?type=" + cardData.type}
            className="flex gap-2 items-center"
          >
            {cardData.type || "Software"} <FaArrowRightLong />
          </Link>
        </div>
        <div className="space-y-2">
          {cardData.published ? (
            <>
              <p className="text-sm">Published :</p>
              <p>{formatDate(cardData.published)}</p>
            </>
          ) : (
            <>
              <p className="text-sm">Published :</p>
              <p>22, jun, 2024</p>
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default Resource;
