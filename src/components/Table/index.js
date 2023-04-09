const { TableContainer, Table, Paper } = require("@mui/material");
const { default: TableHeader } = require("./TableHead");
const { default: TableContent } = require("./TableContent");

const DataTable = ({ titles, data }) => {
  console.log(data, "data in table");
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHeader titles={titles} />
        <TableContent Data={data} titles={titles} />
      </Table>
    </TableContainer>
  );
};

export default DataTable;
