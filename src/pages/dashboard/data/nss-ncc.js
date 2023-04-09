import SelectBox from "@/components/SelectBox/selectBox";
import T3_4_2 from "@/components/Table/3.4.2";
import { T3_4_34 } from "@/components/Table/3.4.34";
import { T5_1_3 } from "@/components/Table/5.1.3";
import { getNssNcc } from "@/services/dataService";
import { MenuItem, TextField } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const NssNcc = () => {
  const options = ["NSS", "NCC"];
  const [club, setClub] = useState("NSS");
  const [form3_4_2, setForm3_4_2] = useState([]);
  const [form3_4_34, setForm3_4_34] = useState([]);
  const [form5_1_3 , setForm5_1_3] = useState([]);
  
  useEffect(() => {
    const dataArr = [];
    const getData = async () => {
      const data = await getNssNcc();
      data.forEach((doc) => {
        dataArr.push({
          id: doc.id,
          ...doc.data(),
        });
        console.log(dataArr, "dataArr");
        const filteredData = dataArr
          .filter((item) => item.clubName === club)
          .map((item) => item.data);
        setForm3_4_2(filteredData.map((item) => item.form_3_4_2).flat());
        setForm3_4_34(filteredData.map((item) => item.form_3_4_3).flat());
        setForm5_1_3(filteredData.map((item) => item.form_5_1_3).flat());
      });
    };
    getData();
  }, [club]);
  
  console.log(form3_4_2, "form3_4_2");
  return (
    <div className="w-screen flex items-center justify-center flex-col ">
      <div className="w-[90%]  items-center flex flex-col mt-8 gap-10">
        <div className="self-start w-full">
          <SelectBox
            label="Club Name"
            menu={options}
            value={club}
            setValue={setClub}
          />
        </div>
        {form3_4_2 && <T3_4_2 data={form3_4_2} />}
        {form3_4_34 &&  <T3_4_34 data={form3_4_34} />}
        {form5_1_3 && <T5_1_3 data={form5_1_3} />}
      </div>
    </div>
  );
};

export default NssNcc;
