import "@/styles/globals.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Toaster } from 'react-hot-toast';

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Toaster />
        <Component {...pageProps} />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
