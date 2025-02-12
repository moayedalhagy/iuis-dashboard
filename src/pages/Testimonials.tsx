import ControlLayout from "../components/ControlLayout/ControlLayout";

// import { useNewsService } from "../services/NewsService";
import ControlLayoutButton from "../components/ControlLayout/ControlLayoutButton";

import FilterComponent from "../components/FilterComponent";
import SearchComponent from "../components/SearchComponent";

import { useDisclosure } from "@mantine/hooks";
import TestimonialItem from "../components/TestimonialItem";
import AddSayModal from "../sections/AddSayModal";
import { SayerType } from "../types/SayerType";
import { useState } from "react";
import Loading from "../components/Loading";
import { ApiEndpointsEnum } from "../enums/ApiEndpointsEnum";
import { QueryKeyEnum } from "../enums/QueryKeyEnum";
import { useApiService } from "../services/ApiService";

export default function Testimonials() {
  const apiService = useApiService<SayerType>({
    endpoint: ApiEndpointsEnum.SayersTestimonies,
    queryKey: [QueryKeyEnum.sayersTestimonies],
  });

  const [opened, { open, close }] = useDisclosure(false);
  //   if (newsService.isLoading) return <p>loading...</p>;
  const filterOne = <FilterComponent label="عـام" data={["2023", "2024"]} />;

  const { typedData, isLoading } = apiService.Get();

  console.log(typedData);

  const [selectedItem, setSelectedItem] = useState<SayerType | null>();
  const [viewOnly, setViewOnly] = useState(false);

  const handleEdit = (item: SayerType, viewOnly: boolean) => {
    setViewOnly(viewOnly);
    setSelectedItem(item);
    open();
  };
  //   const newsService = useNewsService();
  const fakeImage = "https://www.youtube.com/embed/PlKeif7wAzY";

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-5">
      <AddSayModal
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
        button={<ControlLayoutButton label="إضافة جديد" clickHandler={open} />}
        filters={[filterOne]}
        search={<SearchComponent />}
      />
      {/* page content  */}
      <section className="bg-white rounded my-2 px-2 pt-8 flex flex-col gap-y-2">
        {typedData?.map((item: SayerType) => (
          <div className="odd:bg-[#f8f9fa] even:bg-white  p-3">
            <TestimonialItem
              data={item}
              key={item.sayerId}
              showItem={(data) => handleEdit(data, true)}
              editItem={(data) => handleEdit(data, false)}
              deleteItem={() => apiService.delete(item.sayerId)}
            />
          </div>
        ))}
      </section>
    </div>
  );
}

// sayerImageLink={fakeImage}
// sayerName={item.sayerName}
// sayingText={item.sayingText}
// sayerId={item.sayerId}
