const { default: DataTable } = require(".");

export const T3_4_34 = ({data}) => {
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
     <DataTable titles={titles} data={data} />
  );
};
