import ControlLayout from "../components/ControlLayout/ControlLayout";
import NewsCard from "../components/NewsCard";

import ControlLayoutButton from "../components/ControlLayout/ControlLayoutButton";

import FilterComponent from "../components/FilterComponent";
import SearchComponent from "../components/SearchComponent";

import AddNewsModal from "../sections/AddNewsModal";

import { useDisclosure } from "@mantine/hooks";
import Loading from "../components/Loading";
import { useApiService } from "../services/ApiService";
import { ApiEndpointsEnum } from "../enums/ApiEndpointsEnum";
import { QueryKeyEnum } from "../enums/QueryKeyEnum";
import { NewsCardApiType } from "../types/NewsCardTypes";
import { useState } from "react";

export default function News() {
  //service
  const apiService = useApiService<NewsCardApiType>({
    endpoint: ApiEndpointsEnum.CardsNews,
    queryKey: [QueryKeyEnum.news],
  });
  const { typedData, isLoading } = apiService.Get();

  const [opened, { open, close }] = useDisclosure(false);

  const [selectedItem, setSelectedItem] = useState<NewsCardApiType | null>();
  const [viewOnly, setViewOnly] = useState(false);

  const filterOne = <FilterComponent label="عـام" data={["2023", "2024"]} />;
  const filterTwo = (
    <FilterComponent label="التصنيف" data={["عام", "قرارات"]} />
  );

  if (isLoading) {
    return <Loading />;
  }

  if (!typedData) {
    console.error("no data");
    return;
  }

  return (
    <div className="p-5">
      <AddNewsModal
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
        button={<ControlLayoutButton label="إضافة خبر" clickHandler={open} />}
        filters={[filterOne, filterTwo]}
        search={<SearchComponent />}
      />
      {/* page content  */}
      <section className="my-2 pt-3 flex flex-row flex-wrap justify-around gap-5 ">
        {typedData.map((item) => (
          <div className=" " key={item.newsId}>
            <NewsCard
              title={item.title}
              description={item.description}
              cardImageLink={item.cardImageLink}
              newsId={item.newsId}
              views={item.views}
              deleteItem={() => apiService.delete(item.newsId)}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
