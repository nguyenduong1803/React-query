import React from "react";
import axios from "axios";
import { useMutation, queryCache } from "react-query";
import { getPhotos } from "../../api/api";
const apiPhoto = "https://jsonplaceholder.typicode.com/photos";

function useImage() {
  return useMutation(
    (values) => axios.get(apiPhoto, values).then((res) => res.data),
    {
      onMutate: (values) => {
        const preImage = queryCache.getQueryData("image");
        queryCache.setQueryData("image", (old) => [
          ...old,
          {
            id: "temp",
            ...values,
          },
        ]);
        return queryCache.setQueryData("image", preImage);
      },
      onError: (error,values,rollback) =>rollback(),
      onSuccess: () => queryCache.refetchQueries("image"),
    }
  );
}

export default useImage;
