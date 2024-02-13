"use client";

import { useEffect, useState } from "react";
import ResourceCardItem from "./ResourceCardItem";
import { homeResources } from "@/server-actions/resources-acions";
import CartSkeleton from "../loading/CartSkeleton";
import { buttonVariants } from "../ui/button";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "sonner";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function RrsourcesHome() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [resources, setResources] = useState([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data: any = await homeResources();
      setResources(data);
    } catch (error) {
      toast.error("error fetching resources please try to refresh the page");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {isLoading
          ? Array.from({ length: 6 }).map((_, index) => {
              return <CartSkeleton key={index} />;
            })
          : resources.map((card: any) => {
              return <ResourceCardItem key={card.id} card={card} />;
            })}
      </div>
      {!isLoading && resources.length == 0 && (
        <p className="text-center mt-7 mx-auto">No resources found</p>
      )}
      {resources.length !== 0 && !isLoading && (
        <Link
          className={cn(
            buttonVariants({ variant: "default" }),
            "flex gap-2 w-40 mx-auto mt-5"
          )}
          href={"/resources?type=all&page=1"}
        >
          <ClipLoader
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
            loading={isLoading}
            color="#fff"
          />
          View More
        </Link>
      )}
    </div>
  );
}
