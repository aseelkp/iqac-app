import { useState, useEffect } from "react";
import Link from "next/link";
import { Grid, TextField, IconButton } from "@mui/material";
import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import { CustomButton } from "@/components/styles";

import { useFormik } from "formik";
import * as Yup from "yup";
import FormWrapper from "../../components/FormWrapper";

const validationSchema = Yup.object({
  roomNo: Yup.string().required("This field is required"),
  typeOfFacility: Yup.string().required("Type of facility is required"),
  link: Yup.string().required("Link is required"),
});

function Form({ formData, setFormData }) {
  const formik = useFormik({
    initialValues: {
      roomNo: "",
      typeOfFacility: "",
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
    formData.form_4_1_3 && setTableData(formData.form_4_1_3);
  }, []);

  useEffect(() => {
    setFormData({ ...formData, form_4_1_3:tableData });
  }, [tableData]);

  return (
    <div>
      <p className="mb-2">
        <span className="font-bold">4.1.3</span> Number of classrooms and
        seminar halls with ICT- enabled facilities such as smart class, LMS,
        etc.
      </p>
      <p className="mb-3 ml-10 text-sm">
        ** (Data for the latest completed academic year)
      </p>

      <FormWrapper>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item md={12}>
              <TextField
                fullWidth
                variant="outlined"
                id="roomNo"
                name="roomNo"
                label="Room number or Name  of classrooms/Seminar Hall with LCD / wifi/LAN facilities with room numbers"
                value={formik.values.roomNo}
                onChange={formik.handleChange}
                error={formik.touched.roomNo && Boolean(formik.errors.roomNo)}
                helperText={formik.touched.roomNo && formik.errors.roomNo}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="typeOfFacility"
                name="typeOfFacility"
                label="Type of ICT facility"
                value={formik.values.typeOfFacility}
                onChange={formik.handleChange}
                error={
                  formik.touched.typeOfFacility &&
                  Boolean(formik.errors.typeOfFacility)
                }
                helperText={
                  formik.touched.typeOfFacility && formik.errors.typeOfFacility
                }
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                variant="outlined"
                id="link"
                name="link"
                label="Link to geo tagged photos and master time table"
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
          <table className="w-full table-fixed">
            <thead className="border-b-2 border-blue-700 text-left">
              <tr>
                <th className="p-2">Room number or Name</th>
                <th className="p-2">Type of ICT facility</th>
                <th className="p-2">
                  Link to geo tagged photos and master time table
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td className="p-2">{data.roomNo}</td>
                    <td className="p-2">{data.typeOfFacility}</td>
                    <td className="p-2 truncate text-blue-500">
                      <Link href={data.link} target="_blank">
                        {data.link}
                      </Link>
                    </td>
                    <td className="p-2 text-right">
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
