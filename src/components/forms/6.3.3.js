import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, IconButton, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";
import { formatDate } from "../../components/helpers/formatDate";

const validationSchema = Yup.object({
  dateFrom: Yup.string().required("Date from is required"),
  dateTo: Yup.string().required("Date to is required"),
  typeofProgram: Yup.string().required("Type of program is required"),
  titleOfProgram: Yup.string().required("Title of the program is required"),
  noOfParticipants: Yup.number().required("Number of participants is required"),
});

function Form({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
      dateFrom: "",
      dateTo: "",
      typeofProgram: "",
      titleOfProgram: "",
      noOfParticipants: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values.dateFrom = formatDate(values.dateFrom);
      values.dateTo = formatDate(values.dateTo);
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
    formData.form_6_3_3 && setTableData(formData.form_6_3_3);
  }, []);

  useEffect(() => {
    setFormData({ ...formData, form_6_3_3: tableData });
  }, [tableData]);

  return (
    <div className="p-8">
      <p className="mb-3">
        <span className="font-bold">6.3.3</span> Number of professional
        development /administrative training programs organized by the
        institution for teaching and non-teaching staff during the year.
      </p>
      <p className="ml-10 mb-3 text-sm">
      <span className="font-bold">Note:</span> Classify the data and provide year wise.		
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={4}>
              <DatePicker
                id="dateFrom"
                name="dateFrom"
                label="Date from"
                value={
                  formik.values.dateFrom
                    ? new Date(formik.values.dateFrom)
                    : null
                }
                onChange={(newValue) => {
                  formik.setFieldValue("dateFrom", newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    error:
                      formik.touched.dateFrom &&
                      Boolean(formik.errors.dateFrom),
                    helperText:
                      formik.touched.dateFrom && formik.errors.dateFrom,
                  },
                }}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <DatePicker
                id="dateTo"
                name="dateTo"
                label="Date to"
                value={
                  formik.values.dateTo ? new Date(formik.values.dateTo) : null
                }
                onChange={(newValue) => {
                  formik.setFieldValue("dateTo", newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    error:
                      formik.touched.dateTo && Boolean(formik.errors.dateTo),
                    helperText: formik.touched.dateTo && formik.errors.dateTo,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                select
                variant="outlined"
                id="typeofProgram"
                name="typeofProgram"
                label="Type of program"
                value={formik.values.typeofProgram}
                onChange={formik.handleChange}
                error={
                  formik.touched.typeofProgram &&
                  Boolean(formik.errors.typeofProgram)
                }
                helperText={
                  formik.touched.typeofProgram && formik.errors.typeofProgram
                }
              >
                <MenuItem value="Professional Development Program for teaching staff">
                  Professional Development Program for teaching staff
                </MenuItem>
                <MenuItem value="Administrative Training Program for non-teaching staff">
                  Administrative Training Program for non-teaching staff
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="titleOfProgram"
                    name="titleOfProgram"
                    label="Title of the program"
                    value={formik.values.titleOfProgram}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.titleOfProgram &&
                        Boolean(formik.errors.titleOfProgram)
                    }
                    helperText={
                        formik.touched.titleOfProgram &&
                        formik.errors.titleOfProgram
                    }
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                id="noOfParticipants"
                name="noOfParticipants"
                label="Number of participants"
                value={formik.values.noOfParticipants}
                onChange={formik.handleChange}
                error={
                  formik.touched.noOfParticipants &&
                  Boolean(formik.errors.noOfParticipants)
                }
                helperText={
                  formik.touched.noOfParticipants &&
                  formik.errors.noOfParticipants
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
                <th className="py-2">Dates from - to</th>
                <th className="py-2">Type of program</th>
                <th className="py-2">Title of the program</th>
                <th className="py-2">Number of participants</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="py-2">
                      {data.dateFrom} - {data.dateTo}
                    </td>
                    <td className="py-2">{data.typeofProgram}</td>
                    <td className="py-2">{data.titleOfProgram}</td>
                    <td className="py-2">{data.noOfParticipants}</td>
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
