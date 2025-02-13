import {
  RiCloseCircleFill,
  RiDeleteBinFill,
  RiGalleryLine,
  RiSave2Line,
} from "@remixicon/react";
import AccordionItem from "../AccordionItem";

import { Button, FileInput, Image, Loader } from "@mantine/core";
import { forwardRef, HTMLAttributes, useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PageItemType } from "../../types/PageItemType";
import { asset } from "../../services/Helper";

import { useIsMutating } from "@tanstack/react-query";
import { useApiService } from "../../services/ApiService";
import { ApiEndpointsEnum } from "../../enums/ApiEndpointsEnum";
import { QueryKeyEnum } from "../../enums/QueryKeyEnum";
import ButtonIconTip from "../ButtonIconTip";

export default function AboutUniItem({ data }: { data: any }) {
  const [mainImage, setMainImage] = useState<File | null>(null);
  const [mainImagePreview, setMainImagePreview] = useState<string | null>(null);
  const fileInput = useRef<any>(null);
  const apiService = useApiService<any>({
    endpoint: ApiEndpointsEnum.PagesImagesLinks,
    queryKey: [QueryKeyEnum.pagesImagesLinks],
  });

  const itemTitle = "صفحة عن الجامعة";

  const item: PageItemType = data.filter(
    (item: any) => item.pageName == "AboutUni"
  )[0];

  if (!item) {
    return <p>no item exists</p>;
  }

  useEffect(() => {
    setMainImagePreview(asset(typeof item.link === "string" ? item.link : ""));
  }, []);

  const pendingRequest = useIsMutating();

  const { handleSubmit, setValue } = useForm<PageItemType>({
    defaultValues: {
      pageId: item.pageId,
      pageName: item.pageName,
      link: item.link,
    },
  });

  const handleMainImage = (e: any) => {
    setMainImage(e);
    setValue("link", e);
    setMainImagePreview(e ? URL.createObjectURL(e) : "");
  };

  const onSubmit: SubmitHandler<PageItemType> = (data: PageItemType) => {
    if (item) {
      apiService.updateForm.mutate({
        id: item.pageId,
        data,
      });
    }
  };

  return (
    <AccordionItem title={itemTitle}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          {mainImage == null && (
            <ButtonIconTip
              tip="نقر مزدوج"
              label="إضافة صورة"
              icon={<RiGalleryLine />}
              classNames={{
                root: "bg-info ",
              }}
              props={{}}
              doubleClickHandler={() => fileInput.current?.click()}
            />
          )}
          {mainImage != null && (
            <ButtonIconTip
              tip="نقر مزدوج"
              label="حذف الصورة"
              icon={<RiDeleteBinFill />}
              classNames={{
                root: "bg-red-600",
              }}
              props={{}}
              doubleClickHandler={() => handleMainImage(null)}
            />
          )}
          <FileInput
            ref={fileInput}
            id="fileInput"
            style={{ display: "none" }}
            clearable
            label="إضافة صورة "
            placeholder="Upload files"
            value={mainImage}
            onChange={handleMainImage}
          />
          <div className="my-3 max-w-[250px] max-h-[250px] bg-red-300 overflow-hidden rounded-md">
            <Image
              src={mainImagePreview ? mainImagePreview : ""}
              height={160}
              alt="Norway"
              fit="contain"
              fallbackSrc="https://placehold.co/600x400?text=no image"
            />
          </div>

          <Button
            classNames={{
              root: "bg-info w-32",
            }}
            size="sm"
            type="submit"
            disabled={pendingRequest > 0}
            leftSection={<RiSave2Line />}
          >
            {pendingRequest > 0 ? <Loader type="dots" color="white" /> : "حفظ"}
          </Button>
        </div>
      </form>
    </AccordionItem>
  );
}
