const { default: DataTable } = require(".");

export const T5_3_1 = ({ data }) => {
  const titles = [
    {
      id: 1,
      name: "Year",
      field: "year",
    },
    {
      id: 2,
      name: "Name of the Award/Medal",
      field: "nameOfAward",
    },
    {
      id: 3,
      name: "Team / Individual",
      field: "modeOfParticipation",
    },
    {
      id: 4,
      name: "University/State /National/International",
      field: "awardedLevel",
    },
    {
      id: 5,
      name: "Sports/Cultural",
      field: "areaOfAward",
    },
    {
      id: 6,
      name: "Name of the Student",
      field: "nameOfStudent",
    },
  ];

  return (
    <div className="w-full">
      <h1 className="self-start text-2xl mb-2">5.3.1</h1>
      <DataTable titles={titles} data={data} />
    </div>
  );
};
