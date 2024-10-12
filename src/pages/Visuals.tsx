import ControlLayout from "../components/ControlLayout/ControlLayout";

// import { useNewsService } from "../services/NewsService";
import ControlLayoutButton from "../components/ControlLayout/ControlLayoutButton";

import FilterComponent from "../components/FilterComponent";
import SearchComponent from "../components/SearchComponent";

import { useDisclosure } from "@mantine/hooks";
import AddVisualsModal from "../sections/AddVisualsModal";
import VisualsItem from "../components/VisualsItem";

export default function Visuals() {
  //   const newsService = useNewsService();
  const fakeImage = "https://www.youtube.com/embed/PlKeif7wAzY";
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
      />

      {/* Control Elements  */}
      <ControlLayout
        button={<ControlLayoutButton label="إضافة فيديو" clickHandler={open} />}
        filters={[filterOne]}
        search={<SearchComponent />}
      />
      {/* page content  */}
      <section className="bg-white rounded my-2 px-2 pt-8 flex flex-col gap-y-2">
        {[1, 2, 3, 4, 5].map(() => (
          <div className="odd:bg-[#f8f9fa] even:bg-white  p-3">
            <VisualsItem
              link={fakeImage}
              title="د . أحمد النداف رئيس الجامعة الإسلامية التعريف بالجامعة "
              date="2024-02-02"
              id="1"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
