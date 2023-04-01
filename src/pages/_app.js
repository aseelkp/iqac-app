import "@/styles/globals.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function App({ Component, pageProps }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Component {...pageProps} />
    </LocalizationProvider>
  );
}
