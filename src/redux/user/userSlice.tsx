import { userResourceCardTypes } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

interface userSliceTypes {
  card: userResourceCardTypes;
  isSerachModalOpen: Boolean;
  isNavbarOpen: Boolean;
  isBoxchecked: Boolean;
  isResourceOpen: Boolean;
  isResourceCardOpen: Boolean;
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isSerachModalOpen: false,
    isNavbarOpen: false,
    isBoxchecked: false,
    isResourceOpen: false,
    isResourceCardOpen: false,
    resourceCardData: {},
  },
  reducers: {
    toggleSerchModal: (state) => {
      state.isSerachModalOpen = !state.isSerachModalOpen;
    },
    closeSerchModal: (state) => {
      state.isSerachModalOpen = false;
    },
    navbarToggle: (state) => {
      state.isNavbarOpen = !state.isNavbarOpen;
    },
    closeNavbar: (state) => {
      state.isNavbarOpen = false;
    },
    isBoxcheckedToggle: (state) => {
      state.isBoxchecked = !state.isBoxchecked;
    },
    closeisBoxchecked: (state) => {
      state.isBoxchecked = false;
    },
    openisResourceOpen: (state) => {
      state.isResourceOpen = true;
    },
    closeisResourceOpen: (state) => {
      state.isResourceOpen = false;
    },
    openisResourceCardOpen: (state) => {
      state.isResourceCardOpen = true;
    },
    closeisResourceCardOpen: (state) => {
      state.isResourceCardOpen = false;
    },
    updateCardResource: (state, action) => {
      state.resourceCardData = action;
    },
  },
});

export const {
  toggleSerchModal,
  closeSerchModal,
  navbarToggle,
  closeNavbar,
  isBoxcheckedToggle,
  closeisBoxchecked,
  openisResourceOpen,
  closeisResourceOpen,
  openisResourceCardOpen,
  closeisResourceCardOpen,
  updateCardResource,
} = userSlice.actions;

export default userSlice.reducer;
