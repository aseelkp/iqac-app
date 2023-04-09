import {
  styled,
  Box,
  Toolbar,
  AppBar,
  Typography,
  Button,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Link from "next/link";

export const ContentWrapper = styled(Box)(() => ({
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(30,30,30)",
}));

//user layout styles
export const Container = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: "10px",
  backgroundColor: theme.palette.background.default,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "25%",
  minHeight: "30%",
  [theme.breakpoints.down("sm")]: {
    width: "85%",
  },
}));

//app layout style
export const AppContainer = styled(AppBar)(() => ({
  minHeight: "5%",
  color: "white",
  background: "rgba(30,30,30)",
}));
export const CustomToolbar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

export const Content = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  flex: "1",
  padding: theme.spacing(3),
  paddingBottom: 0,
  paddingTop: "calc(5% + 24px)",
  overflowX: "hidden",
  background: theme.palette.background.default,
  [theme.breakpoints.down("sm")]: {
    paddingTop: "calc(13% + 24px)",
  },
}));

export const Title = styled(Typography)(() => ({
  textDecoration: "none",
  color: "white",
}));
export const NavLink = styled(Link)(() => ({
  textDecoration: "none",
  color: "white",
}));

export const ButtonWrapper = styled("div")(() => ({
  display: "flex",
}));
export const NavButton = styled(Box)({
  fontSize: "14px",
  fontWeight: "500",
  color: "rgba(250,250,250)",
  background: "rgba(56, 142, 60, 1)",
  textDecoration: "none",
  borderRadius: "8px",
  padding: "5px 15px",
  margin: "0px 15px",
  "&:hover": {
    backgroundColor: "rgba(56, 142, 60, .8)",
  },
});

export const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#2196f3 !important",
  "&:hover": {
    backgroundColor: "#1769aa !important",
  },
  "&:disabled": {
    backgroundColor: theme.palette.grey[500] + " !important",
  },
}));
//  Light mode #1976DB

export const LogoutButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.error.main + " !important",
  "&:hover": {
    backgroundColor: theme.palette.error.dark + " !important",
  },
}));

export const LoadingBtn = styled(LoadingButton)(({theme}) => ({
  backgroundColor: theme.palette.info.main + " !important",
  "&:hover": {
    backgroundColor: theme.palette.info.dark + " !important",
  },
}));
