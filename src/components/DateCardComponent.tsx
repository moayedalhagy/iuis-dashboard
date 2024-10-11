import { RiCalendar2Line } from "@remixicon/react";
export default function DateCardComponent({ date }: { date: string }) {
  return (
    <p className="me-4 flex flex-row   gap-x-2 text-sm">
      {/* Icon  */}

      <RiCalendar2Line className="text-info" />
      {/* text  */}
      <span className="t text-secondary">{date}</span>
    </p>
  );
}
