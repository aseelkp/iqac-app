const { default: DataTable } = require(".");

export const T6_4_2 = () => {
  const titles = [
    {
      id: 1,
      name: "Year",
    },
    {
      id: 2,
      name: "Name of the non government funding agencies/ individuals",
    },
    {
      id: 3,
      name: "Purpose of the Grant",
    },
    {
      id: 4,
      name: "Funds/ Grants received (INR in lakhs)",
    },
    {
      id: 5,
      name: "Link to Audited Statement of Accounts reflecting the receipts",
    },
  ];

  return <DataTable titles={titles} data={Data} />;
};
