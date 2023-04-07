import { useState, useEffect } from "react";
import Link from "next/link";
import { Grid, TextField, Button, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { CustomButton } from "@/components/styles";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";

const validationSchema = Yup.object({
  programName: Yup.string().required("Program name is required"),
  programCode: Yup.string().required("Program code is required"),
  nameOfCourse: Yup.string().required("Name of course is required"),
  courseCode: Yup.string().required("Course code is required"),
  yearOfOffering: Yup.number().required("Year of offering is required"),
  nameOfStudent: Yup.string().required("Name of student is required"),
  link: Yup.string().required("Link to the relevant document is required"),
});

function Form({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
      programName: "",
      programCode: "",
      nameOfCourse: "",
      courseCode: "",
      yearOfOffering: "",
      nameOfStudent: "",
      link: "",
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
    formData.form_1_3_2 && setTableData(formData.form_1_3_2);
  }, []);

  useEffect(() => {
    setFormData({ ...formData, form_1_3_2: tableData });
  }, [tableData]);

  return (
    <div>
      <p className="mb-3">
        <span className="font-bold">1.3.2</span> Number of courses that include experiential learning through project work/field work/internship during the year.
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="programName"
                    name="programName"
                    label="Program Name"
                    value={formik.values.programName}
                    onChange={formik.handleChange}
                    error={formik.touched.programName && Boolean(formik.errors.programName)}
                    helperText={formik.touched.programName && formik.errors.programName}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="programCode"
                    name="programCode"
                    label="Program Code"
                    value={formik.values.programCode}
                    onChange={formik.handleChange}
                    error={formik.touched.programCode && Boolean(formik.errors.programCode)}
                    helperText={formik.touched.programCode && formik.errors.programCode}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="nameOfCourse"
                    name="nameOfCourse"
                    label="Name of Course"
                    value={formik.values.nameOfCourse}
                    onChange={formik.handleChange}
                    error={formik.touched.nameOfCourse && Boolean(formik.errors.nameOfCourse)}
                    helperText={formik.touched.nameOfCourse && formik.errors.nameOfCourse}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="courseCode"
                    name="courseCode"
                    label="Course Code"
                    value={formik.values.courseCode}
                    onChange={formik.handleChange}
                    error={formik.touched.courseCode && Boolean(formik.errors.courseCode)}
                    helperText={formik.touched.courseCode && formik.errors.courseCode}
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <DatePicker
                views={["year"]}
                openTo="year"
                id="yearOfOffering"
                name="yearOfOffering"
                label="Year of Offering"
                value={formik.values.yearOfOffering ? new Date(formik.values.yearOfOffering, 0, 1) : null}
                onChange={(newValue) => {
                  const selectedYear = newValue.getFullYear();
                  formik.setFieldValue("yearOfOffering", selectedYear);
                }}
                renderInput={(params) => <TextField {...params} />}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    error: formik.touched.yearOfOffering && Boolean(formik.errors.yearOfOffering),
                    helperText: formik.touched.yearOfOffering && formik.errors.yearOfOffering,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="nameOfStudent"
                    name="nameOfStudent"
                    label="Name of Student"
                    value={formik.values.nameOfStudent}
                    onChange={formik.handleChange}
                    error={formik.touched.nameOfStudent && Boolean(formik.errors.nameOfStudent)}
                    helperText={formik.touched.nameOfStudent && formik.errors.nameOfStudent}
                />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="link"
                name="link"
                label="Link to relevant document"
                value={formik.values.link}
                onChange={formik.handleChange}
                error={formik.touched.link && Boolean(formik.errors.link)}
                helperText={formik.touched.link && formik.errors.link}
              />
            </Grid>

            <Grid item xs={12} container justifyContent="flex-end">
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
          <table className="w-full">
            <thead className="border-b-2 border-blue-700 text-left">
              <tr>
                <th className="p-2">Program Name</th>
                <th className="p-2">Program Code</th>
                <th className="p-2">Name of Course</th>
                <th className="p-2">Course Code</th>
                <th className="p-2">Year of Offering</th>
                <th className="p-2">Name of Student studied the course</th>
                <th className="p-2">Link to relevant document</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="px-2">{data.programName}</td>
                    <td className="px-2">{data.programCode}</td>
                    <td className="px-2">{data.nameOfCourse}</td>
                    <td className="px-2">{data.courseCode}</td>
                    <td className="px-2">{data.yearOfOffering}</td>
                    <td className="px-2">{data.nameOfStudent}</td>
                    <td className="px-2 truncate max-w-xs text-link">
                      <Link href={data.link} target="_blank">{data.link}</Link>
                    </td>
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
