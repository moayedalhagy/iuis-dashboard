import { Button } from "@mantine/core";

type ParamType = {
  label: string;
  clickHandler?: () => void;
  doubleClickHandler?: () => void;
  icon: React.ReactNode;
  classNames?: any;
  props?: any;
};
export default function ButtonIcon({
  label,
  clickHandler,
  doubleClickHandler,
  classNames,
  icon,
  props,
}: ParamType) {
  return (
    <Button
      classNames={classNames}
      onClick={clickHandler}
      onDoubleClick={doubleClickHandler}
      color="#03A679"
      radius="md"
      leftSection={icon}
      pl={"40px"}
      {...props}
    >
      {label}
    </Button>
  );
}
