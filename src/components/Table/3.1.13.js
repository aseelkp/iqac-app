const { TableContainer, Table } = require("@mui/material");
const { default: TableHeader } = require("./TableHead");
const { default: TableContent } = require("./TableContent");

const T3_1_13 = () => {
  const titles = [
    {
      id: 1,
      name: "Name of the Project/ Endowments, Chairs",
    },
    {
      id: 2,
      name: "Name of the Principal Investigator/Co-investivator",
    },
    {
      id: 3,
      name: "Department of Principal Investigator",
    },
    {
      id: 4,
      name: "Year Of Award",
    },
    {
      id: 5,
      name: "Anount Sanctioned",
    },
    {
      id: 6,
      name: "Duration of the Project",
    },
    {
      id: 7,
      name: "Name of the Funding Agency",
    },
    {
        id: 8,
        name : "Type(Govt/Non-Govt)"
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
