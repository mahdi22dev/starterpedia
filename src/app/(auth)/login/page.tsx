import { ServerSession } from "../../../services/auth/auth.service";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import AuthForm from "@/components/auth/AuthLoginForm";
export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default async function Login(): Promise<JSX.Element> {
  const session = await ServerSession();

  if (session) {
    return redirect("/");
  }

  return (
    <main className="w-full min-h-[100vh] p-5 flex justify-center items-center flex-col gap-5">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold ">Welcome to Starterpedia</h1>
        <p className="text-sm  text-opacity-80">
          Enter your email to sign in to your account
        </p>
      </div>
      <AuthForm />
      <p className="px-8 text-center text-sm  text-opacity-80 hover:underline hover:underline-offset-4">
        <Link href="/register">Don&apos;t have an account? Sign Up</Link>
      </p>{" "}
      <p className="px-8 text-center text-sm  text-opacity-80 hover:underline hover:underline-offset-4">
        <Link href="/register">Reset Password</Link>
      </p>
    </main>
  );
}
