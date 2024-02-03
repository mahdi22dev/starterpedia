"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ResourceCardItem from "./ResourceCardItem";
import { resourcesPagination } from "@/server-actions/resources-acions";
import CartSkeleton from "../loading/CartSkeleton";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "sonner";

export default function RrsourcesContainer({
  page,
  type,
}: {
  page: number;
  type: string;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [resources, setResources] = useState([]);
  const [pagination, setPagination] = useState<number>(page || 0);
  const [paginationType, setPaginationType] = useState<string>(type);
  const isFirstMount = useRef(true);
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
      const data: any = await resourcesPagination(pagination, paginationType);
      const paginationData: any = [...resources, ...data];
      setResources(paginationData);
    } catch (error) {
      toast.error("error fetching resources please try to refresh the page");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDataByType = async () => {
    try {
      setIsLoading(true);
      const data: any = await resourcesPagination(pagination, paginationType);
      setResources(data);
    } catch (error) {
      toast.error("error fetching resources please try to refresh the page");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    console.log("page changed");
    setPagination(page);
    fetchData();
  }, [searchParams.get("page")]);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    console.log("type changed");
    setPagination(0);
    setPaginationType(type);
    fetchDataByType();
  }, [searchParams.get("type")]);

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
        View More
      </Button>
    </div>
  );
}
