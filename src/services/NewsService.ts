import { useQuery } from "@tanstack/react-query";
import apiNews from "../api/ApiNews";
import { QueryKeyEnum } from "../enums/QueryKeyEnum";

import useAuthStore from "../store/AuthStore";
import ErrorHandler from "../ErrorHandler";

export function useNewsService() {
  const auth = useAuthStore();

  const query = useQuery({
    queryKey: [QueryKeyEnum.news],
    queryFn: apiNews,
  });

  if (query.isError) {
    ErrorHandler(query.error);
  }

  let typedData = undefined;
  if (query.data?.success) {
    typedData = query.data.data;
  }

  return {
    isLoading: query.isLoading,
    isError: query.isError,
    isStale: query.isStale,
    data: query.data,
    typedData: typedData,
  };
}
