import ModalComponent from "../components/ModalComponent";
import { TextInput } from "@mantine/core";

import "@mantine/tiptap/styles.css";
import { useForm, SubmitHandler } from "react-hook-form";

import { DecisionsCategoryType } from "../types/CategoryType";
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
  selectedItem: DecisionsCategoryType | null | undefined;
};

export default function AddDecisionsCategoryModal({
  modal,
  selectedItem,
}: ParamType) {
  const apiService = useApiService<DecisionsCategoryType>({
    endpoint: ApiEndpointsEnum.DecisionsTypes,
    queryKey: [QueryKeyEnum.decisionsCategories],
  });

  // const update = apiService.update;

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<DecisionsCategoryType>({
    defaultValues: {
      decisionTypeId: selectedItem?.decisionTypeId,
      decisionTypeName: selectedItem?.decisionTypeName,
    },
  });

  const onSubmit: SubmitHandler<DecisionsCategoryType> = (
    data: DecisionsCategoryType
  ) => {
    if (selectedItem) {
      apiService.update.mutate({ id: selectedItem.decisionTypeId, data });
    } else {
      apiService.create(data);
    }
    reset({
      decisionTypeName: "",
    });

    modal.onClose();
  };

  useEffect(() => {
    setValue("decisionTypeName", selectedItem?.decisionTypeName || ""); // Set initial value for decisionTypeName
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
          {...register("decisionTypeName")}
          withAsterisk
          label="اسم التصنيف"
          description={""}
          error={errors.decisionTypeName && "filed is required"}
        />
      </section>
    </ModalComponent>
  );
}

// https://www.youtube.com/watch?v=iZ5Cc7w_mpU
// https://www.youtube.com/embed/iZ5Cc7w_mpU
