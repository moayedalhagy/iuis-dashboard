import ControlLayout from "../components/ControlLayout/ControlLayout";

import ControlLayoutButton from "../components/ControlLayout/ControlLayoutButton";

import SearchComponent from "../components/SearchComponent";

import { useDisclosure } from "@mantine/hooks";

import { Table, Group, Button } from "@mantine/core";
import { RiEdit2Line } from "@remixicon/react";
// import { useDecisionsCategoriesService } from "../services/DecisionsCategoriesService";
import Loading from "../components/Loading";
import ConfirmDelete from "../components/ConfirmDelete";
import AddDecisionsCategoryModal from "../sections/AddDecisionsCategoryModal";
import { useState } from "react";
import { DecisionsCategoryType } from "../types/CategoryType";
import { useApiService } from "../services/ApiService";
import { QueryKeyEnum } from "../enums/QueryKeyEnum";
import { ApiEndpointsEnum } from "../enums/ApiEndpointsEnum";

export default function CategoryDecisions() {
  // const apiService = useDecisionsCategoriesService();
  //api service
  const apiService = useApiService<DecisionsCategoryType>({
    endpoint: ApiEndpointsEnum.DecisionsTypes,
    queryKey: [QueryKeyEnum.decisionsCategories],
  });

  const { typedData, isLoading } = apiService.Get();

  const [opened, { open, close }] = useDisclosure(false);

  const [selectedItem, setSelectedItem] =
    useState<DecisionsCategoryType | null>();

  const handleEdit = (item: DecisionsCategoryType) => {
    setSelectedItem(item);
    open();
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-5">
      <AddDecisionsCategoryModal
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
            {typedData?.map((element) => (
              <Table.Tr key={element.decisionTypeId}>
                <Table.Td>{element.decisionTypeId}</Table.Td>
                <Table.Td>{element.decisionTypeName}</Table.Td>
                <Table.Td>
                  <Group justify="center">
                    <Button
                      variant="outline"
                      mt="md"
                      radius="md"
                      color="green"
                      className="h-[30px] w-[30px]   p-2"
                      onClick={() => handleEdit(element)}
                    >
                      <RiEdit2Line />
                    </Button>
                    <ConfirmDelete
                      onConfirm={() =>
                        apiService.delete(element.decisionTypeId)
                      }
                      onCancel={() => null}
                      className="h-[30px] w-[30px]   p-2"
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
