import { getSingleDepartment } from "@/services/dataService";
import React, { useEffect } from "react";
import { departments } from "@/constants/departments";
import SelectBox from "@/components/SelectBox/selectBox";
import { T1_1_3 } from "@/components/Table/1.1.3";
import { T3_2_2 } from "@/components/Table/3.2.2";
import { T3_3_2 } from "@/components/Table/3.3.2";
import { T3_3_3 } from "@/components/Table/3.3.3";
import { T3_4_34 } from "@/components/Table/3.4.34";
import { T5_1_3 } from "@/components/Table/5.1.3";
import { T6_3_4 } from "@/components/Table/6.3.4";
import { T6_3_3 } from "@/components/Table/6.3.3";
import { T6_3_2 } from "@/components/Table/6.3.2";
import { useState } from "react";

function SingleDepartment() {
  const [department, setDepartment] = React.useState("bscCS");
  const [form1_1_3 , setForm1_1_3] = useState([]);
  const [ form3_2_2 , setForm3_2_2] = useState([]);
  const [ form3_3_2 , setForm3_3_2] = useState([]);
  const [ form3_3_3 , setForm3_3_3] = useState([]);
  const [ form3_4_34 , setForm3_4_34] = useState([]);
  const [ form5_1_3 , setForm5_1_3] = useState([]);
  const [ form6_3_2 , setForm6_3_2] = useState([]);
  const [ form6_3_3 , setForm6_3_3] = useState([]);
  const [ form6_3_4 , setForm6_3_4] = useState([]);

  useEffect(() => {
    const dataArr = [];
    const getData = async () => {
      const data = await getSingleDepartment();
      data.forEach((doc) => {
        dataArr.push({
          id: doc.id,
          ...doc.data(),
        });
        console.log(dataArr, "dataArr");
        const filteredData = dataArr
          .filter((item) => item.department === department)
          .map((item) => item.data);
        console.log(filteredData, "filteredData");
        setForm1_1_3(filteredData.map((item) => item.form_1_1_3).flat());
        setForm3_2_2(filteredData.map((item) => item.form_3_2_2).flat());
        setForm3_3_2(filteredData.map((item) => item.form_3_3_2).flat());
        setForm3_3_3(filteredData.map((item) => item.form_3_3_3).flat());
        setForm3_4_34(filteredData.map((item) => item.form_3_4_34).flat());
        setForm5_1_3(filteredData.map((item) => item.form_5_1_3).flat());
        setForm6_3_2(filteredData.map((item) => item.form_6_3_2).flat());
        setForm6_3_3(filteredData.map((item) => item.form_6_3_3).flat());
        setForm6_3_4(filteredData.map((item) => item.form_6_3_4).flat());

      });
    };
    getData();
  }, [department]);

  return (
    <div className="w-screen flex items-center justify-center flex-col ">
      <div className="w-[90%]  items-center flex flex-col mt-8 gap-10">
        <div className="self-start w-full">
          <SelectBox
            label="Department"
            menu={departments}
            value={department}
            setValue={setDepartment}
          />
        </div>
        { form1_1_3 && <T1_1_3  data={form1_1_3} /> }
        { form3_2_2 && <T3_2_2  data={form3_2_2} /> }
        { form3_3_2 && <T3_3_2  data={form3_3_2} /> }
        { form3_3_3 && <T3_3_3  data={form3_3_3} /> }
        {/* { form3_4_34 && <T3_4_34  data={form3_4_34} /> } */}
        { form5_1_3 && <T5_1_3  data={form5_1_3} /> }
        { form6_3_2 && <T6_3_2  data={form6_3_2} /> }
        { form6_3_3 && <T6_3_3  data={form6_3_3} /> }
        { form6_3_4 && <T6_3_4  data={form6_3_4} /> }


      </div>
    </div>
  );
}

export default SingleDepartment;
