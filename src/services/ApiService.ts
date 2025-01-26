import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import ErrorHandler from "../ErrorHandler";

import NotificationSuccess from "../components/NotificationSuccess";

import apiHandler from "../ApiConfig";

const notify = (title: string, message: string) => {
  NotificationSuccess({
    title: title,
    message: message,
  });
};

type Params<T> = {
  endpoint: string;
  queryKey: Array<any>;
};

export function useApiService<T>({ endpoint, queryKey }: Params<T>) {
  const queryClient = useQueryClient();

  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: queryKey,
    });
  };
  // استعلام القراءة (get)
  const Get = () => {
    const query = useQuery({
      queryKey: queryKey,
      queryFn: () => apiHandler.get(`${endpoint}`),
    });

    if (query.isError) {
      ErrorHandler(query.error);
    }

    const queryData = query.data?.data.data;
    const paginatedResponse =
      queryData && queryData.metaData ? queryData.data : queryData;

    return {
      isLoading: query.isLoading,
      isError: query.isError,
      isStale: query.isStale,
      data: query.data,
      typedData: query.data?.data.success
        ? (paginatedResponse as Array<T>)
        : null,
    };
  };

  // استعلام الإنشاء (create)
  const create = useMutation({
    mutationKey: queryKey,
    mutationFn: (data: any) => apiHandler.post(`${endpoint}`, data), // دالة الإنشاء في API
    onSuccess: () => {
      invalidateQueries();

      notify("رسالة نجاح", `تم اضافة البيانات بنجاح`);
    },

    onError: ErrorHandler,
  });

  // استعلام التحديث (update)
  // apiUpdate
  const update = useMutation({
    mutationKey: queryKey,
    mutationFn: ({ id, data }: any) =>
      apiHandler.put(`${endpoint}/${id}`, data), // دالة التحديث في API
    onSuccess: () => {
      invalidateQueries();
      notify("رسالة نجاح", `تم تحديث البيانات بنجاح`);
    },
    onError: ErrorHandler,
  });

  // استعلام الحذف (delete)
  const remove = useMutation({
    mutationFn: (id: any) => apiHandler.delete(`${endpoint}/${id}`), // دالة الحذف في API
    onSuccess: () => {
      invalidateQueries();

      notify("رسالة نجاح", `تم حذف البيانات بنجاح`);
    },
    onError: ErrorHandler,
  });

  return {
    Get, // استخدام البيانات (قراءة)
    create: (data: T) => create.mutate(data), // إنشاء خبر جديد
    update,
    delete: (id: number | string) => remove.mutate(id), // حذف خبر
  };
}
