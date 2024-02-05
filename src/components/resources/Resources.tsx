"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ResourceCardItem from "./ResourceCardItem";
import { resourcesPagination } from "@/server-actions/resources-acions";
import CartSkeleton from "../loading/CartSkeleton";
import { Button } from "../ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import ClipLoader from "react-spinners/ClipLoader";

import { toast } from "sonner";
import Link from "next/link";
import { ResourcesTypes } from "@/lib/data";
import SearchButton from "../search/SearchButton";

export default function RrsourcesContainer({
  page,
  type,
}: {
  page: number;
  type: string;
}) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [resources, setResources] = useState([]);
  const [pagination, setPagination] = useState<number>(Number(page));
  const [paginationType, setPaginationType] = useState<string>(type || "all");
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
    setIsLoading(true);
    try {
      const data: any = await resourcesPagination(pagination, paginationType);
      const paginationData: any = [...resources, ...data];
      console.log(paginationData);
      setResources(paginationData);
    } catch (error) {
      toast.error("error fetching resources please try to refresh the page");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDataByType = async () => {
    try {
      setResources([]);
      setPagination(0);
      setIsLoading(true);
      const data: any = await resourcesPagination(pagination, paginationType);
      setResources(data);
    } catch (error) {
      toast.error("error fetching resources please try to refresh the page");
    } finally {
      setIsLoading(false);
    }
  };

  const updateType = (typeQuery: string) => {
    setPaginationType(typeQuery);
  };

  useEffect(() => {
    console.log("page changed to :", pagination);
    fetchData();
  }, [searchParams.get("page")]);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
  }, [searchParams.get("type")]);

  useEffect(() => {
    console.log("page changed to :", pagination);
    fetchData();
  }, [searchParams.get("page")]);

  useEffect(() => {
    console.log("type changed to :", paginationType);

    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    fetchDataByType();
  }, [searchParams.get("type")]);

  return (
    <>
      <div className="flex flex-wrap gap-2 mx-auto mt-10 max-w-4xl items-center">
        <Button
          onClick={() => updateType("all")}
          asChild
          variant={
            !paginationType || paginationType == "all" ? "default" : "outline"
          }
        >
          <Link href={"http://localhost:3000/resources?type=all"}>All</Link>
        </Button>
        {ResourcesTypes.map((type) => {
          return (
            <>
              <Button
                onClick={() => updateType(type.type)}
                asChild
                variant={type.type == paginationType ? "default" : "outline"}
              >
                <Link
                  href={"http://localhost:3000/resources?type=" + type.type}
                  key={type.id}
                >
                  {type.type}
                </Link>
              </Button>
            </>
          );
        })}
        <SearchButton />
      </div>
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => {
              return <CartSkeleton key={index} />;
            })
          ) : resources.length == 0 ? (
            <p className="text-center mt-7 mx-auto">
              Please sumbit a new resource by clicking sumbit new resource
              button in top
            </p>
          ) : (
            resources.map((card: any) => {
              return <ResourceCardItem key={card.id} card={card} />;
            })
          )}
        </div>

        {resources.length !== 0 && (
          <Button
            variant={"default"}
            className="flex gap-2 w-40 mx-auto mt-5"
            disabled={isLoading}
            onClick={() => {
              const updatedPagination = pagination + 1;
              setPagination(updatedPagination);
              console.log(updatedPagination, pagination);
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
        )}
      </div>
    </>
  );
}
