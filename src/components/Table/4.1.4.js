import * as React from "react";
import DataTable from ".";

export default function T4_1_4({ data }) {

  const titles = [
    {
      id: 1,
      name: "Year",
      field: "year",
    },
    {
      id: 2,
      name: "Budget allocated for infrastructure augmentation",
      field: "budgetForInfrastructure",
    },
    {
      id: 3,
      name: " Expenditure for infrastructure augmentation",
      field: "expOnInfrastructure",
    },
    {
      id: 4,
      name: "Total expenditure excluding Salary",
      field: "totExpenditure",
    },
    {
        id: 5,
        name: "Expenditure on maintenace of academic facilities (excluding salary for human resources)",
        field: "expOnAcademicFacilities",
    },
    {
        id: 6,
        name: "Expenditure on maintenance of non-academic facilities (excluding salary for human resources)",
        field: "expOnPhysicalFacilities",
    },
  ];
  return (
    <div className="w-full mt-3">
      { <DataTable titles={titles} data={data}  />}
    </div>
  );
}
