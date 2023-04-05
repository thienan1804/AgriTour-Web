// External files
import React from "react";
import { Grid } from "@mui/material";
import Body from "./Body";
// Internal files
import DefaultLayout from "../../components/DefaultLayout";
// Styles

const HomePage = () => {
  return (
    <Grid>
      <DefaultLayout body={<Body />} />
    </Grid>
  );
};

export default HomePage;
