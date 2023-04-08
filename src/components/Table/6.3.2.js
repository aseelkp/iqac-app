const { default: DataTable } = require(".");

export const T6_3_2 = () => {
  const titles = [
    {
      id: 1,
      name: "Year",
    },
    {
      id: 2,
      name: "Name of Teacher",
    },
    {
      id: 3,
      name: "Name of conference/ workshop attended for which financial support provided",
    },
    {
      id: 4,
      name: "Name of the professional body for which membership fee is provided",
    },
    {
        id: 5,
        name : "Amount of support"
    }
  ];

  return <DataTable titles={titles} data={Data} />;
};
