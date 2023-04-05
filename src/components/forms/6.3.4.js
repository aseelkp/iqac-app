import { useState, useEffect } from "react";
import { Grid, TextField, Button, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";
import { formatDate } from "../../components/helpers/formatDate";

const validationSchema = Yup.object({
  nameOfTeacher: Yup.string().required("Name of the teacher is required"),
  titleOfProgram: Yup.string().required("Title of the program is required"),
  dateFrom: Yup.string().required("Date from is required"),
  dateTo: Yup.string().required("Date to is required"),
});

function Form({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
      nameOfTeacher: "",
      titleOfProgram: "",
      dateFrom: "",
      dateTo: "",
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
    formData.form_6_3_4 && setTableData(formData.form_6_3_4);
  }, []);

  useEffect(() => {
    setFormData({ ...formData, form_6_3_4: tableData });
  }, [tableData]);

  return (
    <div className="p-8">
      <p className="mb-3">
        <span className="font-bold">6.3.4</span> Number of teachers undergoing
        online/face-to-face Faculty development Programmes (FDP) during the year
        (Professional Development Programmes, Orientation / Induction
        Programmes, Refresher Course, Short Term Course etc.).
      </p>
      <p className="ml-10 mb-3 text-sm">
        <span className="font-bold">Note:</span> Classify the data and provide year wise.
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="nameOfTeacher"
                    name="nameOfTeacher"
                    label="Name of teacher who attended"
                    value={formik.values.nameOfTeacher}
                    onChange={formik.handleChange}
                    error={
                        formik.touched.nameOfTeacher &&
                        Boolean(formik.errors.nameOfTeacher)
                    }
                    helperText={
                        formik.touched.nameOfTeacher && formik.errors.nameOfTeacher
                    }
                />
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
                  formik.touched.titleOfProgram && formik.errors.titleOfProgram
                }
              />
            </Grid>
            <Grid item xs={6} md={6}>
              <DatePicker
                id="dateFrom"
                name="dateFrom"
                label="Duration from"
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
            <Grid item xs={6} md={6}>
              <DatePicker
                id="dateTo"
                name="dateTo"
                label="Duration to"
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
                <th className="py-2">Name of teacher who attended</th>
                <th className="py-2">Title of the program</th>
                <th className="py-2">Duration from - to</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="py-2">{data.nameOfTeacher}</td>
                    <td className="py-2">{data.titleOfProgram}</td>
                    <td className="py-2">
                      {data.dateFrom} - {data.dateTo}
                    </td>
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
