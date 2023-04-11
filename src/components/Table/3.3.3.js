const { default: DataTable } = require(".");

export const T3_3_3 = ({data}) => {
  const titles = [
    {
      id: 1,
      name: "SI No.",
      field : "SINo"
    },
    {
      id: 2,
      name: "Name of the Teacher",
      field : "nameOfTeacher"
    },
    {
      id: 3,
      name: "Title of the book/Chaptes published",
      field:"titleOfBook"
    },
    {
      id: 4,
      name: "Title of the paper",
      field : "titleOfPaper"
    },
    {
      id: 5,
      name: "Title of the proceedings of the conference",
      field : "titleOfProceedings"
    },
    {
      id: 6,
      name: "Name of the conference",
      field : "nameOfConference"
    },
    {
      id: 7,
      name: "National/International",
      field : "scopeOfConference"
    },
    {
        id: 8,
        name: "Year of publication",
        field : "yearOfPublication"
    },
    {
        id: 9,
        name : "ISBN/ISSN No.",
        field : "ISBNorISSN"

    },
    {
        id: 10,
        name : "Affiliating institute at the time of publication",
        field : "affiliatingInstitute"
    },
    {
        id: 11,
        name : "Name of the publisher",
        field : "nameOfPublisher"
    }
  ];

  return (
     <DataTable titles={titles} data={data} />
  );
};
