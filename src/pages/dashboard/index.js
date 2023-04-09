import CardComponent from "@/components/Card/card";
import Link from "next/link";
import UserLayout from "@/components/Layout/UserLayout";
import { Box, Grid } from "@mui/material";
import React from "react";
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
    if (localStorage.getItem("admin-auth")) router.push("/admin/dashboard");
    if (!localStorage.getItem("user-auth")) router.push("/login");
  }, []);

  return (
    <UserLayout>
      <div className="mt-4 ml-10">
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
    </UserLayout>
  );
};

export default Dashboard;
