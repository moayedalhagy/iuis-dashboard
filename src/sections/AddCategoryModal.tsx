import ModalComponent from "../components/ModalComponent";
import { TextInput } from "@mantine/core";

import "@mantine/tiptap/styles.css";

type ModalParamType = {
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
};
type ParamType = {
  modal: ModalParamType;
};

export default function AddCategoryModal({ modal }: ParamType) {
  return (
    <ModalComponent
      modal={{
        opened: modal.opened,
        onOpen: modal.onOpen,
        onClose: modal.onClose,
      }}
      title="اضافة تصنيف"
    >
      <section className="form space-y-3 ">
        {/* news mini description */}
        <TextInput withAsterisk label="اسم التصنيف" description=" " error="" />
      </section>
    </ModalComponent>
  );
}

// https://www.youtube.com/watch?v=iZ5Cc7w_mpU
// https://www.youtube.com/embed/iZ5Cc7w_mpU
