import React, { useState } from "react";
import { Grid, TextField, Button, IconButton, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";

const validationSchema = Yup.object({
  year: Yup.number().required("Year is required"),
  nameOfTeacher: Yup.string().required("Name of the teacher is required"),
  nameOfBody: Yup.string().required("Name of the body is required"),
});

function Form() {
  const formik = useFormik({
    initialValues: {
      year: "",
      nameOfTeacher: "",
      nameOfBody: "",
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
      <p className="mb-1">
        <span className="font-bold">1.1.3</span> Teachers of the Institution
        participate in following activities related to curriculum development
        and assessment of the affiliating University and/are represented on the
        following academic bodies during the year.
      </p>
      <ol className="list-decimal list-inside mb-3 ml-10">
        <li>Academic council/BoS of Affiliating university</li>
        <li>Setting of question papers for UG/PG programs</li>
        <li>Design and Development of Curriculum for Add on/ certificate/ Diploma Courses</li>
        <li>Assessment /evaluation process of the affiliating University</li>
      </ol>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <DatePicker
                views={["year"]}
                openTo="year"
                id="year"
                name="year"
                label="Year"
                value={
                  formik.values.year ? new Date(formik.values.year, 0, 1) : null
                }
                onChange={(newValue) => {
                  const selectedYear = newValue.getFullYear();
                  formik.setFieldValue("year", selectedYear);
                }}
                renderInput={(params) => <TextField {...params} />}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    error: formik.touched.year && Boolean(formik.errors.year),
                    helperText: formik.touched.year && formik.errors.year,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfTeacher"
                name="nameOfTeacher"
                label="Name  of teacher participated"
                value={formik.values.nameOfTeacher}
                onChange={formik.handleChange}
                error={
                  formik.touched.nameOfTeacher &&
                  Boolean(formik.errors.nameOfTeacher)
                }
                helperText={
                  formik.touched.nameOfTeacher && formik.errors.nameOfTeacher
                }
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfBody"
                name="nameOfBody"
                label="Name of the body in which full time teacher participated"
                value={formik.values.nameOfBody}
                onChange={formik.handleChange}
                error={
                  formik.touched.nameOfBody && Boolean(formik.errors.nameOfBody)
                }
                helperText={
                  formik.touched.nameOfBody && formik.errors.nameOfBody
                }
              />
            </Grid>

            <Grid item md={12} container justifyContent="flex-end">
              <Button
                variant="contained"
                endIcon={<AddIcon />}
                color="info"
                type="submit"
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </form>
      </FormWrapper>

      {tableData.length > 0 && (
        <div className="w-full mt-4 p-6">
          <table className="w-full">
            <thead className="border-b-2 border-blue-700 text-left">
              <tr>
                <th className="py-2">Year</th>
                <th className="py-2">Name of teacher participated</th>
                <th className="py-2">
                  Name of the body in which full time teacher participated
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.year}</td>
                    <td>{data.nameOfTeacher}</td>
                    <td>{data.nameOfBody}</td>
                    <td className="text-right">
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
    </div>
  );
}

export default Form;
