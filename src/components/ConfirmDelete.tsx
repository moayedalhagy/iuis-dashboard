import React from "react";
import { Modal, Button, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { RiDeleteBin7Line } from "@remixicon/react";

// تعريف أنواع Props
interface ConfirmDeleteProps {
  onConfirm: () => void; // دالة تُنفذ عند التأكيد
  onCancel?: () => void; // دالة تُنفذ عند الإلغاء (اختيارية)
  title?: string; // عنوان النافذة (اختياري)
  message?: string; // رسالة التأكيد (اختياري)
  style: any;
}

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({
  onConfirm,
  onCancel,
  style,
}) => {
  const [opened, { open, close }] = useDisclosure(false);

  const handleConfirm = () => {
    onConfirm();
    close();
  };

  const handleCancel = () => {
    onCancel?.(); // تنفيذ onCancel إذا كانت موجودة
    close();
  };

  return (
    <>
      {/* زر فتح التأكيد */}

      <Button
        onClick={open}
        variant={style.variant}
        mt={style.mt}
        radius={style.radius}
        color={style.color}
        size={style.size}
      >
        <RiDeleteBin7Line />
      </Button>

      {/* نافذة التأكيد */}
      <Modal opened={opened} onClose={close} title={"تأكيد الحذف"} centered>
        <Text>{"هل أنت متأكد من الحذف؟"}</Text>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1rem",
          }}
        >
          <Button
            variant="default"
            onClick={handleCancel}
            // style={{ marginRight: "0.5rem" }}
            mx={"1rem"}
          >
            إلغاء
          </Button>
          <Button color="red" onClick={handleConfirm}>
            تأكيد
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default ConfirmDelete;
