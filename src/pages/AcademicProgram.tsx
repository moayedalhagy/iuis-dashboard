import ControlLayout from "../components/ControlLayout/ControlLayout";

// import { useNewsService } from "../services/NewsService";
import ControlLayoutButton from "../components/ControlLayout/ControlLayoutButton";

import SearchComponent from "../components/SearchComponent";

import { useDisclosure } from "@mantine/hooks";
import AddVisualsModal from "../sections/AddVisualsModal";
import VisualsItem from "../components/VisualsItem";
import { AcademicProgramFakeData } from "../fake";
import AcademicProgramRow from "../components/AcademicProgramRow";
import { Table } from "@mantine/core";

export default function AcademicProgram() {
  //   const newsService = useNewsService();
  const fakeImage = "https://www.youtube.com/embed/PlKeif7wAzY";
  //   if (newsService.isLoading) return <p>loading...</p>;

  const elements = [
    { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
    { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
    { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
    { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
    { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
  ];

  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

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
  return (
    <div className="p-5">
      <AddVisualsModal
        modal={{
          opened: opened,
          onOpen: open,
          onClose: close,
        }}
      />

      {/* Control Elements  */}
      <ControlLayout
        button={<ControlLayoutButton label="إضافة فيديو" clickHandler={open} />}
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
          <Table.Tbody className="">
            {AcademicProgramFakeData.map((item: any) => (
              <AcademicProgramRow data={item} _class=" bg-tw-body  " />
            ))}
          </Table.Tbody>
        </Table>
      </div>
    </div>
  );
}

// <section classNameName="bg-white rounded my-2 px-2 pt-8 flex flex-col gap-y-2">
//         {[1, 2, 3, 4, 5].map(() => (
//           <div classNameName="odd:bg-[#f8f9fa] even:bg-white  p-3">
//             <VisualsItem
//               link={fakeImage}
//               title="د . أحمد النداف رئيس الجامعة الإسلامية التعريف بالجامعة "
//               date="2024-02-02"
//               id="1"
//             />
//           </div>
//         ))}
//       </section>

//   {/*   Data Headers  */}
//   <AcademicProgramItem _class="bg-gray-100 font-bold   ">
//   الترتيب
// </AcademicProgramItem>
// <AcademicProgramItem _class="bg-gray-100 font-bold  ">
//   التصنيف
// </AcademicProgramItem>
// <AcademicProgramItem _class="bg-gray-100 font-bold  ">
//   اسم البرنامج
// </AcademicProgramItem>
// <AcademicProgramItem _class="bg-gray-100 font-bold   ">
//   صورة البرنامج
// </AcademicProgramItem>
// <AcademicProgramItem _class="bg-gray-100 font-bold  ">
//   التفاصيل
// </AcademicProgramItem>
// <AcademicProgramItem _class="bg-gray-100 font-bold  ">
//   الأحداث
// </AcademicProgramItem>
// <AcademicProgramItem _class="bg-gray-100 font-bold">
//   الحالة
// </AcademicProgramItem>

// {AcademicProgramFakeData.map((item: any, idx: number) => (
//   <>
//     <AcademicProgramRow data={item} />
//   </>
// ))}
