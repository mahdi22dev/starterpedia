"use client";
import { AppDispatch, RootState } from "@/redux/store";
import { isBoxcheckedToggle, navbarToggle } from "@/redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function ResNavToggleButton(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();
  const { isSerachModalOpen, isBoxchecked } = useSelector(
    (state: RootState) => state.user
  );
  const toggleNavbar = (): void => {
    dispatch(navbarToggle());
    dispatch(isBoxcheckedToggle());
  };

  return (
    <>
      {!isSerachModalOpen && (
        <div className="z-[100]">
          <input
            id="toggle1"
            type="checkbox"
            onClick={toggleNavbar}
            checked={isBoxchecked}
          />
          <label
            className="hamburger1 cursor-pointer"
            // @ts-ignore
            for="toggle1"
          >
            <div className="top"></div>
            <div className="meat"></div>
            <div className="bottom"></div>
          </label>
        </div>
      )}
    </>
  );
}

export default ResNavToggleButton;
