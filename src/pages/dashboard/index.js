import CardComponent from "@/components/Card/card";
import Layout from "@/components/Layout/layout";
import { Box, Grid } from "@mui/material";
import React from "react";

const Dashboard = () => {
  const titlesConfig = [
    {
      title: "NSS AND NCC",
      path: "/nss-ncc",
    },
    {
      title: "Single Department",
      path: "/single-department",
    },
    {
      title: "Physical Education",
      path: "/physical-education",
    },
    {
      title: "Office",
      path: "/office",
    },
    {
      title: "Library",
      path: "/library",
    },
    {
      title: "Main Department",
      path: "/main-department",
    },
    {
      title: "IQAC",
      path: "/iqac",
    },
    {
      title: "Clubs and Associations",
      path: "/clubs-and-associations",
    },
  ];

  return (
    <Layout>
      <div className="mt-4">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3} sx={{ mt: "30px" }}>
            {titlesConfig.map((title, index) => (
              <Grid item xs={4} key={index}>
                <CardComponent title={title.title} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </Layout>
  );
};

export default Dashboard;
