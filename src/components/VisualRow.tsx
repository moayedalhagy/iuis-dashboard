import { Button, Group, Table } from "@mantine/core";

import { RiEdit2Line, RiEyeLine } from "@remixicon/react";
import { VisualsItemApiType } from "../types/VisualsItemTypes";
import ConfirmDelete from "./ConfirmDelete";

type ParamType = {
  _class?: string;
  data: VisualsItemApiType;
  deleteItem: () => void;
  editItem: (data: any) => void;
  showItem: (data: any) => void;
};

const rowRoundedRight = "rounded-tr-md  rounded-br-md  ";
const rowRoundedLeft = "rounded-tl-md  rounded-bl-md  ";
export default function VisualRow({
  data,
  _class,
  deleteItem,
  editItem,
  showItem,
}: ParamType) {
  return (
    <Table.Tr
      key={data.newsVedioId}
      className={`${_class} text-center   select-none`}
      // item-data={JSON.stringify({ id: data.id, order: data.order })}
    >
      <Table.Td className={`${rowRoundedRight}   max-w-[200px]`}>
        <div className="rounded-lg  ">
          {data.link.trim() != "" && data.link.trim() != "string" ? (
            <iframe
              src={data.link}
              className="w-full rounded-lg "
              allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture full"
              loading="lazy"
            ></iframe>
          ) : (
            <div className="  flex justify-center items-center  max-h-[180px]">
              <img src="images/no-video.png" className="max-w-[100px]" />
            </div>
          )}
        </div>
      </Table.Td>
      <Table.Td className="text-balance ">{data.title}</Table.Td>
      <Table.Td className=" text-balance  ">{data.newsVedioDate}</Table.Td>

      {/* controll button  */}
      <Table.Td className={`${rowRoundedLeft} `}>
        <Group className="flex justify-center flex-nowrap">
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
      </Table.Td>
    </Table.Tr>
  );
}
