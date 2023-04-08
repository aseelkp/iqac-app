const { TableContainer, Table } = require("@mui/material");
const { default: TableHeader } = require("./TableHead");
const { default: TableContent } = require("./TableContent");

const T1_3_3 = () => {
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
      name: "List of students undertaking project work/field work/internship",
    },
    {
        id: 4,
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
