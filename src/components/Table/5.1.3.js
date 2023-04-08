const { default: DataTable } = require(".");

const T5_1_3 = () => {
  const titles = [
    {
      id: 1,
      name: "Name of the capability enhancement program",
    },
    {
      id: 2,
      name: "Date of Implementation",
    },
    {
      id: 3,
      name: "Number of students enrolled",
    },
    {
      id: 4,
      name: "Name of the agencies/consultants involved with contact details(if any)",
    },
  ];

  return (
     <DataTable titles={titles} data={Data} />
  );
};
