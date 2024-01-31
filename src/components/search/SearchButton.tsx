"use client";
import { AppDispatch } from "@/redux/store";
import { toggleSerchModal } from "@/redux/user/userSlice";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch } from "react-redux";
function SearchButton() {
  const dispatch: AppDispatch = useDispatch();
  return (
    <FaSearch
      onClick={() => dispatch(toggleSerchModal())}
      className="w-10 text-2xl font-bold cursor-pointer text-primary hover:text-primary/80 hover:scale-110 focus:text-primary/80 focus:scale-110 transition-all duration-200 "
    />
  );
}

export default SearchButton;
