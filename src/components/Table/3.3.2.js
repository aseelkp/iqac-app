const { default: DataTable } = require(".");

export const T3_3_2 = ({data}) => {
  const titles = [
    {
      id: 1,
      name: "Title of paper",
      field : "title"

    },
    {
      id: 2,
      name: "Name of the Author",
      field : "nameOfAuthor"
    },
    {
      id: 3,
      name: "Department of the teacher",
      field:"department"
    },
    {
      id: 4,
      name: "Name of Journal",
      field : "nameOfJournal"
    },
    {
      id: 5,
      name: "Year of Publication",
      field : "yearOfPublication"
    },
    {
      id: 6,
      name: "ISSN No.",
      field : "ISSNno"
    },
    {
      id: 7,
      name: "Link to the recognition in UGC enlistment of the Journal",
      field : "link"
    },
  ];

  return (
     <DataTable titles={titles} data={data} />
  );
};
