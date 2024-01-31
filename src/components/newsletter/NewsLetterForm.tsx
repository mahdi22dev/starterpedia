"use client";

import { LogInFormData } from "@/lib/types";
import { newsLetterSchema } from "@/lib/validation";
import { saveNewsletter } from "@/server-actions/save-newsletter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ClipLoader from "react-spinners/ClipLoader";
import { toast } from "sonner";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

function NewsLetterForm(): JSX.Element {
  const [sumbited, setSumbited] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogInFormData>({
    resolver: zodResolver(newsLetterSchema),
  });
  const HandleNewsletterSumbit = async (data: { email: string }) => {
    console.log(data);

    setIsLoading(true);
    setSumbited(false);
    try {
      await saveNewsletter(data?.email);
      setSumbited(true);
      toast.success("Subscribed to newsletter successfully");
    } catch (error: any) {
      console.log(error.message);
      toast.error("something wrong happend please try again later");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="max-w-2xl p-5 mx-auto flex flex-col justify-center items-center">
      <h1 className="text-3xl md:text-4xl mb-4 font-bold sm:text-center">
        Get Freelancer Insights Delivered Weekly to Your{" "}
        <span className="text-primary font-extrabold">Inbox</span>
      </h1>
      {sumbited ? (
        <div className="w-full bg-primary/5 p-5 text-center capitalize font-bold rounded-xl">
          thank you
        </div>
      ) : (
        <form
          className="md:flex gap-3 w-[90%]"
          onSubmit={handleSubmit(HandleNewsletterSumbit)}
        >
          <Input
            className="h-14 w-full mx-auto bg-white placeholder:text-black placeholder:text-opacity-50 p-5"
            placeholder={"Your Email"}
            type={"email"}
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            {...register("email")}
            disabled={isLoading}
          />
          <button
            className={cn(
              buttonVariants({ variant: "default" }),
              "shadow-md w-full mt-3 md:h-14 md:w-24 md:mt-0  flex gap-1 "
            )}
          >
            <ClipLoader
              size={20}
              aria-label="Loading Spinner"
              data-testid="loader"
              color="#fff"
              loading={isLoading}
            />
            Subscribe
          </button>{" "}
        </form>
      )}
      {!sumbited && (
        <p className="font-light text-muted-foreground text-start mt-1 text-sm">
          unsbscribe any time
        </p>
      )}
    </div>
  );
}

export default NewsLetterForm;
