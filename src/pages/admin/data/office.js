import T2_1_1 from "@/components/Table/2.1.1";
import T4_1_3 from "@/components/Table/2.1.2";
import T4_1_4 from "@/components/Table/4.1.4";
import { T6_3_2 } from "@/components/Table/6.3.2";
import { T6_4_2 } from "@/components/Table/6.4.2";
import { getOffice } from "@/services/dataService";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Office() {
  const [form2_1_1, setForm2_1_1] = useState([]);
  const [form4_1_3 , setForm4_1_3] = useState([]);
  const [form4_1_4 , setForm4_1_4] = useState([]);
  const [form6_3_2 , setForm6_3_2] = useState([]);
  const [form6_4_2 , setForm6_4_2] = useState([]);

  useEffect(() => {
    const dataArr = [];
    const getData = async () => {
      const data = await getOffice();
      data.forEach((doc) => {
        dataArr.push({
          id: doc.id,
          ...doc.data(),
        });
        console.log(dataArr, "dataArr");
        setForm2_1_1(dataArr.map((item) => item.form_2_1_1).flat());
        setForm4_1_3(dataArr.map((item) => item.form_4_1_3).flat());
        setForm4_1_4(dataArr.map((item) => item.form_4_1_4).flat());
        setForm6_3_2(dataArr.map((item) => item.form_6_3_2).flat());
        setForm6_4_2(dataArr.map((item) => item.form_6_4_2).flat());
      });
    };
    getData();
  }, []);

  return (
    <div className="w-screen flex items-center justify-center flex-col  ">
      <div className="w-[90%]  items-center flex flex-col mt-8 gap-10">

        {form2_1_1 && <T2_1_1 data={form2_1_1} />}
        {form4_1_3 && <T4_1_3 data={form4_1_3} />}
        {form4_1_4 && <T4_1_4 data={form4_1_4} />}
        {form6_3_2 && <T6_3_2 data={form6_3_2} />}
        {form6_4_2 && <T6_4_2 data={form6_4_2} />}

      </div>
    </div>
  );
}

export default Office;
