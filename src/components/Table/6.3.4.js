const { default: DataTable } = require(".");

export const T6_3_4 = () => {
  const titles = [
    {
      id: 1,
      name: "Name of teacher who attended",
    },
    {
      id: 2,
      name: "Title of the program",
    },
    {
      id: 3,
      name: "Duration(from-to)",
    },
  ];

  return <DataTable titles={titles} data={Data} />;
};
