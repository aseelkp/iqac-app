const { default: DataTable } = require(".");

const T3_3_2 = () => {
  const titles = [
    {
      id: 1,
      name: "Title of paper",
    },
    {
      id: 2,
      name: "Name of the Author",
    },
    {
      id: 3,
      name: "Department of the teacher",
    },
    {
      id: 4,
      name: "Name of Journal",
    },
    {
      id: 5,
      name: "Year of Publication",
    },
    {
      id: 6,
      name: "ISSN No.",
    },
    {
      id: 7,
      name: "Link to the recognition in UGC enlistment of the Journal",
    },
  ];

  return (
     <DataTable titles={titles} data={Data} />
  );
};
