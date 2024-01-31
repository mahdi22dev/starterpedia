"use client";

import { AppDispatch } from "@/redux/store";
import { closeisRemoveResource } from "@/redux/user/userSlice";
import { useDispatch } from "react-redux";

export function RmoveResource() {
  const dispatch: AppDispatch = useDispatch();
  const closeModal = (): void => {
    dispatch(closeisRemoveResource());
  };
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center p-1 md:p-5 z-[5000]"
      onClick={(e) => closeModal()}
    >
      remove card
    </div>
  );
}
