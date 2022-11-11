import React from "react";
import { getOne, getPhotos } from "../../api/api";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
const queryClient = new QueryClient();
function KeepPreviousData() {
  return (
    <QueryClientProvider client={queryClient}>
      <UseQueryReact />
    </QueryClientProvider>
  );
}

function UseQueryReact() {
  const [img, setImg] = React.useState([]);
  const [page, setPage] = React.useState(1);
  // query when page ===3
  const { isLoading, error, data, } = useQuery(
   [ "preData",page],
    () => getOne(page),
    {
      staleTime: 1000,
      keepPreviousData:true
    }
  );

  if (isLoading) return <p>Loading..</p>;
  if (error) return <p>An error has occurred: {error.message};</p>;
  console.log("render");
  console.log(data);
  return (
    <div>
      <button onClick={() => setPage((prev) => prev - 1)}>Prev</button>
      <h2>{page}</h2>
      <button onClick={() => setPage((prev) => prev + 1)}>Next</button>

      <p>{data.id}. {data.name}</p>
    </div>
  );
}

export default KeepPreviousData;
