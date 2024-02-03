import NewsLetterForm from "@/components/newsletter/NewsLetterForm";
import RrsourcesHome from "@/components/resources/RrsourcesHome";

export default function Home(): JSX.Element {
  return (
    <main className="w-full space-y-5 min-h-[100vh] p-5 max-w-7xl mx-auto">
      <NewsLetterForm />
      <div className="flex flex-wrap gap-2 mx-auto mt-10 max-w-4xl items-center">
        {/* <Button
          asChild
          variant={
            !searchParams.type || searchParams.type == "all"
              ? "default"
              : "outline"
          }
        >
          <Link href={"http://localhost:3000/home?type=" + "all"}>All</Link>
        </Button> */}
        {/* {ResourcesTypes.map((type) => {
          return (
            <>
              <Button
                asChild
                variant={type.type == searchParams.type ? "default" : "outline"}
              >
                <Link
                  href={"http://localhost:3000/?type=" + type.type}
                  key={type.id}
                >
                  {type.type}
                </Link>
              </Button>
            </>
          );
        })}
        <SearchButton /> */}
        {/* <div className="w-full flex flex-col justify-center items-center">
          {" "}
          <h1 className="text-2xl md:text-3xl mb-4 font-normal text-center">
            Latest Resources
          </h1>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {resources.map((card: any) => {
              return <ResourceCardItem key={card.id} card={card} />;
            })}
          </div>
        </div> */}
      </div>
      <h1 className="text-2xl md:text-3xl mb-4 font-normal text-center">
        Latest Resources
      </h1>
      <RrsourcesHome />
    </main>
  );
}
