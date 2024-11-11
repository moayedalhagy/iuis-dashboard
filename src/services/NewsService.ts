import { useQuery } from "@tanstack/react-query";
import apiNews from "../api/ApiNews";
import { QueryKeyEnum } from "../enums/QueryKeyEnum";

import useAuthStore from "../store/AuthStore";
import ErrorHandler from "../ErrorHandler";
import { NewsCardApiType } from "../types/NewsCardTypes";

export function useNewsService() {
  const auth = useAuthStore();

  const query = useQuery({
    queryKey: [QueryKeyEnum.news],
    queryFn: apiNews,
  });

  if (query.isError) {
    ErrorHandler(query.error);
  }

  return {
    isLoading: query.isLoading,
    isError: query.isError,
    isStale: query.isStale,
    data: query.data,
    typedData: query.data?.success
      ? (query.data.data as Array<NewsCardApiType>)
      : null,
  };
}
