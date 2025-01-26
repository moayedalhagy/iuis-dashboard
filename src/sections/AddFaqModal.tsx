import ModalComponent from "../components/ModalComponent";
import { Input, TextInput } from "@mantine/core";

import "@mantine/tiptap/styles.css";
import { FaqsType } from "../types/FaqsType";

import { useApiService } from "../services/ApiService";
import { QueryKeyEnum } from "../enums/QueryKeyEnum";
import { ApiEndpointsEnum } from "../enums/ApiEndpointsEnum";
import { SubmitHandler, useForm } from "react-hook-form";
import { useInitValues } from "../hooks/useInitValues";
import { RichTextEditorComponent } from "../components/RichTextEditorComponent";
import { useEffect, useState } from "react";

type ModalParamType = {
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
};
type ParamType = {
  modal: ModalParamType;
  selectedItem: FaqsType | null | undefined;
  viewOnly: boolean;
};

export default function AddFaqModal({
  modal,
  selectedItem,
  viewOnly = false,
}: ParamType) {
  const apiService = useApiService<FaqsType>({
    endpoint: ApiEndpointsEnum.Faqs,
    queryKey: [QueryKeyEnum.faqs],
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<FaqsType>({
    defaultValues: {
      questionId: selectedItem?.questionId,
      questionText: selectedItem?.questionText,
      answer: selectedItem?.answer,
    },
  });

  const [answer, setAnswer] = useState(selectedItem?.answer || "");

  const onSubmit: SubmitHandler<FaqsType> = (data: FaqsType) => {
    if (selectedItem) {
      apiService.update.mutate({ id: selectedItem.questionId, data });
    } else {
      apiService.create(data);
      return;
    }
    reset();

    modal.onClose();
  };

  useInitValues({
    selectedItem,
    setValue,
    fields: ["questionText", "answer"],
    setters: [() => setAnswer(selectedItem?.answer || "")],
  });

  return (
    <ModalComponent
      modal={{
        opened: modal.opened,
        onOpen: modal.onOpen,
        onClose: modal.onClose,
      }}
      handleClick={handleSubmit(onSubmit)}
      okButtonDisabled={viewOnly}
      title="اضافة سؤال"
    >
      <section className="form space-y-3 ">
        {/* program name */}
        <TextInput
          {...register("questionText")}
          withAsterisk
          label="نص السؤال"
          description=" "
          error=""
        />

        {
          <Input.Wrapper
            id="editor"
            withAsterisk
            label="جواب السؤال"
            description=" "
            error=""
            className="mt-2"
          >
            <RichTextEditorComponent
              key={answer} // Add a unique key to force re-render
              value={answer}
              onChange={(data) => setValue("answer", data)}
            />
          </Input.Wrapper>
        }
      </section>
    </ModalComponent>
  );
}
