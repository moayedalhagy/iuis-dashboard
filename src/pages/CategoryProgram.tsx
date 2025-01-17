import { useDisclosure } from "@mantine/hooks";
import { Table, Group, Button } from "@mantine/core";
import { RiEdit2Line } from "@remixicon/react";

//components
import Loading from "../components/Loading";
import ControlLayout from "../components/ControlLayout/ControlLayout";
import ControlLayoutButton from "../components/ControlLayout/ControlLayoutButton";
import SearchComponent from "../components/SearchComponent";
import { useProgramCategoriesService } from "../services/ProgramCategoriesService";
//types
import { ProgramCategoryType } from "../types/CategoryType";
import ConfirmDelete from "../components/ConfirmDelete";
import { useState } from "react";
import AddProgramCategoryModal from "../sections/AddProgramCategoryModal";

export default function CategoryProgram() {
  //hooks
  const programCategoriesService = useProgramCategoriesService();
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedItem, setSelectedItem] =
    useState<ProgramCategoryType | null>();

  const handleEdit = (item: ProgramCategoryType) => {
    setSelectedItem(item);
    open();
  };

  const { typedData, isLoading } = programCategoriesService.Get();

  return isLoading ? (
    <Loading />
  ) : (
    <div className="p-5">
      <AddProgramCategoryModal
        modal={{
          opened: opened,
          onOpen: open,
          onClose: close,
        }}
        selectedItem={selectedItem}
      />

      {/* Control Elements  */}
      <ControlLayout
        button={
          <ControlLayoutButton
            label="إضافة تصنيف"
            clickHandler={() => {
              setSelectedItem(null);
              open();
            }}
          />
        }
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
            {typedData?.map((element: ProgramCategoryType) => (
              <Table.Tr key={element.academicCategoryId}>
                <Table.Td>{element.academicCategoryId}</Table.Td>
                <Table.Td>{element.academicCategoryName}</Table.Td>
                <Table.Td>
                  <Group justify="center">
                    <Button
                      variant="outline"
                      mt="md"
                      radius="md"
                      color="green"
                      className="h-[30px] w-[30px] p-2"
                      onClick={() => handleEdit(element)}
                    >
                      <RiEdit2Line />
                    </Button>

                    <ConfirmDelete
                      className="h-[30px] w-[30px]   p-2"
                      onConfirm={() =>
                        programCategoriesService.delete(
                          element.academicCategoryId
                        )
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
