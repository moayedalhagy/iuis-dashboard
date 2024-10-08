import { useQuery } from "@tanstack/react-query";
import apiNews from "../api/ApiNews";
import { QueryKeyEnum } from "../enums/QueryKeyEnum";

export function useNewsService() {
  return useQuery({
    queryKey: [QueryKeyEnum.news],
    queryFn: apiNews,
  });
}
