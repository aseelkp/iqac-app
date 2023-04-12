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
      path: "data/nss-ncc",
    },
    {
      title: "Single Department",
      path: "data/singleDepartment",
    },
    {
      title: "Physical Education",
      path: "data/physicalEducation",
    },
    {
      title: "Office",
      path: "data/office",
    },
    // {
    //   title: "Library",
    //   path: admin"data/library",
    // },
    {
      title: "Main Department",
      path: "data/mainDepartment",
    },
    // {
    //   title: "IQAC",
    //   path: "data/iqac",
    // },
    {
      title: "Clubs and Associations",
      path: "data/clubsandasso",
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
