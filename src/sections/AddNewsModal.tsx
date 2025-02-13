import ModalComponent from "../components/ModalComponent";
import { useForm, SubmitHandler } from "react-hook-form";

import { RichTextEditor } from "@mantine/tiptap";

import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import "@mantine/tiptap/styles.css";
import { RiGalleryLine } from "@remixicon/react";
import RemoveableImage from "../components/RemoveableImage";
import VideoInput from "../components/VideoInput";
import {
  TagsInput,
  Button,
  Divider,
  Image,
  Input,
  Space,
  Textarea,
  TextInput,
  FileInput,
} from "@mantine/core";

import { useEffect, useState } from "react";

import { useApiService } from "../services/ApiService";
import { ApiEndpointsEnum } from "../enums/ApiEndpointsEnum";
import { QueryKeyEnum } from "../enums/QueryKeyEnum";
import { NewsCardApiType } from "../types/NewsCardTypes";
import { useInitValues } from "../hooks/useInitValues";

type ModalParamType = {
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
};
type ParamType = {
  modal: ModalParamType;
  selectedItem: NewsCardApiType | null | undefined;
  viewOnly: boolean;
};

type Inputs = Pick<
  NewsCardApiType,
  | "newsId"
  | "title"
  | "description"
  | "cardImageLink"
  | "newsBodyText"
  | "newsCategoryName"
> & {
  img: File;
  images: Array<File>;
  keywords: Array<string>;
  video_link: string;
};

export default function AddNewsModal({
  modal,
  selectedItem,
  viewOnly = false,
}: ParamType) {
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);
  const [linkedImages, setLinkedImages] = useState<File[]>([]);
  const [keywords, setKeywords] = useState<Array<string>>([]);

  //service
  const apiService = useApiService<NewsCardApiType>({
    endpoint: ApiEndpointsEnum.CardsNews,
    queryKey: [QueryKeyEnum.news],
  });

  const editorElement = useEditor({
    extensions: [StarterKit],
    content: "",
    editable: true,
    onUpdate: (e) => setValue("newsBodyText", e.editor.getHTML()),
  });

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      newsId: selectedItem?.newsId,
    },
  });

  const onSubmit: SubmitHandler<NewsCardApiType> = (data: NewsCardApiType) => {
    if (selectedItem) {
      apiService.updateForm.mutate({ id: selectedItem.newsId, data });
    } else {
      apiService.createForm(data);
      return;
    }
    reset();
    modal.onClose();
  };

  const handleMainImage = (e: any) => {
    setMainImage(e);
    setValue("img", e);
    setMainImagePreview(e ? URL.createObjectURL(e) : "");
  };
  const handleLinkedImages = (e: any) => {
    setLinkedImages(e);
    setValue("images", e);
  };
  const removeLinkedImage = (index: number) => {
    setLinkedImages([...linkedImages.filter((_, idx) => idx != index)]);
  };

  const handleKeywords = (e: Array<string>) => {
    setKeywords(e);
    setValue("keywords", e);
  };

  useInitValues({
    selectedItem,
    setValue,
    fields: [
      "title",
      "description",
      "cardImageLink",
      "newsBodyText",
      "newsCategoryName",
    ],
    setters: [],
  });

  return (
    <ModalComponent
      modal={{
        opened: modal.opened,
        onOpen: modal.onOpen,
        onClose: modal.onClose,
      }}
      title="اضافة خبر"
      handleClick={handleSubmit(onSubmit)}
      okButtonDisabled={viewOnly}
    >
      <form className="form space-y-3 " onSubmit={handleSubmit(onSubmit)}>
        {/* news title */}
        <TextInput
          {...register("title")}
          withAsterisk
          label="عنوان الخبر"
          description={""}
          error={errors.title && "filed is required"}
        />

        {/* news mini description */}
        <Textarea
          {...register("description")}
          withAsterisk
          label="وصف الخبر"
          description=" "
          error=""
        />

        {/* news description */}
        <Input.Wrapper
          withAsterisk
          label="نص الخبر"
          description=" "
          error=""
          className="mt-2"
        >
          <RichTextEditor editor={editorElement} className="mt-1">
            <RichTextEditor.Toolbar sticky stickyOffset={60}>
              <RichTextEditor.ControlsGroup>
                <RichTextEditor.Bold />
                <RichTextEditor.Italic />
              </RichTextEditor.ControlsGroup>
            </RichTextEditor.Toolbar>

            <RichTextEditor.Content className="text-sm" />
          </RichTextEditor>
        </Input.Wrapper>

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
        <Divider mt={"lg"} />
        <div className="new-image-section space-y-4">
          <Button
            leftSection={<RiGalleryLine size={14} />}
            className="bg-info text-white font-normal"
          >
            إضافة صور مرتبطة
          </Button>
          <FileInput
            clearable
            label="Upload files"
            placeholder="Upload files"
            value={linkedImages}
            onChange={handleLinkedImages}
            multiple
          />
          <div className="flex  flex-wrap gap-x-2 gap-y-4   py-2 select-none">
            {linkedImages.map((image, index) => (
              <RemoveableImage
                src={URL.createObjectURL(image)}
                key={index}
                onClose={() => removeLinkedImage(index)}
              />
            ))}
          </div>
          <Divider mt={"lg"} />

          <TagsInput
            withAsterisk
            label="كلمات مرتبطة"
            description=" "
            placeholder="ادخل الكلمة واضغط على Enter"
            clearable
            value={keywords}
            onChange={handleKeywords}
          />
          <Space mt={"lg"} />

          <VideoInput onChange={(url) => setValue("video_link", url.trim())} />
        </div>
      </form>
    </ModalComponent>
  );
}
