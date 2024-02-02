"use client";

import { useCallback, useEffect, useState } from "react";
import ResourceCardItem from "./ResourceCardItem";
import { resourcesPagination } from "@/server-actions/resources-acions";
import CartSkeleton from "../loading/CartSkeleton";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";

export default function RrsourcesContainer({ page }: { page: number }) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [resources, setResources] = useState([]);
  const [pagination, setPagination] = useState<number>(page);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: number) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, String(value));

      return params.toString();
    },
    [searchParams]
  );

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const data: any = await resourcesPagination(pagination);
      const paginationData: any = [...resources, ...data];
      setResources(paginationData);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchParams]);

  useEffect(() => {
    setPagination(page);
  }, [page]);

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

      <Button
        variant={"default"}
        className="flex gap-2 w-40 mx-auto mt-5"
        disabled={isLoading}
        onClick={() => {
          setPagination((n) => n + 1);
          const updatedPagination = pagination + 1;
          router.push(
            pathname + "?" + createQueryString("page", updatedPagination),
            {
              scroll: false,
            }
          );
        }}
      >
        <ClipLoader
          size={20}
          aria-label="Loading Spinner"
          data-testid="loader"
          loading={isLoading}
          color="#fff"
        />
        Load More
      </Button>
    </div>
  );
}
