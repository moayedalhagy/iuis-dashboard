import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  apiGet,
  apiCreate,
  apiDelete,
  apiUpdate,
} from "../api/ApiNewsCategory";
import { QueryKeyEnum } from "../enums/QueryKeyEnum";
import ErrorHandler from "../ErrorHandler";

import { NewsCategoryType } from "../types/CategoryType";
import NotificationSuccess from "../components/NotificationSuccess";

import apiHandler from "../ApiConfig";
import { VisualsItemApiType } from "../types/VisualsItemTypes";

const endpoint = "/VediosNews";

const notify = (title: string, message: string) => {
  const audio = new Audio("/success.mp3"); // ضع مسار ملف الصوت هنا
  audio.play().catch((err) => console.error("Error playing sound:", err));
  NotificationSuccess({
    title: title,
    message: message,
  });
};

export function useVisualsService() {
  const queryClient = useQueryClient();

  // استعلام القراءة (get)
  const Get = () => {
    const query = useQuery({
      queryKey: [QueryKeyEnum.visuals],
      queryFn: () => apiHandler.get(`${endpoint}`),
    });

    if (query.isError) {
      ErrorHandler(query.error);
    }

    return {
      isLoading: query.isLoading,
      isError: query.isError,
      isStale: query.isStale,
      data: query.data,
      typedData: query.data?.data.success
        ? (query.data.data.data as Array<VisualsItemApiType>)
        : null,
    };
  };

  // استعلام الإنشاء (create)
  const create = useMutation({
    mutationKey: [QueryKeyEnum.visuals],
    mutationFn: (data: any) => apiHandler.post(`${endpoint}`, data), // دالة الإنشاء في API
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeyEnum.visuals],
      }); // إعادة تحديث الأخبار

      notify("رسالة نجاح", `تم اضافة البيانات بنجاح`);
    },

    onError: ErrorHandler,
  });

  // استعلام التحديث (update)
  // apiUpdate
  const update = useMutation({
    mutationKey: [QueryKeyEnum.visuals],
    mutationFn: ({ id, data }: any) => apiUpdate(id, data), // دالة التحديث في API
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeyEnum.visuals],
      });
      notify("رسالة نجاح", `تم اضافة البيانات بنجاح`);
    },
    onError: ErrorHandler,
  });

  // استعلام الحذف (delete)
  const remove = useMutation({
    mutationFn: apiDelete, // دالة الحذف في API
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeyEnum.visuals],
      }); // إعادة تحديث الأخبار

      notify("رسالة نجاح", `تم حذف البيانات بنجاح`);
    },
    onError: ErrorHandler,
  });

  return {
    Get, // استخدام البيانات (قراءة)
    create: (data: VisualsItemApiType) => create.mutate(data), // إنشاء خبر جديد
    update,
    delete: (id: number) => remove.mutate(id), // حذف خبر
  };
}
