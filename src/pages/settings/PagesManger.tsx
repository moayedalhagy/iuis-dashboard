import { Accordion } from "@mantine/core";
import ControlLayout from "../../components/ControlLayout/ControlLayout";

// import { useNewsService } from "../services/NewsService";

import SearchComponent from "../../components/SearchComponent";
import MainPageItem from "../../components/PagesMangerItems/MainPageItem";
import WhoUsItem from "../../components/PagesMangerItems/WhoUsItem";
import AcadeimcProgramItem from "../../components/PagesMangerItems/AcadeimcProgramItem";
import AboutUniItem from "../../components/PagesMangerItems/AboutUniItem";
import NewsItem from "../../components/PagesMangerItems/NewsItem";
import DecisionsItem from "../../components/PagesMangerItems/DecisionsItem";
import { useApiService } from "../../services/ApiService";
import Loading from "../../components/Loading";
import { ApiEndpointsEnum } from "../../enums/ApiEndpointsEnum";
import { QueryKeyEnum } from "../../enums/QueryKeyEnum";

export default function PagesManger() {
  const apiService = useApiService<any>({
    endpoint: ApiEndpointsEnum.PagesImagesLinks,
    queryKey: [QueryKeyEnum.pagesImagesLinks],
  });

  const { typedData, isLoading } = apiService.Get();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-5">
      {/* Control Elements  */}
      <ControlLayout button={<></>} search={<SearchComponent />} />
      {/* page content  */}
      <section className="  rounded my-2 px-2 py-8 flex flex-col gap-y-2">
        <Accordion defaultValue="Apples" variant="separated" radius={"md"}>
          <MainPageItem data={typedData} />
          <WhoUsItem data={typedData} />
          <AcadeimcProgramItem data={typedData} />
          <AboutUniItem data={typedData} />
          <NewsItem data={typedData} />
          <DecisionsItem data={typedData} />
        </Accordion>
      </section>
    </div>
  );
}
