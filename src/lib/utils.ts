import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { getCldOgImageUrl } from "next-cloudinary";

export async function generatePassword() {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
  let password = "";

  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }
  const saltRounds = 10;
  // const hashedPassword = await bcrypt.hash(password, saltRounds);
  const hashedPassword = "fewfwefwef";
  return hashedPassword;
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const isValidUrl = (value: string) => {
//   try {
//     return new URL(value);
//   } catch (error) {
//     return false;
//   }
// };

export const getImageUrl = (source: string) => {
  return getCldOgImageUrl({
    src: source,
  });
};
