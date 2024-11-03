import ControlLayout from "../../components/ControlLayout/ControlLayout";

// import { useNewsService } from "../services/NewsService";
import ControlLayoutButton from "../../components/ControlLayout/ControlLayoutButton";

import SearchComponent from "../../components/SearchComponent";

import { useDisclosure } from "@mantine/hooks";

import { FaqsFakeData } from "../../fake";
import { Table } from "@mantine/core";
import { ReactSortable, Sortable } from "react-sortablejs";
import { useState } from "react";

import FaqsRow from "../../components/FaqsRow";
import AddFaqModal from "../../sections/AddFaqModal";

export default function Faqs() {
  //   const newsService = useNewsService();
  //   if (newsService.isLoading) return <p>loading...</p>;
  const [data, setData] = useState(FaqsFakeData);

  const tableHeaders = [
    "الترتيب",
    "نص السؤال",
    "جواب السؤال",
    "الأحداث",
    "الحالة",
  ];
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="p-5">
      <AddFaqModal
        modal={{
          opened: opened,
          onOpen: open,
          onClose: close,
        }}
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

          <ReactSortable
            animation={400}
            list={data}
            setList={setData}
            tag={Table.Tbody}
            handle=".drag-handle"
            onStart={(evt: any) => {
              evt.item.style.opacity = "0";
            }}
            onEnd={(event: any) => {
              console.log(JSON.parse(event.item.getAttribute("item-data")));
              // event.oldIndex
              event.item.style.opacity = "100";
            }}
          >
            {data.map((item) => (
              <FaqsRow data={item} _class="bg-tw-body" key={item.order} />
            ))}
          </ReactSortable>
        </Table>
      </div>
    </div>
  );
}
