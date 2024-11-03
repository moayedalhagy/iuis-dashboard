import ControlLayout from "../../components/ControlLayout/ControlLayout";

// import { useNewsService } from "../services/NewsService";

import SearchComponent from "../../components/SearchComponent";

import { Button, Switch, TextInput } from "@mantine/core";

import { RiEdit2Line } from "@remixicon/react";
import { SoicalMediaFake } from "../../fake";

export default function SocialMedia() {
  //   const newsService = useNewsService();
  //   if (newsService.isLoading) return <p>loading...</p>;

  return (
    <div className="p-5">
      {/* Control Elements  */}
      <ControlLayout button={<></>} search={<SearchComponent />} />

      {/* ==================================================================== */}

      {/* page content  */}
      <div className="bg-white rounded mt-10 px-2 py-2">
        {SoicalMediaFake.map((item: any, idx: number) => (
          <div className="mt-3 flex gap-x-2" key={idx}>
            <div className="flex-1">
              <TextInput
                withAsterisk
                label={item.label}
                description=" "
                error=""
                value={item.link}
                className="flex-1"
              />
            </div>
            <Button
              variant="outline"
              mt="md"
              radius="md"
              color="green"
              size="xs"
              className="self-end"
            >
              <RiEdit2Line />
            </Button>

            <Switch
              defaultChecked
              color="#03a679"
              readOnly
              className="self-end"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
