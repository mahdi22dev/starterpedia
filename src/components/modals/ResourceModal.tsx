"use client";
import { AppDispatch, RootState } from "@/redux/store";
import { closeisResourceOpen } from "@/redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ResourceCardForm from "../resources/ResourceCardForm";

function ResourceModal(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const closeModal = (): void => {
    dispatch(closeisResourceOpen());
  };
  return (
    <div
      className="w-full min-h-screen flex justify-center items-center p-1 md:p-5 z-[5000]"
      onClick={(e) => closeModal()}
    >
      <ResourceCardForm />
    </div>
  );
}

export default ResourceModal;
