const { default: DataTable } = require(".");

export const T5_3_3 = ({data}) => {
  const titles = [
    {
      id: 1,
      name: "Date of Activity",
      field:"date"
    },
    {
      id: 2,
      name: "Name of the event/activity",
      field:"nameOfActivity"
    },
    {
      id: 3,
      name: "Name of the student participated",
      field:"nameOfStudent"
    },
  ];

  return <DataTable titles={titles} data={data} />;
};
