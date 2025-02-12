import ModalComponent from "../components/ModalComponent";
import {
  Button,
  Divider,
  FileInput,
  Image,
  Input,
  Textarea,
  TextInput,
} from "@mantine/core";

import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import "@mantine/tiptap/styles.css";
import { RiGalleryLine } from "@remixicon/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { ApiEndpointsEnum } from "../enums/ApiEndpointsEnum";
import { QueryKeyEnum } from "../enums/QueryKeyEnum";
import { useInitValues } from "../hooks/useInitValues";
import { useApiService } from "../services/ApiService";
import { RichTextEditorComponent } from "../components/RichTextEditorComponent";
import { SayerType } from "../types/SayerType";

type ModalParamType = {
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
};

type ParamType = {
  modal: ModalParamType;
  selectedItem: SayerType | null | undefined;
  viewOnly: boolean;
};

export default function AddSayModal({
  modal,
  selectedItem,
  viewOnly = false,
}: ParamType) {
  const editor = useEditor({
    extensions: [StarterKit],
  });
  const apiService = useApiService<SayerType>({
    endpoint: ApiEndpointsEnum.SayersTestimonies,
    queryKey: [QueryKeyEnum.sayersTestimonies],
  });

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<SayerType>({
    defaultValues: {
      sayerId: selectedItem?.sayerId,
      sayerName: selectedItem?.sayerName,
      sayerDefinition: selectedItem?.sayerDefinition,
      sayingText: selectedItem?.sayingText,
    },
  });

  const [sayingText, setSayingText] = useState(selectedItem?.sayingText || "");
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);

  const onSubmit: SubmitHandler<SayerType> = (data: SayerType) => {
    if (selectedItem) {
      data.sayerId = selectedItem.sayerId;
      apiService.update.mutate({ id: selectedItem.sayerId, data });
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
    fields: ["sayerName", "sayerDefinition", "sayingText"],
    setters: [() => setSayingText(selectedItem?.sayingText || "")],
  });

  const handleMainImage = (e: any) => {
    setMainImage(e);
    setValue("sayerImageLink", e);
    setMainImagePreview(e ? URL.createObjectURL(e) : "");
  };

  return (
    <ModalComponent
      modal={{
        opened: modal.opened,
        onOpen: modal.onOpen,
        onClose: modal.onClose,
      }}
      title="اضافة قول عن الجامعة"
      handleClick={handleSubmit(onSubmit)}
      okButtonDisabled={viewOnly}
    >
      <section className="form space-y-3 ">
        {/* news title */}
        <TextInput
          {...register("sayerName")}
          withAsterisk
          label="الاسم"
          description=" "
          error=""
        />

        {/* news mini description */}
        <Textarea
          {...register("sayerDefinition")}
          withAsterisk
          label="التعريف بالشخص"
          description=" "
          error=""
        />

        <section className="form space-y-3 ">
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
                key={sayingText} // Add a unique key to force re-render
                value={sayingText}
                onChange={(data) => setValue("sayingText", data)}
              />
            </Input.Wrapper>
          }
        </section>

        <Divider mt={"lg"} />

        {/* news main image */}

        <div className="new-image-section space-y-4">
          <Button
            leftSection={<RiGalleryLine size={14} />}
            className="bg-info text-white font-normal"
          >
            إضافة صورة رئيسية
          </Button>
          <FileInput
            clearable
            label="Upload files"
            placeholder="Upload files"
            value={mainImage}
            onChange={handleMainImage}
          />

          <Image
            h={200}
            w="auto"
            fit="contain"
            radius="lg"
            fallbackSrc="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
            src={mainImagePreview ? mainImagePreview : ""}
          />
        </div>
      </section>
    </ModalComponent>
  );
}
