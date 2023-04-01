import React from "react";
import { Grid, Paper, TextField, Button } from "@mui/material";

import { useFormik } from "formik";
import * as Yup from "yup";

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
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">NCC and NSS</h1>
      <p className="mb-3">
        3.4.2 Number of awards and recognitions received for extension
        activities from government/ government recognized bodies during the
        year.
      </p>

      <Paper elevation={5} className="p-4">
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
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="yearOfAward"
                name="yearOfAward"
                label="Year of Award"
                value={formik.values.yearOfAward}
                onChange={formik.handleChange}
                error={
                  formik.touched.yearOfAward &&
                  Boolean(formik.errors.yearOfAward)
                }
                helperText={
                  formik.touched.yearOfAward && formik.errors.yearOfAward
                }
              />
            </Grid>
            <Grid item md={12} container justifyContent="flex-end">
              <Button variant="contained" color="info" type="submit">
                Add
              </Button>
            </Grid>
        </Grid>
        </form>
      </Paper>
    </div>
  );
}

export default nccNss;
