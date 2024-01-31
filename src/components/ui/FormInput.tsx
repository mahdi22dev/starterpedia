"use client";

import { cn } from "@/lib/utils";
import { Label } from "@radix-ui/react-select";
import React from "react";
import { Input } from "./input";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  type: any;
  register: any;
  placeholder: string;
  disabled: boolean;
}

export default function FormInput({
  text,
  type,
  placeholder,
  register,
  disabled,
  className,
  ...props
}: InputProps): JSX.Element {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label>{text}</Label>
      <Input
        className={cn(
          "h-10 w-[300px] bg-white placeholder:text-black placeholder:text-opacity-50",
          className
        )}
        id="type"
        placeholder={placeholder}
        type={type}
        autoCapitalize="none"
        autoCorrect="off"
        disabled={disabled}
        {...register}
        {...props}
      />{" "}
    </div>
  );
}
