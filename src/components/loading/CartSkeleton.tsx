import React from "react";
import { Skeleton } from "../ui/skeleton";

export default function CartSkeleton() {
  return (
    <div className="relative">
      <div className="h-96 flex justify-between flex-col">
        <Skeleton className="h-[75%] w-full rounded-md" />
        <div className="w-full flex justify-between items-center p-2">
          <Skeleton className=" w-[66px] h-[40px]" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className=" w-[66px] h-[40px]" />
        </div>
      </div>
    </div>
  );
}
