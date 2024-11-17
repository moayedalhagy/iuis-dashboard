import { TextInput, Alert } from "@mantine/core";

import { urlHandler, isValidUrl } from "../services/Helper";
import { useState } from "react";

type ParamType = {
  required?: boolean;
  onChange: (url: string) => void;
};
export default function VideoInput({ required, onChange }: ParamType) {
  const [previewOk, setPreviewOk] = useState("");
  return (
    <div>
      <TextInput
        withAsterisk={required}
        label="رابط فيديو مرتبط"
        description="ادخل عنوان url صحيح , وتاكد من معاينة الفيديو قبل الحفظ"
        error=""
        value={previewOk}
        onChange={(event) => {
          let url = urlHandler(event.target.value);

          setPreviewOk(url);

          onChange(url);
        }}
        dir="ltr"
      />
      {!isValidUrl(previewOk) && previewOk != "" && (
        <Alert variant="light" color="red" title="يرجى دخال عنوان URL صحيح ">
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
  );
}
