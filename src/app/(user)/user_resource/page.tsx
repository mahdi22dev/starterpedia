import ResourceCardItem from "@/components/resources/ResourceCardItem";
import { getUsersResource } from "@/server-actions/resources-acions";

export default async function Home({}: {}): Promise<JSX.Element> {
  let resources: {
    id: number;
    title: string;
    image: string;
    type: string;
  }[];

  try {
    // @ts-ignore
    resources = await getUsersResource();
    console.log("users resources", resources);
  } catch (error) {
    throw new Error();
  }
  return (
    <main className="w-full justify-center min-h-[100vh] p-5 max-w-7xl mx-auto">
      <h1 className="text-3xl md:text-4xl mb-4 font-bold sm:text-center">
        Your Resources
      </h1>
      {resources.length == 0 && (
        <p className="text-center mt-7">
          Please sumbit a new resource by clicking sumbit new resource button in
          top
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {resources.map((card: any) => {
          return <ResourceCardItem key={card.id} card={card} />;
        })}
      </div>
    </main>
  );
}
