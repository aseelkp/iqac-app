import * as React from "react";
import DataTable from ".";

export default function T4_1_3({ data }) {



  const titles = [
    {
      id: 1,
      name: "Room number or Name  of classrooms/Seminar Hall with LCD / wifi/LAN facilities with room numbers",
      field: "roomNo",
    },
    {
      id: 2,
      name: "Type of ICT facility",
      field: "typeOfFacility",
    },
    {
      id: 3,
      name: "Link to geo tagged photos and master time table",
      field: "link",
    },
  ];
  return (
    <div className="w-full mt-3">
      { <DataTable titles={titles} data={data}  />}
    </div>
  );
}
