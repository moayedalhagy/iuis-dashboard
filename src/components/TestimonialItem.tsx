import { Button, Group, Image } from "@mantine/core";
import { RiDeleteBin7Line, RiEdit2Line, RiEyeLine } from "@remixicon/react";
import { TestimonialItemElementTypes } from "../types/TestimonialItemTypes";
export default function TestimonialItem({
  // id,
  // link,
  text,
  title,
}: TestimonialItemElementTypes) {
  return (
    // flex justify-between   items-center
    <div className="item grid grid-cols-5 gap-3   ">
      {/* //chekc type  */}
      <div className="rounded-lg   max-w-[200px] max-h-[200px]">
        <Image
          src={"https://picsum.photos/300/300"}
          height={160}
          alt="Norway"
          fit="contain"
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        />
      </div>

      <div className=" flex flex-col gap-y-5   ">
        <h3 className="text-info text-2xl  ">{title}</h3>

        <Button className="bg-info  font-normal text-sm " size="xs">
          السيرة الذاتية
        </Button>
      </div>

      <div className="col-span-2  ">
        <p className=" leading-9 whitespace-pre-line   max-w-md h-full  text-justify  px-2 py-1 overflow-hidden">
          {text}
        </p>
      </div>
      {/* buttons  */}
      <Group justify="center">
        <Button variant="outline" mt="md" radius="md" color="green" size="xs">
          <RiEdit2Line />
        </Button>
        <Button variant="outline" mt="md" radius="md" color="red" size="xs">
          <RiDeleteBin7Line />
        </Button>
        <Button variant="outline" mt="md" radius="md" color="black" size="xs">
          <RiEyeLine />
        </Button>
      </Group>
    </div>
  );
}
