import React, { useState } from "react";
import Link from "next/link";
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
  noOfSeats: Yup.number().required("Number of seats is required"),
  link: Yup.string().required("Link is required"),
});

function Form() {
  const formik = useFormik({
    initialValues: {
      year: "",
      noOfSeats: "",
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
      <p className="mb-3">
        <span className="font-bold">2.2</span> Number of seats earmarked for
        reserved category as per GOI/ State Govt. rule during the year;
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
                type="number"
                fullWidth
                variant="outlined"
                id="noOfSeats"
                name="noOfSeats"
                label="Number of seats earmarked for reserved category"
                value={formik.values.noOfSeats}
                onChange={formik.handleChange}
                error={
                  formik.touched.noOfSeats && Boolean(formik.errors.noOfSeats)
                }
                helperText={formik.touched.noOfSeats && formik.errors.noOfSeats}
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="link"
                name="link"
                label="Link to the supporting document"
                value={formik.values.link}
                onChange={formik.handleChange}
                error={formik.touched.link && Boolean(formik.errors.link)}
                helperText={formik.touched.link && formik.errors.link}
              />
            </Grid>
            <Grid item xs={12} md={12} container justifyContent="flex-end">
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
                <th className="p-2">
                  Number of seats earmarked for reserved category
                </th>
                <th className="p-2 truncate max-w-sm">
                  Link to the supporting document
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="px-2">{data.year}</td>
                    <td className="px-2">{data.noOfSeats}</td>
                    <td className="px-2 truncate max-w-sm text-link">
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
