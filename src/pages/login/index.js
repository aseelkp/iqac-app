import { useEffect } from "react";
import { CustomButton } from "@/components/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { login } from "@/services/authService";
import { getUserById } from "@/services/userService";

export default function SignIn() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("user-auth")) {
      router.push("/dashboard");
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const data = new FormData(event.currentTarget);
      const authRef = await login(data.get("email"), data.get("password"));
      const userRef = await getUserById(authRef.user.uid);
      if (userRef.data().role === "user") {
        toast.success("You are logged in");
        localStorage.setItem("user-auth", authRef.user.uid);
        router.push("/dashboard");
        return true;
      }
      toast.error("Invalid Credentials");
    } catch (error) {
      toast.error("Invalid Credentials");
    }
  };

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
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
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
              autoComplete="current-password"
            />
            <CustomButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#90CAF9 !important" }}
            >
              Sign In
            </CustomButton>
          </Box>
        </Box>
      </Container>
    </div>
  );
}
