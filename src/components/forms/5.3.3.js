import { useState, useEffect } from "react";
import { Grid, TextField, IconButton, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { CustomButton } from "@/components/styles";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";
import { formatDate } from "../../components/helpers/formatDate";

const validationSchema = Yup.object({
  date: Yup.string().required("Date is required"),
  nameOfActivity: Yup.string().required("Name of activity is required"),
  nameOfStudent: Yup.string().required("Name of student is required"),
});

function Form({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
      date: "",
      nameOfActivity: "",
      nameOfStudent: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      values.date = formatDate(values.date);
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
    formData.form_5_3_3 && setTableData(formData.form_5_3_3);
  }, []);

  useEffect(() => {
    setFormData({ ...formData, form_5_3_3: tableData });
  }, [tableData]);

  return (
    <div>
      <p className="mb-3">
        <span className="font-bold">5.3.3</span> Number of sports and cultural
        events/competitions in which students of the Institution participated
        during the year (organized by the institution/other institutions).
      </p>
      <p className="ml-10 mb-3 text-sm">
        <span className="font-bold">Note:</span> Classify the data and provide
        year wise
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6} md={6}>
              <DatePicker
                id="date"
                name="date"
                label="Date of event/activity"
                value={
                  formik.values.date
                    ? new Date(formik.values.date)
                    : null
                }
                onChange={(newValue) => {
                  formik.setFieldValue("date", newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    error:
                      formik.touched.date &&
                      Boolean(formik.errors.date),
                    helperText:
                      formik.touched.date && formik.errors.date,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfActivity"
                name="nameOfActivity"
                label="Title of the event"
                value={formik.values.nameOfActivity}
                onChange={formik.handleChange}
                error={
                  formik.touched.nameOfActivity &&
                  Boolean(formik.errors.nameOfActivity)
                }
                helperText={
                  formik.touched.nameOfActivity && formik.errors.nameOfActivity
                }
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfStudent"
                name="nameOfStudent"
                label="Number of participants"
                value={formik.values.nameOfStudent}
                onChange={formik.handleChange}
                error={
                  formik.touched.nameOfStudent &&
                  Boolean(formik.errors.nameOfStudent)
                }
                helperText={
                  formik.touched.nameOfStudent &&
                  formik.errors.nameOfStudent
                }
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
                <th className="py-2">Date of event</th>
                <th className="py-2">Name of event</th>
                <th className="py-2">Name of student participated</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="py-2">{data.date}</td>
                    <td className="py-2">{data.nameOfActivity}</td>
                    <td className="py-2">{data.nameOfStudent}</td>
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
