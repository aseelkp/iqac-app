import * as React from "react";
import { getNssNcc } from "@/services/dataService";
import { useEffect } from "react";
import { useState } from "react";
import DataTable from ".";

export default function T3_4_2() {
  const [combinedData, setCombinedData] = useState([]);
  console.log(combinedData, "combinedData");
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

  useEffect(() => {
    const dataArr = [];
    const getData = async () => {
      const data = await getNssNcc();
      data.forEach((doc) => {
        dataArr.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      const combinedData = dataArr.flatMap((item) => item.data.form_3_4_2);
      setCombinedData(combinedData);
    };
    getData();
  }, []);

  return <DataTable titles={titles} data={combinedData} />;
}
