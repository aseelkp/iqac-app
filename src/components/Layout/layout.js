
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "next/link";
import SearchBar from "../SearchBar/searchbar";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Layout = ({ children }) => {


  const navLinks = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      title: "Users",
      path: "/users",
      icon: <PersonIcon />,
    },
    {
      title: "Logout",
      path: "/logout",
      icon: <LogoutIcon />,
    }
  ]


  return (
    <div className="flex flex-col h-screen overflow-hidden bg-black bg-opacity-20 ">
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <nav className="text-white m-3  bg-opacity-50 rounded-lg">
          <div className="container mx-auto px-4 py-2 flex items-center justify-between">
            <Link href="/">
              <div className="text-lg font-bold">Logo</div>
            </Link>
            <SearchBar />
          </div>
        </nav>
        <div className="flex flex-1">
          <aside className="w-[15%] p-4 m-4  bg-opacity-50 rounded-lg flex justify-evenly ">
            <ul className="mt-10">
              {navLinks.map((link, index) => (
                <li className="mb-8 flex" key={index}>
                  <div className="mr-1">{link.icon}</div>
                  <Link href={link.path}>
                    <div className="ml-2">{link.title}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
          <main className="bg flex-1 p-4">{children}</main>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
