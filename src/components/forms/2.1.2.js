import React, { useState } from "react";
import Link from "next/link";
import { Grid, TextField, Button, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";

const validationSchema = Yup.object({
  year: Yup.number().required("Year is required"),
  earmarkedSC: Yup.number().required("Number of seats is required"),
  earmarkedST: Yup.number().required("Number of seats is required"),
  earmarkedOBC: Yup.number().required("Number of seats is required"),
  earmarkedGEN: Yup.number().required("Number of seats is required"),
  earmarkedOthers: Yup.number().required("Number of seats is required"),
  admittedSC: Yup.number().required("Number of students is required"),
  admittedST: Yup.number().required("Number of students is required"),
  admittedOBC: Yup.number().required("Number of students is required"),
  admittedGEN: Yup.number().required("Number of students is required"),
  admittedOthers: Yup.number().required("Number of students is required"),
});

function Form() {
  const formik = useFormik({
    initialValues: {
      year: "",
      earmarkedSC: "",
      earmarkedST: "",
      earmarkedOBC: "",
      earmarkedGEN: "",
      earmarkedOthers: "",
      admittedSC: "",
      admittedST: "",
      admittedOBC: "",
      admittedGEN: "",
      admittedOthers: "",
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
        <span className="font-bold">2.1.2</span> Number of seats filled against
        seats reserved for various categories (SC, ST, OBC, Divyangjan, etc. as
        per applicable reservation policy during the year (exclusive of
        supernumerary seats).
      </p>
      <p className="mb-3 text-sm">
        * In case of Minority Institutions, the column Others may be used and
        the status of reservation for minorities specified along with supporting
        documents.
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={12}>
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
            <Grid item md={12}>
              <h2 className="font-medium">
                Number of seats earmarked for reserved category as per GOI or
                State Government rule
              </h2>
            </Grid>
            <Grid item md={2.4}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="earmarkedSC"
                name="earmarkedSC"
                label="SC"
                value={formik.values.earmarkedSC}
                onChange={formik.handleChange}
                error={
                  formik.touched.earmarkedSC &&
                  Boolean(formik.errors.earmarkedSC)
                }
                helperText={
                  formik.touched.earmarkedSC && formik.errors.earmarkedSC
                }
              />
            </Grid>
            <Grid item md={2.4}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="earmarkedST"
                name="earmarkedST"
                label="ST"
                value={formik.values.earmarkedST}
                onChange={formik.handleChange}
                error={
                  formik.touched.earmarkedST &&
                  Boolean(formik.errors.earmarkedST)
                }
                helperText={
                  formik.touched.earmarkedST && formik.errors.earmarkedST
                }
              />
            </Grid>
            <Grid item md={2.4}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="earmarkedOBC"
                name="earmarkedOBC"
                label="OBC"
                value={formik.values.earmarkedOBC}
                onChange={formik.handleChange}
                error={
                  formik.touched.earmarkedOBC &&
                  Boolean(formik.errors.earmarkedOBC)
                }
                helperText={
                  formik.touched.earmarkedOBC && formik.errors.earmarkedOBC
                }
              />
            </Grid>
            <Grid item md={2.4}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="earmarkedGEN"
                name="earmarkedGEN"
                label="GEN"
                value={formik.values.earmarkedGEN}
                onChange={formik.handleChange}
                error={
                  formik.touched.earmarkedGEN &&
                  Boolean(formik.errors.earmarkedGEN)
                }
                helperText={
                  formik.touched.earmarkedGEN && formik.errors.earmarkedGEN
                }
              />
            </Grid>
            <Grid item md={2.4}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="earmarkedOthers"
                name="earmarkedOthers"
                label="Others"
                value={formik.values.earmarkedOthers}
                onChange={formik.handleChange}
                error={
                  formik.touched.earmarkedOthers &&
                  Boolean(formik.errors.earmarkedOthers)
                }
                helperText={
                  formik.touched.earmarkedOthers &&
                  formik.errors.earmarkedOthers
                }
              />
            </Grid>

            <Grid item md={12}>
              <h2 className="font-medium">
                Number of students admitted from the reserved category
              </h2>
            </Grid>
            <Grid item md={2.4}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="admittedSC"
                name="admittedSC"
                label="SC"
                value={formik.values.admittedSC}
                onChange={formik.handleChange}
                error={
                  formik.touched.admittedSC && Boolean(formik.errors.admittedSC)
                }
                helperText={
                  formik.touched.admittedSC && formik.errors.admittedSC
                }
              />
            </Grid>
            <Grid item md={2.4}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="admittedST"
                name="admittedST"
                label="ST"
                value={formik.values.admittedST}
                onChange={formik.handleChange}
                error={
                  formik.touched.admittedST && Boolean(formik.errors.admittedST)
                }
                helperText={
                  formik.touched.admittedST && formik.errors.admittedST
                }
              />
            </Grid>
            <Grid item md={2.4}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="admittedOBC"
                name="admittedOBC"
                label="OBC"
                value={formik.values.admittedOBC}
                onChange={formik.handleChange}
                error={
                  formik.touched.admittedOBC &&
                  Boolean(formik.errors.admittedOBC)
                }
                helperText={
                  formik.touched.admittedOBC && formik.errors.admittedOBC
                }
              />
            </Grid>
            <Grid item md={2.4}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="admittedGEN"
                name="admittedGEN"
                label="GEN"
                value={formik.values.admittedGEN}
                onChange={formik.handleChange}
                error={
                  formik.touched.admittedGEN &&
                  Boolean(formik.errors.admittedGEN)
                }
                helperText={
                  formik.touched.admittedGEN && formik.errors.admittedGEN
                }
              />
            </Grid>
            <Grid item md={2.4}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="admittedOthers"
                name="admittedOthers"
                label="Others"
                value={formik.values.admittedOthers}
                onChange={formik.handleChange}
                error={
                  formik.touched.admittedOthers &&
                  Boolean(formik.errors.admittedOthers)
                }
                helperText={
                  formik.touched.admittedOthers && formik.errors.admittedOthers
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
            <thead className="text-left">
              <tr>
                <th rowSpan={2} className="p-2 border-2 border-sky-700">
                  Year
                </th>
                <th colSpan={5} className="p-2 border-2 border-sky-700">
                  Number of seats earmarked for the reserved category
                </th>
                <th colSpan={5} className="p-2 border-2 border-sky-700">
                  Number of students admitted from the reserved category
                </th>
              </tr>
              <tr>
                <th className="p-2 border-2 border-sky-700">SC</th>
                <th className="p-2 border-2 border-sky-700">ST</th>
                <th className="p-2 border-2 border-sky-700">OBC</th>
                <th className="p-2 border-2 border-sky-700">GEN</th>
                <th className="p-2 border-2 border-sky-700">Others</th>
                <th className="p-2 border-2 border-sky-700">SC</th>
                <th className="p-2 border-2 border-sky-700">ST</th>
                <th className="p-2 border-2 border-sky-700">OBC</th>
                <th className="p-2 border-2 border-sky-700">GEN</th>
                <th className="p-2 border-2 border-sky-700">Others</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index} className="border-b-2">
                    <td className="p-2">{data.year}</td>
                    <td className="p-2">{data.earmarkedSC}</td>
                    <td className="p-2">{data.earmarkedST}</td>
                    <td className="p-2">{data.earmarkedOBC}</td>
                    <td className="p-2">{data.earmarkedGEN}</td>
                    <td className="p-2">{data.earmarkedOthers}</td>
                    <td className="p-2">{data.admittedSC}</td>
                    <td className="p-2">{data.admittedST}</td>
                    <td className="p-2">{data.admittedOBC}</td>
                    <td className="p-2">{data.admittedGEN}</td>
                    <td className="p-2">{data.admittedOthers}</td>
                    <td className="p-2">
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
