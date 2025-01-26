import React, { useEffect } from "react";
import ControlLayout from "../../components/ControlLayout/ControlLayout";

// import { useNewsService } from "../services/NewsService";

import SearchComponent from "../../components/SearchComponent";

import { Button, Switch, TextInput } from "@mantine/core";

import {
  RiEdit2Line,
  RiFacebookCircleLine,
  RiInstagramLine,
  RiSave2Line,
  RiTelegram2Line,
  RiTwitterXLine,
  RiWhatsappLine,
} from "@remixicon/react";
import { useApiService } from "../../services/ApiService";
import { ApiEndpointsEnum } from "../../enums/ApiEndpointsEnum";
import { QueryKeyEnum } from "../../enums/QueryKeyEnum";
import Loading from "../../components/Loading";

type SocialMediaItem = {
  name: string;
  label: string;
  icon: React.ReactNode;
};
const items: any = {
  whatsapp: {
    name: "whatsapp",
    label: "واتساب",
    icon: <RiWhatsappLine />,
    link: "#",
  },
  telegram: {
    name: "telegram",
    label: "تيليجرام",
    icon: <RiTelegram2Line />,
    link: "#",
  },
  facebook: {
    name: "facebook",
    label: "فيسبوك",
    icon: <RiFacebookCircleLine />,
    link: "#",
  },
  instgram: {
    name: "instgram",
    label: "انستجرام",
    icon: <RiInstagramLine />,
    link: "#",
  },
  x: {
    name: "x",
    label: "تويتر",
    icon: <RiTwitterXLine />,
    link: "#",
  },
};

export default function SocialMedia() {
  //
  const apiService = useApiService<any>({
    endpoint: ApiEndpointsEnum.SocialMedia,
    queryKey: [QueryKeyEnum.socialMedia],
  });

  const { typedData, isLoading } = apiService.Get();
  const updateItem = (item: any) => {
    apiService.update.mutate({ id: item.socialMediaId, item });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-5">
      {/* Control Elements  */}
      <ControlLayout button={<></>} search={<SearchComponent />} />

      {/* ==================================================================== */}

      {/* page content  */}
      <div className="bg-white rounded mt-10 px-2 py-2">
        <SocialMediaItem
          item={items.whatsapp}
          data={typedData}
          updateItem={(item: any) => updateItem(item)}
        />
        <SocialMediaItem
          item={items.telegram}
          data={typedData}
          updateItem={(item: any) => updateItem(item)}
        />
        <SocialMediaItem
          item={items.facebook}
          data={typedData}
          updateItem={(item: any) => updateItem(item)}
        />
      </div>
    </div>
  );
}

function SocialMediaItem({
  item,
  data,
  updateItem,
}: {
  item: any;
  data: any;
  updateItem: (item: any) => void;
}) {
  // {socialMediaId: 1, socialMediaType: 'fb', socialMediaLink: 'facebook.com'}
  const apiItem = data?.find((x: any) => x.socialMediaType === item.name);
  const [toggleEdit, setToggleEdit] = React.useState(true);
  const [link, setLink] = React.useState(apiItem?.socialMediaLink || "#");

  const saveItem = () => {
    if (!toggleEdit) {
      updateItem({ ...apiItem, socialMediaLink: link });
    }
  };
  return (
    <div className="mt-3 flex justify-center items-center gap-x-2">
      <div className="flex-1">
        <TextInput
          withAsterisk
          label={item.label}
          description=" "
          error=""
          value={link}
          className="flex-1"
          rightSection={item.icon}
          onChange={(event) => setLink(event.target.value)}
          disabled={toggleEdit}
        />
      </div>
      <Button
        variant="outline"
        radius="md"
        mt={"xl"}
        color="green"
        size="xs"
        className="self-center"
        onClick={() => setToggleEdit(!toggleEdit)}
      >
        <RiEdit2Line size={16} />
      </Button>
      <Button
        variant="outline"
        radius="md"
        mt={"xl"}
        color="blue"
        size="xs"
        className="self-center"
        onClick={saveItem}
      >
        <RiSave2Line size={16} />
      </Button>
    </div>
  );
}
