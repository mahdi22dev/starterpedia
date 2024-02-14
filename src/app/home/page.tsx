import NewsLetterForm from "@/components/newsletter/NewsLetterForm";
import RrsourcesHome from "@/components/resources/RrsourcesHome";

export default function Home(): JSX.Element {
  return (
    <main className="w-full space-y-5 min-h-[100vh] p-5 max-w-7xl mx-auto">
      <NewsLetterForm />
      <div className="flex flex-wrap gap-2 mx-auto mt-10 max-w-4xl items-center"></div>
      <h1 className="text-2xl md:text-3xl mb-4 font-normal text-center">
        Latest Resources
      </h1>
      {/* <RrsourcesHome /> */}
    </main>
  );
}
