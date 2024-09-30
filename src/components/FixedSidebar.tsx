import { Drawer } from "@mantine/core";

export default function FixedSidebar({ className }: any) {
  return (
    <div className={className}>
      <Drawer
        opened
        onClose={() => {}}
        title="Authentication"
        withOverlay={false}
        radius="md"
        size="xs"
        withCloseButton={false}
      >
        {/* Drawer content */}
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi!</p>
      </Drawer>
    </div>
  );
}
