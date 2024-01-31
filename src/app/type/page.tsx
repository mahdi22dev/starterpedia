import React from "react";

async function Search({
  searchParams,
}: {
  searchParams: { t: string };
}): Promise<JSX.Element> {
  return <div>you searched for:{searchParams?.t} </div>;
}

export default Search;
