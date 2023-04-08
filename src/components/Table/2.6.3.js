const { TableContainer, Table } = require("@mui/material");
const { default: TableHeader } = require("./TableHead");
const { default: TableContent } = require("./TableContent");

const T2_6_3 = () => {
  const titles = [
    {
      id: 1,
      name: "Year",
    },
    {
      id: 2,
      name: "Program code",
    },
    {
      id: 3,
      name: "Program Name",

    },
    {
        id: 4,
        name : "Number of students appeared in the final year examination"

    },
    {
        id: 5,
        name : "Number of students passed in the final year examination"
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
