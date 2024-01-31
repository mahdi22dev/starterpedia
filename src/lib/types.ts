import * as z from "zod";
import {
  userAuthRigsterSchema,
  userAuthLoginSchema,
  resourceFormSchema,
} from "./validation";

export type LogInFormData = z.infer<typeof userAuthLoginSchema>;
export type RegisterFormData = z.infer<typeof userAuthRigsterSchema>;
export type ResourceFormData = z.infer<typeof resourceFormSchema>;
export type userResourceTypes = {
  id: number;
  title: string;
  author: string;
  description: String;
  image: String;
  type: String;
  url: string;
}[];

export type userResourceCardTypes = {
  id: number;
  title: string;
  author: string;
  url: string;
  description: String;
  image: String;
  type: String;
  accepted: boolean;
};
