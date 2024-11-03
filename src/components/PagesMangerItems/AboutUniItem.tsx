import { RiGalleryLine } from "@remixicon/react";
import AccordionItem from "../AccordionItem";
import ButtonIcon from "../ButtonIcon";
import { Image } from "@mantine/core";

export default function AboutUniItem() {
  const itemTitle = "صفحة عن الجامعة";
  return (
    <AccordionItem title={itemTitle}>
      <div>
        {/* Button  */}
        <ButtonIcon
          label="إضافة صورة عن الجامعة"
          icon={<RiGalleryLine />}
          clickHandler={() => alert(2)}
        />
        {/* Image  */}

        <div className="my-3 max-w-[250px] max-h-[250px] bg-red-300 overflow-hidden rounded-md">
          <Image
            src={"https://picsum.photos/300/300"}
            height={160}
            alt="Norway"
            fit="contain"
            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          />
        </div>
      </div>
    </AccordionItem>
  );
}
