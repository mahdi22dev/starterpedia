"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ResourceFormData } from "@/lib/types";
import { resourceFormSchema } from "@/lib/validation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { closeisResourceOpen } from "@/redux/user/userSlice";
import { toast } from "sonner";
import ClipLoader from "react-spinners/ClipLoader";
import { saveNewResource } from "@/server-actions/resources-acions";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

export default function ResourceCardForm(): JSX.Element {
  const [selectValue, setSelectValue] = useState<string>("software");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();

  const closeModal = (): void => {
    dispatch(closeisResourceOpen());
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResourceFormData>({
    resolver: zodResolver(resourceFormSchema),
  });

  const onSubmit = async (data: ResourceFormData) => {
    const resourceRequestData = { ...data, type: selectValue };
    setIsLoading(true);

    try {
      await saveNewResource(JSON.stringify(resourceRequestData));
      toast.success("Resources submited successfully");
      closeModal();
    } catch (error: any) {
      console.log(error.message);
      toast.error("something wrong happend please try again later");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card
      className="w-[90%] md:w-[550px] p-5 "
      onClick={(e) => e.stopPropagation()}
    >
      <CardHeader>
        <CardTitle className="text-lg md:text-xl">Submit a resource</CardTitle>
        <CardDescription className="text-md md:text-lg">
          Submit and Share Resources with the Community.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid w-full items-center gap-4"
        >
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="title">Resource title</Label>
            <Input
              id="title"
              placeholder="Title for your resource"
              {...register("title")}
              type="text"
              name="title"
              disabled={isLoading}
            />
            {errors?.title && (
              <p className="px-1 text-xs text-red-600">
                {errors.title.message}
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="author">Profile Link</Label>
            <Input
              placeholder="Your Social Profile Link"
              {...register("author")}
              id="author"
              type="text"
              name="author"
              disabled={isLoading}
            />
            {errors?.author && (
              <p className="px-1 text-xs text-red-600">
                {errors.author.message}
              </p>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="url">Resource link</Label>
            <Input
              placeholder="Your resource link"
              {...register("url")}
              id="url"
              type="text"
              name="url"
              disabled={isLoading}
            />
            {errors?.url && (
              <p className="px-1 text-xs text-red-600">{errors.url.message}</p>
            )}
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="description">Descreption</Label>
            <Textarea
              placeholder="Description"
              {...register("description")}
              id="description"
              name="description"
              disabled={isLoading}
            />
            {errors?.description && (
              <p className="px-1 text-xs text-red-600">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="image">Thumbnail</Label>
            <Input
              placeholder="Your resource thumbnail image"
              type="file"
              id="image"
              {...register("image")}
              accept="image/*,.png"
              disabled={isLoading}
            />
            {errors?.image && (
              <p className="px-1 text-xs text-red-600">
                {/*@ts-ignore */}
                {errors?.image?.message.toString()}
              </p>
            )}
          </div>

          {/* <div className="flex flex-col space-y-1.5">
            <Label htmlFor="framework">Resource Type</Label>
            <Select
              onValueChange={(value) => setSelectValue(value)}
              disabled={isLoading}
            >
              <SelectTrigger id="type">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent position="popper">
                {ResourcesTypes.map((type) => {
                  return (
                    <SelectItem key={type.id} value={type.type}>
                      {type.type}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div> */}
          <CardFooter className="flex justify-between p-0 mt-5">
            <Button variant="outline" onClick={closeModal}>
              Cancel
            </Button>
            <Button type="submit" className="flex gap-1">
              <ClipLoader
                size={20}
                aria-label="Loading Spinner"
                data-testid="loader"
                loading={isLoading}
                color="#fff"
              />
              Submit
            </Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
