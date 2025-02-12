import { Button, Group, Image } from "@mantine/core";
import { RiDeleteBin7Line, RiEdit2Line, RiEyeLine } from "@remixicon/react";

import { SayerType } from "../types/SayerType";
import ConfirmDelete from "./ConfirmDelete";

type ParamType = {
  _class?: string;
  data: SayerType;
  deleteItem: () => void;
  editItem: (data: any) => void;
  showItem: (data: any) => void;
};

export default function TestimonialItem({
  data,
  _class,
  deleteItem,
  editItem,
  showItem,
}: ParamType) {
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
        <h3 className="text-info text-2xl  ">{data.sayerName}</h3>

        <Button className="bg-info  font-normal text-sm " size="xs">
          السيرة الذاتية
        </Button>
      </div>

      <div className="col-span-2  ">
        <p className=" leading-9 whitespace-pre-line   max-w-md h-full  text-justify  px-2 py-1 overflow-hidden">
          {data.sayingText}
        </p>
      </div>
      {/* buttons  */}
      <Group justify="center">
        <Button
          variant="outline"
          radius="md"
          color="green"
          className="h-[30px] w-[30px]   p-2"
          // onClick={() => handleEdit(data)}
          onClick={() => editItem(data)}
        >
          <RiEdit2Line />
        </Button>
        <ConfirmDelete
          className="h-[30px] w-[30px]   p-2"
          onConfirm={deleteItem}
          onCancel={() => null}
          style={{
            variant: "outline",

            radius: "md",
            color: "red",
            size: "xs",
          }}
        />

        <Button
          variant="outline"
          radius="md"
          color="black"
          size="xs"
          className="h-[30px] w-[30px]   p-2"
          onClick={() => showItem(data)}
        >
          <RiEyeLine />
        </Button>
      </Group>
    </div>
  );
}
