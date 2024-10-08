import NewsCard from "../components/NewsCard";
import { useNewsService } from "../services/NewsService";

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

  return (
    <div className="p-5 bg-black  ">
      <h1 className="text-center text-2xl my-1">News</h1>
      {/* <p>data len {newsService.data[0].cardImageLink}</p> */}
      <section className="grid grid-rows-1   grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-red-400">
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
