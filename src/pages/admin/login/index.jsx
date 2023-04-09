import { useEffect, useState } from "react";
import { CustomButton } from "@/components/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { login } from "@/services/authService";
import { getUserById } from "@/services/userService";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { LoadingBtn } from "@/components/styles";

import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email id")
    .required("Email id is required"),
  password: Yup.string().required("Password id required"),
});

export default function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("admin-auth")) {
      router.push("/admin/dashboard");
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const authRef = await login(values.email, values.password);
        const userRef = await getUserById(authRef.user.uid);
        if (userRef.data().role === "admin") {
          toast.success("You are logged in as an admin");
          localStorage.setItem("admin-auth", authRef.user.uid);
          router.push("/admin/dashboard");
          setLoading(false)
          return true;
        }
        toast.error("You are not authorized to access this page");
      } catch (error) {
        toast.error("Invalid Credentials");
      }
      formik.resetForm();
      setLoading(false);
    },
  });

  return (
    <div className="flex h-screen justify-center items-center">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Admin Sign in
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
              autoComplete="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              autoFocus
            />
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
              error={formik.touched.password && Boolean(formik.errors.password)}
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
              Sign In
            </LoadingBtn>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
