import { Input } from "@mantine/core";
import { RiSearchLine } from "@remixicon/react";

export default function SearchComponent() {
  return <Input placeholder="بحث" leftSection={<RiSearchLine size={20} />} />;
}
