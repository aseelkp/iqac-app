const { default: DataTable } = require(".");

export const T3_2_2 = ({ data }) => {
  const titles = [
    {
      id: 1,
      name: "Year",
      field: "year",
    },
    {
      id: 2,
      name: "Name of the Workshop/seminar",
      field: "nameOfWorkshop",
    },
    {
      id: 3,
      name: "Number of participants",
      field: "numberOfParticipants",
    },
    {
      id: 4,
      name: "Date from - to",
      field: "dateFrom",
    },
    {
      id: 5,
      name: "Link to the activity report on the website",
      field: "link",
    },
  ];

  return (
    <div className="w-full">
      <h1 className="self-start text-2xl mb-2">3.2.2</h1>
      <DataTable titles={titles} data={data} />
    </div>
  );
};
