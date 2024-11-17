import ControlLayout from "../components/ControlLayout/ControlLayout";
import NewsCard from "../components/NewsCard";
import { useNewsService } from "../services/NewsService";
import ControlLayoutButton from "../components/ControlLayout/ControlLayoutButton";

import FilterComponent from "../components/FilterComponent";
import SearchComponent from "../components/SearchComponent";
import { fakeCardNews } from "../fake";
import AddNewsModal from "../sections/AddNewsModal";

import { useDisclosure } from "@mantine/hooks";
import Loading from "../components/Loading";

export default function News() {
  const newsService = useNewsService().get();
  const [opened, { open, close }] = useDisclosure(false);

  if (newsService.isLoading) {
    return <Loading />;
  }
  const filterOne = <FilterComponent label="عـام" data={["2023", "2024"]} />;
  const filterTwo = (
    <FilterComponent label="التصنيف" data={["عام", "قرارات"]} />
  );

  if (!newsService.typedData) {
    return;
  }

  return (
    <div className="p-5">
      <AddNewsModal
        modal={{
          opened: opened,
          onOpen: open,
          onClose: close,
        }}
      />
      {/* Control Elements  */}
      <ControlLayout
        button={<ControlLayoutButton label="إضافة خبر" clickHandler={open} />}
        filters={[filterOne, filterTwo]}
        search={<SearchComponent />}
      />
      {/* page content  */}
      <section className="my-2 pt-3 flex flex-row flex-wrap justify-around gap-5 ">
        {newsService.typedData.map((item) => (
          <div className=" " key={item.newsId}>
            <NewsCard
              title={item.title}
              description={item.description}
              cardImageLink={item.cardImageLink}
              newsId={item.newsId}
              views={item.views}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
