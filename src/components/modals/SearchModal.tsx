"use client";
import { AppDispatch, RootState } from "@/redux/store";
import { closeSerchModal } from "@/redux/user/userSlice";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { SearchModalVariants } from "@/lib/variants";
import { IoClose } from "react-icons/io5";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
function SearchModal(): JSX.Element {
  const [search, setSerch] = useState<string>("");
  const { isSerachModalOpen } = useSelector((state: RootState) => state.user);
  const dispatch: AppDispatch = useDispatch();
  const closeModal = (): void => {
    dispatch(closeSerchModal());
  };
  return (
    <AnimatePresence>
      <motion.div
        layout
        variants={SearchModalVariants}
        initial={"initial"}
        animate={"animate"}
        exit={"exit"}
        key={isSerachModalOpen ? "open" : "closed"}
        className="bg-primary/50 w-full min-h-screen flex justify-center items-center p-1 md:p-5"
        onClick={(e) => closeModal()}
      >
        <IoClose
          onClick={closeModal}
          className="fixed top-5 right-5 cursor-pointer text-5xl text-accent hover:text-primary"
        />

        <div className="max-w-4xl" onClick={(e) => e.stopPropagation()}>
          <form
            className="w-full flex items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
              className="h-14 w-full mx-auto bg-white placeholder:text-black placeholder:text-opacity-50 p-5"
              placeholder="Seach..."
              type="text"
              value={search}
              onChange={(e) => {
                setSerch(e.target.value);
              }}
            />

            <Button
              asChild
              variant={"default"}
              className="shadow-md h-14 w-19 "
            >
              <a href={"/search?s=" + search} onClick={closeModal}>
                Search
              </a>
            </Button>
          </form>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default SearchModal;
