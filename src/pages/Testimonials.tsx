import ControlLayout from "../components/ControlLayout/ControlLayout";

// import { useNewsService } from "../services/NewsService";
import ControlLayoutButton from "../components/ControlLayout/ControlLayoutButton";

import FilterComponent from "../components/FilterComponent";
import SearchComponent from "../components/SearchComponent";

import { useDisclosure } from "@mantine/hooks";
import TestimonialItem from "../components/TestimonialItem";
import AddSayModal from "../sections/AddSayModal";

const text = `هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.... هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى.... `;
export default function Testimonials() {
  //   const newsService = useNewsService();
  const fakeImage = "https://www.youtube.com/embed/PlKeif7wAzY";
  //   if (newsService.isLoading) return <p>loading...</p>;
  const filterOne = <FilterComponent label="عـام" data={["2023", "2024"]} />;

  const [opened, { open, close }] = useDisclosure(false);
  return (
    <div className="p-5">
      <AddSayModal
        modal={{
          opened: opened,
          onOpen: open,
          onClose: close,
        }}
      />

      {/* Control Elements  */}
      <ControlLayout
        button={<ControlLayoutButton label="إضافة جديد" clickHandler={open} />}
        filters={[filterOne]}
        search={<SearchComponent />}
      />
      {/* page content  */}
      <section className="bg-white rounded my-2 px-2 pt-8 flex flex-col gap-y-2">
        {[1, 2, 3, 4, 5].map(() => (
          <div className="odd:bg-[#f8f9fa] even:bg-white  p-3">
            <TestimonialItem
              link={fakeImage}
              title="احمد السيد"
              text={text}
              id="1"
            />
          </div>
        ))}
      </section>
    </div>
  );
}
