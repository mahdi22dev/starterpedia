import ResourceCardItem from "@/components/resources/ResourceCardItem";
import { getUsersResource } from "@/server-actions/resources-acions";

export default async function Home({}: {}): Promise<JSX.Element> {
  let resources: any;
  try {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {resources.map((card: any) => {
          return <ResourceCardItem key={card.id} card={card} />;
        })}
      </div>
    </main>
  );
}
