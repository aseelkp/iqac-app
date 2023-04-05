import { useState, useEffect } from "react";
import Link from "next/link";
import { Grid, TextField, Button, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";

const validationSchema = Yup.object({
  year: Yup.number().required("Year of offering is required"),
  programCode: Yup.string().required("Program code is required"),
  programName: Yup.string().required("Program name is required"),
  noOfStudentsAppeared: Yup.number().required("Number of students is required"),
  noOfStudentsPassed: Yup.number().required("Number of students is required"),
});

function Form({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
      year: "",
      programCode: "",
      programName: "",
      noOfStudentsAppeared: "",
      noOfStudentsPassed: "",
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
  //     formData.form_1_3_2 && setTableData(formData.form_1_3_2);
  //   }, []);

  //   useEffect(() => {
  //     setFormData({ ...formData, form_1_3_2: tableData });
  //   }, [tableData]);

  return (
    <div>
      <p className="mb-3">
        <span className="font-bold">1.3.2</span> Number of courses that include
        experiential learning through project work/field work/internship during
        the year.
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <DatePicker
                views={["year"]}
                openTo="year"
                id="year"
                name="year"
                label="Year"
                value={
                  formik.values.year
                    ? new Date(formik.values.year, 0, 1)
                    : null
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
                    error:
                      formik.touched.year &&
                      Boolean(formik.errors.year),
                    helperText:
                      formik.touched.year &&
                      formik.errors.year,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                variant="outlined"
                id="programName"
                name="programName"
                label="Program Name"
                value={formik.values.programName}
                onChange={formik.handleChange}
                error={
                  formik.touched.programName &&
                  Boolean(formik.errors.programName)
                }
                helperText={
                  formik.touched.programName && formik.errors.programName
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                variant="outlined"
                id="programCode"
                name="programCode"
                label="Program Code"
                value={formik.values.programCode}
                onChange={formik.handleChange}
                error={
                  formik.touched.programCode &&
                  Boolean(formik.errors.programCode)
                }
                helperText={
                  formik.touched.programCode && formik.errors.programCode
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    type="number"
                    variant="outlined"
                    id="noOfStudentsAppeared"
                    name="noOfStudentsAppeared"
                    label="Number of students appeared in the final year examination"
                    value={formik.values.noOfStudentsAppeared}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.noOfStudentsAppeared &&
                        Boolean(formik.errors.noOfStudentsAppeared)
                    }
                    helperText={
                        formik.touched.noOfStudentsAppeared && formik.errors.noOfStudentsAppeared
                    }
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    type="number"
                    variant="outlined"
                    id="noOfStudentsPassed"
                    name="noOfStudentsPassed"
                    label="Number of students passed in the final year examination"
                    value={formik.values.noOfStudentsPassed}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.noOfStudentsPassed &&
                        Boolean(formik.errors.noOfStudentsPassed)
                    }
                    helperText={
                        formik.touched.noOfStudentsPassed && formik.errors.noOfStudentsPassed
                    }
                />
            </Grid>

            <Grid item xs={12} container justifyContent="flex-end">
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
                <th className="p-2">Year</th>
                <th className="p-2">Program Code</th>
                <th className="p-2">Program Name</th>
                <th className="p-2">Number of students appeared</th>
                <th className="p-2">Number of students passed</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="px-2">{data.year}</td>
                    <td className="px-2">{data.programCode}</td>
                    <td className="px-2">{data.programName}</td>
                    <td className="px-2">{data.noOfStudentsAppeared}</td>
                    <td className="px-2">{data.noOfStudentsPassed}</td>
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
