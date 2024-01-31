"use client";
import React from "react";
import SearchModal from "./SearchModal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import ResourceModal from "./ResourceModal";
import { RmoveResource } from "../resources/RmoveResource";

function Modal() {
  const { isSerachModalOpen, isResourceOpen, isRemoveResourceOpen } =
    useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();

  const closeModal = (e: React.MouseEvent): void => {
    // e.stopPropagation();
    // dispatch(closeSerchModal());
  };

  if (isSerachModalOpen) {
    return (
      <div
        onClick={(e) => closeModal(e)}
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-md z-[50]"
      >
        <SearchModal />
      </div>
    );
  }
  if (isResourceOpen) {
    return (
      <div
        onClick={(e) => closeModal(e)}
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-md z-[50]"
      >
        <ResourceModal />
      </div>
    );
  }
  if (isRemoveResourceOpen) {
    return (
      <div
        onClick={(e) => closeModal(e)}
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-md z-[50]"
      >
        <RmoveResource />
      </div>
    );
  }
}

export default Modal;
