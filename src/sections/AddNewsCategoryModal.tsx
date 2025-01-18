import ModalComponent from "../components/ModalComponent";
import { TextInput } from "@mantine/core";

import "@mantine/tiptap/styles.css";
import { useForm, SubmitHandler } from "react-hook-form";

import { NewsCategoryType } from "../types/CategoryType";
import { useEffect } from "react";
import { useApiService } from "../services/ApiService";
import { QueryKeyEnum } from "../enums/QueryKeyEnum";
import { ApiEndpointsEnum } from "../enums/ApiEndpointsEnum";

type ModalParamType = {
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
};
type ParamType = {
  modal: ModalParamType;
  selectedItem: NewsCategoryType | null | undefined;
};

export default function AddNewsCategoryModal({
  modal,
  selectedItem,
}: ParamType) {
  const apiService = useApiService<NewsCategoryType>({
    endpoint: ApiEndpointsEnum.NewsCategoriesNames,
    queryKey: [QueryKeyEnum.newsCategories],
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<NewsCategoryType>({
    defaultValues: {
      newsCategoryId: selectedItem?.newsCategoryId,
      newsCategoryName: selectedItem?.newsCategoryName,
    },
  });

  const onSubmit: SubmitHandler<NewsCategoryType> = (
    data: NewsCategoryType
  ) => {
    if (selectedItem) {
      apiService.update.mutate({ id: selectedItem.newsCategoryId, data });
    } else {
      apiService.create(data);
    }
    reset({
      newsCategoryName: "",
    });

    modal.onClose();
  };

  useEffect(() => {
    setValue("newsCategoryName", selectedItem?.newsCategoryName || ""); // Set initial value for decisionTypeName
  }, [selectedItem, setValue]);

  return (
    <ModalComponent
      modal={{
        opened: modal.opened,
        onOpen: modal.onOpen,
        onClose: modal.onClose,
      }}
      handleClick={handleSubmit(onSubmit)}
      title="اضافة تصنيف"
    >
      <section className="form space-y-3 ">
        {/* news mini description */}

        <TextInput
          {...register("newsCategoryName")}
          withAsterisk
          label="اسم التصنيف"
          description={""}
          error={errors.newsCategoryName && "filed is required"}
        />
      </section>
    </ModalComponent>
  );
}

// https://www.youtube.com/watch?v=iZ5Cc7w_mpU
// https://www.youtube.com/embed/iZ5Cc7w_mpU
