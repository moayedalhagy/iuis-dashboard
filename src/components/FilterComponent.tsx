import { Popover, Select } from "@mantine/core";
import { RiFilter2Line } from "@remixicon/react";

import { useEffect, useState } from "react";
// c973ab893b

type ParamType = {
  label: string;
  data: Array<string>;
};
export default function FilterComponent({ label, data }: ParamType) {
  const [value, setValue] = useState<string | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);

  // the element is active when the data selected
  // is null( no data selected)
  const activeClass: string = "group  border-green-600";

  //observe the select data change to enable isActive condation
  useEffect(() => {
    setIsActive(value != null ? true : false);
  }, [value]);

  return (
    <Popover width={300} position="bottom" withArrow shadow="md">
      <Popover.Target>
        <p
          className={` ${
            isActive ? activeClass : "border-transparent"
          } cursor-pointer  group-a  border-green-600 flex border-b   pb-0.5 items-baseline justify-between  gap-x-2`}
        >
          <RiFilter2Line
            className={` ${isActive ? "text-green-600 " : ""} self-center`}
          />
          <span className={isActive ? "text-green-600 " : ""}>
            {value || label}
          </span>
        </p>
      </Popover.Target>
      <Popover.Dropdown>
        <Select
          value={value}
          label={label}
          placeholder="اختر قيمة"
          data={data}
          comboboxProps={{ withinPortal: false }}
          onChange={setValue}
          checkIconPosition={"right"}
          clearable
        />
      </Popover.Dropdown>
    </Popover>
  );
}
