import ControlLayout from "../components/ControlLayout/ControlLayout";

// import { useNewsService } from "../services/NewsService";
import ControlLayoutButton from "../components/ControlLayout/ControlLayoutButton";

import SearchComponent from "../components/SearchComponent";

import { useDisclosure } from "@mantine/hooks";

import { Table, Group, Button } from "@mantine/core";
import { RiDeleteBin7Line, RiEdit2Line } from "@remixicon/react";
import AddCategoryModal from "../sections/AddCategoryModal";

export default function CategoryDecisions() {
  //   const newsService = useNewsService();

  //   if (newsService.isLoading) return <p>loading...</p>;

  const elements = [
    { id: 1, name: "برامج الدبلوم" },
    { id: 2, name: "برامج البكالوريوس" },
    { id: 3, name: "برامج الماجستير" },
    { id: 4, name: "برامج أخرى" },
  ];

  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="p-5">
      <AddCategoryModal
        modal={{
          opened: opened,
          onOpen: open,
          onClose: close,
        }}
      />

      {/* Control Elements  */}
      <ControlLayout
        button={<ControlLayoutButton label="إضافة تصنيف" clickHandler={open} />}
        search={<SearchComponent />}
      />
      {/* page content  */}
      <section className="bg-white rounded my-2 px-2 pt-8 flex flex-col gap-y-2">
        <Table striped highlightOnHover className="text-center">
          <Table.Thead>
            <Table.Tr>
              <Table.Th className="text-center">#</Table.Th>
              <Table.Th className="text-center">اسم التصنيف</Table.Th>
              <Table.Th className="text-center">اجراء</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {elements.map((element) => (
              <Table.Tr key={element.name}>
                <Table.Td>{element.id}</Table.Td>
                <Table.Td>{element.name}</Table.Td>
                <Table.Td>
                  <Group justify="center">
                    <Button
                      variant="outline"
                      mt="md"
                      radius="md"
                      color="green"
                      className="h-[30px] w-[30px]   p-2"
                    >
                      <RiEdit2Line />
                    </Button>
                    <Button
                      variant="outline"
                      mt="md"
                      radius="md"
                      color="red"
                      className="h-[30px] w-[30px]   p-2"
                    >
                      <RiDeleteBin7Line />
                    </Button>
                  </Group>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </section>
    </div>
  );
}
