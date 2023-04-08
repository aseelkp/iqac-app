const { default: DataTable } = require(".");

export const T5_2_2 = () => {
  const titles = [
    {
      id: 1,
      name: "Name of student enrolling into higher education",
    },
    {
      id: 2,
      name: "Programe graduated from",
    },
    {
      id: 3,
      name: "Name of Institution joined",
    },
    {
      id: 4,
      name: "Name of programme admitted to",
    },
  ];

  return <DataTable titles={titles} data={Data} />;
};
