"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { userResourceCardTypes } from "@/lib/types";
import { removeResources } from "@/server-actions/resources-acions";
import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { toast } from "sonner";

export function ResourceRemoveAlert({ card }: { card: userResourceCardTypes }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const deleteResource = async () => {
    setIsLoading(true);

    try {
      await removeResources(card.id);
      toast.success("Resources deleted successfully");
      setTimeout(() => {
        window.location.href = "/user_resource";
      }, 500);
    } catch (error: any) {
      console.log(error.message);
      toast.error("something wrong happend please try again later");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <FaTrash className="text-2xl text-primary hover:text-primary/80 cursor-pointer" />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Delete <span className="text-primary">{card.title}</span> resource?
          </AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isLoading}>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={isLoading} onClick={deleteResource}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
