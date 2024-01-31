import React from "react";

async function Search({
  searchParams,
}: {
  searchParams: { s: string };
}): Promise<JSX.Element> {
  return <div>you searched for:{searchParams?.s} </div>;
}

export default Search;
