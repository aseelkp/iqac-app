import { useState, useEffect } from "react";
import { Grid, TextField, Button, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";

const validationSchema = Yup.object({
    nameOfOrganisation: Yup.string().required("Name of organisation is required"),
    nameOfInstitution: Yup.string().required("Name of institution is required"),
    yearOfSigning: Yup.number().required("Year of signing is required"),
    duration: Yup.string().required("Duration of collaboration is required"),
    nameOfActivity: Yup.string().required("Name of activity is required"),
    noOfParticipants: Yup.number().required("Number of participants is required"),
});

function Form({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
        nameOfOrganisation: "",
        nameOfInstitution: "",
        yearOfSigning: "",
        duration: "",
        nameOfActivity: "",
        noOfParticipants: "",
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
  //     formData.form_3_5_2 && setTableData(formData.form_3_5_2);
  //   }, []);

  //   useEffect(() => {
  //     setFormData({ ...formData, form_3_5_2: tableData });
  //   }, [tableData]);

  return (
    <div>
      <p className="mb-3">
        <span className="font-bold">3.5.2</span> Number of functional MoUs with institutions, other universities, industries, corporate houses etc. during the year.
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="nameOfOrganisation"
                    name="nameOfOrganisation"
                    label="Organisation with which MoU is signed"
                    value={formik.values.nameOfOrganisation}
                    onChange={formik.handleChange}
                    error={formik.touched.nameOfOrganisation && Boolean(formik.errors.nameOfOrganisation)}
                    helperText={formik.touched.nameOfOrganisation && formik.errors.nameOfOrganisation}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="nameOfInstitution"
                    name="nameOfInstitution"
                    label="Name of the institution/ industry/ corporate house"
                    value={formik.values.nameOfInstitution}
                    onChange={formik.handleChange}
                    error={formik.touched.nameOfInstitution && Boolean(formik.errors.nameOfInstitution)}
                    helperText={formik.touched.nameOfInstitution && formik.errors.nameOfInstitution}
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <DatePicker
                views={["year"]}
                openTo="year"
                id="yearOfSigning"
                name="yearOfSigning"
                label="Year of signing MoU"
                value={
                  formik.values.yearOfSigning
                    ? new Date(formik.values.yearOfSigning, 0, 1)
                    : null
                }
                onChange={(newValue) => {
                  const selectedYear = newValue.getFullYear();
                  formik.setFieldValue("yearOfSigning", selectedYear);
                }}
                renderInput={(params) => <TextField {...params} />}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    error:
                      formik.touched.yearOfSigning &&
                      Boolean(formik.errors.yearOfSigning),
                    helperText:
                      formik.touched.yearOfSigning &&
                      formik.errors.yearOfSigning,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="duration"
                    name="duration"
                    label="Duration of MoU"
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
                    id="nameOfActivity"
                    name="nameOfActivity"
                    label="List the  actual  activities under each MOU year wise"
                    value={formik.values.nameOfActivity}
                    onChange={formik.handleChange}
                    error={formik.touched.nameOfActivity && Boolean(formik.errors.nameOfActivity)}
                    helperText={formik.touched.nameOfActivity && formik.errors.nameOfActivity}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="noOfParticipants"
                    name="noOfParticipants"
                    label="Number of students/teachers participated under MoUs"
                    value={formik.values.noOfParticipants}
                    onChange={formik.handleChange}
                    error={formik.touched.noOfParticipants && Boolean(formik.errors.noOfParticipants)}
                    helperText={formik.touched.noOfParticipants && formik.errors.noOfParticipants}
                />
            </Grid>
            

            <Grid item xs={12} container justifyContent="flex-end">
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
                <th className="p-2">Organisation with which MoU is signed</th>
                <th className="p-2">Name of the institution/ industry/ corporate house</th>
                <th className="p-2">Year of signing MoU</th>
                <th className="p-2">Duration</th>
                <th className="p-2">List of activities</th>
                <th className="p-2">Number of students/teachers participated under MoUs</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="px-2">{data.nameOfOrganisation}</td>
                    <td className="px-2">{data.nameOfInstitution}</td>
                    <td className="px-2">{data.yearOfSigning}</td>
                    <td className="px-2">{data.duration}</td>
                    <td className="px-2">{data.nameOfActivity}</td>
                    <td className="px-2">{data.noOfParticipants}</td>
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
