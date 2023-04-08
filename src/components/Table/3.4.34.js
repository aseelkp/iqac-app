const { default: DataTable } = require(".");

const T3_4_34 = () => {
  const titles = [
    {
      id: 1,
      name: "Name of Activity",
    },
    {
      id: 2,
      name: "Organising unit/ agency/ collaborating agency",
    },
    {
      id: 3,
      name: "Name of the scheme",
    },
    {
      id: 4,
      name: "Year of Activity",
    },
    {
      id: 5,
      name: "Number of students participated in such activities",
    },
  ];

  return (
     <DataTable titles={titles} data={Data} />
  );
};
