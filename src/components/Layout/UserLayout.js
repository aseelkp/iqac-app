import Link from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import { LogoutButton } from "../styles";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const UserLayout = ({ children }) => {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("user-auth");
        toast.success("You are logged out");
        router.push("/login");
    };


  return (
    <div className="flex flex-col h-screen overflow-hidden">
        <nav className="text-white m-3 rounded-lg">
          <div className="container mx-auto px-10 py-2 flex items-center justify-between">
            <Link href="/dashboard">
              <div className="text-2xl font-bold">IQAC DataHub</div>
            </Link>
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
        <div className="flex flex-1 mx-20">
          {children}
        </div>
    </div>
  );
};

export default UserLayout;
