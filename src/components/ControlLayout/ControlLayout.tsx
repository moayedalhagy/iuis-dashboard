export default function ControlLayout({
  button,
  filters,
  search,
}: {
  button: React.ReactNode;
  filters: Array<React.ReactNode>;
  search: React.ReactNode;
}) {
  return (
    <div className=" border-b  py-2 pb-3 flex justify-between items-center ">
      <div className="flex gap-x-5 justify-between items-center">
        <div>{button}</div>
        <div className="flex gap-x-3">
          {filters.map((filter, index) => (
            <div key={index}> {filter}</div>
          ))}
        </div>
      </div>
      <div>{search}</div>
    </div>
  );
}
