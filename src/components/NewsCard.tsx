import { Card, Image, Text, Button, Group, Divider } from "@mantine/core";
import { NewsCardElementType } from "../types/NewsCardTypes";
import DateCardComponent from "./DateCardComponent";
import { RiDeleteBin7Line, RiEdit2Line, RiEyeLine } from "@remixicon/react";
import ConfirmDelete from "./ConfirmDelete";

export default function NewsCard({
  title,
  description,
  cardImageLink,
  views,
  deleteItem,
}: NewsCardElementType & { deleteItem: () => void }) {
  return (
    <Card shadow="md" padding="lg" radius="md" withBorder className="max-w-xs ">
      <Card.Section>
        <div className="max-h-[100px] overflow-hidden">
          <Image
            src={cardImageLink}
            height={160}
            alt="Norway"
            fit="contain"
            fallbackSrc="https://placehold.co/600x400?text=Placeholder"
          />
        </div>
      </Card.Section>

      {/* content  */}
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>

        {/* description  */}
        <Text size="sm" c="dimmed">
          {description}
        </Text>

        <DateCardComponent date="2023-02-02" />
        {/* description  */}
        <Text size="sm" c="dimmed">
          {views}
        </Text>
      </Group>

      <Divider />

      {/* buttons  */}
      <Group justify="center">
        <Button variant="outline" mt="md" radius="md" color="green" size="xs">
          <RiEdit2Line />
        </Button>

        <ConfirmDelete onConfirm={deleteItem} onCancel={() => null} />

        <Button variant="outline" mt="md" radius="md" color="black" size="xs">
          <RiEyeLine />
        </Button>
      </Group>
    </Card>
  );
}
