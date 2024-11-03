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

export default function AddSayModal({ modal }: ParamType) {
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
      title="اضافة قول عن الجامعة"
    >
      <section className="form space-y-3 ">
        {/* news title */}
        <TextInput withAsterisk label="الاسم" description=" " error="" />

        {/* news mini description */}
        <Textarea
          withAsterisk
          label="التعريف بالشخص"
          description=" "
          error=""
        />

        {/* news description */}
        <Input.Wrapper
          withAsterisk
          label="نص القول"
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
            إضافة صورة شخصية
          </Button>

          <Image
            h={200}
            w="auto"
            fit="contain"
            radius="lg"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
          />
        </div>
      </section>
    </ModalComponent>
  );
}
