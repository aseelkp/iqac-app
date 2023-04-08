const { default: DataTable } = require(".");

const T3_3_3 = () => {
  const titles = [
    {
      id: 1,
      name: "SI No.",
    },
    {
      id: 2,
      name: "Name of the Teacher",
    },
    {
      id: 3,
      name: "Title of the book/Chaptes published",
    },
    {
      id: 4,
      name: "Title of the paper",
    },
    {
      id: 5,
      name: "Title of the proceedings of the conference",
    },
    {
      id: 6,
      name: "Name of the conference",
    },
    {
      id: 7,
      name: "National/International",
    },
    {
        id: 8,
        name: "Year of publication",
    },
    {
        id: 9,
        name : "ISBN/ISSN No.",

    },
    {
        id: 10,
        name : "Affiliating institute at the time of publication"
    },
    {
        id: 11,
        name : "Name of the publisher"
    }
  ];

  return (
     <DataTable titles={titles} data={Data} />
  );
};
