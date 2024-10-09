import { Input } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

export default function SearchComponent() {
  return <Input placeholder="بحث" leftSection={<IconSearch size={18} />} />;
}
