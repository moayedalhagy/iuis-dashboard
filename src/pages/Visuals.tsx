import ControlLayout from "../components/ControlLayout/ControlLayout";

import ControlLayoutButton from "../components/ControlLayout/ControlLayoutButton";

import FilterComponent from "../components/FilterComponent";
import SearchComponent from "../components/SearchComponent";

import { useDisclosure } from "@mantine/hooks";
import AddVisualsModal from "../sections/AddVisualsModal";
import { useVisualsService } from "../services/VisualsService";
import { VisualsItemApiType } from "../types/VisualsItemTypes";
import { Table } from "@mantine/core";
import VisualRow from "../components/VisualRow";

export default function Visuals() {
  const tableHeaders = ["الفيديو", "العنوان", "التاريخ", "اجراء"];

  const service = useVisualsService();
  const { typedData, isLoading } = service.Get();

  console.log(typedData);

  //   if (newsService.isLoading) return <p>loading...</p>;
  const filterOne = <FilterComponent label="عـام" data={["2023", "2024"]} />;

  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="p-5">
      <AddVisualsModal
        modal={{
          opened: opened,
          onOpen: open,
          onClose: close,
        }}
        selectedItem={undefined}
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
                addDetails={(_event, x) => {
                  // setDetailsData(x);
                  // detailModalOpen();
                }}
              />
            ))}
          </Table.Tbody>
        </Table>
      </section>
    </div>
  );
}
