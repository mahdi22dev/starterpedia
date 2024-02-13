import RrsourcesContainer from "@/components/resources/Resources";

export default async function Resources({
  searchParams,
}: {
  searchParams: { type: string; page: number };
}): Promise<JSX.Element> {
  // href={
  //   !process.env.NEXT_PUBLIC_NODE_ENV
  //     ? "http://localhost:3000/home?type=" + type.type
  //     : process.env.NEXT_PUBLIC_VERCEL_DEPLOYMENT +
  //       "/home?type=all" +
  //       type.type
  // }

  const page = searchParams.page || 0;

  return (
    <main className="w-full space-y-5 min-h-[100vh] p-5 max-w-7xl mx-auto">
      <h1 className="text-2xl md:text-3xl mb-4 font-normal text-center">
        Latest Resources
      </h1>
      <RrsourcesContainer page={page} type={searchParams.type} />
    </main>
  );
}
