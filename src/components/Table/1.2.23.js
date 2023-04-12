const { TableContainer, Table } = require("@mui/material");
const { default: TableHeader } = require("./TableHead");
const { default: TableContent } = require("./TableContent");
const { default: DataTable } = require(".");

export const T1_2_23 = ({data}) => {
  const titles = [
    {
      id: 1,
      name: "Name of Add on /Certificate programs offered",
      field :"nameOfProgram"

    },
    {
      id: 2,
      name: "Course Code (if any)",
      field : "courseCode"
    },
    {
      id: 3,
      name: "Year of offering",
      field:"yearOfOffering"
    },
    {
      id: 4,
      name: "No. of times offered during the year",
      field : "noOfTimesOffered"
    },
    {
      id: 5,
      name: "Duration of course",
      field:"duration"
    },
    {
      id: 6,
      name: "Number of students enrolled in the year",
      field : "noOfStundentsEnrolled"
    },
    {
      id: 7,
      name: "Number of Students completing the course  in the year",
      field:"noOfStundentsCompleting"
    },
  ];

  return (
    <div className="w-full mt-3">
    { <DataTable titles={titles} data={data}  />}
  </div>
  );
};
