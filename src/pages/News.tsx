import ControlLayout from "../components/ControlLayout/ControlLayout";
import NewsCard from "../components/NewsCard";
import { useNewsService } from "../services/NewsService";
import ControlLayoutButton from "../components/ControlLayout/ControlLayoutButton";

import FilterComponent from "../components/FilterComponent";
import SearchComponent from "../components/SearchComponent";

const oneFake = {
  newsId: 1,
  newsCategoryId: 1,
  cardImageLink: "https://picsum.photos/200/300",
  title: "الخبر الأول",
  description: "وصف الخبر الاول",
  newsDate: "2024-01-01",
  newsTime: "12:00:00",
  newsBodyText: "هذا الوصف مخصص للخبر الاول",
  newsLink: "string",
  views: 10,
  newsCategoryName: "الصنف الاول",
};
const fake = [
  {
    newsId: 1,
    newsCategoryId: 1,
    cardImageLink: "https://picsum.photos/200/300",
    title: "الخبر الأول",
    description: "وصف الخبر الاول",
    newsDate: "2024-01-01",
    newsTime: "12:00:00",
    newsBodyText: "هذا الوصف مخصص للخبر الاول",
    newsLink: "string",
    views: 10,
    newsCategoryName: "الصنف الاول",
  },
  {
    newsId: 2,
    newsCategoryId: 1,
    cardImageLink: "https://picsum.photos/200/300",
    title: "الخبر hgehkd",
    description: "وصف الخبر الاول",
    newsDate: "2024-01-01",
    newsTime: "12:00:00",
    newsBodyText: "هذا الوصف مخصص للخبر الاول",
    newsLink: "string",
    views: 15,
    newsCategoryName: "الصنف الاول",
  },
  {
    newsId: 3,
    newsCategoryId: 1,
    cardImageLink: "https://picsum.photos/200/300",
    title: "الخبر hgehkd",
    description: "وصف الخبر الاول",
    newsDate: "2024-01-01",
    newsTime: "12:00:00",
    newsBodyText: "هذا الوصف مخصص للخبر الاول",
    newsLink: "string",
    views: 15,
    newsCategoryName: "الصنف الاول",
  },
  {
    newsId: 4,
    newsCategoryId: 1,
    cardImageLink: "https://picsum.photos/200/300",
    title: "الخبر hgehkd",
    description: "وصف الخبر الاول",
    newsDate: "2024-01-01",
    newsTime: "12:00:00",
    newsBodyText: "هذا الوصف مخصص للخبر الاول",
    newsLink: "string",
    views: 15,
    newsCategoryName: "الصنف الاول",
  },
  {
    newsId: 5,
    newsCategoryId: 1,
    cardImageLink: "https://picsum.photos/200/300",
    title: "الخبر hgehkd",
    description: "وصف الخبر الاول",
    newsDate: "2024-01-01",
    newsTime: "12:00:00",
    newsBodyText: "هذا الوصف مخصص للخبر الاول",
    newsLink: "string",
    views: 15,
    newsCategoryName: "الصنف الاول",
  },
];
export default function News() {
  //   const newsService = useNewsService();

  //   if (newsService.isLoading) return <p>loading...</p>;
  const filterOne = <FilterComponent label="عـام" data={["2023", "2024"]} />;
  const filterTwo = (
    <FilterComponent label="التصنيف" data={["عام", "قرارات"]} />
  );
  return (
    <div className="p-5">
      {/* Control Elements  */}
      <ControlLayout
        button={
          <ControlLayoutButton
            label="إضافة خبر"
            clickHandler={() => {
              alert("button clicked !");
            }}
          />
        }
        filters={[filterOne, filterTwo]}
        search={<SearchComponent />}
      />
      {/* page content  */}
      <section className="hidden grid-rows-1   grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-red-400">
        {fake.map((item) => (
          <div className="bg-red-400 p-4 rounded-lg" key={item.newsId}>
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
