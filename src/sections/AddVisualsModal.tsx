import ModalComponent from "../components/ModalComponent";
import { Textarea, TextInput, Alert } from "@mantine/core";

import "@mantine/tiptap/styles.css";
import { useState } from "react";
import { isValidUrl, urlHandler } from "../services/Helper";

type ModalParamType = {
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
};
type ParamType = {
  modal: ModalParamType;
};

export default function AddVisualsModal({ modal }: ParamType) {
  const [previewOk, setPreviewOk] = useState("");

  return (
    <ModalComponent
      modal={{
        opened: modal.opened,
        onOpen: modal.onOpen,
        onClose: modal.onClose,
      }}
      title="اضافة فيديو"
      handleClick={() => null}
    >
      <section className="form space-y-3 ">
        {/* news mini description */}
        <Textarea withAsterisk label="عنوان الفيديو" description=" " error="" />

        <div className="new-image-section space-y-4">
          <TextInput
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
    </ModalComponent >
  );
}

// https://www.youtube.com/watch?v=iZ5Cc7w_mpU
// https://www.youtube.com/embed/iZ5Cc7w_mpU
