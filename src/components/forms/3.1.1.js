import { useState, useEffect } from "react";
import { Grid, TextField, IconButton, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { CustomButton } from "@/components/styles";
import { departments } from "@/constants/departments";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";

const validationSchema = Yup.object({
  nameOfProject: Yup.string().required("Name of project is required"),
  nameOfInvestigator: Yup.string().required("Name of investigator is required"),
  deptOfInvestigator: Yup.string().required(
    "Department of investigator is required"
  ),
  yearOfAward: Yup.number().required("Year of award is required"),
  amountSanctioned: Yup.number().required("Amount sanctioned is required"),
  durationOfProject: Yup.string().required("Duration of project is required"),
  nameOfFundingAgency: Yup.string().required(
    "Name of funding agency is required"
  ),
  typeOfAgency: Yup.string().required("Type of agency is required"),
});

function Form({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
      nameOfProject: "",
      nameOfInvestigator: "",
      deptOfInvestigator: "",
      yearOfAward: "",
      amountSanctioned: "",
      durationOfProject: "",
      nameOfFundingAgency: "",
      typeOfAgency: "",
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
    formData.form_3_1_1 && setTableData(formData.form_3_1_1);
  }, []);

  useEffect(() => {
    setFormData({ ...formData, form_3_1_1: tableData });
  }, [tableData]);

  return (
    <div>
      <p className="mb-1">
        <span className="font-bold">3.1.1</span> Grants received from Government
        and non-governmental agencies for research projects / endowments in the
        institution during the year (INR in Lakhs).
      </p>
      <p className="mb-3">
        <span className="font-bold">3.1.3</span> Number of departments having
        Research projects funded by government and non government agencies
        during the year.
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfProject"
                name="nameOfProject"
                label="Name of project"
                value={formik.values.nameOfProject}
                onChange={formik.handleChange}
                error={
                  formik.touched.nameOfProject &&
                  Boolean(formik.errors.nameOfProject)
                }
                helperText={
                  formik.touched.nameOfProject && formik.errors.nameOfProject
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfInvestigator"
                name="nameOfInvestigator"
                label="Name of investigator"
                value={formik.values.nameOfInvestigator}
                onChange={formik.handleChange}
                error={
                  formik.touched.nameOfInvestigator &&
                  Boolean(formik.errors.nameOfInvestigator)
                }
                helperText={
                  formik.touched.nameOfInvestigator &&
                  formik.errors.nameOfInvestigator
                }
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                select
                variant="outlined"
                id="deptOfInvestigator"
                name="deptOfInvestigator"
                label="Department of investigator"
                value={formik.values.deptOfInvestigator}
                onChange={formik.handleChange}
                error={
                  formik.touched.deptOfInvestigator &&
                  Boolean(formik.errors.deptOfInvestigator)
                }
                helperText={
                  formik.touched.deptOfInvestigator &&
                  formik.errors.deptOfInvestigator
                }
              >
                {departments.map((option) => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={6} md={3}>
              <DatePicker
                views={["year"]}
                openTo="year"
                id="yearOfAward"
                name="yearOfAward"
                label="Year of award"
                value={
                  formik.values.yearOfAward
                    ? new Date(formik.values.yearOfAward, 0, 1)
                    : null
                }
                onChange={(newValue) => {
                  const selectedYear = newValue.getFullYear();
                  formik.setFieldValue("yearOfAward", selectedYear);
                }}
                renderInput={(params) => <TextField {...params} />}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    error:
                      formik.touched.yearOfAward &&
                      Boolean(formik.errors.yearOfAward),
                    helperText:
                      formik.touched.yearOfAward && formik.errors.yearOfAward,
                  },
                }}
              />
            </Grid>
            <Grid item xs={6} md={3}>
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                id="amountSanctioned"
                name="amountSanctioned"
                label="Amount sanctioned(in lakhs)"
                value={formik.values.amountSanctioned}
                onChange={formik.handleChange}
                error={
                  formik.touched.amountSanctioned &&
                  Boolean(formik.errors.amountSanctioned)
                }
                helperText={
                  formik.touched.amountSanctioned &&
                  formik.errors.amountSanctioned
                }
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                variant="outlined"
                id="durationOfProject"
                name="durationOfProject"
                label="Duration of project"
                value={formik.values.durationOfProject}
                onChange={formik.handleChange}
                error={
                  formik.touched.durationOfProject &&
                  Boolean(formik.errors.durationOfProject)
                }
                helperText={
                  formik.touched.durationOfProject &&
                  formik.errors.durationOfProject
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfFundingAgency"
                name="nameOfFundingAgency"
                label="Name of funding agency"
                value={formik.values.nameOfFundingAgency}
                onChange={formik.handleChange}
                error={
                  formik.touched.nameOfFundingAgency &&
                  Boolean(formik.errors.nameOfFundingAgency)
                }
                helperText={
                  formik.touched.nameOfFundingAgency &&
                  formik.errors.nameOfFundingAgency
                }
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                select
                variant="outlined"
                id="typeOfAgency"
                name="typeOfAgency"
                label="Type of funding agency"
                value={formik.values.typeOfAgency}
                onChange={formik.handleChange}
                error={
                  formik.touched.typeOfAgency &&
                  Boolean(formik.errors.typeOfAgency)
                }
                helperText={
                  formik.touched.typeOfAgency && formik.errors.typeOfAgency
                }
              >
                <MenuItem value="Government">Government</MenuItem>
                <MenuItem value="Non-government">Non-government</MenuItem>
              </TextField>
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
                <th className="p-2">Name of the Project/ Endowments, Chairs</th>
                <th className="p-2">
                  Name of Principal Investigator/Co-investigator
                </th>
                <th className="p-2">Department of Principal Investigator</th>
                <th className="p-2">Year of Award</th>
                <th className="p-2">Amount Sanctioned</th>
                <th className="p-2">Duration of Project</th>
                <th className="p-2">Name of Funding Agency</th>
                <th className="p-2">Type of Funding Agency</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="px-2">{data.nameOfProject}</td>
                    <td className="px-2">{data.nameOfInvestigator}</td>
                    <td className="px-2">{data.deptOfInvestigator}</td>
                    <td className="px-2">{data.yearOfAward}</td>
                    <td className="px-2">{data.amountSanctioned}</td>
                    <td className="px-2">{data.durationOfProject}</td>
                    <td className="px-2">{data.nameOfFundingAgency}</td>
                    <td className="px-2">{data.typeOfAgency}</td>
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
