import ModalComponent from "../components/ModalComponent";
import { Input, TextInput, Switch } from "@mantine/core";
import { RichTextEditor } from "@mantine/tiptap";

import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import "@mantine/tiptap/styles.css";

type ModalParamType = {
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
};
type ParamType = {
  modal: ModalParamType;
};

export default function AddFaqModal({ modal }: ParamType) {
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
      title="اضافة سؤال"
      handleClick={() => null}
    >
      <section className="form space-y-3 ">
        {/* program name */}
        <TextInput withAsterisk label="نص السؤال" description=" " error="" />

        {/* editor  */}
        <Input.Wrapper
          withAsterisk
          label="نص السؤال"
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

        {/* status  */}
        <Switch
          defaultChecked
          color="#03a679"
          label="حالة البرنامج"
          className="mt-3  py-3"
        />
      </section>
    </ModalComponent>
  );
}
