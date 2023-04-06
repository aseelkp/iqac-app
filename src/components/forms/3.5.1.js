import { useState, useEffect } from "react";
import { Grid, TextField, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { CustomButton } from "@/components/styles";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";

const validationSchema = Yup.object({
    titleOfActivity: Yup.string().required("Title of activity is required"),
    nameOfAgency: Yup.string().required("Name of agency is required"),
    nameOfParticipant: Yup.string().required("Name of participant is required"),
    yearOfCollaboration: Yup.number().required("Year of collaboration is required"),
    duration: Yup.string().required("Duration of collaboration is required"),
    natureOfActivity: Yup.string().required("Nature of activity is required"),
    link: Yup.string().required("Link is required"),
});

function Form({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
        titleOfActivity: "",
        nameOfAgency: "",
        nameOfParticipant: "",
        yearOfCollaboration: "",
        duration: "",
        natureOfActivity: "",
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

  //   useEffect(() => {
  //     formData.form_3_5_1 && setTableData(formData.form_3_5_1);
  //   }, []);

  //   useEffect(() => {
  //     setFormData({ ...formData, form_3_5_1: tableData });
  //   }, [tableData]);

  return (
    <div>
      <p className="mb-3">
        <span className="font-bold">3.5.1</span> Number of Collaborative activities for  research, Faculty exchange, Student exchange/ internship during the year.
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="titleOfActivity"
                    name="titleOfActivity"
                    label="Title of the collaborative activity"
                    value={formik.values.titleOfActivity}
                    onChange={formik.handleChange}
                    error={formik.touched.titleOfActivity && Boolean(formik.errors.titleOfActivity)}
                    helperText={formik.touched.titleOfActivity && formik.errors.titleOfActivity}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="nameOfAgency"
                    name="nameOfAgency"
                    label="Name of the collaborating agency with contact details"
                    value={formik.values.nameOfAgency}
                    onChange={formik.handleChange}
                    error={formik.touched.nameOfAgency && Boolean(formik.errors.nameOfAgency)}
                    helperText={formik.touched.nameOfAgency && formik.errors.nameOfAgency}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="nameOfParticipant"
                    name="nameOfParticipant"
                    label="Name of the participant"
                    value={formik.values.nameOfParticipant}
                    onChange={formik.handleChange}
                    error={formik.touched.nameOfParticipant && Boolean(formik.errors.nameOfParticipant)}
                    helperText={formik.touched.nameOfParticipant && formik.errors.nameOfParticipant}
                />
            </Grid>
            <Grid item xs={6} md={3}>
              <DatePicker
                views={["year"]}
                openTo="year"
                id="yearOfCollaboration"
                name="yearOfCollaboration"
                label="Year of collaboration"
                value={
                  formik.values.yearOfCollaboration
                    ? new Date(formik.values.yearOfCollaboration, 0, 1)
                    : null
                }
                onChange={(newValue) => {
                  const selectedYear = newValue.getFullYear();
                  formik.setFieldValue("yearOfCollaboration", selectedYear);
                }}
                renderInput={(params) => <TextField {...params} />}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    error:
                      formik.touched.yearOfCollaboration &&
                      Boolean(formik.errors.yearOfCollaboration),
                    helperText:
                      formik.touched.yearOfCollaboration &&
                      formik.errors.yearOfCollaboration,
                  },
                }}
              />
            </Grid>
            <Grid item xs={6} md={3}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="duration"
                    name="duration"
                    label="Duration"
                    value={formik.values.duration}
                    onChange={formik.handleChange}
                    error={formik.touched.duration && Boolean(formik.errors.duration)}
                    helperText={formik.touched.duration && formik.errors.duration}
                />
            </Grid>
            <Grid item xs={12} md={6}>  
                <TextField
                    fullWidth
                    variant="outlined"
                    id="natureOfActivity"
                    name="natureOfActivity"
                    label="Nature of the activity"
                    value={formik.values.natureOfActivity}
                    onChange={formik.handleChange}
                    error={formik.touched.natureOfActivity && Boolean(formik.errors.natureOfActivity)}
                    helperText={formik.touched.natureOfActivity && formik.errors.natureOfActivity}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="link"
                    name="link"
                    label="Link to the relavant document"
                    value={formik.values.link}
                    onChange={formik.handleChange}
                    error={formik.touched.link && Boolean(formik.errors.link)}
                    helperText={formik.touched.link && formik.errors.link}
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
                <th className="px-2">Title of the collaborative activity</th>
                <th className="px-2">Name of the collaborating agency with contact details</th>
                <th className="px-2">Name of the participant</th>
                <th className="px-2">Year of collaboration</th>
                <th className="px-2">Duration</th>
                <th className="px-2">Nature of the activity</th>
                <th className="px-2">Link to the relavant document</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="px-2">{data.titleOfActivity}</td>
                    <td className="px-2">{data.nameOfAgency}</td>
                    <td className="px-2">{data.nameOfParticipant}</td>
                    <td className="px-2">{data.yearOfCollaboration}</td>
                    <td className="px-2">{data.duration}</td>
                    <td className="px-2">{data.natureOfActivity}</td>
                    <td className="px-2 max-w-xs truncate text-link">
                      <Link href={data.link} target="_blank">
                        {data.link}
                      </Link>
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
