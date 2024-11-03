import ModalComponent from "../components/ModalComponent";
import { TextInput, Box, Input, Button, Group } from "@mantine/core";

import { Editor, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { RichTextEditor } from "@mantine/tiptap";

import "@mantine/tiptap/styles.css";

import ControlLayoutButton from "../components/ControlLayout/ControlLayoutButton";
import { RiDeleteBin7Line, RiEdit2Line } from "@remixicon/react";

type ModalParamType = {
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
};
type ParamType = {
  modal: ModalParamType;
  detailsData: object;
};

export default function AddAcademicProgramDetailsModal({
  modal,
}: // detailsData,
ParamType) {
  const editor = useEditor({
    extensions: [StarterKit],
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aut!",
  });

  return (
    <ModalComponent
      modal={{
        opened: modal.opened,
        onOpen: modal.onOpen,
        onClose: modal.onClose,
      }}
      title="اضافة تفاصيل برنامج"
    >
      <section className="p-3 space-y-3 ">
        {/* program name */}

        <ControlLayoutButton
          label="إضافة فقرة تعريفية "
          clickHandler={() => {}}
        />
        <div className="flex flex-col gap-y-5">
          <TextBox editor={editor} />
          <TextBox editor={editor} />
          <TextBox editor={editor} />
        </div>
      </section>
    </ModalComponent>
  );
}
function TextBox({ editor }: { editor: Editor | null }) {
  return (
    <Box w={"full"} className="bg-tw-body shadow p-3 ">
      <TextInput
        withAsterisk
        label="عنوان الفقرة"
        description=" "
        error=""
        radius={"sm"}
      />

      <Input.Wrapper
        withAsterisk
        label="نص الفقرة"
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

          <RichTextEditor.Content className="text-sm p-10" />
        </RichTextEditor>
      </Input.Wrapper>

      <div className="mt-3 pt-2">
        <Group className="flex  flex-nowrap">
          <Button
            variant="outline"
            radius="md"
            color="green"
            className="h-[30px] w-[30px]   p-2"
          >
            <RiEdit2Line />
          </Button>
          <Button
            variant="outline"
            radius="md"
            color="red"
            className="h-[30px] w-[30px]   p-2"
          >
            <RiDeleteBin7Line />
          </Button>
        </Group>
      </div>
    </Box>
  );
}
