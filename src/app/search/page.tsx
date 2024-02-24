import ResourceCardItem from "@/components/resources/ResourceCardItem";
import SearchButton from "@/components/search/SearchButton";
import { SearchQueries } from "@/server-actions/resources-acions";
import React from "react";

async function Search({
  searchParams,
}: {
  searchParams: { s: string };
}): Promise<JSX.Element> {
  const searchQuery = searchParams.s;

  const results: any = await SearchQueries(searchQuery);
  console.log(results);

  return (
    <div className="w-full space-y-5 min-h-[100vh] p-5 max-w-7xl mx-auto">
      <div className="flex justify-start items-center gap-2">
        You searched for: {searchParams?.s} <SearchButton />
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {results.map((card: any) => {
            return <ResourceCardItem key={card.id} card={card} />;
          })}
        </div>

        {results.length == 0 && (
          <p className="text-center mt-7 mx-auto">
            No resources matched your search
          </p>
        )}
      </div>
    </div>
  );
}

export default Search;
