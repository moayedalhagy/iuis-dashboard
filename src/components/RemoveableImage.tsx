import { RiCloseCircleFill } from "@remixicon/react";
import { Image, Tooltip } from "@mantine/core";
import { forwardRef, HTMLAttributes } from "react";

const CloseIcon = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => (
    <span ref={ref} {...props}>
      <RiCloseCircleFill />
    </span>
  )
);
export default function RemoveableImage({
  src,
  onClose,
}: {
  src: string;
  onClose: () => void;
}) {
  return (
    <div className="removeable-image relative w-[32%] bg-red-400 rounded-lg group ">
      <div className="opacity-60 absolute left-1 top-1 z-99 hidden group-hover:flex cursor-pointer">
        <Tooltip label="حذف الصورة" position="top" offset={5}>
          <CloseIcon onClick={onClose} />
        </Tooltip>
      </div>

      <Image
        h={100}
        radius="lg"
        fallbackSrc="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
        src={src}
      />
    </div>
  );
}
