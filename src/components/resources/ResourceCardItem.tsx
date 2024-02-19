"use client";

import { usePathname } from "next/navigation";
import { LuExternalLink } from "react-icons/lu";
import { CldImage } from "next-cloudinary";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { badgeVariants } from "../ui/badge";
import { Card } from "../ui/card";
import { userResourceCardTypes } from "@/lib/types";
import { ResourceRemoveAlert } from "./ResourceRemoveAlert";

export default function ResourceCardItem({
  card,
}: {
  card: userResourceCardTypes;
}) {
  const onClick = () => {
    window.location.href = "/" + card.id;
  };
  const pathname = usePathname();
  return (
    <div className="relative">
      <Card
        className="h-96 cursor-pointer flex justify-between flex-col shadow-none hover:shadow-xl"
        onClick={onClick}
      >
        <div className="relative w-full h-[75%] ">
          <CldImage
            src={String(card.image)}
            fill
            alt={card.title}
            aspectRatio={9 / 16}
          />
        </div>

        <div
          className="w-full flex justify-between items-center p-2 gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          {/* <Button asChild variant="outline">
            <Link href={"/resources?type=" + card.type}>{card.type}</Link>
          </Button> */}
          <div className="text-center my-1 capitalize font-normal ">
            {card.title}
          </div>

          <Button asChild variant="outline">
            <a target="_blank" href={card.url}>
              <LuExternalLink className={"text-2xl"} />
            </a>
          </Button>
        </div>
      </Card>

      {pathname == "/user_resource" && (
        <div className="absolute top-3 left-0 right-0 p-2 z-40 flex justify-between gap-2">
          <div className={cn(badgeVariants({ variant: "default" }))}>
            {card.accepted ? "approved" : "waiting approval"}
          </div>
          <ResourceRemoveAlert card={card} />
        </div>
      )}
    </div>
  );
}
// const tags = [
//   { id: 1, name: "php" },
//   { id: 1, name: "programming" },
//   { id: 1, name: "tool" },
// ];
{
  /* <div className="flex justify-between items-center gap-1 absolute top-3 left-3 z-50">
        {tags.map((tag) => {
          return <TagsItem key={tag.id} tag={tag} />;
        })}
      </div> */
}

// const TagsItem = ({ tag }) => {
//   return (
//     // @ts-ignore
//     <Button
//       asChild
//       variant="default"
//       className="text-[10px] font-light pt-1 pl-1 pr-1 pb-1"
//     >
//       <Link href={"/category?c=" + tag.name}>{tag.name}</Link>
//     </Button>
//   );
// };
