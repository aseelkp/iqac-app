const { default: DataTable } = require(".");

export const T6_3_3 = ({ data }) => {
  const titles = [
    {
      id: 1,
      name: "Date(from-to)",
      field: "dateFrom",
    },
    {
      id: 2,
      name: "Title of the professional development program organised for teaching staff",
      field: "titleOfProgram",
    },
    {
      id: 3,
      name: "Title of the administrative training program organised for non-teaching staff",
      field: "",
    },
    {
      id: 4,
      name: "No. of participants",
      field: "noOfParticipants",
    },
  ];

  return (
    <div className="w-full">
      <h1 className="self-start text-2xl mb-2">6.3.3</h1>
      <DataTable titles={titles} data={data} />
    </div>
  );
};
