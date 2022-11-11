import React from "react";
import { getCmtByID } from "../../api/api";
import {
  QueryClient,
  QueryClientProvider,
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from "react-query";
function LoadMoreData() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <UseQueryReact />
    </QueryClientProvider>
  );
}

function UseQueryReact() {
  const [img, setImg] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const { isLoading, error, data, fetchNextPage ,isFetchingNextPage,hasNextPage} = useInfiniteQuery(
    ["reposData", page],
    getCmtByID,
    {
      getNextPageParam: (lastPage, page) => {
        if (page.length < 100) {
          return page.length + 1;
        }
        return undefined;
      },
    }
  );

  if (isLoading) return <p>Loading..</p>;
  if (error) return <p>An error has occurred: {error.message};</p>;
  console.log(data);
  return (
    <div>
        <GetData/>
      {data.pages.map((cmt) => {
        return <h2 key={cmt.id}>{cmt.name}</h2>;
      })}
      <button disabled={isFetchingNextPage||!hasNextPage} onClick={() => fetchNextPage()}>Load More..</button>
    </div>
  );
}
// getdata in children component
const GetData = ()=>{
    const queryClient = useQueryClient();
    const data = queryClient.getQueryData();
    console.log(data.pages)
    return (
        <div>data</div>
    )
}
export default LoadMoreData;
