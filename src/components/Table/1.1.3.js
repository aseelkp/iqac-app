const { TableContainer, Table } = require("@mui/material");
const { default: TableHeader } = require("./TableHead");
const { default: TableContent } = require("./TableContent");

const T1_1_3 = () => {
  const titles = [
    {
      id: 1,
      name: "Year",
    },
    {
      id: 2,
      name: "Name  of teacher participated",
    },
    {
      id: 3,
      name: "Name of the body in which full time teacher participated",
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
