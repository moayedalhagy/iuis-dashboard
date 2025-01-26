import { Button, Group, Table } from "@mantine/core";

import { RiEdit2Line, RiEyeLine } from "@remixicon/react";
import { FaqsType } from "../types/FaqsType";
import ConfirmDelete from "./ConfirmDelete";
import { removeHtmlTags } from "../services/Helper";

type ParamType = {
  _class?: string;
  data: FaqsType;
  deleteItem: () => void;
  editItem: (data: any) => void;
  showItem: (data: any) => void;
};

export default function FaqsRow({
  _class,
  data,
  deleteItem,
  editItem,
  showItem,
}: ParamType) {
  return (
    <Table.Tr
      key={data.questionId}
      className={`${_class} text-center   select-none`}
      item-data={JSON.stringify({
        id: data.questionId,
        order: /*data.order*/ 1,
      })}
    >
      <Table.Td>
        <div className="flex  gap-x-3">
          {/* <span>{data.order}</span> */}
          <span>{data.questionId}</span>
        </div>
      </Table.Td>
      <Table.Td className="text-balance ">
        {`${data.questionText.substring(0, 50)}${
          data.questionText.length > 50 ? "..." : ""
        }`}
      </Table.Td>
      <Table.Td className="line-clamp-2 text-balance  ">
        {`${removeHtmlTags(data.answer).substring(0, 50)}${
          data.answer.length > 50 ? "..." : ""
        }`}
      </Table.Td>

      <Table.Td>
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
