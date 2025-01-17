import ModalComponent from "../components/ModalComponent";
import { Textarea, TextInput, Alert } from "@mantine/core";

import "@mantine/tiptap/styles.css";
import { useState } from "react";
import { isValidUrl, urlHandler } from "../services/Helper";
import { SubmitHandler, useForm } from "react-hook-form";
import { VisualsItemApiType } from "../types/VisualsItemTypes";
import { useVisualsService } from "../services/VisualsService";

type ModalParamType = {
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
};
type ParamType = {
  modal: ModalParamType;
  selectedItem: VisualsItemApiType | null | undefined;
};

export default function AddVisualsModal({ modal, selectedItem }: ParamType) {
  const [previewOk, setPreviewOk] = useState("");

  const service = useVisualsService();
  const update = service.update;

  const {
    register,
    handleSubmit,

    reset,

    formState: { errors },
  } = useForm<VisualsItemApiType>({
    defaultValues: {
      newsVedioId: selectedItem?.newsVedioId,
      link: selectedItem?.link,
      title: selectedItem?.title,
      newsVedioDate: selectedItem?.newsVedioDate,
    },
  });

  const onSubmit: SubmitHandler<VisualsItemApiType> = (
    data: VisualsItemApiType
  ) => {
    if (selectedItem) {
      update.mutate({ id: selectedItem.newsVedioId, data });
    } else {
      console.log(data);

      service.create(data);
      return;
    }
    reset({
      link: "",
      title: "",
    });

    modal.onClose();
  };

  return (
    <ModalComponent
      modal={{
        opened: modal.opened,
        onOpen: modal.onOpen,
        onClose: modal.onClose,
      }}
      title="اضافة فيديو"
      handleClick={handleSubmit(onSubmit)}
    >
      <section className="form space-y-3 ">
        {/* news mini description */}
        <Textarea
          {...register("title")}
          withAsterisk
          label="عنوان الفيديو"
          description=" "
          error=""
        />

        <div className="new-image-section space-y-4">
          <TextInput
            {...register("link")}
            withAsterisk
            label="رابط الفيديو"
            description="ادخل عنوان url صحيح , وتاكد من معاينة الفيديو قبل الحفظ"
            error=""
            value={previewOk}
            onChange={(event) => {
              setPreviewOk(urlHandler(event.target.value));
            }}
            dir="ltr"
          />
          {!isValidUrl(previewOk) && previewOk != "" && (
            <Alert
              variant="light"
              color="red"
              title="يرجى دخال عنوان URL صحيح "
            >
              <div className="flex gap-x-4">
                <p>مثلاً</p>
                <code>https://www.youtube.com/watch?v=YrANLR1mDQU</code>
              </div>
            </Alert>
          )}
          {isValidUrl(previewOk) && (
            <div>
              {/* <p>ss</p> */}
              <iframe
                src={previewOk}
                className="w-full"
                allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture full"
                loading="lazy"
              ></iframe>
            </div>
          )}
        </div>
      </section>
    </ModalComponent>
  );
}

// https://www.youtube.com/watch?v=iZ5Cc7w_mpU
// https://www.youtube.com/embed/iZ5Cc7w_mpU
