import CardComponent from "@/components/Card/card";
import Link from "next/link";
import Layout from "@/components/Layout/layout";
import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const router = useRouter();
  const titlesConfig = [
    {
      title: "NSS / NCC",
      path: "/forms/nss-ncc",
    },
    {
      title: "Single Department",
      path: "/forms/singleDepartment",
    },
    {
      title: "Physical Education",
      path: "/forms/physicaledu",
    },
    {
      title: "Office",
      path: "/forms/office",
    },
    // {
    //   title: "Library",
    //   path: "forms/library",
    // },
    {
      title: "Main Department",
      path: "/forms/mainDepartments",
    },
    // {
    //   title: "IQAC",
    //   path: "/forms/iqac",
    // },
    {
      title: "Clubs and Associations",
      path: "/forms/clubsandasso",
    },
  ];

  useEffect(() => {
    if (localStorage.getItem("user-auth")) router.push("/dashboard");
    else if (!localStorage.getItem("admin-auth")) router.push("/admin/login");
  }, []);

  return (
    <Layout page={0}>
      <div className="mt-4 ml-5">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3} sx={{ mt: "30px" }}>
            {titlesConfig.map((title, index) => (
              <Grid item xs={4} key={index}>
                <Link href={title.path}>
                  <CardComponent title={title.title} />
                </Link>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </Layout>
  );
};

export default Dashboard;
