import SelectBox from "@/components/SelectBox/selectBox";
import { getMainDepartment } from "@/services/dataService";
import React, { useEffect, useState } from "react";
import { departments } from "@/constants/departments";
import { T1_1_3 } from "@/components/Table/1.1.3";
import { T3_2_2 } from "@/components/Table/3.2.2";
import { T3_3_2 } from "@/components/Table/3.3.2";
import { T3_3_3 } from "@/components/Table/3.3.3";

function MainDepartment() {
  const [department, setDepartment] = React.useState("bscCS");
  const [form1_1_3 , setForm1_1_3] = useState([]);
  const [ form3_2_2 , setForm3_2_2] = useState([]);
  const [ form3_3_2 , setForm3_3_2] = useState([]);
  const [ form3_3_3 , setForm3_3_3] = useState([]);


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
            const filteredData = dataArr
          .filter((item) => item.department === department)
          .map((item) => item.data);
          setForm1_1_3(filteredData.map((item) => item.form_1_1_3).flat());
          setForm3_2_2(filteredData.map((item) => item.form_3_2_2).flat());
        setForm3_3_2(filteredData.map((item) => item.form_3_3_2).flat());
        setForm3_3_3(filteredData.map((item) => item.form_3_3_3).flat());
            
          });
        };
        getData();
      }, []);
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
      </div>
    </div>
  );
}

export default MainDepartment;
