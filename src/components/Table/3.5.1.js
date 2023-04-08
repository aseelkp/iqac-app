const { default: DataTable } = require(".");

const T3_5_1 = () => {
  const titles = [
    {
      id: 1,
      name: "Name of the collaborating agency with contact details",
    },
    {
      id: 2,
      name: "Name of the participant",
    },
    {
      id: 3,
      name: "Year of collaboration",
    },
    {
      id: 4,
      name: "Duration",
    },
    {
      id: 5,
      name: "Nature of Activity",
    },
    {
      id: 6,
      name: "Link to the relevant document",
    },
  ];

  return (
     <DataTable titles={titles} data={Data} />
  );
};
