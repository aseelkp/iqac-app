import React, { useState } from "react";
import Link from "next/link";

import { Grid, TextField, Button, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

import { useFormik } from "formik";
import * as Yup from "yup";

import FormWrapper from "../../../components/FormWrapper";
import NccStepper from "../../../components/nss-ncc/NccStepper";

const validationSchema = Yup.object({
  nameOfActivity: Yup.string().required("Required"),
  nameOfAward: Yup.string().required("Required"),
  nameOfAwardingBody: Yup.string().required("Required"),
  yearOfAward: Yup.number("Year should be a number.").required("Required"),
});

function nccNss() {
  const formik = useFormik({
    initialValues: {
      nameOfActivity: "",
      nameOfAward: "",
      nameOfAwardingBody: "",
      yearOfAward: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setTableData([...tableData, values]);
      formik.resetForm();
    },
  });

  const [tableData, setTableData] = useState([]);

  const handleDelete = (index) => {
    const data = [...tableData];
    data.splice(index, 1);
    setTableData(data);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-sky-950">NCC and NSS</h1>
      <NccStepper step={0} />

      <p className="mb-3">
      <span className="font-bold">3.4.2</span> Number of awards and recognitions received for extension
        activities from government/ government recognized bodies during the
        year.
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfActivity"
                name="nameOfActivity"
                label="Name of the activity"
                value={formik.values.nameOfActivity}
                onChange={formik.handleChange}
                error={
                  formik.touched.nameOfActivity &&
                  Boolean(formik.errors.nameOfActivity)
                }
                helperText={
                  formik.touched.nameOfActivity && formik.errors.nameOfActivity
                }
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfAward"
                name="nameOfAward"
                label="Name of the Award/ recognition"
                value={formik.values.nameOfAward}
                onChange={formik.handleChange}
                error={
                  formik.touched.nameOfAward &&
                  Boolean(formik.errors.nameOfAward)
                }
                helperText={
                  formik.touched.nameOfAward && formik.errors.nameOfAward
                }
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfAwardingBody"
                name="nameOfAwardingBody"
                label="Name of the Awarding government/ government recognised bodies"
                value={formik.values.nameOfAwardingBody}
                onChange={formik.handleChange}
                error={
                  formik.touched.nameOfAwardingBody &&
                  Boolean(formik.errors.nameOfAwardingBody)
                }
                helperText={
                  formik.touched.nameOfAwardingBody &&
                  formik.errors.nameOfAwardingBody
                }
              />
            </Grid>
            <Grid item md={6}>
            <DatePicker
                views={["year"]}
                openTo="year"
                id="yearOfAward"
                name="yearOfAward"
                label="Year of activity"
                value={formik.values.yearOfAward ? new Date(formik.values.yearOfAward, 0, 1) : null}
                onChange={(newValue) => {
                  const selectedYear = newValue.getFullYear();
                  formik.setFieldValue("yearOfAward", selectedYear);
                }}
                renderInput={(params) => <TextField {...params} />}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    error:
                      formik.touched.yearOfAward &&
                      Boolean(formik.errors.yearOfAward),
                    helperText:
                      formik.touched.yearOfAward &&
                      formik.errors.yearOfAward,
                  },
                }}
              />
            </Grid>
            <Grid item md={12} container justifyContent="flex-end">
              <Button variant="contained" endIcon={<AddIcon />} color="info" type="submit">
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormWrapper>

      {tableData.length > 0 && (
        <div className="w-full mt-4 p-6">
        <table className="w-full">
          <thead className="border-b-2 border-blue-700">
            <tr>
              <th className="p-2">Name of the activity</th>
              <th className="p-2">Name of the Award/ recognition</th>
              <th className="p-2">
                Name of the Awarding government/ government recognised bodies
              </th>
              <th className="p-2">Year of Award</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => {
              return (
                <tr key={index}>
                  <td className="p-2">{data.nameOfActivity}</td>
                  <td className="p-2">{data.nameOfAward}</td>
                  <td className="p-2">{data.nameOfAwardingBody}</td>
                  <td className="p-2">{data.yearOfAward}</td>
                  <td className="p-2">
                    <IconButton aria-label="delete" color="error" onClick={() => handleDelete(index
                    )}>
                      <Delete />
                    </IconButton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>)}
      <div className="flex justify-end mt-4">
      <Link href="/Forms/nss-ncc/3.4.3">
      <Button variant="contained" color="info">
        Save and Continue
      </Button>
      </Link>
      </div>
    </div>
  );
}

export default nccNss;
