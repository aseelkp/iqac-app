import * as React from "react";
import DataTable from ".";

export default function T2_1_1({ data }) {

  const titles = [
    {
      id: 1,
      name: "Programme Name",
      field: "programmeName",
    },
    {
      id: 2,
      name: "Programme Code",
      field: "programmeCode",
    },
    {
      id: 3,
      name: "Number of seats sanctioned",
      field: "noOfSeatsSanctioned",
    },
    {
      id: 4,
      name: "Number of students admitted",
      field: "noOfStudentsAdmitted",
    },
  ];
  return (
    <div className="w-full mt-3">
      { <DataTable titles={titles} data={data}  />}
    </div>
  );
}
