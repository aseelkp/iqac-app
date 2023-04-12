const { default: DataTable } = require(".");

export const T5_3_3 = ({ data }) => {
  const titles = [
    {
      id: 1,
      name: "Date of Activity",
      field: "date",
    },
    {
      id: 2,
      name: "Name of the event/activity",
      field: "nameOfActivity",
    },
    {
      id: 3,
      name: "Name of the student participated",
      field: "nameOfStudent",
    },
  ];

  return (
    <div className="w-full">
      <h1 className="self-start text-2xl mb-2">5.3.3</h1>
      <DataTable titles={titles} data={data} />
    </div>
  );
};
