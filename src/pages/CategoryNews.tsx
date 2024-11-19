import { useDisclosure } from "@mantine/hooks";
import { Table, Group, Button } from "@mantine/core";
import { RiEdit2Line } from "@remixicon/react";


//components
import Loading from "../components/Loading";
import ControlLayout from "../components/ControlLayout/ControlLayout";
import ControlLayoutButton from "../components/ControlLayout/ControlLayoutButton";
import SearchComponent from "../components/SearchComponent";
import { useNewsCategoriesService } from "../services/NewsCategoriesService";
//types
import { NewsCategoryType } from "../types/CategoryType";
import ConfirmDelete from "../components/ConfirmDelete";
import AddNewsCategoryModal from "../sections/AddNewsCategoryModal";

export default function CategoryNews() {
  //hooks
  const newsCategoriesService = useNewsCategoriesService();
  const [opened, { open, close }] = useDisclosure(false);

  const { typedData, isLoading } = newsCategoriesService.Get();

  return isLoading ? (
    <Loading />
  ) : (
    <div className="p-5">
      <AddNewsCategoryModal
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
            {typedData?.map((element: NewsCategoryType) => (
              <Table.Tr key={element.newsCategoryId}>
                <Table.Td>{element.newsCategoryId}</Table.Td>
                <Table.Td>{element.newsCategoryName}</Table.Td>
                <Table.Td>
                  <Group justify="center">
                    <Button
                      variant="outline"
                      mt="md"
                      radius="md"
                      color="green"
                      className="h-[30px] w-[30px] p-2"
                    >
                      <RiEdit2Line />
                    </Button>

                    <ConfirmDelete
                      className="h-[30px] w-[30px]   p-2"
                      onConfirm={() =>
                        newsCategoriesService.delete(element.newsCategoryId)
                      }
                      onCancel={() => null}
                      style={{
                        variant: "outline",
                        mt: "md",
                        radius: "md",
                        color: "red",
                        size: "xs",

                      }}
                    />
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
