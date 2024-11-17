import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  apiGet,
  apiCreate,
  apiDelete,
  // apiUpdate,
} from "../api/ApiNewsCategory";
import { QueryKeyEnum } from "../enums/QueryKeyEnum";
import ErrorHandler from "../ErrorHandler";

import { NewsCategoryType } from "../types/CategoryType";
import NotificationSuccess from "../components/NotificationSuccess";

const notify = (title: string, message: string) => {
  const audio = new Audio("/success.mp3"); // ضع مسار ملف الصوت هنا
  audio.play().catch((err) => console.error("Error playing sound:", err));
  NotificationSuccess({
    title: title,
    message: message,
  });
};
export function useNewsCategoriesService() {
  const queryClient = useQueryClient();

  // استعلام القراءة (get)
  const Get = () => {
    const query = useQuery({
      queryKey: [QueryKeyEnum.news_categories],
      queryFn: apiGet,
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
        ? (query.data.data as Array<NewsCategoryType>)
        : null,
    };
  };

  // استعلام الإنشاء (create)
  const create = useMutation({
    mutationFn: apiCreate, // دالة الإنشاء في API
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeyEnum.news_categories],
      }); // إعادة تحديث الأخبار

      notify("رسالة نجاح", `تم اضافة البيانات بنجاح`);
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
    mutationFn: apiDelete, // دالة الحذف في API
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeyEnum.news_categories],
      }); // إعادة تحديث الأخبار

      notify("رسالة نجاح", `تم حذف البيانات بنجاح`);
    },
    onError: (error) => {
      ErrorHandler(error);
      console.log(error);
    },
  });

  return {
    Get, // استخدام البيانات (قراءة)
    create: (data: NewsCategoryType) => create.mutate(data), // إنشاء خبر جديد
    // update: (id: string, data: Partial<NewsCardApiType>) =>
    //   update.mutate({ id, ...data }), // تحديث خبر
    delete: (id: number) => remove.mutate(id), // حذف خبر
  };
}
