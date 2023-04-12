const { TableContainer, Table } = require("@mui/material");
const { default: TableHeader } = require("./TableHead");
const { default: TableContent } = require("./TableContent");
const { default: DataTable } = require(".");

export const T1_3_2 = ({data}) => {
  const titles = [
    {
      id: 1,
      name: "Program name",
      field : "programName"

    },
    {
      id: 2,
      name: "Program code",
      field : "programCode"
    },
    {
      id: 3,
      name: "Name of the Course that include experiential learning through project work/field work/internship",
      field : "nameOfCourse"
    },
    {
        id: 4,
        name : "Course code",
        field : "programeCode"
    },
    {
        id: 5,
        name : "Year of offering",
        field : "yearOfOffering"
    },
    {
        id: 6,
        name : "Name of the student studied course on experiential learning through project work/field work/internship",
        field:"nameOfStudent"
        
    },
    {
        id: 7,
        name : "Link to the relevant document",
        field : "link"
    }
  ];

  return (
    <div className="w-full mt-3">
            <h1 className="self-start text-2xl mb-2">1.3.2</h1>

    { <DataTable titles={titles} data={data}  />}
  </div>
  );
};
