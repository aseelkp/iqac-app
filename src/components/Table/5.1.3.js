const { default: DataTable } = require(".");

export const T5_1_3 = ({data}) => {
  const titles = [
    {
      id: 1,
      name: "Name of the capability enhancement program",
      field:"nameOfProgram"
    },
    {
      id: 2,
      name: "Date of Implementation",
      field:"dateOfImplementation"
    },
    {
      id: 3,
      name: "Number of students enrolled",
      field:"noOfStudents"
    },
    {
      id: 4,
      name: "Name of the agencies/consultants involved with contact details(if any)",
      field:"nameOfAgencies"
    },
  ];

  return (
     <DataTable titles={titles} data={data} />
  );
};
