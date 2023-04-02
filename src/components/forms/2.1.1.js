import React, { useState } from "react";
import { Grid, TextField, Button, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";

const validationSchema = Yup.object({
  programmeName: Yup.string().required("Programme Name is required"),
  programmeCode: Yup.string().required("Programme Code is required"),
  noOfSeatsSanctioned: Yup.number().required("Number of seats is required"),
  noOfStudentsAdmitted: Yup.number().required("Number of students is required"),
});

function Form() {
  const formik = useFormik({
    initialValues: {
      programmeName: "",
      programmeCode: "",
      noOfSeatsSanctioned: "",
      noOfStudentsAdmitted: "",
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
        <span className="font-bold">2.1.1</span> Enrolment Number
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="programmeName"
                name="programmeName"
                label="Programme Name"
                value={formik.values.programmeName}
                onChange={formik.handleChange}
                error={
                  formik.touched.programmeName &&
                  Boolean(formik.errors.programmeName)
                }
                helperText={
                  formik.touched.programmeName && formik.errors.programmeName
                }
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="programmeCode"
                name="programmeCode"
                label="Programme Code"
                value={formik.values.programmeCode}
                onChange={formik.handleChange}
                error={
                    formik.touched.programmeCode &&
                    Boolean(formik.errors.programmeCode)
                }
                helperText={
                    formik.touched.programmeCode && formik.errors.programmeCode
                }
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                id="noOfSeatsSanctioned"
                name="noOfSeatsSanctioned"
                label="Number of seats sanctioned"
                value={formik.values.noOfSeatsSanctioned}
                onChange={formik.handleChange}
                error={
                    formik.touched.noOfSeatsSanctioned &&
                    Boolean(formik.errors.noOfSeatsSanctioned)
                }
                helperText={
                    formik.touched.noOfSeatsSanctioned && formik.errors.noOfSeatsSanctioned
                }
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                id="noOfStudentsAdmitted"
                name="noOfStudentsAdmitted"
                label="Number of students admitted"
                value={formik.values.noOfStudentsAdmitted}
                onChange={formik.handleChange}
                error={
                    formik.touched.noOfStudentsAdmitted &&
                    Boolean(formik.errors.noOfStudentsAdmitted)
                }
                helperText={
                    formik.touched.noOfStudentsAdmitted && formik.errors.noOfStudentsAdmitted
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
                <th className="p-2">Programme Name</th>
                <th className="p-2">Programme Code</th>
                <th className="p-2">Number of seats sanctioned</th>
                <th className="p-2">Number of students admitted</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="p-2">{data.programmeName}</td>
                    <td className="p-2">{data.programmeCode}</td>
                    <td className="p-2">{data.noOfSeatsSanctioned}</td>
                    <td className="p-2">{data.noOfStudentsAdmitted}</td>
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
