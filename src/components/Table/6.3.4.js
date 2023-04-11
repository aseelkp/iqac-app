const { default: DataTable } = require(".");

export const T6_3_4 = ({data}) => {
  const titles = [
    {
      id: 1,
      name: "Name of teacher who attended",
      field : "nameOfTeacher"
    },
    {
      id: 2,
      name: "Title of the program",
      field : "titleOfProgram"
    },
    {
      id: 3,
      name: "Duration(from-to)",
      field:"dateFrom"
    },
  ];

  return <DataTable titles={titles} data={data} />;
};
