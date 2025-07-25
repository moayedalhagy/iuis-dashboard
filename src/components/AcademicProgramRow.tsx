import { Button, Image, Group, Switch, Table } from "@mantine/core";

import { RiDeleteBin7Line, RiEdit2Line, RiEyeLine } from "@remixicon/react";

type RowData = {
  id: number;
  order: number;
  category: string;
  name: string;
  image: string;
  status: boolean;
};

type ParamType = {
  _class?: string;
  data: RowData;
  addDetails: (event: any, data: object) => void;
};

const rowRoundedRight = "rounded-tr-md  rounded-br-md  ";
const rowRoundedLeft = "rounded-tl-md  rounded-bl-md  ";
export default function AcademicProgramRow({
  _class,
  data,
  addDetails,
}: ParamType) {
  return (
    <Table.Tr
      key={data.name}
      className={`${_class} text-center   select-none`}
      item-data={JSON.stringify({ id: data.id, order: data.order })}
    >
      <Table.Td className={`${rowRoundedRight} `}>
        <div className="flex   gap-x-3">
          <Image
            src="./images/move.svg"
            className="max-h-[22px]   cursor-grab  drag-handle"
          />
          <span>{data.order}</span>
        </div>
      </Table.Td>
      <Table.Td className="text-balance ">{data.category}</Table.Td>
      <Table.Td className="line-clamp-2 text-balance  ">{data.name}</Table.Td>
      <Table.Td>
        {" "}
        <Image
          src={data.image}
          className="max-h-[40px]  w-[100px] max-w-[100px] rounded-md"
        />
      </Table.Td>
      <Table.Td>
        <div className="flex gap-x-2">
          <Button
            size="xs"
            color="#03A679"
            onClick={(event) => addDetails(event, data)}
          >
            إضافة تعريف
          </Button>
          <Button size="xs" color="#147CA6">
            إضافة خطة
          </Button>
        </div>
      </Table.Td>

      <Table.Td>
        <Group className="flex justify-center flex-nowrap">
          <Button
            variant="outline"
            radius="md"
            color="green"
            className="h-[30px] w-[30px]   p-2"
          >
            <RiEdit2Line />
          </Button>
          <Button
            variant="outline"
            radius="md"
            color="red"
            className="h-[30px] w-[30px]   p-2"
          >
            <RiDeleteBin7Line />
          </Button>

          <Button
            variant="outline"
            radius="md"
            color="black"
            size="xs"
            className="h-[30px] w-[30px]   p-2"
          >
            <RiEyeLine />
          </Button>
        </Group>
      </Table.Td>

      <Table.Td className={`${rowRoundedLeft} `}>
        {" "}
        <Switch defaultChecked color="#03a679" readOnly />
      </Table.Td>
    </Table.Tr>
  );
}
