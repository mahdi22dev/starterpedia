"use client";
import { AppDispatch } from "@/redux/store";
import { openisResourceOpen } from "@/redux/user/userSlice";

import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function SubmitButton({ className }: { className?: string }) {
  const dispatch: AppDispatch = useDispatch();
  const openResource = () => {
    dispatch(openisResourceOpen());
  };

  return (
    // @ts-ignore
    <Button
      onClick={openResource}
      variant={"secondary"}
      className={cn(className)}
    >
      Submit New Resource
    </Button>
  );
}

export default SubmitButton;
