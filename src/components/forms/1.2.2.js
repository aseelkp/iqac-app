import { useState, useEffect } from "react";
import { Grid, TextField, Button, IconButton, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../FormWrapper";

const validationSchema = Yup.object({
  nameOfProgram: Yup.string().required("Programme Name is required"),
  courseCode: Yup.string(),
  yearOfOffering: Yup.number().required("Year of offering is required"),
  noOfTimesOffered: Yup.number().required(
    "Number of times offered is required"
  ),
  duration: Yup.string().required("Duration is required"),
  noOfStudentsEnrolled: Yup.number().required(
    "Number of students enrolled is required"
  ),
  noOfStudentsCompleting: Yup.number().required(
    "Number of students completing is required"
  ),
});

function Form({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
      nameOfProgram: "",
      courseCode: "",
      yearOfOffering: "",
      noOfTimesOffered: "",
      duration: "",
      noOfStudentsEnrolled: "",
      noOfStudentsCompleting: "",
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

  //   useEffect(() => {
  //     formData.form_1_2_2 && setTableData(formData.form_1_2_2);
  //   }, []);

  //   useEffect(() => {
  //     setFormData({ ...formData, form_1_2_2:tableData });
  //   }, [tableData]);

  return (
    <div>
      <p className="mb-1">
        <span className="font-bold">1.2.2</span> Number of Add on /Certificate
        programs offered during the year.
      </p>
      <p className="mb-3">
        <span className="font-bold">1.2.3</span> Number of students enrolled in
        Certificate/ Add-on programs as against the total number of students
        during the year.
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfProgram"
                name="nameOfProgram"
                label="Name of Add on /Certificate programs offered"
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
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="courseCode"
                name="courseCode"
                label="Course Code(if any)"
                value={formik.values.courseCode}
                onChange={formik.handleChange}
                error={
                  formik.touched.courseCode && Boolean(formik.errors.courseCode)
                }
                helperText={
                  formik.touched.courseCode && formik.errors.courseCode
                }
              />
            </Grid>
            <Grid item xs={12} md={2.4}>
              <DatePicker
                views={["year"]}
                openTo="year"
                id="yearOfOffering"
                name="yearOfOffering"
                label="Year of offering"
                value={
                  formik.values.yearOfOffering
                    ? new Date(formik.values.yearOfOffering, 0, 1)
                    : null
                }
                onChange={(newValue) => {
                  const selectedYear = newValue.getFullYear();
                  formik.setFieldValue("yearOfOffering", selectedYear);
                }}
                renderInput={(params) => <TextField {...params} />}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    error:
                      formik.touched.yearOfOffering &&
                      Boolean(formik.errors.yearOfOffering),
                    helperText:
                      formik.touched.yearOfOffering &&
                      formik.errors.yearOfOffering,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={2.4}>
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                id="noOfTimesOffered"
                name="noOfTimesOffered"
                label="No. of times offered during the year"
                value={formik.values.noOfTimesOffered}
                onChange={formik.handleChange}
                error={
                  formik.touched.noOfTimesOffered &&
                  Boolean(formik.errors.noOfTimesOffered)
                }
                helperText={
                  formik.touched.noOfTimesOffered &&
                  formik.errors.noOfTimesOffered
                }
              />
            </Grid>
            <Grid item xs={12} md={2.4}>
              <TextField
                fullWidth
                variant="outlined"
                id="duration"
                name="duration"
                label="Duration of course"
                value={formik.values.duration}
                onChange={formik.handleChange}
                error={
                  formik.touched.duration && Boolean(formik.errors.duration)
                }
                helperText={formik.touched.duration && formik.errors.duration}
              />
            </Grid>
            <Grid item xs={12} md={2.4}>
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                id="noOfStudentsEnrolled"
                name="noOfStudentsEnrolled"
                label="No. of students enrolled"
                value={formik.values.noOfStudentsEnrolled}
                onChange={formik.handleChange}
                error={
                  formik.touched.noOfStudentsEnrolled &&
                  Boolean(formik.errors.noOfStudentsEnrolled)
                }
                helperText={
                  formik.touched.noOfStudentsEnrolled &&
                  formik.errors.noOfStudentsEnrolled
                }
              />
            </Grid>
            <Grid item xs={12} md={2.4}>
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                id="noOfStudentsCompleting"
                name="noOfStudentsCompleting"
                label="No. of students completing the course"
                value={formik.values.noOfStudentsCompleting}
                onChange={formik.handleChange}
                error={
                  formik.touched.noOfStudentsCompleting &&
                  Boolean(formik.errors.noOfStudentsCompleting)
                }
                helperText={
                  formik.touched.noOfStudentsCompleting &&
                  formik.errors.noOfStudentsCompleting
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
                <th className="p-2">Name of Add on /Certificate programs offered</th>
                <th className="p-2">Course Code(if any)</th>
                <th className="p-2">Year of offering</th>
                <th className="p-2">No. of times offered during the year</th>
                <th className="p-2">Duration of course</th>
                <th className="p-2">No. of students enrolled</th>
                <th className="p-2">No. of students completing the course</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="px-2">{data.nameOfProgram}</td>
                    <td className="px-2">{data.courseCode}</td>
                    <td className="px-2">{data.yearOfOffering}</td>
                    <td className="px-2">{data.noOfTimesOffered}</td>
                    <td className="px-2">{data.duration}</td>
                    <td className="px-2">{data.noOfStudentsEnrolled}</td>
                    <td className="px-2">{data.noOfStudentsCompleting}</td>
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
