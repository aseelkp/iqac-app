import * as React from "react";
import DataTable from ".";

export default function T3_4_2({ data }) {



  const titles = [
    {
      id: 1,
      name: "Name of the activity",
      field: "nameOfActivity",
    },
    {
      id: 2,
      name: "Name of the Award/ recognition",
      field: "nameOfAward",
    },
    {
      id: 3,
      name: "Name of the Awarding government/ government recognised bodies",
      field: "nameOfAwardingBody",
    },
    {
      id: 4,
      name: "Year of award",
      field: "yearOfAward",
    },
  ];
  return (
    <div className="w-full mt-3">
      { <DataTable titles={titles} data={data}  />}
    </div>
  );
}
