import Layout from "@/components/Layout/layout";
import { CustomButton } from "@/components/styles";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { signup } from "@/services/authService";
import { createUser } from "@/services/userService";
import toast from 'react-hot-toast';

const Dashboard = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData(event.currentTarget);
      const userRef = await signup(data.get("email"), data.get("password"));
      await createUser(userRef.user.uid, data.get("username"), data.get("email"));
      toast.success("User added successfully");
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      <div className="flex h-full justify-center items-center">
        <Container component="main" maxWidth="xs">
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
                id="username"
                label="User Name"
                name="username"
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
                sx={{ mt: 3, mb: 2 }}
              >
                Add User
              </CustomButton>
            </Box>
          </Box>
        </Container>
      </div>
    </Layout>
  );
};

export default Dashboard;
