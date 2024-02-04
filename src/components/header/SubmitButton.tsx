"use client";
import { AppDispatch } from "@/redux/store";
import { openisResourceOpen } from "@/redux/user/userSlice";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { saveNewResource } from "@/server-actions/resources-acions";
import {
  uniqueNamesGenerator,
  Config,
  adjectives,
  colors,
  animals,
} from "unique-names-generator";

function SubmitButton({ className }: { className?: string }) {
  const dispatch: AppDispatch = useDispatch();
  const openResource = () => {
    dispatch(openisResourceOpen());
  };

  const onSubmit = async () => {
    await saveNewResource(
      JSON.stringify({
        title: uniqueNamesGenerator({
          dictionaries: [adjectives, colors, animals],
          separator: " ",
        }),
        url: "",
        name: "Mahdi Idrissi",
        author: "Profile Link",
        description: "Lorem text",
        image: "bytes",
        type: "Software",
      })
    );
  };

  return (
    <>
      <Button
        variant={"default"}
        onClick={() => {
          onSubmit();
        }}
      >
        add random resource
      </Button>{" "}
      <Button
        onClick={openResource}
        variant={"secondary"}
        className={cn(className)}
      >
        Submit New Resource
      </Button>
    </>
  );
}

export default SubmitButton;
