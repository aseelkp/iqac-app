const { default: DataTable } = require(".");

export const T6_3_3 = () => {
  const titles = [
    {
      id: 1,
      name: "Date(from-to)",
    },
    {
      id: 2,
      name: "Title of the professional development program organised for teaching staff",
    },
    {
      id: 3,
      name: "Title of the administrative training program organised for non-teaching staff",
    },
    {
      id: 4,
      name: "No. of participants",
    },
  ];

  return <DataTable titles={titles} data={Data} />;
};
