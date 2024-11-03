import { RiEdit2Line, RiGalleryLine } from "@remixicon/react";
import AccordionItem from "../AccordionItem";
import ButtonIcon from "../ButtonIcon";
import { Button, Image, TextInput } from "@mantine/core";
import VideoInput from "../VideoInput";

export default function MainPageItem() {
  const itemTitle = "الصفحة الرئيسية";
  return (
    <AccordionItem title={itemTitle}>
      {/* Button  */}
      <ButtonIcon
        label="إضافة صورة رئيسية"
        icon={<RiGalleryLine />}
        clickHandler={() => alert(2)}
      />
      {/* Image  */}

      <div className="my-3 max-w-[250px] max-h-[250px]   overflow-hidden rounded-md">
        <Image
          src={"https://picsum.photos/300/300"}
          height={160}
          alt="Norway"
          fit="contain"
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        />
      </div>

      <div className="flex gap-x-2">
        <TextInput
          withAsterisk
          label="عنوان الخبر"
          description=" "
          error=""
          className="flex-1"
        />
        <Button
          variant="outline"
          mt="md"
          radius="md"
          color="green"
          size="xs"
          className="self-end"
        >
          <RiEdit2Line />
        </Button>
      </div>

      <div className="mt-3 flex gap-x-2">
        <div className="flex-1">
          <VideoInput required />
        </div>
        <Button
          variant="outline"
          mt="md"
          radius="md"
          color="green"
          size="xs"
          className="self-end"
        >
          <RiEdit2Line />
        </Button>
      </div>
    </AccordionItem>
  );
}
