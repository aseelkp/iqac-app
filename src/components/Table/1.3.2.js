const { TableContainer, Table } = require("@mui/material");
const { default: TableHeader } = require("./TableHead");
const { default: TableContent } = require("./TableContent");

const T1_3_2 = () => {
  const titles = [
    {
      id: 1,
      name: "Program name",
    },
    {
      id: 2,
      name: "Program code",
    },
    {
      id: 3,
      name: "Name of the Course that include experiential learning through project work/field work/internship",
    },
    {
        id: 4,
        name : "Course code"
    },
    {
        id: 5,
        name : "Year of offering"
    },
    {
        id: 6,
        name : "Name of the student studied course on experiential learning through project work/field work/internship"
    },
    {
        id: 7,
        name : "Link to the relevant document"
    }
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
