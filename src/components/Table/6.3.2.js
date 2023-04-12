const { default: DataTable } = require(".");

export const T6_3_2 = ({ data }) => {
  const titles = [
    {
      id: 1,
      name: "Year",
      field: "year",
    },
    {
      id: 2,
      name: "Name of Teacher",
      field: "nameOfTeacher",
    },
    {
      id: 3,
      name: "Name of conference/ workshop attended for which financial support provided",
      field: "nameOfConference",
    },
    {
      id: 4,
      name: "Name of the professional body for which membership fee is provided",
      field: "nameOfProBody",
    },
    {
      id: 5,
      name: "Amount of support",
      field: "amount",
    },
  ];

  return (
    <div className="w-full">
      <h1 className="self-start text-2xl mb-2">6.3.2</h1>
      <DataTable titles={titles} data={data} />
    </div>
  );
};
