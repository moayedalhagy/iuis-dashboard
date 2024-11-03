import ModalComponent from "../components/ModalComponent";
import {
  TagsInput,
  Button,
  Divider,
  Image,
  Input,
  Space,
  Textarea,
  TextInput,
} from "@mantine/core";
import { RichTextEditor } from "@mantine/tiptap";

import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import "@mantine/tiptap/styles.css";
import { RiGalleryLine } from "@remixicon/react";
import RemoveableImage from "../components/RemoveableImage";
import { useState } from "react";
import VideoInput from "../components/VideoInput";

type ModalParamType = {
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
};
type ParamType = {
  modal: ModalParamType;
};

export default function AddNewsModal({ modal }: ParamType) {
  const editor = useEditor({
    extensions: [StarterKit],
  });

  return (
    <ModalComponent
      modal={{
        opened: modal.opened,
        onOpen: modal.onOpen,
        onClose: modal.onClose,
      }}
      title="اضافة خبر"
    >
      <section className="form space-y-3 ">
        {/* news title */}
        <TextInput withAsterisk label="عنوان الخبر" description=" " error="" />

        {/* news mini description */}
        <Textarea withAsterisk label="وصف الخبر" description=" " error="" />

        {/* news description */}
        <Input.Wrapper
          withAsterisk
          label="نص الخبر"
          description=" "
          error=""
          className="mt-2"
        >
          <RichTextEditor editor={editor} className="mt-1">
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

          <Image
            h={200}
            w="auto"
            fit="contain"
            radius="lg"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
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
          <div className="flex  flex-wrap gap-x-2 gap-y-4   py-2 select-none">
            <RemoveableImage />
            <RemoveableImage />
            <RemoveableImage />
            <RemoveableImage />
            <RemoveableImage />
          </div>
          <Divider mt={"lg"} />
          <TagsInput
            withAsterisk
            label="كلمات مرتبطة"
            description=" "
            placeholder="ادخل الكلمة واضغط على Enter"
          />
          <Space mt={"lg"} />

          <VideoInput />
        </div>
      </section>
    </ModalComponent>
  );
}
