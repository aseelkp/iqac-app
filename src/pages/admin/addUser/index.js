import Layout from "@/components/Layout/layout";
import { CssBaseline, TextField, Box, Typography, Container, MenuItem } from "@mui/material";
import { signup } from "@/services/authService";
import { createUser } from "@/services/userService";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LoadingBtn } from "@/components/styles";
import { departments } from "@/constants/departments";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email address is required"),
  username: Yup.string().required("Username is required"),
  department: Yup.string().required("Department is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be atleast 6 characters long"),
});

const AddUser = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      department: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true)
      try {
        const userRef = await signup(values.email, values.password);
        await createUser(
          userRef.user.uid,
          values.username,
          values.email,
          values.department
        );
        toast.success("User added successfully");
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
      formik.resetForm();
      setLoading(false)
    },
  });

  useEffect(() => {
    if (localStorage.getItem("user-auth")) router.push("/login");
    else if (!localStorage.getItem("admin-auth")) router.push("/admin/login");
  }, []);

  return (
    <Layout page={1}>
      <div className="flex h-full justify-center items-center">
        <Container className="-translate-x-1/4" component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5" className="font-bold">
              Add New User
            </Typography>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="User Name"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
              <TextField
                margin="normal"
                required
                select
                fullWidth
                id="department"
                label="Department"
                name="department"
                value={formik.values.department}
                onChange={formik.handleChange}
                error={
                  formik.touched.department && Boolean(formik.errors.department)
                }
                helperText={
                  formik.touched.department && formik.errors.department
                }
              >
                {departments.map((option) => (
                  <MenuItem key={option.value} value={option.label}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                autoComplete="current-password"
              />
              <LoadingBtn
                loading={loading}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add User
              </LoadingBtn>
            </Box>
          </Box>
        </Container>
      </div>
    </Layout>
  );
};

export default AddUser;
