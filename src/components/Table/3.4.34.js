const { default: DataTable } = require(".");

export const T3_4_34 = ({ data }) => {
  const titles = [
    {
      id: 1,
      name: "Name of Activity",
      field: "nameOfActivity",
    },
    {
      id: 2,
      name: "Organising unit/ agency/ collaborating agency",
      field: "organisingUnit",
    },
    {
      id: 3,
      name: "Name of the scheme",
      field: "nameOfScheme",
    },
    {
      id: 4,
      name: "Year of Activity",
      field: "yearOfActivity",
    },
    {
      id: 5,
      name: "Number of students participated in such activities",
      field: "noOfStudentsParticipated",
    },
  ];

  return (
    <div className="w-full">
      <h1 className="self-start text-2xl mb-2">3.4.3 & 3.4.4</h1>
      <DataTable titles={titles} data={data} />
    </div>
  );
};
