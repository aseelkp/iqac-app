import { useState, useEffect } from "react";
import { Grid, TextField, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { CustomButton } from "@/components/styles";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";

const validationSchema = Yup.object({
    year: Yup.number().required("Year is required"),
    nameOfStudent: Yup.string().required("Name of student is required"),
    program: Yup.string().required("Programme is required"),
    nameOfJoiningInstitution: Yup.string().required("Name of joining institution is required"),
    nameOfProgramJoined: Yup.string().required("Name of program joined is required"),
});

function Form({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
        year: "",
        nameOfStudent: "",
        program: "",
        nameOfJoiningInstitution: "",
        nameOfProgramJoined: "",
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
  //     formData.form_5_2_2 && setTableData(formData.form_5_2_2);
  //   }, []);

  //   useEffect(() => {
  //     setFormData({ ...formData, form_5_2_2: tableData });
  //   }, [tableData]);

  return (
    <div>
      <p className="mb-3">
        <span className="font-bold">5.2.2</span> Number of students progressing to higher education during the year.
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
                    id="nameOfStudent"
                    name="nameOfStudent"
                    label="Name of student enrolling into higher education"
                    variant="outlined"
                    value={formik.values.nameOfStudent}
                    onChange={formik.handleChange}
                    error={formik.touched.nameOfStudent && Boolean(formik.errors.nameOfStudent)}
                    helperText={formik.touched.nameOfStudent && formik.errors.nameOfStudent}
                />
            </Grid>
            <Grid item xs={12} md={4}>
                <TextField
                    fullWidth
                    id="program"
                    name="program"
                    label="Program graduated from"
                    variant="outlined"
                    value={formik.values.program}
                    onChange={formik.handleChange}
                    error={formik.touched.program && Boolean(formik.errors.program)}
                    helperText={formik.touched.program && formik.errors.program}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    id="nameOfJoiningInstitution"
                    name="nameOfJoiningInstitution"
                    label="Name of institution joined"
                    variant="outlined"
                    value={formik.values.nameOfJoiningInstitution}
                    onChange={formik.handleChange}
                    error={formik.touched.nameOfJoiningInstitution && Boolean(formik.errors.nameOfJoiningInstitution)}
                    helperText={formik.touched.nameOfJoiningInstitution && formik.errors.nameOfJoiningInstitution}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    id="nameOfProgramJoined"
                    name="nameOfProgramJoined"
                    label="Name of program admitted to"
                    variant="outlined"
                    value={formik.values.nameOfProgramJoined}
                    onChange={formik.handleChange}
                    error={formik.touched.nameOfProgramJoined && Boolean(formik.errors.nameOfProgramJoined)}
                    helperText={formik.touched.nameOfProgramJoined && formik.errors.nameOfProgramJoined}
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
                <th className="p-2">Year</th>
                <th className="p-2">Name of student enrolling into higher education</th>
                <th className="p-2">Program graduated from</th>
                <th className="p-2">Name of institution joined</th>
                <th className="p-2">Name of programme admitted to</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="px-2">{data.year}</td>
                    <td className="px-2">{data.nameOfStudent}</td>
                    <td className="px-2">{data.program}</td>
                    <td className="px-2">{data.nameOfJoiningInstitution}</td>
                    <td className="px-2">{data.nameOfProgramJoined}</td>
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