import { useState, useEffect } from "react";
import { Grid, TextField, IconButton, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";
import { CustomButton } from "@/components/styles";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";

const validationSchema = Yup.object({
  year: Yup.number().required("Year is required"),
  nameOfAgency: Yup.string().required("Name of Agency is required"),
  purposeOfGrant: Yup.string().required("Purpose of Grant is required"),
  amount: Yup.number().required("Amount is required"),
  link: Yup.string().required("Link is required"),
});

function Form({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
        year: "",
        nameOfAgency: "",
        purposeOfGrant: "",
        amount: "",
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

  useEffect(() => {
    formData.form_6_4_2 && setTableData(formData.form_6_4_2);
  }, []);

  useEffect(() => {
    setFormData({ ...formData, form_6_4_2:tableData });
  }, [tableData]);

  return (
    <div>
      <p className="mb-3">
        <span className="font-bold">6.4.2</span> Funds / Grants received from non-government bodies, individuals, philanthropers during the year (not covered in Criterion III).
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
              <DatePicker
                views={["year"]}
                openTo="year"
                id="year"
                name="year"
                label="Year"
                value={formik.values.year ? new Date(formik.values.year, 0, 1) : null}
                onChange={(newValue) => {
                  const selectedYear = newValue.getFullYear();
                  formik.setFieldValue("year", selectedYear);
                }}
                renderInput={(params) => <TextField {...params} />}
                slotProps={{
                  textField: {
                    fullWidth: true,
                    variant: "outlined",
                    error:
                      formik.touched.year &&
                      Boolean(formik.errors.year),
                    helperText:
                      formik.touched.year &&
                      formik.errors.year,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfAgency"
                name="nameOfAgency"
                label="Name of the non government funding agencies/ individuals"
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
                id="purposeOfGrant"
                name="purposeOfGrant"
                label="Purpose of the Grant"
                value={formik.values.purposeOfGrant}
                onChange={formik.handleChange}
                error={formik.touched.purposeOfGrant && Boolean(formik.errors.purposeOfGrant)}
                helperText={formik.touched.purposeOfGrant && formik.errors.purposeOfGrant}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                id="amount"
                name="amount"
                label="Funds/ Grants received (INR in lakhs)"
                value={formik.values.amount}
                onChange={formik.handleChange}
                error={formik.touched.amount && Boolean(formik.errors.amount)}
                helperText={formik.touched.amount && formik.errors.amount}
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="link"
                name="link"
                label="Link to Audited Statement of Accounts reflecting the receipts"
                value={formik.values.link}
                onChange={formik.handleChange}
                error={formik.touched.link && Boolean(formik.errors.link)}
                helperText={formik.touched.link && formik.errors.link}
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
                <th className="py-2">Year</th>
                <th className="py-2">Name of the funding agencies/ individuals</th>
                <th className="py-2">Purpose of the Grant</th>
                <th className="py-2">Funds/ Grants received in lakhs</th>
                <th className="py-2">Link to Audited Statement of Accounts reflecting the receipts</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.year}</td>
                    <td>{data.nameOfAgency}</td>
                    <td>{data.purposeOfGrant}</td>
                    <td>{data.amount}</td>
                <td className="max-w-sm truncate text-blue-500"><Link href={data.link} target="_blank">{data.link}</Link></td>
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
