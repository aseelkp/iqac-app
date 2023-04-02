import React, { useState } from "react";
import { Grid, TextField, Button, IconButton, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";
import { formatDate } from "../../components/helpers/formatDate";

const validationSchema = Yup.object({
  year: Yup.string().required("Year is required"),
  nameOfAward: Yup.string().required("Name of award is required"),
  modeOfParticipation: Yup.string().required("Mode of participation is required"),
  awardedLevel: Yup.string().required("Awarded level is required"),
  areaOfAward: Yup.string().required("Area of award is required"),
  nameOfStudent: Yup.string().required("Name of student is required"),
});

function Form() {
  const formik = useFormik({
    initialValues: {
      year: "",
      nameOfAward: "",
      modeOfParticipation: "",
      awardedLevel: "",
      areaOfAward: "",
      nameOfStudent: "",
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
      <p className="mb-3">
        <span className="font-bold">5.3.1</span> Number of awards/medals for
        outstanding performance in sports/cultural activities at
        university/state/national / international level (award for a team event
        should be counted as one) during the year.
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfStudent"
                name="nameOfStudent"
                label="Name of the student"
                value={formik.values.nameOfStudent}
                onChange={formik.handleChange}
                error={
                  formik.touched.nameOfStudent &&
                  Boolean(formik.errors.nameOfStudent)
                }
                helperText={
                  formik.touched.nameOfStudent && formik.errors.nameOfStudent
                }
              />
            </Grid>
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
                id="nameOfAward"
                name="nameOfAward"
                label="Name of award"
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
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                select
                variant="outlined"
                id="modeOfParticipation"
                name="modeOfParticipation"
                label="Mode of participation"
                value={formik.values.modeOfParticipation}
                onChange={formik.handleChange}
                error={
                  formik.touched.modeOfParticipation &&
                  Boolean(formik.errors.modeOfParticipation)
                }
                helperText={
                  formik.touched.modeOfParticipation &&
                  formik.errors.modeOfParticipation
                }
              >
                <MenuItem value="Team">Team</MenuItem>
                <MenuItem value="Individual">Individual</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                select
                variant="outlined"
                id="awardedLevel"
                name="awardedLevel"
                label="Awarded level"
                value={formik.values.awardedLevel}
                onChange={formik.handleChange}
                error={
                  formik.touched.awardedLevel &&
                  Boolean(formik.errors.awardedLevel)
                }
                helperText={
                  formik.touched.awardedLevel && formik.errors.awardedLevel
                }
              >
                <MenuItem value="University">University</MenuItem>
                <MenuItem value="State">State</MenuItem>
                <MenuItem value="National">National</MenuItem>
                <MenuItem value="International">International</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                select
                variant="outlined"
                id="areaOfAward"
                name="areaOfAward"
                label="Sports/Cultural"
                value={formik.values.areaOfAward}
                onChange={formik.handleChange}
                error={
                  formik.touched.areaOfAward &&
                  Boolean(formik.errors.areaOfAward)
                }
                helperText={
                  formik.touched.areaOfAward && formik.errors.areaOfAward
                }
              >
                <MenuItem value="Sports">Sports</MenuItem>
                <MenuItem value="Cultural">Cultural</MenuItem>
              </TextField>
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
                <th className="py-2">Name of the student</th>
                <th className="py-2">Name of award</th>
                <th className="py-2">Mode of participation</th>
                <th className="py-2">Awarded level</th>
                <th className="py-2">Sports/Cultural</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="py-2">{data.year}</td>
                    <td className="py-2">{data.nameOfStudent}</td>
                    <td className="py-2">{data.nameOfAward}</td>
                    <td className="py-2">{data.modeOfParticipation}</td>
                    <td className="py-2">{data.awardedLevel}</td>
                    <td className="py-2">{data.areaOfAward}</td>
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
