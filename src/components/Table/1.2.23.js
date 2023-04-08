const { TableContainer, Table } = require("@mui/material");
const { default: TableHeader } = require("./TableHead");
const { default: TableContent } = require("./TableContent");

const T1_2_23 = () => {
  const titles = [
    {
      id: 1,
      name: "Name of Add on /Certificate programs offered",
    },
    {
      id: 2,
      name: "Course Code (if any)",
    },
    {
      id: 3,
      name: "Year of offering",
    },
    {
      id: 4,
      name: "No. of times offered during the year",
    },
    {
      id: 5,
      name: "Duration of course",
    },
    {
      id: 6,
      name: "Number of students enrolled in the year",
    },
    {
      id: 7,
      name: "Number of Students completing the course  in the year",
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHeader titles={titles} />
        <TableContent Data={Data} titles={titles} />
      </Table>
    </TableContainer>
  );
};
