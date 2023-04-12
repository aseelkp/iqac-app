const { default: DataTable } = require(".");

export const T6_4_2 = ({ data }) => {
  const titles = [
    {
      id: 1,
      name: "Year",
      field: "year",
    },
    {
      id: 2,
      name: "Name of the non government funding agencies/ individuals",
      field: "nameOfAgency",
    },
    {
      id: 3,
      name: "Purpose of the Grant",
      field: "purposeOfGrant",
    },
    {
      id: 4,
      name: "Funds/ Grants received (INR in lakhs)",
      field: "amount",
    },
    {
      id: 5,
      name: "Link to Audited Statement of Accounts reflecting the receipts",
      field: "link",
    },
  ];

  return (
    <div className="w-full">
      <h1 className="self-start text-2xl mb-2">6.4.2</h1>
      <DataTable titles={titles} data={data} />
    </div>
  );
};
