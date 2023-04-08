const { default: DataTable } = require(".");

const T3_2_2 = () => {
  const titles = [
    {
      id: 1,
      name: "Name of the Project/ Endowments, Chairs",
    },
    {
      id: 2,
      name: "Name of the Principal Investigator/Co-investivator",
    },
    {
      id: 3,
      name: "Department of Principal Investigator",
    },
    {
      id: 4,
      name: "Year Of Award",
    },
    {
      id: 5,
      name: "Anount Sanctioned",
    },
    {
      id: 6,
      name: "Duration of the Project",
    },
    {
      id: 7,
      name: "Name of the Funding Agency",
    },
    {
      id: 8,
      name: "Type(Govt/Non-Govt)",
    },
  ];

  return (
     <DataTable titles={titles} data={Data} />
  );
};
