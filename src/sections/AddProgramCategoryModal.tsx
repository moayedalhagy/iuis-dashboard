import ModalComponent from "../components/ModalComponent";
import { TextInput } from "@mantine/core";

import "@mantine/tiptap/styles.css";
import { useForm, SubmitHandler } from "react-hook-form";

import { ProgramCategoryType } from "../types/CategoryType";
import { useEffect } from "react";
import { useApiService } from "../services/ApiService";
import { ApiEndpointsEnum } from "../enums/ApiEndpointsEnum";
import { QueryKeyEnum } from "../enums/QueryKeyEnum";

type ModalParamType = {
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
};
type ParamType = {
  modal: ModalParamType;
  selectedItem: ProgramCategoryType | null | undefined;
};

export default function AddProgramCategoryModal({
  modal,
  selectedItem,
}: ParamType) {
  const apiService = useApiService<ProgramCategoryType>({
    endpoint: ApiEndpointsEnum.ProgramCategories,
    queryKey: [QueryKeyEnum.programCategories],
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ProgramCategoryType>({
    defaultValues: {
      academicCategoryId: selectedItem?.academicCategoryId,
      academicCategoryName: selectedItem?.academicCategoryName,
    },
  });

  const onSubmit: SubmitHandler<ProgramCategoryType> = (
    data: ProgramCategoryType
  ) => {
    if (selectedItem) {
      apiService.update.mutate({ id: selectedItem.academicCategoryId, data });
    } else {
      apiService.create(data);
    }
    reset({
      academicCategoryName: "",
    });

    modal.onClose();
  };

  useEffect(() => {
    setValue("academicCategoryName", selectedItem?.academicCategoryName || ""); // Set initial value for decisionTypeName
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
          {...register("academicCategoryName")}
          withAsterisk
          label="اسم التصنيف"
          description={""}
          error={errors.academicCategoryName && "filed is required"}
        />
      </section>
    </ModalComponent>
  );
}

// https://www.youtube.com/watch?v=iZ5Cc7w_mpU
// https://www.youtube.com/embed/iZ5Cc7w_mpU
