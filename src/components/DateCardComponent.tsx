import { IconCalendarMonth } from "@tabler/icons-react";

export default function DateCardComponent({ date }: { date: string }) {
  return (
    <p className="me-4 flex flex-row   gap-x-2 text-sm">
      {/* Icon  */}
      <IconCalendarMonth className="text-info" />
      {/* text  */}
      <span className="t text-secondary">{date}</span>
    </p>
  );
}
