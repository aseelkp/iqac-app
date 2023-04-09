import CssBaseline from "@mui/material/CssBaseline";
import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { LogoutButton } from "../styles";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { Typography } from "@mui/material";

const Layout = ({ children }) => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("admin-auth");
    toast.success("You are logged out");
    router.push("/admin/login");
  };

  const navLinks = [
    {
      title: "Dashboard",
      path: "/admin/dashboard",
      icon: <DashboardIcon />,
    },
    {
      title: "Add Users",
      path: "/admin/addUser",
      icon: <PersonIcon />,
    },
  ];

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <CssBaseline />
      <nav className="text-white m-3 rounded-lg">
        <div className="container mx-auto px-10 py-2 flex items-center justify-between">
          <Link href="/dashboard">
            <div className="text-2xl font-bold">IQAC DataHub</div>
          </Link>
          <Typography
          className="text-gray"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textAlign: "center" }}
          >
            Admin Dashboard
          </Typography>
          <LogoutButton
            variant="contained"
            color="error"
            size="small"
            startIcon={<LogoutIcon />}
            onClick={handleLogout}
          >
            Logout
          </LogoutButton>
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
    </div>
  );
};

export default Layout;