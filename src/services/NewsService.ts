import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getNews, createNews, updateNews, deleteNews } from "../api/ApiNews";
import { QueryKeyEnum } from "../enums/QueryKeyEnum";
import ErrorHandler from "../ErrorHandler";
import { NewsCardApiType } from "../types/NewsCardTypes";

export function useNewsService() {
  const queryClient = useQueryClient();

  // استعلام القراءة (get)
  const get = () => {
    const query = useQuery({
      queryKey: [QueryKeyEnum.news],
      queryFn: getNews,
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
  };

  // استعلام الإنشاء (create)
  const create = useMutation({
    mutationFn: createNews, // دالة الإنشاء في API
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeyEnum.news] }); // إعادة تحديث الأخبار
    },

    onError: (error) => {
      throw error;
      ErrorHandler(error);
    },
  });

  // // استعلام التحديث (update)
  // const update = useMutation({
  //   mutationFn: updateNews, // دالة التحديث في API
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([QueryKeyEnum.news]); // إعادة تحديث الأخبار
  //   },
  //   onError: (error) => {
  //     ErrorHandler(error);
  //   },
  // });

  // استعلام الحذف (delete)
  const remove = useMutation({
    mutationFn: deleteNews, // دالة الحذف في API
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeyEnum.news] }); // إعادة تحديث الأخبار
    },
    onError: (error) => {
      ErrorHandler(error);
      console.log(error);
    },
  });

  return {
    get, // استخدام البيانات (قراءة)
    create: (data: NewsCardApiType) => create.mutate(data), // إنشاء خبر جديد
    // update: (id: string, data: Partial<NewsCardApiType>) =>
    //   update.mutate({ id, ...data }), // تحديث خبر
    delete: (id: number) => remove.mutate(id), // حذف خبر
  };
}
