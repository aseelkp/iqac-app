const { default: DataTable } = require(".");

const T5_2_1 = () => {
  const titles = [
    {
      id: 1,
      name: "Year",
    },
    {
      id: 2,
      name: "Name of student placed  and contact details",
    },
    {
      id: 3,
      name: "Programm graduated from",
    },
    {
      id: 4,
      name: "Name of the  employer with contact details",
    },
    {
      id: 5,
      name: "Pay package at appointment",
    },
  ];

  return (
     <DataTable titles={titles} data={Data} />
  );
};
