import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Grid, TextField, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { CustomButton } from "@/components/styles";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../FormWrapper";

const validationSchema = Yup.object({
  nameOfActivity: Yup.string().required("Required"),
  organisingUnit: Yup.string().required("Required"),
  nameOfScheme: Yup.string().required("Required"),
  yearOfActivity: Yup.number("Year should be a number.").required("Required"),
  noOfStudentsParticipated: Yup.number(
    "Number of students should be a number."
  ).required("Required"),
});

function Form({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
      nameOfActivity: "",
      organisingUnit: "",
      nameOfScheme: "",
      yearOfActivity: "",
      noOfStudentsParticipated: "",
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

  useEffect(() => {
    formData.form_3_4_3 && setTableData(formData.form_3_4_3);
  }, []);

  useEffect(() => {
    setFormData({ ...formData, form_3_4_3:tableData });
  }, [tableData]);

  return (
    <div>
      <p className="mb-3">
        <span className="font-bold">3.4.3</span> Number of extension and
        outreach Programmes conducted by the institution through NSS/
        NCC/Government and Government recognized bodies (including the
        programmes such as Swachh Bharat, AIDS awareness, Gender issues etc. )
        and/or those organised in collaboration with industry, community and
        NGOs during the year.
      </p>
      <p className="mb-3">
        <span className="font-bold">3.4.4</span> Number of students
        participating in extension activities at 3.4.3. above during the year.
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={12}>
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
                id="organisingUnit"
                name="organisingUnit"
                label="Organising unit/ agency/ collaborating agency"
                value={formik.values.organisingUnit}
                onChange={formik.handleChange}
                error={
                  formik.touched.organisingUnit &&
                  Boolean(formik.errors.organisingUnit)
                }
                helperText={
                  formik.touched.organisingUnit && formik.errors.organisingUnit
                }
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfScheme"
                name="nameOfScheme"
                label="Name of Scheme"
                value={formik.values.nameOfScheme}
                onChange={formik.handleChange}
                error={
                  formik.touched.nameOfScheme &&
                  Boolean(formik.errors.nameOfScheme)
                }
                helperText={
                  formik.touched.nameOfScheme && formik.errors.nameOfScheme
                }
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="yearOfActivity"
                name="yearOfActivity"
                label="Year of the activity"
                value={formik.values.yearOfActivity}
                onChange={formik.handleChange}
                error={
                  formik.touched.yearOfActivity &&
                  Boolean(formik.errors.yearOfActivity)
                }
                helperText={
                  formik.touched.yearOfActivity && formik.errors.yearOfActivity
                }
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="noOfStudentsParticipated"
                name="noOfStudentsParticipated"
                label="Number of students participated in the activity"
                value={formik.values.noOfStudentsParticipated}
                onChange={formik.handleChange}
                error={
                  formik.touched.noOfStudentsParticipated &&
                  Boolean(formik.errors.noOfStudentsParticipated)
                }
                helperText={
                  formik.touched.noOfStudentsParticipated &&
                  formik.errors.noOfStudentsParticipated
                }
              />
            </Grid>
            <Grid item md={12} container justifyContent="flex-end">
              <CustomButton
                variant="contained"
                endIcon={<AddIcon />}
                color="info"
                type="submit"
              >
                Add
              </CustomButton>
            </Grid>
          </Grid>
        </form>
      </FormWrapper>

      {tableData.length > 0 && (
        <div className="w-full mt-4 p-6">
          <table className="w-full text-left">
            <thead className="border-b-2 border-blue-700">
              <tr>
                <th className="p-2">Name of the activity</th>
                <th className="p-2">Organising unit</th>
                <th className="p-2">Name of the Scheme</th>
                <th className="p-2">Year of Activity</th>
                <th className="p-2">No. of students participated</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="px-2">{data.nameOfActivity}</td>
                    <td className="px-2">{data.organisingUnit}</td>
                    <td className="px-2">{data.nameOfScheme}</td>
                    <td className="px-2">{data.yearOfActivity}</td>
                    <td className="px-2">{data.noOfStudentsParticipated}</td>
                    <td className="px-2 text-right">
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
