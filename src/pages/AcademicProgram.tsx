import ControlLayout from "../components/ControlLayout/ControlLayout";

// import { useNewsService } from "../services/NewsService";
import ControlLayoutButton from "../components/ControlLayout/ControlLayoutButton";

import SearchComponent from "../components/SearchComponent";

import { useDisclosure } from "@mantine/hooks";

import { AcademicProgramFakeData } from "../fake";
import AcademicProgramRow from "../components/AcademicProgramRow";
import { Table } from "@mantine/core";
import { ReactSortable } from "react-sortablejs";
import { useState } from "react";
import AddAcademicProgramModal from "../sections/AddAcademicProgramModal";
import AddAcademicProgramDetailsModal from "../sections/AddAcademicProgramDetailsModal";

export default function AcademicProgram() {
  //   const newsService = useNewsService();
  // const fakeImage = "https://www.youtube.com/embed/PlKeif7wAzY";
  //   if (newsService.isLoading) return <p>loading...</p>;
  const [data, setData] = useState(AcademicProgramFakeData);
  const [detailsData, setDetailsData] = useState({});
  const tableHeaders = [
    "الترتيب",
    "التصنيف",
    "اسم البرنامج",
    "صورة البرنامج",
    "التفاصيل",
    "الأحداث",
    "الحالة",
  ];
  const [opened, { open, close }] = useDisclosure(false);
  const [
    detailModalOpened,
    { open: detailModalOpen, close: detailModalClose },
  ] = useDisclosure(false);
  return (
    <div className="p-5">
      <AddAcademicProgramModal
        modal={{
          opened: opened,
          onOpen: open,
          onClose: close,
        }}
      />

      <AddAcademicProgramDetailsModal
        modal={{
          opened: detailModalOpened,
          onOpen: detailModalOpen,
          onClose: detailModalClose,
        }}
        detailsData={detailsData}
      />

      {/* Control Elements  */}
      <ControlLayout
        button={
          <ControlLayoutButton label="إضافة برنامج " clickHandler={open} />
        }
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
              <AcademicProgramRow
                data={item}
                _class="bg-tw-body"
                key={item.order}
                addDetails={(event, x) => {
                  setDetailsData(x);
                  detailModalOpen();
                }}
              />
            ))}
          </ReactSortable>
        </Table>
      </div>
    </div>
  );
}
