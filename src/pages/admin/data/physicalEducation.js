import { T5_3_1 } from "@/components/Table/5.3.1";
import { T5_3_3 } from "@/components/Table/5.3.3";
import { getPhysicalEducation } from "@/services/dataService";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function PhysicalEducation() {
  const [form5_3_1, setForm5_3_1] = useState([]);
  const [form5_3_3, setForm5_3_3] = useState([]);

  useEffect(() => {
    const dataArr = [];
    const getData = async () => {
      const data = await getPhysicalEducation();
      data.forEach((doc) => {
        dataArr.push({
          id: doc.id,
          ...doc.data(),
        });
        console.log(dataArr, "dataArr");
        setForm5_3_1(dataArr.map((item) => item.form_5_3_1).flat());
        setForm5_3_3(dataArr.map((item) => item.form_5_3_3).flat());
      });
    };
    getData();
  }, []);

  return (
    <div className="w-screen flex items-center justify-center flex-col  ">
      <div className="w-[90%]  items-center flex flex-col mt-8 gap-10">
        {form5_3_1 && <T5_3_1 data={form5_3_1} />}
        {form5_3_3 && <T5_3_3 data={form5_3_3} />}
      </div>
    </div>
  );
}

export default PhysicalEducation;
