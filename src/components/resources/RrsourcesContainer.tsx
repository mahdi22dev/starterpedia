"use client";

import { useEffect, useState } from "react";
import ResourceCardItem from "./ResourceCardItem";
import { resourcesPagination } from "@/server-actions/resources-acions";
import CartSkeleton from "../loading/CartSkeleton";

export default function RrsourcesContainer({
  page = 0,
  skip = 0,
}: {
  page: number;
  skip: number;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [resources, setResources] = useState([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data: any = await resourcesPagination();
      setResources(data);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [page, skip]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {resources.length > 0
        ? resources.map((card: any) => {
            return <ResourceCardItem key={card.id} card={card} />;
          })
        : Array.from({ length: 6 }).map((_, index) => {
            return <CartSkeleton key={index} />;
          })}
    </div>
  );
}
