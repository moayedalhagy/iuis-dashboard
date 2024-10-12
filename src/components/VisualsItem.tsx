import { Button, Group } from "@mantine/core";
import { RiDeleteBin7Line, RiEdit2Line, RiEyeLine } from "@remixicon/react";
import { VisualsItemElementType } from "../types/VisualsItemTypes";

export default function VisualsItem({
  id,
  link,
  date,
  title,
}: VisualsItemElementType) {
  return (
    <div className="item flex justify-between   items-center">
      {/* //chekc type  */}
      <div className="rounded-lg  ">
        <iframe
          src={link}
          className="w-full rounded-lg "
          allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture full"
          loading="lazy"
        ></iframe>
      </div>

      <p>{title}</p>

      <span>{date}</span>
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
