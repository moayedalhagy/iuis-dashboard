import { useEffect } from "react";
import { UseFormSetValue } from "react-hook-form";

type Param = {
  selectedItem: any | null | undefined;
  setValue: UseFormSetValue<any>;
  fields: Array<string>;
  setters?: Array<() => void>;
};

export const useInitValues = ({
  selectedItem,
  setValue,
  fields,
  setters,
}: Param) => {
  useEffect(() => {
    // Set initial value
    fields.forEach((field) =>
      setValue(field, (selectedItem && selectedItem[field]) || "")
    );

    if (setters) {
      setters.forEach((setter) => setter());
    }
  }, [selectedItem, setValue]);
};
