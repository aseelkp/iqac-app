import { useState, useEffect } from "react";
import { Grid, TextField, IconButton, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { CustomButton } from "@/components/styles";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../FormWrapper";

const validationSchema = Yup.object({
  yearOfActivity: Yup.string().required("Year is required"),
  typeOfActivity: Yup.string().required("Type of activity is required"),
  nameOfActivity: Yup.string().required("Name of activity is required"),
  noOfStudentsParticipated: Yup.number(
    "Number of students should be a number"
  ).required("Number of students is required"),
  noOfStudentsPlaced: Yup.number(
    "Number of students placed should be a number"
  ).required("Number of students placed is required"),
  relevantLink: Yup.string().required("Relevant link is required"),
});

function Form({ formData, setFormData }) {
  const [tableData, setTableData] = useState([]);
  const formik = useFormik({
    initialValues: {
      yearOfActivity: "",
      typeOfActivity: "",
      nameOfActivity: "",
      noOfStudentsParticipated: "",
      noOfStudentsPlaced: "",
      relevantLink: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setTableData([...tableData, values]);
      formik.resetForm();
    },
  });

  const handleDelete = (index) => {
    const data = [...tableData];
    data.splice(index, 1);
    setTableData(data);
  };

  useEffect(() => {
    formData.form_5_1_4 && setTableData(formData.form_5_1_4);
  }, []);

  useEffect(() => {
    setFormData({ ...formData, form_5_1_4:tableData });
  }, [tableData]);

  return (
    <div>
      <p>
        <span className="font-bold">5.1.4</span> Number of students benefitted
        by guidance for competitive examinations and career counseling offered
        by the Institution during the year
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <DatePicker
                views={["year"]}
                openTo="year"
                id="yearOfActivity"
                name="yearOfActivity"
                label="Year of activity"
                value={formik.values.yearOfActivity ? new Date(formik.values.yearOfActivity, 0, 1) : null}
                onChange={(newValue) => {
                  const selectedYear = newValue.getFullYear();
                  formik.setFieldValue("yearOfActivity", selectedYear);
                }}
                renderInput={(params) => <TextField {...params} />}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    error:
                      formik.touched.yearOfActivity &&
                      Boolean(formik.errors.yearOfActivity),
                    helperText:
                      formik.touched.yearOfActivity &&
                      formik.errors.yearOfActivity,
                  },
                }}
              />
            </Grid>
            {/* Select field for type of activity */}
            <Grid item md={6}>
              <TextField
                fullWidth
                select
                variant="outlined"
                id="typeOfActivity"
                name="typeOfActivity"
                label="Type of activity"
                value={formik.values.typeOfActivity}
                onChange={formik.handleChange}
                error={
                  formik.touched.typeOfActivity &&
                  Boolean(formik.errors.typeOfActivity)
                }
                helperText={
                  formik.touched.typeOfActivity && formik.errors.typeOfActivity
                }
              >
                <MenuItem value="Guidance for competitive examinations">
                  Guidance for competitive examinations
                </MenuItem>
                <MenuItem value="Career counseling">
                  Guidance for career counseling
                </MenuItem>
              </TextField>
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfActivity"
                name="nameOfActivity"
                label="Name or Details of the activity."
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
            <Grid item md={6}>
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                id="noOfStudentsParticipated"
                name="noOfStudentsParticipated"
                label="Number of students enrolled"
                value={formik.values.noOfStudentsParticipated}
                onChange={formik.handleChange}
                error={
                  formik.touched.noOfStudentsParticipated &&
                  Boolean(formik.errors.noOfStudentsParticipated)
                }
                helperText={
                  formik.touched.noOfStudentsParticipated &&
                  formik.errors.noOfStudentsParticipated
                }
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                id="noOfStudentsPlaced"
                name="noOfStudentsPlaced"
                label="Number of students placed  through campus placement"
                value={formik.values.noOfStudentsPlaced}
                onChange={formik.handleChange}
                error={
                  formik.touched.noOfStudentsPlaced &&
                  Boolean(formik.errors.noOfStudentsPlaced)
                }
                helperText={
                  formik.touched.noOfStudentsPlaced &&
                  formik.errors.noOfStudentsPlaced
                }
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="relevantLink"
                name="relevantLink"
                label="Link to the relevant document"
                value={formik.values.relevantLink}
                onChange={formik.handleChange}
                error={
                  formik.touched.relevantLink &&
                  Boolean(formik.errors.relevantLink)
                }
                helperText={
                  formik.touched.relevantLink && formik.errors.relevantLink
                }
              />
            </Grid>
            <Grid item md={12} container justifyContent="flex-end">
              <CustomButton variant="contained" endIcon={<AddIcon />} color="info" type="submit">
                Add
              </CustomButton>
            </Grid>
          </Grid>
        </form>
      </FormWrapper>

      {tableData.length > 0 && (
        <div className="w-full mt-4 p-6">
          <table className="w-full text-left">
            <thead className="border-b-2 border-blue-700">
              <tr>
                <th className="p-2">Year of activity</th>
                <th className="p-2">Type of activity</th>
                <th className="p-2">Name of the Activity</th>
                <th className="p-2">Number of students enrolled</th>
                <th className="p-2">
                  No. of students placed through campus placement
                </th>
                <th className="p-2">Link to the relevant document</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="px-2">{data.yearOfActivity}</td>
                    <td className="px-2">{data.typeOfActivity}</td>
                    <td className="px-2">{data.nameOfActivity}</td>
                    <td className="px-2">{data.noOfStudentsParticipated}</td>
                    <td className="px-2">{data.noOfStudentsPlaced}</td>
                    <td className="px-2 truncate max-w-xs text-link"><Link href={data.relevantLink} target="_blank">{data.relevantLink}</Link></td>
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
