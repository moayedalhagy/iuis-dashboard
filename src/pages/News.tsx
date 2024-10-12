import ControlLayout from "../components/ControlLayout/ControlLayout";
import NewsCard from "../components/NewsCard";
// import { useNewsService } from "../services/NewsService";
import ControlLayoutButton from "../components/ControlLayout/ControlLayoutButton";

import FilterComponent from "../components/FilterComponent";
import SearchComponent from "../components/SearchComponent";
import { fakeCardNews } from "../fake";
import AddNewsModal from "../sections/AddNewsModal";

import { useDisclosure } from "@mantine/hooks";

export default function News() {
  //   const newsService = useNewsService();

  //   if (newsService.isLoading) return <p>loading...</p>;
  const filterOne = <FilterComponent label="عـام" data={["2023", "2024"]} />;
  const filterTwo = (
    <FilterComponent label="التصنيف" data={["عام", "قرارات"]} />
  );

  const [opened, { open, close }] = useDisclosure(false);
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
        {fakeCardNews.slice(0, 20).map((item) => (
          <div className=" " key={item.newsId}>
            <NewsCard
              title={item.title}
              description={item.description}
              cardImageLink={item.cardImageLink}
              newsId={item.newsId}
            />
          </div>
        ))}
      </section>
    </div>
  );
}
