export type NewsCardElementType = {
  newsId: number;
  title: string;
  description: string;
  cardImageLink: string;
  views: number;
};

export type NewsCardApiType = {
  newsId: number;
  title: string;
  description: string;
  cardImageLink: string;
  newsBodyText: string;
  newsCategoryName: string;
  newsDate: string;
  newsLink: string;
  newsTime: string;
  newsCategoryId: number;
  views: number;
  imageNews?: Array<{
    imageVedioId: number;
    linkType: string;
    link: string;
  }>;
};

export type NewsXType = {
  newsCategoryId: number;
  newsId: number;
  cardImageLink: string;
  title: string;
  description: string;
  newsBodyText: string;
  newsImages?: Array<any>;
  newsKeyword?: string[];
  videoLinks?: string[];
};

// "newsId": 1,
//       "newsCategoryId": 1,
//       "cardImageLink": "https://picsum.photos/200/300",
//       "title": "الخبر الأول",
//       "description": "وصف الخبر الاول",
//       "newsDate": "2024-01-01",
//       "newsTime": "12:00:00",
//       "newsBodyText": "هذا الوصف مخصص للخبر الاول",
//       "newsLink": "string",
//       "views": 10,
//       "newsCategoryName": "الصنف الاول"
//       "imageNews": {
//     "imageVedioId": 1,
//     "linkType": 1,
//     "link": "https://www.shutterstock.com/shutterstock/photos/1983778754/display_1500/stock-vector-abstract-seamless-pattern-with-fragments-of-newspaper-and-magazine-pages-monochrome-vector-1983778754.jpg"
// }
