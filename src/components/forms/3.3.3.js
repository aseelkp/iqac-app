import { useState, useEffect } from "react";

import { Grid, TextField, IconButton, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { CustomButton } from "@/components/styles";

import { useFormik } from "formik";
import * as Yup from "yup";

import FormWrapper from "../FormWrapper";

const validationSchema = Yup.object({
  nameOfTeacher: Yup.string().required("Name of teacher is required"),
  titleOfBook: Yup.string().required("Title of the book is required"),
  titleOfPaper: Yup.string().required("Title of the paper is required"),
  titleOfProceedings: Yup.string().required(
    "Title of the proceedings is required"
  ),
  nameOfConference: Yup.string().required("Name of the conference is required"),
  scopeOfConference: Yup.string().required(
    "Scope of the conference is required"
  ),
  yearOfPublication: Yup.string().required("Year of publication is required"),
  ISBNorISSN: Yup.string().required("ISBN or ISSN no. is required"),
  affiliatingInstitute: Yup.string().required(
    "Affiliating institution is required"
  ),
  nameOfPublisher: Yup.string().required("Name of the publisher is required"),
});

function Form({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
      nameOfTeacher: "",
      titleOfBook: "",
      titleOfPaper: "",
      titleOfProceedings: "",
      nameOfConference: "",
      scopeOfConference: "",
      yearOfPublication: "",
      ISBNorISSN: "",
      affiliatingInstitute: "",
      nameOfPublisher: "",
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

  useEffect(() => {
    formData.form_3_3_3 && setTableData(formData.form_3_3_3);
  }, []);

  useEffect(() => {
    setFormData({ ...formData, form_3_3_3: tableData });
  }, [tableData]);

  return (
    <div>
      <p className="mb-3">
        <span className="font-bold">3.3.3</span> Number of books and chapters in
        edited volumes/books published and papers published in national/
        international conference proceedings per teacher during year.
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
                label="Name of the teacher"
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
                id="titleOfBook"
                name="titleOfBook"
                label="Title of the book/chapters published"
                value={formik.values.titleOfBook}
                onChange={formik.handleChange}
                error={
                  formik.touched.titleOfBook &&
                  Boolean(formik.errors.titleOfBook)
                }
                helperText={
                  formik.touched.titleOfBook && formik.errors.titleOfBook
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="titleOfPaper"
                name="titleOfPaper"
                label="Title of the paper"
                value={formik.values.titleOfPaper}
                onChange={formik.handleChange}
                error={
                  formik.touched.titleOfPaper &&
                  Boolean(formik.errors.titleOfPaper)
                }
                helperText={
                  formik.touched.titleOfPaper && formik.errors.titleOfPaper
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="titleOfProceedings"
                name="titleOfProceedings"
                label="Title of the proceedings of the conference"
                value={formik.values.titleOfProceedings}
                onChange={formik.handleChange}
                error={
                  formik.touched.titleOfProceedings &&
                  Boolean(formik.errors.titleOfProceedings)
                }
                helperText={
                  formik.touched.titleOfProceedings &&
                  formik.errors.titleOfProceedings
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfConference"
                name="nameOfConference"
                label="Name of the conference"
                value={formik.values.nameOfConference}
                onChange={formik.handleChange}
                error={
                  formik.touched.nameOfConference &&
                  Boolean(formik.errors.nameOfConference)
                }
                helperText={
                  formik.touched.nameOfConference &&
                  formik.errors.nameOfConference
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                variant="outlined"
                id="scopeOfConference"
                name="scopeOfConference"
                label="Scope of the conference"
                value={formik.values.scopeOfConference}
                onChange={formik.handleChange}
                error={
                  formik.touched.scopeOfConference &&
                  Boolean(formik.errors.scopeOfConference)
                }
                helperText={
                  formik.touched.scopeOfConference &&
                  formik.errors.scopeOfConference
                }
              >
                <MenuItem value="National">National</MenuItem>
                <MenuItem value="International">International</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <DatePicker
                views={["year"]}
                openTo="year"
                id="yearOfPublication"
                name="yearOfPublication"
                label="Year of publication"
                value={
                  formik.values.yearOfPublication
                    ? new Date(formik.values.yearOfPublication, 0, 1)
                    : null
                }
                onChange={(newValue) => {
                  const selectedYear = newValue.getFullYear();
                  formik.setFieldValue("yearOfPublication", selectedYear);
                }}
                renderInput={(params) => <TextField {...params} />}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    error:
                      formik.touched.yearOfPublication &&
                      Boolean(formik.errors.yearOfPublication),
                    helperText:
                      formik.touched.yearOfPublication &&
                      formik.errors.yearOfPublication,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                id="ISBNorISSN"
                name="ISBNorISSN"
                label="ISBN/ISSN number of the proceeding"
                value={formik.values.ISBNorISSN}
                onChange={formik.handleChange}
                error={
                  formik.touched.ISBNorISSN && Boolean(formik.errors.ISBNorISSN)
                }
                helperText={
                  formik.touched.ISBNorISSN && formik.errors.ISBNorISSN
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="affiliatingInstitute"
                name="affiliatingInstitute"
                label="Affiliating Institute at the time of publication"
                value={formik.values.affiliatingInstitute}
                onChange={formik.handleChange}
                error={
                  formik.touched.affiliatingInstitute &&
                  Boolean(formik.errors.affiliatingInstitute)
                }
                helperText={
                  formik.touched.affiliatingInstitute &&
                  formik.errors.affiliatingInstitute
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfPublisher"
                name="nameOfPublisher"
                label="Name of the publisher"
                value={formik.values.nameOfPublisher}
                onChange={formik.handleChange}
                error={
                  formik.touched.nameOfPublisher &&
                  Boolean(formik.errors.nameOfPublisher)
                }
                helperText={
                  formik.touched.nameOfPublisher &&
                  formik.errors.nameOfPublisher
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
          <table className="w-full table-fixed text-left">
            <thead className="border-b-2 border-blue-700">
              <tr>
                <th className="p-2">Name of the teacher</th>
                <th className="p-2">Title of the book/chapters published</th>
                <th className="p-2">Title of the paper</th>
                <th className="p-2">
                  Title of the proceedings of the conference
                </th>
                <th className="p-2">Name of the conference</th>
                <th className="p-2">Scope of the conference</th>
                <th className="p-2">Year of publication</th>
                <th className="p-2">ISBN/ISSN number of the proceeding</th>
                <th className="p-2">
                  Affiliating Institute at the time of publication
                </th>
                <th className="p-2">Name of the publisher</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="px-2">{data.nameOfTeacher}</td>
                    <td className="px-2">{data.titleOfBook}</td>
                    <td className="px-2">{data.titleOfPaper}</td>
                    <td className="px-2">{data.titleOfProceedings}</td>
                    <td className="px-2">{data.nameOfConference}</td>
                    <td className="px-2">{data.scopeOfConference}</td>
                    <td className="px-2">{data.yearOfPublication}</td>
                    <td className="px-2">{data.ISBNorISSN}</td>
                    <td className="px-2">{data.affiliatingInstitute}</td>
                    <td className="px-2">{data.nameOfPublisher}</td>
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
