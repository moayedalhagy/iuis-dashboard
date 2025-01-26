import ControlLayout from "../../components/ControlLayout/ControlLayout";

// import { useNewsService } from "../services/NewsService";
import ControlLayoutButton from "../../components/ControlLayout/ControlLayoutButton";

import SearchComponent from "../../components/SearchComponent";

import { useDisclosure } from "@mantine/hooks";

import { FaqsFakeData } from "../../fake";
import { Table } from "@mantine/core";

import { useState } from "react";

import FaqsRow from "../../components/FaqsRow";
import AddFaqModal from "../../sections/AddFaqModal";
import { useApiService } from "../../services/ApiService";
import { ApiEndpointsEnum } from "../../enums/ApiEndpointsEnum";
import { QueryKeyEnum } from "../../enums/QueryKeyEnum";

import Loading from "../../components/Loading";
import { FaqsType } from "../../types/FaqsType";

export default function Faqs() {
  const tableHeaders = ["#", "نص السؤال", "جواب السؤال", "الأحداث"];

  const apiService = useApiService<FaqsType>({
    endpoint: ApiEndpointsEnum.Faqs,
    queryKey: [QueryKeyEnum.faqs],
  });

  const [opened, { open, close }] = useDisclosure(false);

  const { typedData, isLoading } = apiService.Get();

  const [selectedItem, setSelectedItem] = useState<FaqsType | null>();
  const [viewOnly, setViewOnly] = useState(false);

  const handleEdit = (item: FaqsType, viewOnly: boolean) => {
    setViewOnly(viewOnly);
    setSelectedItem(item);
    open();
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-5">
      <AddFaqModal
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
        button={<ControlLayoutButton label="إضافة سؤال " clickHandler={open} />}
        search={<SearchComponent />}
      />

      {/* ==================================================================== */}

      {/* page content  */}
      <div className=" bg-white rounded mt-10 px-2">
        <Table
          withRowBorders={false}
          verticalSpacing={"md"}
          className="border-separate"
          style={{ borderSpacing: "0 10px" }}
        >
          <Table.Thead>
            <Table.Tr>
              {tableHeaders.map((item: string) => (
                <Table.Th key={Math.random()} className="text-center ">
                  {item}
                </Table.Th>
              ))}
            </Table.Tr>
          </Table.Thead>

          {typedData?.map((item) => (
            <FaqsRow
              data={item}
              _class="bg-tw-body"
              key={item.questionId}
              showItem={(data) => handleEdit(data, true)}
              editItem={(data) => handleEdit(data, false)}
              deleteItem={() => apiService.delete(item.questionId)}
            />
          ))}
        </Table>
      </div>
    </div>
  );
}
