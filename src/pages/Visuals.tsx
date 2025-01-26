import ControlLayout from "../components/ControlLayout/ControlLayout";

import ControlLayoutButton from "../components/ControlLayout/ControlLayoutButton";

import FilterComponent from "../components/FilterComponent";
import SearchComponent from "../components/SearchComponent";

import { useDisclosure } from "@mantine/hooks";
import AddVisualsModal from "../sections/AddVisualsModal";

import { VisualsItemApiType } from "../types/VisualsItemTypes";
import { Table } from "@mantine/core";
import VisualRow from "../components/VisualRow";
import { ApiEndpointsEnum } from "../enums/ApiEndpointsEnum";
import { QueryKeyEnum } from "../enums/QueryKeyEnum";

import { useApiService } from "../services/ApiService";

import Loading from "../components/Loading";
import { useState } from "react";

export default function Visuals() {
  const tableHeaders = ["الفيديو", "العنوان", "التاريخ", "اجراء"];

  const apiService = useApiService<VisualsItemApiType>({
    endpoint: ApiEndpointsEnum.VediosNews,
    queryKey: [QueryKeyEnum.visuals],
  });
  const [opened, { open, close }] = useDisclosure(false);

  const { typedData, isLoading } = apiService.Get();

  const filterOne = <FilterComponent label="عـام" data={["2023", "2024"]} />;

  const [selectedItem, setSelectedItem] = useState<VisualsItemApiType | null>();
  const [viewOnly, setViewOnly] = useState(false);

  const handleEdit = (item: VisualsItemApiType, viewOnly: boolean) => {
    setViewOnly(viewOnly);
    setSelectedItem(item);
    open();
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-5">
      <AddVisualsModal
        modal={{
          opened: opened,
          onOpen: open,
          onClose: () => {
            setSelectedItem(null); // Reset the selected item when the modal is closed
            close();
          },
        }}
        selectedItem={selectedItem}
        viewOnly={viewOnly}
      />

      {/* Control Elements  */}
      <ControlLayout
        button={<ControlLayoutButton label="إضافة فيديو" clickHandler={open} />}
        filters={[filterOne]}
        search={<SearchComponent />}
      />
      {/* page content  */}
      <section className="bg-white rounded my-2 px-2 pt-8 flex flex-col gap-y-2">
        <Table
          withRowBorders={false}
          verticalSpacing={"md"}
          className="border-separate"
          style={{ borderSpacing: "0 10px" }}
        >
          <Table.Thead>
            <Table.Tr>
              {tableHeaders.map((item: string, idx: number) => (
                <Table.Th key={idx} className="text-center ">
                  {item}
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {typedData?.map((item: VisualsItemApiType) => (
              <VisualRow
                data={item}
                _class="bg-tw-body"
                key={item.newsVedioId}
                showItem={(data) => handleEdit(data, true)}
                editItem={(data) => handleEdit(data, false)}
                deleteItem={() => apiService.delete(item.newsVedioId)}
              />
            ))}
          </Table.Tbody>
        </Table>
      </section>
    </div>
  );
}
