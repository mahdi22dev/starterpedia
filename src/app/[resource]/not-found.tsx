import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="w-full min-h-screen bg-inherit flex justify-center items-center flex-col gap-5">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Button asChild variant={"default"}>
        <Link href="/home">Return Home</Link>
      </Button>
    </main>
  );
}
