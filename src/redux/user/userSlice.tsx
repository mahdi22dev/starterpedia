import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isSerachModalOpen: false,
    isNavbarOpen: false,
    isBoxchecked: false,
    isResourceOpen: false,
    isRemoveResourceOpen: false,
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
    openisRemoveResource: (state) => {
      state.isRemoveResourceOpen = true;
    },
    closeisRemoveResource: (state) => {
      state.isRemoveResourceOpen = false;
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
  openisRemoveResource,
  closeisRemoveResource,
} = userSlice.actions;

export default userSlice.reducer;
