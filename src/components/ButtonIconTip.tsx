import { Button, Tooltip } from "@mantine/core";

type ParamType = {
  label: string;
  clickHandler?: () => void;
  doubleClickHandler?: () => void;
  icon: React.ReactNode;
  classNames?: any;
  props?: any;
  tip: string;
};
export default function ButtonIconTip({
  label,
  tip,
  clickHandler,
  doubleClickHandler,
  classNames,
  icon,
  props,
}: ParamType) {
  return (
    <Tooltip label={tip} position="top" offset={5}>
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
    </Tooltip>
  );
}
