import React from "react";
import { getPhotos } from "../../api/api";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();
function WrapQuery() {
  return (
    <QueryClientProvider client={queryClient}>
      <UseQueryReact />
    </QueryClientProvider>
  );
}

function UseQueryReact() {
  const [img, setImg] = React.useState([]);
  const [count, setCount] = React.useState(0);
  // query when count ===3
  const isQuery=count===3
  const { isLoading, error, data } = useQuery("repoData", () => getPhotos(), {
    staleTime: 10000
    // ,enabled:isQuery
  });

  if (isLoading) return <p>Loading..</p>;
  if (error) return <p>An error has occurred: {error.message};</p>;
  console.log(data);
  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>click me</button>
      <h2>{count}</h2>
      {data?.map((img) => {
        return <h2>{img.name}</h2>
      })}
    </div>
  );
}

export default WrapQuery;
