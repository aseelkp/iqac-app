const { default: DataTable } = require(".");

const T3_5_2 = () => {
  const titles = [
    {
      id: 1,
      name: "Organisation with which MoU is signed",
    },
    {
      id: 2,
      name: "Name of the institution/ industry/ corporate house",
    },
    {
      id: 3,
      name: "Year of signing MoU",
    },
    {
      id: 4,
      name: "Duration",
    },
    {
      id: 5,
      name: "List the  actual  activities under each MOU year wise",
    },
    {
      id: 6,
      name: "Number of students/teachers participated under MoUs",
    },
  ];

  return <DataTable titles={titles} data={Data} />;
};
