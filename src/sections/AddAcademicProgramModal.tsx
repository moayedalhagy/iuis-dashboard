import ModalComponent from "../components/ModalComponent";
import { Select, TextInput, Switch, Button, Image } from "@mantine/core";

import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import "@mantine/tiptap/styles.css";

import { useState } from "react";
import { RiGalleryLine } from "@remixicon/react";

type ModalParamType = {
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
};
type ParamType = {
  modal: ModalParamType;
};

export default function AddAcademicProgramModal({ modal }: ParamType) {
  return (
    <ModalComponent
      modal={{
        opened: modal.opened,
        onOpen: modal.onOpen,
        onClose: modal.onClose,
      }}
      title="اضافة برنامج"
    >
      <section className="form space-y-3 ">
        {/* program name */}
        <TextInput withAsterisk label="اسم البرنامج" description=" " error="" />

        {/* categories list  */}
        <Select
          withAsterisk
          value={""}
          label={"التصنيف"}
          placeholder="اختر صنف"
          data={[]}
          comboboxProps={{ withinPortal: false }}
          onChange={() => {}}
          checkIconPosition={"right"}
          clearable
        />

        <Switch
          defaultChecked
          color="#03a679"
          label="حالة البرنامج"
          className="mt-3  py-3"
        />

        <Button
          leftSection={<RiGalleryLine size={14} />}
          className="bg-info text-white font-normal"
        >
          إضافة صور مرتبطة
        </Button>

        <div className="max-w-[250px] w-[250px] mt-4">
          <Image
            h={100}
            w={"full"}
            radius="lg"
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
          />
        </div>
      </section>
    </ModalComponent>
  );
}
