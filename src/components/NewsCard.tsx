import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";
import { NewsCardElementType } from "../types/NewsCardTypes";

export default function NewsCard({
  title,
  description,
  cardImageLink,
}: NewsCardElementType) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
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

      {/* title  */}
      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{title}</Text>
      </Group>

      {/* description  */}
      <Text size="sm" c="dimmed">
        {description}
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  );
}
