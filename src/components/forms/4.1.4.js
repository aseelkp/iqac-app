import { useState, useEffect } from "react";
import Link from "next/link";
import { Grid, TextField, IconButton } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { CustomButton } from "@/components/styles";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";

const validationSchema = Yup.object({
  year: Yup.number().required("Year is required"),
  budgetForInfrastructure: Yup.number().required("Budget for infrastructure is required"),
  expOnInfrastructure: Yup.number().required("Expenditure on infrastructure is required"),
  totExpenditure: Yup.number().required("Total expenditure is required"),
  expOnAcademicFacilities: Yup.number().required("Expenditure on academic facilities is required"),
  expOnPhysicalFacilities: Yup.number().required("Expenditure on physical facilities is required"),
});

function Form({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
        year: "",
        budgetForInfrastructure: "",
        expOnInfrastructure: "",
        totExpenditure: "",
        expOnAcademicFacilities: "",
        expOnPhysicalFacilities: "",
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
    formData.form_4_1_4 && setTableData(formData.form_4_1_4);
  }, []);

  useEffect(() => {
    setFormData({ ...formData, form_4_1_4:tableData });
  }, [tableData]);

  return (
    <div>
      <p className="mb-1">
        <span className="font-bold">4.1.4</span> Expenditure, excluding salary for infrastructure augmentation during the year (INR in Lakhs).
      </p>
      <p className="mb-3">
        <span className="font-bold">4.4.1</span> Expenditure incurred on maintenance of infrastructure (physical and academic support facilities) excluding salary component during the year (INR in Lakhs).
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <DatePicker
                views={["year"]}
                openTo="year"
                id="year"
                name="year"
                label="Year"
                value={
                  formik.values.year ? new Date(formik.values.year, 0, 1) : null
                }
                onChange={(newValue) => {
                  const selectedYear = newValue.getFullYear();
                  formik.setFieldValue("year", selectedYear);
                }}
                renderInput={(params) => <TextField {...params} />}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    error: formik.touched.year && Boolean(formik.errors.year),
                    helperText: formik.touched.year && formik.errors.year,
                  },
                }}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="budgetForInfrastructure"
                name="budgetForInfrastructure"
                label="Budget allocated for infrastructure augmentation"
                value={formik.values.budgetForInfrastructure}
                onChange={formik.handleChange}
                error={
                    formik.touched.budgetForInfrastructure &&
                    Boolean(formik.errors.budgetForInfrastructure)
                }
                helperText={
                    formik.touched.budgetForInfrastructure &&
                    formik.errors.budgetForInfrastructure
                }
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="expOnInfrastructure"
                name="expOnInfrastructure"
                label="Expenditure on infrastructure augmentation"
                value={formik.values.expOnInfrastructure}
                onChange={formik.handleChange}
                error={
                    formik.touched.expOnInfrastructure &&
                    Boolean(formik.errors.expOnInfrastructure)
                }
                helperText={
                    formik.touched.expOnInfrastructure &&
                    formik.errors.expOnInfrastructure
                }

              />
            </Grid>
            <Grid item md={6}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="totExpenditure"
                name="totExpenditure"
                label="Total expenditure excluding Salary"
                value={formik.values.totExpenditure}
                onChange={formik.handleChange}
                error={
                    formik.touched.totExpenditure &&
                    Boolean(formik.errors.totExpenditure)
                }
                helperText={
                    formik.touched.totExpenditure &&
                    formik.errors.totExpenditure
                }
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="expOnAcademicFacilities"
                name="expOnAcademicFacilities"
                label="Expenditure on maintenace of academic facilities (excluding salary for human resources)"
                value={formik.values.expOnAcademicFacilities}
                onChange={formik.handleChange}
                error={
                    formik.touched.expOnAcademicFacilities &&
                    Boolean(formik.errors.expOnAcademicFacilities)
                }
                helperText={
                    formik.touched.expOnAcademicFacilities &&
                    formik.errors.expOnAcademicFacilities
                }
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                type="number"
                fullWidth
                variant="outlined"
                id="expOnPhysicalFacilities"
                name="expOnPhysicalFacilities"
                label="Expenditure on maintenace of physical facilities (excluding salary for human resources)"
                value={formik.values.expOnPhysicalFacilities}
                onChange={formik.handleChange}
                error={
                    formik.touched.expOnPhysicalFacilities &&
                    Boolean(formik.errors.expOnPhysicalFacilities)
                }
                helperText={
                    formik.touched.expOnPhysicalFacilities &&
                    formik.errors.expOnPhysicalFacilities
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
                <th className="p-2">Year</th>
                <th className="p-2">Budget allocated for infrastructure augmentation</th>
                <th className="p-2">Expenditure on infrastructure augmentation</th>
                <th className="p-2">Total expenditure excluding Salary</th>
                <th className="p-2">Expenditure on maintenace of academic facilities (excluding salary for human resources)</th>
                <th className="p-2">Expenditure on maintenace of physical facilities (excluding salary for human resources)</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="p-2">{data.year}</td>
                    <td className="p-2">{data.budgetForInfrastructure}</td>
                    <td className="p-2">{data.expOnInfrastructure}</td>
                    <td className="p-2">{data.totExpenditure}</td>
                    <td className="p-2">{data.expOnAcademicFacilities}</td>
                    <td className="p-2">{data.expOnPhysicalFacilities}</td>
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
