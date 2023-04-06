import React, { useState } from "react";
import { Grid, TextField, IconButton, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { CustomButton } from "@/components/styles";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";

const validationSchema = Yup.object({
  areaOfGovernance: Yup.string().required("Area of Governance is required"),
  nameOfVendor: Yup.string().required("Name of Vendor is required"),
  yearOfImplementation: Yup.number().required("Year of Implementation is required"),
});

function Form() {
  const formik = useFormik({
    initialValues: {
        areaOfGovernance: "",
        nameOfVendor: "",
        yearOfImplementation: "",
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
        <span className="font-bold">6.2.3</span> Implementation of e-governance in areas of operation;
      </p>
      <ol className="ml-10 list-decimal list-inside">
        <li>Administration</li>
        <li>Finance and Accounts</li>
        <li>Student Admission and Support</li>
        <li>Examination</li>
        </ol>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <TextField
                fullWidth
                select
                variant="outlined"
                id="areaOfGovernance"
                name="areaOfGovernance"
                label="Areas of e governance"
                value={formik.values.areaOfGovernance}
                onChange={formik.handleChange}
                error={
                    formik.touched.areaOfGovernance &&
                    Boolean(formik.errors.areaOfGovernance)
                }
                helperText={
                    formik.touched.areaOfGovernance && formik.errors.areaOfGovernance
                }
              >
                <MenuItem value="Administration">Administration</MenuItem>
                <MenuItem value="Finance and Accounts">Finance and Accounts</MenuItem>
                <MenuItem value="Student Admission and Support">Student Admission and Support</MenuItem>
                <MenuItem value="Examination">Examination</MenuItem>
              </TextField>
            </Grid>
            <Grid item md={4}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfVendor"
                name="nameOfVendor"
                label="Name of the Vendor with contact details"
                value={formik.values.nameOfVendor}
                onChange={formik.handleChange}
                error={
                    formik.touched.nameOfVendor &&
                    Boolean(formik.errors.nameOfVendor)
                }
                helperText={
                    formik.touched.nameOfVendor && formik.errors.nameOfVendor
                }
              />
            </Grid>
            <Grid item md={4}>
              <DatePicker
                views={["year"]}
                openTo="year"
                id="yearOfImplementation"
                name="yearOfImplementation"
                label="Year of implementation"
                value={formik.values.yearOfImplementation ? new Date(formik.values.yearOfImplementation, 0, 1) : null}
                onChange={(newValue) => {
                  const selectedYear = newValue.getFullYear();
                  formik.setFieldValue("yearOfImplementation", selectedYear);
                }}
                renderInput={(params) => <TextField {...params} />}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    error:
                      formik.touched.yearOfImplementation &&
                      Boolean(formik.errors.yearOfImplementation),
                    helperText:
                      formik.touched.yearOfImplementation &&
                      formik.errors.yearOfImplementation,
                  },
                }}
              />
            </Grid>
            <Grid item md={12} container justifyContent="flex-end">
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
                <th className="p-2">Area of e governance</th>
                <th className="p-2">Name of the Vendor with contact details</th>
                <th className="p-2">Year of implementation</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.areaOfGovernance}</td>
                    <td>{data.nameOfVendor}</td>
                    <td>{data.yearOfImplementation}</td>
                    <td>
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
