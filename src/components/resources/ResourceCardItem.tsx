"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuExternalLink } from "react-icons/lu";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { openisRemoveResource } from "@/redux/user/userSlice";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { badgeVariants } from "../ui/badge";
import { Card } from "../ui/card";
import { userResourceCardTypes } from "@/lib/types";
// const tags = [
//   { id: 1, name: "php" },
//   { id: 1, name: "programming" },
//   { id: 1, name: "tool" },
// ];

export default function ResourceCardItem({
  card,
}: {
  card: userResourceCardTypes;
}) {
  const dispatch: AppDispatch = useDispatch();
  const pathname = usePathname();
  const openDialog = () => dispatch(openisRemoveResource());
  return (
    <div className="relative">
      <Card className="h-96 cursor-pointer flex justify-between flex-col">
        <div className="relative w-full h-[75%] ">
          <Image
            src={
              "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt={card.title}
            fill
            className="mx-auto mt-1 z-10"
            loading="lazy"
            objectFit="cover"
          />
        </div>

        <div className="w-full flex justify-between items-center p-2">
          <Button asChild variant="outline">
            <Link href={"/type?t=" + card.type}>{card.type}</Link>
          </Button>
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
          <FaTrash
            className="text-2xl text-primary hover:text-primary/80 cursor-pointer"
            onClick={openDialog}
          />
        </div>
      )}
    </div>
  );
}

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
