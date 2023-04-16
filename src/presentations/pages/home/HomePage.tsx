// External files
import React from "react";
import { Grid } from "@mui/material";
import BodyHomePage from "./BodyHomePage/BodyHomePage";
// Internal files
import DefaultLayout from "../../components/DefaultLayout";
// Styles

const HomePage = () => {
  return (
    <Grid>
      <DefaultLayout body={<BodyHomePage />} />
    </Grid>
  );
};

export default HomePage;
