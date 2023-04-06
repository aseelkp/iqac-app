import React, { useState, useEffect } from "react";
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
  title: Yup.string().required("Title is required"),
  nameOfAuthor: Yup.string().required("Name of the author is required"),
  department: Yup.string().required("Department is required"),
  nameOfJournal: Yup.string().required("Name of the journal is required"),
  yearOfPublication: Yup.number().required("Year of publication is required"),
  ISSNno: Yup.number("ISSN Should be a number").min(9999999, "ISSN no. should be 8 digits").max(99999999, "ISSN no. should be 8 digits").required("ISSN no. is required"),
  link: Yup.string().required("Link is required"),
});

function Form({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
        title: "",
        nameOfAuthor: "",
        department: "",
        nameOfJournal: "",
        yearOfPublication: "",
        ISSNno: "",
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
    formData.form_3_3_2 && setTableData(formData.form_3_3_2);
  }, []);

  useEffect(() => {
    setFormData({ ...formData, form_3_3_2:tableData });
  }, [tableData]);

  return (
    <div>
      <p className="mb-3">
        <span className="font-bold">3.3.2</span> Number of research papers per teachers in the Journals notified on UGC website during the year.
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="title"
                    name="title"
                    label="Title of the paper"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="nameOfAuthor"
                    name="nameOfAuthor"
                    label="Name of the author(s)"
                    value={formik.values.nameOfAuthor}
                    onChange={formik.handleChange}
                    error={formik.touched.nameOfAuthor && Boolean(formik.errors.nameOfAuthor)}
                    helperText={formik.touched.nameOfAuthor && formik.errors.nameOfAuthor}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="department"
                    name="department"
                    label="Department of the teacher(s)"
                    value={formik.values.department}
                    onChange={formik.handleChange}
                    error={formik.touched.department && Boolean(formik.errors.department)}
                    helperText={formik.touched.department && formik.errors.department}
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField
                    fullWidth
                    variant="outlined"
                    id="nameOfJournal"
                    name="nameOfJournal"
                    label="Name of the journal"
                    value={formik.values.nameOfJournal}
                    onChange={formik.handleChange}
                    error={formik.touched.nameOfJournal && Boolean(formik.errors.nameOfJournal)}
                    helperText={formik.touched.nameOfJournal && formik.errors.nameOfJournal}
                />
            </Grid>
            <Grid item xs={12} md={6}>
              <DatePicker
                views={["year"]}
                openTo="year"
                id="yearOfPublication"
                name="yearOfPublication"
                label="Year of publication"
                value={
                  formik.values.yearOfPublication ? new Date(formik.values.yearOfPublication, 0, 1) : null
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
                    error: formik.touched.yearOfPublication && Boolean(formik.errors.yearOfPublication),
                    helperText: formik.touched.yearOfPublication && formik.errors.yearOfPublication,
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                variant="outlined"
                id="ISSNno"
                name="ISSNno"
                label="ISSN Number"
                value={formik.values.ISSNno}
                onChange={formik.handleChange}
                error={formik.touched.ISSNno && Boolean(formik.errors.ISSNno)}
                helperText={formik.touched.ISSNno && formik.errors.ISSNno}
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="link"
                name="link"
                label="Link to the recognition in UGC enlistment of the Journal"
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
            <thead className="text-left">
              <tr>
                <th className="p-2 border-2 border-blue-700">Title of the paper</th>
                <th className="p-2 border-2 border-blue-700">Name of the author(s)</th>
                <th className="p-2 border-2 border-blue-700">Department of the teacher(s)</th>
                <th className="p-2 border-2 border-blue-700">Name of the journal</th>
                <th className="p-2 border-2 border-blue-700">Year of publication</th>
                <th className="p-2 border-2 border-blue-700">ISSN Number</th>
                <th className="p-2 border-2 border-blue-700">Link to the recognition in UGC enlistment of the Journal</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="px-2">{data.title}</td>
                    <td className="px-2">{data.nameOfAuthor}</td>
                    <td className="px-2">{data.department}</td>
                    <td className="px-2">{data.nameOfJournal}</td>
                    <td className="px-2">{data.yearOfPublication}</td>
                    <td className="px-2">{data.ISSNno}</td>
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
