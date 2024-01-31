"use client";

import store from "@/redux/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Toaster } from "sonner";
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <SessionProvider>
      <Toaster closeButton richColors />
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
}
