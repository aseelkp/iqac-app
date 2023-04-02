import React, { useState } from "react";
import Link from "next/link";
import { Grid, TextField, Button, IconButton, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";

const validationSchema = Yup.object({
  year: Yup.number().required("Year is required"),
  nameOfScheme: Yup.string().required("Name of scheme is required"),
  typeOfScheme: Yup.string().required("Type of scheme is required"),
  noOfStudents: Yup.number().required("Number of students is required"),
  amount: Yup.number().required("Amount is required"),
  link: Yup.string().required("Link is required"),
});

function Form() {
  const formik = useFormik({
    initialValues: {
      year: "",
      nameOfScheme: "",
      typeOfScheme: "",
      noOfStudents: "",
      amount: "",
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

  return (
    <div className="p-8">
      <p className="mb-1">
        <span className="font-bold">5.1.1</span> Number of students benefited by scholarships and free ships provided by the Government during the year.
      </p>
      <p className="mb-3">
        <span className="font-bold">5.1.2</span> Number of students benefitted by scholarships, free ships etc. provided by the institution / non- government bodies, industries, individuals, philanthropists during the year.
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
                id="nameOfScheme"
                name="nameOfScheme"
                label="Name of scheme"
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
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                variant="outlined"
                id="typeOfScheme"
                name="typeOfScheme"
                label="Type of scheme"
                value={formik.values.typeOfScheme}
                onChange={formik.handleChange}
                error={
                    formik.touched.typeOfScheme &&
                    Boolean(formik.errors.typeOfScheme)
                }
                helperText={
                    formik.touched.typeOfScheme && formik.errors.typeOfScheme
                }
              >
                <MenuItem value="Government scheme">
                  Government scheme
                </MenuItem>
                <MenuItem value="Institution's scheme">
                  Institution's scheme
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="noOfStudents"
                name="noOfStudents"
                label="Number of students"
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
            <Grid item xs={12} md={6}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="amount"
                name="amount"
                label="Amount"
                value={formik.values.amount}
                onChange={formik.handleChange}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
                helperText={formik.touched.amount && formik.errors.amount}
              />
            </Grid>
            <Grid item xs={12} md={6}>
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
                <th className="p-2">year</th>
                <th className="p-2">Name of the scheme</th>
                <th className="p-2">Type of scheme</th>
                <th className="p-2">Number of students</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Link to relevant document</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.year}</td>
                    <td>{data.nameOfScheme}</td>
                    <td>{data.typeOfScheme}</td>
                    <td>{data.noOfStudents}</td>
                    <td>{data.amount}</td>
                    <td className="max-w-xs truncate text-blue-600"><Link href={data.link} target="_blank">{data.link}</Link></td>
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
