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
import { formatDate } from "../../components/helpers/formatDate";

const validationSchema = Yup.object({
  year: Yup.number().required("Year is required"),
  nameOfWorkshop: Yup.string().required("Name of the workshop is required"),
  noOfParticipants: Yup.number().required("Number of participants is required"),
  dateFrom: Yup.string().required("Date from is required"),
  dateTo: Yup.string().required("Date to is required"),
  link: Yup.string().required("Link is required"),
});

function Form({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
      year: "",
      nameOfWorkshop: "",
      noOfParticipants: "",
      dateFrom: "",
      dateTo: "",
      link: "",
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
    formData.form_3_2_2 && setTableData(formData.form_3_2_2);
  }, []);

  useEffect(() => {
    setFormData({ ...formData, form_3_2_2:tableData });
  }, [tableData]);

  return (
    <div>
      <p className="mb-3">
        <span className="font-bold">3.2.2</span> Number of workshops/seminars
        conducted on Research Methodology, Intellectual Property Rights (IPR)
        and entrepreneurship during year.
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
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="nameOfWorkshop"
                name="nameOfWorkshop"
                label="Name of the workshop/ seminar"
                value={formik.values.nameOfWorkshop}
                onChange={formik.handleChange}
                error={
                    formik.touched.nameOfWorkshop &&
                    Boolean(formik.errors.nameOfWorkshop)
                }
                helperText={
                    formik.touched.nameOfWorkshop &&
                    formik.errors.nameOfWorkshop
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
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
            <Grid item xs={12} md={4}>
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
            <Grid item xs={12} md={4}>
                <DatePicker
                    id="dateTo"
                    name="dateTo"
                    label="Date to"
                    value={formik.values.dateTo ? new Date(formik.values.dateTo) : null}
                    onChange={(newValue) => {
                        formik.setFieldValue("dateTo", newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    slotProps={{
                        textField: {
                            fullWidth: true,
                            variant: "outlined",
                            error:
                                formik.touched.dateTo &&
                                Boolean(formik.errors.dateTo),
                            helperText:
                                formik.touched.dateTo && formik.errors.dateTo,
                        },
                    }}
                />
            </Grid>
            <Grid item md={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="link"
                name="link"
                label="Link to the Activity report on the website"
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
                <th className="p-2">Year</th>
                <th className="p-2">Name of the workshop/ seminar</th>
                <th className="p-2">Number of participants</th>
                <th className="p-2">Date from - to</th>
                <th className="p-2">Link to the Activity report on the website</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="px-2">{data.year}</td>
                    <td className="px-2">{data.nameOfWorkshop}</td>
                    <td className="px-2">{data.noOfParticipants}</td>
                    <td className="px-2">
                        {data.dateFrom} - {data.dateTo}
                    </td>
                    <td className="px-2 max-w-sm truncate text-link">
                      <Link href={data.link} target="_blank">
                        {data.link}
                      </Link>
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
