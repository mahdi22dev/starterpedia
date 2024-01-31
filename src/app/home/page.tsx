import NewsLetterForm from "@/components/newsletter/NewsLetterForm";
import Link from "next/link";
import SearchButton from "@/components/search/SearchButton";
import { ResourcesTypes } from "@/lib/data";
import { resourcesPagination } from "@/server-actions/resources-acions";
import { userResourceTypes } from "@/lib/types";
import ResourceCardItem from "@/components/resources/ResourceCardItem";
import { Button } from "@/components/ui/button";

export default async function Home({
  searchParams,
}: {
  searchParams: { type: string };
}): Promise<JSX.Element> {
  // href={
  //   !process.env.NEXT_PUBLIC_NODE_ENV
  //     ? "http://localhost:3000/home?type=" + type.type
  //     : process.env.NEXT_PUBLIC_VERCEL_DEPLOYMENT +
  //       "/home?type=all" +
  //       type.type
  // }

  const page = 1;
  const skip = 0;
  const pre = 0;
  let resources: any;
  try {
    resources = await resourcesPagination();
  } catch (error) {
    throw new Error();
  }

  return (
    <main className="w-full space-y-5 min-h-[100vh] p-5 max-w-7xl mx-auto">
      <NewsLetterForm />
      <div className="flex flex-wrap gap-2 mx-auto mt-10 max-w-4xl items-center">
        {/*@ts-ignore */}
        <Button
          asChild
          variant={
            !searchParams.type || searchParams.type == "all"
              ? "default"
              : "outline"
          }
        >
          <Link href={"http://localhost:3000/home?type=" + "all"}>All</Link>
        </Button>
        {ResourcesTypes.map((type) => {
          return (
            <>
              {/*@ts-ignore */}
              <Button
                asChild
                variant={type.type == searchParams.type ? "default" : "outline"}
              >
                <Link href={"http://localhost:3000/"} key={type.id}>
                  {type.type}
                </Link>
              </Button>
            </>
          );
        })}
        <SearchButton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {resources.map((card: any) => {
          return <ResourceCardItem key={card.id} card={card} />;
        })}
      </div>
    </main>
  );
}
