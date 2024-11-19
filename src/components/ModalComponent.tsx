import { Modal, Button, Loader } from "@mantine/core";
import { useIsMutating } from "@tanstack/react-query";


type ModalParamType = {
  opened: boolean;
  onOpen: () => void;
  onClose: () => void;
};
type ParamType = {
  modal: ModalParamType;
  title: string;
  children: React.ReactNode;
  handleClick: (e: any) => void;

};

export default function ModalComponent({
  modal,
  title,
  children,

  handleClick,
}: ParamType) {


  const pendingRequest = useIsMutating()
  return (
    <>
      {" "}
      <Modal
        size="lg"
        radius={"md"}
        classNames={{
          header: "text-white bg-dark-green rounded-tr rounded-tl",
          close: "text-white hover:bg-transparent",
        }}
        opened={modal.opened}
        onClose={modal.onClose}
        title={title}
        centered
        overlayProps={{
          blur: 2,
        }}
      >
        <div className="content p-2">{children}</div>
        <div className="mt-4 flex flex-row-reverse justify-start gap-x-3">
          <Button
            classNames={{
              root: "bg-info w-32",
            }}
            size="sm"
            onClick={handleClick}
            disabled={pendingRequest > 0}
          >
            {pendingRequest > 0 ? <Loader type="dots" color="white" /> : 'حفظ'}

          </Button>

          <Button
            classNames={{
              root: "w-32",
            }}
            size="sm"
            variant="outline"
            color="grey"
            onClick={modal.onClose}
          >
            إلغاء
          </Button>
        </div>
      </Modal >
    </>
  );
}
