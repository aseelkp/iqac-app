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
  nameOfProgram: Yup.string().required("Name is required"),
  dateOfImplementation: Yup.string().required("Date is required"),
  noOfStudents: Yup.number("Should be a number.").required(
    "No. of students is required"
  ),
  nameOfAgencies: Yup.string().required("Name of agency is required"),
});

function formatDate(date) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

function nccNss() {
  const formik = useFormik({
    initialValues: {
      nameOfProgram: "",
      dateOfImplementation: "",
      noOfStudents: "",
      nameOfAgencies: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
        values.dateOfImplementation = formatDate(values.dateOfImplementation);
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
    <div className="p-8 min-h-screen">
      <h1 className="text-3xl font-bold text-sky-950">NCC and NSS</h1>
      <NccStepper step={2} />
      <p>
        <span className="font-bold">5.1.3</span> Capacity building and skills
        enhancement initiatives taken by the institution include the following:
      </p>
      <ol className="mb-3 ml-16 list-decimal">
        <li>Soft skills</li>
        <li>Language and communication skills</li>
        <li>Life skills (Yoga, physical fitness, health and hygiene)</li>
        <li>ICT/computing skills</li>
      </ol>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfProgram"
                name="nameOfProgram"
                label="Name of the capability enhancement program"
                value={formik.values.nameOfProgram}
                onChange={formik.handleChange}
                error={
                  formik.touched.nameOfProgram &&
                  Boolean(formik.errors.nameOfProgram)
                }
                helperText={
                  formik.touched.nameOfProgram && formik.errors.nameOfProgram
                }
              />
            </Grid>
            <Grid item md={6}>
              <DatePicker
                inputFormat="dd/MM/yyyy"
                id="dateOfImplementation"
                name="dateOfImplementation"
                label="Date of implementation"
                value={formik.values.dateOfImplementation}
                onChange={(newValue) => {
                  formik.setFieldValue("dateOfImplementation", newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    error:
                      formik.touched.dateOfImplementation &&
                      Boolean(formik.errors.dateOfImplementation),
                    helperText:
                      formik.touched.dateOfImplementation &&
                      formik.errors.dateOfImplementation,
                  },
                }}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                id="noOfStudents"
                name="noOfStudents"
                label="Number of students enrolled"
                value={formik.values.noOfStudents}
                onChange={formik.handleChange}
                error={
                  formik.touched.noOfStudents &&
                  Boolean(formik.errors.noOfStudents)
                }
                helperText={
                  formik.touched.noOfStudents && formik.errors.noOfStudents
                }
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfAgencies"
                name="nameOfAgencies"
                label="Name of the agencies/consultants involved with contact details (if any)"
                value={formik.values.nameOfAgencies}
                onChange={formik.handleChange}
                error={
                  formik.touched.nameOfAgencies &&
                  Boolean(formik.errors.nameOfAgencies)
                }
                helperText={
                  formik.touched.nameOfAgencies && formik.errors.nameOfAgencies
                }
              />
            </Grid>
            <Grid item md={12} container justifyContent="flex-end">
              <Button variant="contained" endIcon={<AddIcon />} type="submit">
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
                <th className="p-2">Name of the Program</th>
                <th className="p-2">Date of implementation</th>
                <th className="p-2">No. of students enrolled</th>
                <th className="p-2">Name of agencies involved</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="p-2">{data.nameOfProgram}</td>
                    <td className="p-2">{data.dateOfImplementation}</td>
                    <td className="p-2">{data.noOfStudents}</td>
                    <td className="p-2">{data.nameOfAgencies}</td>
                    <td className="p-2">
                      <IconButton
                        aria-label="delete"
                        color="error"
                        onClick={() => handleDelete(index)}
                      >
                        <Delete />
                      </IconButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
      <div className="flex justify-end mt-4">
        <Link href="/Forms/nss-ncc/3.4.3">
          <Button variant="contained" color="info" className="mr-4">
            Back
          </Button>
        </Link>
        <Link href="/Forms/nss-ncc/5.1.4">
          <Button variant="contained" color="info">
            Save and Continue
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default nccNss;
