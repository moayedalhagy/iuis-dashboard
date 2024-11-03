import { Button } from "@mantine/core";

type ParamType = {
  label: string;
  clickHandler: () => void;
  icon: React.ReactNode;
};
export default function ButtonIcon({ label, clickHandler, icon }: ParamType) {
  return (
    <Button
      onClick={clickHandler}
      color="#03A679"
      radius="md"
      leftSection={icon}
      pl={"40px"}
    >
      {label}
    </Button>
  );
}
