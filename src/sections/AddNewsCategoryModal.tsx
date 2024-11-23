import ModalComponent from "../components/ModalComponent";
import { TextInput } from "@mantine/core";

import "@mantine/tiptap/styles.css";
import { useForm, SubmitHandler } from "react-hook-form";

import { useNewsCategoriesService } from "../services/NewsCategoriesService";
import { NewsCategoryType } from "../types/CategoryType";
import { useEffect } from "react";

type ModalParamType = {
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
};
type ParamType = {
  modal: ModalParamType;
  selectedItem: NewsCategoryType | null | undefined;
};

export default function AddNewsCategoryModal({ modal, selectedItem }: ParamType) {
  const service = useNewsCategoriesService();
  const update = service.update;
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
      update.mutate({ id: selectedItem.newsCategoryId, data });
    } else {
      service.create(data);
    }
    reset({
      newsCategoryName: "",
    })

    modal.onClose();
  }

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
