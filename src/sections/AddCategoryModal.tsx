import ModalComponent from "../components/ModalComponent";
import { TextInput } from "@mantine/core";

import "@mantine/tiptap/styles.css";
import { useForm, SubmitHandler } from "react-hook-form";

import { useNewsCategoriesService } from "../services/NewsCategoriesService";
import { NewsCategoryType } from "../types/CategoryType";

type ModalParamType = {
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
};
type ParamType = {
  modal: ModalParamType;
};

export default function AddCategoryModal({ modal }: ParamType) {
  const newsCategoriesService = useNewsCategoriesService();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<NewsCategoryType>();

  const onSubmit: SubmitHandler<NewsCategoryType> = (
    data: NewsCategoryType
  ) => {
    newsCategoriesService.create(data);
    // setValue("newsCategoryName", "");
  };

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
