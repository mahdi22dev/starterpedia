import * as z from "zod";

export const userAuthLoginSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export const userAuthRigsterSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "full name must be at least 3 characters" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email("Invalid email address"),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    confirm_password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
  })
  .refine((data) => data.password === data.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords does not match",
  });
export const newsLetterSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),
});

const MAX_FILE_SIZE = 5242880;

export const resourceFormSchema = z.object({
  title: z.string().min(1, { message: "Resource title is required" }),
  author: z.string().min(1, { message: "Author name is required" }),
  url: z.string().min(1, { message: "url is required" }),
  description: z
    .string()
    .min(1, { message: "Description is required" })
    .max(5000, { message: "Max 5000 characters" }),
  image: z
    .any()
    .refine((files) => files?.length == 1, "Image is required.")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      `Max file size is 5MB.`
    ),
});
