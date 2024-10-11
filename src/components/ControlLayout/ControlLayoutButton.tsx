import { Button } from "@mantine/core";
import { RiAddCircleFill } from "@remixicon/react";

type ParamType = {
  label: string;
  clickHandler: () => void;
};
export default function ControlLayoutButton({
  label,
  clickHandler,
}: ParamType) {
  return (
    <Button
      onClick={clickHandler}
      color="#03A679"
      radius="sm"
      leftSection={<RiAddCircleFill />}
      pl={"40px"}
    >
      {label}
    </Button>
  );
}
