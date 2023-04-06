import { useState, useEffect } from "react";
import { Grid, TextField, Button, IconButton, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";

const validationSchema = Yup.object({
  year: Yup.number().required("Year is required"),
  nameOfTeacher: Yup.string().required("Name of Teacher is required"),
  nameOfConference: Yup.string(),
  nameOfProBody: Yup.string(),
  amount: Yup.number().required("Amount is required"),
});

function Form({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
        year: "",
        nameOfTeacher: "",
        nameOfConference: "",
        nameOfProBody: "",
        amount: "",
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
    formData.form_6_3_2 && setTableData(formData.form_6_3_2);
  }, []);

  useEffect(() => {
    setFormData({ ...formData, form_6_3_2:tableData });
  }, [tableData]);

  return (
    <div>
      <p className="mb-3">
        <span className="font-bold">6.3.2</span> Number of teachers provided with financial support to attend conferences/ workshops and towards membership fee of professional bodies during the year.
      </p>

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
                value={formik.values.year ? new Date(formik.values.year, 0, 1) : null}
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
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfTeacher"
                name="nameOfTeacher"
                label="Name of the Teacher"
                value={formik.values.nameOfTeacher}
                onChange={formik.handleChange}
                error={formik.touched.nameOfTeacher && Boolean(formik.errors.nameOfTeacher)}
                helperText={formik.touched.nameOfTeacher && formik.errors.nameOfTeacher}
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfConference"
                name="nameOfConference"
                label="Name of conference/ workshop attended for which financial support provided"
                value={formik.values.nameOfConference}
                onChange={formik.handleChange}
                error={formik.touched.nameOfConference && Boolean(formik.errors.nameOfConference)}
                helperText={formik.touched.nameOfConference && formik.errors.nameOfConference}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfProBody"
                name="nameOfProBody"
                label="Name of the professional body for which membership fee is provided"
                value={formik.values.nameOfProBody}
                onChange={formik.handleChange}
                error={formik.touched.nameOfProBody && Boolean(formik.errors.nameOfProBody)}
                helperText={formik.touched.nameOfProBody && formik.errors.nameOfProBody}
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                id="amount"
                name="amount"
                label="Amount of support"
                value={formik.values.amount}
                onChange={formik.handleChange}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
                helperText={formik.touched.amount && formik.errors.amount}
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
          <table className="w-full table-fixed">
            <thead className="border-b-2 border-blue-700 text-left">
              <tr>
                <th className="p-2">Year</th>
                <th className="p-2">Name of the Teacher</th>
                <th className="p-2">Name of conference/ workshop attended for which financial support provided</th>
                <th className="p-2">Name of the professional body for which membership fee is provided</th>
                <th className="p-2">Amount of support</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="px-2">{data.year}</td>
                    <td className="px-2">{data.nameOfTeacher}</td>
                    <td className="px-2">{data.nameOfConference}</td>
                    <td className="px-2">{data.nameOfProBody}</td>
                    <td className="px-2">{data.amount}</td>
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
