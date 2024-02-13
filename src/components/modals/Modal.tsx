"use client";
import React from "react";
import SearchModal from "./SearchModal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import ResourceCardForm from "../resources/ResourceCardForm";

function Modal() {
  const {
    isSerachModalOpen,
    isResourceOpen,
    isResourceCardOpen,
    resourceCardData,
  } = useSelector((state: RootState) => state.user);
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
        <ResourceCardForm />
      </div>
    );
  }
  // if (isResourceCardOpen) {
  //   return (
  //     <div
  //       onClick={(e) => closeModal(e)}
  //       className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-md z-[50]"
  //     >
  //       <ResourceCard card={resourceCardData} />
  //     </div>
  //   );
  // }
}

export default Modal;
