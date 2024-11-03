import { Accordion } from "@mantine/core";
export default function AccordionItem({ title, children, className }: any) {
  return (
    <Accordion.Item
      key={title}
      value={title}
      className={`bg-white   ${className}`}
    >
      <Accordion.Control className="text-text">{title}</Accordion.Control>

      <Accordion.Panel>
        <hr className="py-5" />
        {children}
      </Accordion.Panel>
    </Accordion.Item>
  );
}
