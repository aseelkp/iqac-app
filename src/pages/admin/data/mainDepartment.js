import { getMainDepartment } from "@/services/dataService";
import React, { useEffect } from "react";

function MainDepartment() {
    useEffect(() => {
        const dataArr = [];
        const getData = async () => {
          const data = await getMainDepartment();
          data.forEach((doc) => {
            dataArr.push({
              id: doc.id,
              ...doc.data(),
            });
            console.log(dataArr, "dataArr");
            
          });
        };
        getData();
      }, []);
  return <div>MainDepartment</div>;
}

export default MainDepartment;
