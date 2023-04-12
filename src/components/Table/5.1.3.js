const { default: DataTable } = require(".");

export const T5_1_3 = ({ data }) => {
  const titles = [
    {
      id: 1,
      name: "Name of the capability enhancement program",
      field: "nameOfProgram",
    },
    {
      id: 2,
      name: "Date of Implementation",
      field: "dateOfImplementation",
    },
    {
      id: 3,
      name: "Number of students enrolled",
      field: "noOfStudents",
    },
    {
      id: 4,
      name: "Name of the agencies/consultants involved with contact details(if any)",
      field: "nameOfAgencies",
    },
  ];

  return (
    <div className="w-full">
      <h1 className="self-start text-2xl mb-2">5.1.3</h1>

      <DataTable titles={titles} data={data} />
    </div>
  );
};
